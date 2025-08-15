// Dynamic news loader utility to load markdown files from content directory
import { marked } from 'marked';

export interface NewsMetadata {
  id?: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  featured?: boolean;
  slug?: string;
}

export interface NewsArticle extends NewsMetadata {
  content: string;
  slug: string;
}

// Configure marked for better HTML output
marked.setOptions({
  breaks: true,
  gfm: true,
});

// Parse frontmatter from markdown
function parseFrontmatter(markdown: string): { metadata: NewsMetadata; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);
  
  if (!match) {
    throw new Error('Invalid frontmatter format');
  }

  const [, frontmatterStr, content] = match;
  
  // Simple YAML parser for our needs
  const metadata: any = {};
  frontmatterStr.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      let value = valueParts.join(':').trim();
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      // Handle boolean values
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      metadata[key.trim()] = value;
    }
  });

  return { metadata: metadata as NewsMetadata, content: content.trim() };
}

// Generate slug from filename
function generateSlug(filename: string): string {
  return filename.replace('.md', '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

// Get all markdown files dynamically from content directory
function getMarkdownFiles(): Record<string, () => Promise<any>> {
  // Try multiple possible locations for markdown files
  const files = {
    ...import.meta.glob('/src/content/*.md', { as: 'raw', eager: false }),
    ...import.meta.glob('/src/content/news/*.md', { as: 'raw', eager: false })
  };
  return files;
}

// Cache for loaded articles to improve performance
let articlesCache: NewsArticle[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Load all news articles from actual files
export async function loadAllNews(): Promise<NewsArticle[]> {
  // Check cache first
  const now = Date.now();
  if (articlesCache && (now - cacheTimestamp) < CACHE_DURATION) {
    return articlesCache;
  }

  const articles: NewsArticle[] = [];
  const files = getMarkdownFiles();
  
  if (Object.keys(files).length === 0) {
    console.warn('No markdown files found in /src/content/ or /src/content/news/');
    return [];
  }
  
  for (const [filePath, loadFile] of Object.entries(files)) {
    try {
      const content = await loadFile();
      const filename = filePath.split('/').pop() || '';
      const { metadata, content: markdownContent } = parseFrontmatter(content);
      const htmlContent = await marked(markdownContent);
      const slug = generateSlug(filename);
      
      articles.push({
        ...metadata,
        content: htmlContent,
        slug,
        id: metadata.id || slug,
      });
    } catch (error) {
      console.error(`Error loading news file ${filePath}:`, error);
    }
  }
  
  // Sort by date (newest first)
  const sortedArticles = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Update cache
  articlesCache = sortedArticles;
  cacheTimestamp = now;
  
  return sortedArticles;
}

// Clear cache function (useful for development)
export function clearNewsCache(): void {
  articlesCache = null;
  cacheTimestamp = 0;
}

// Load a specific news article by slug
export async function loadNewsArticle(slug: string): Promise<NewsArticle | null> {
  const articles = await loadAllNews();
  return articles.find(article => article.slug === slug) || null;
}

// Get featured news articles
export async function getFeaturedNews(): Promise<NewsArticle[]> {
  const articles = await loadAllNews();
  return articles.filter(article => article.featured);
}

// Get recent news articles (for homepage preview) - automatically sorted by date
export async function getRecentNews(limit: number = 4): Promise<NewsArticle[]> {
  const articles = await loadAllNews();
  return articles.slice(0, limit);
}

// Get unique categories from all articles
export async function getNewsCategories(): Promise<string[]> {
  const articles = await loadAllNews();
  const categories = [...new Set(articles.map(article => article.category))];
  return ['All', ...categories.sort()];
}

// Filter articles by category
export async function getNewsByCategory(category: string): Promise<NewsArticle[]> {
  const articles = await loadAllNews();
  if (category === 'All') return articles;
  return articles.filter(article => article.category === category);
}