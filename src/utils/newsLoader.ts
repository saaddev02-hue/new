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

// Get all markdown files dynamically
function getMarkdownFiles(): Record<string, () => Promise<any>> {
  console.log('Getting markdown files...');
  const files = import.meta.glob('/src/content/*.md', { as: 'raw', eager: false });
  console.log('Found files:', Object.keys(files));
  return files;
}

// Load all news articles from actual files
export async function loadAllNews(): Promise<NewsArticle[]> {
  console.log('loadAllNews called');
  const articles: NewsArticle[] = [];
  const files = getMarkdownFiles();
  
  if (Object.keys(files).length === 0) {
    console.warn('No markdown files found in /src/content/');
    // Return some fallback articles for testing
    return [
      {
        id: 'test-article',
        title: 'Test Article - No MD Files Found',
        date: '2025-01-15',
        category: 'System',
        image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
        excerpt: 'This is a test article because no markdown files were found in the content directory.',
        featured: false,
        content: '<p>No markdown files were found in the /src/content/ directory. Please add some .md files to see real content.</p>',
        slug: 'test-article'
      }
    ];
  }
  
  for (const [filePath, loadFile] of Object.entries(files)) {
    try {
      console.log(`Loading file: ${filePath}`);
      const content = await loadFile();
      console.log(`File content length: ${content.length}`);
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
      console.log(`Successfully loaded: ${metadata.title}`);
    } catch (error) {
      console.error(`Error loading news file ${filePath}:`, error);
    }
  }
  
  console.log(`Total articles loaded: ${articles.length}`);
  // Sort by date (newest first)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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

// Get recent news articles (for homepage preview)
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