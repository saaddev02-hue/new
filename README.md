# Dynamic News System

This project implements a dynamic news system where each news article is stored in a separate markdown file, organized by date.

## News File Structure

```
src/content/news/
├── 2025-01-15-aramco-prequalified.md
├── 2024-12-10-successful-field-trial.md
├── 2024-12-05-aramco-leadership-visit.md
└── 2024-11-20-new-research-facility.md
```

## File Naming Convention

News files should be named using the format: `YYYY-MM-DD-slug.md`

- `YYYY-MM-DD`: The publication date
- `slug`: A URL-friendly identifier (lowercase, hyphens instead of spaces)

## Markdown File Format

Each news file should start with YAML frontmatter followed by markdown content:

```markdown
---
id: unique-identifier (optional)
title: "Article Title"
date: "YYYY-MM-DD"
category: "Category Name"
image: "https://image-url.com/image.jpg"
excerpt: "Brief description..."
featured: true/false
---

# Article Title

Article content in markdown format with support for:

- **Bold text**
- *Italic text*
- ## Subheadings
- Lists
- Links
- Images
- Tables
- Blockquotes

> This is a blockquote

## Features

- ✅ Dynamic loading from markdown files
- 📅 Automatic sorting by date (newest first)
- 🏷️ Category-based organization  
- 📸 Rich image support
- 📝 Full markdown formatting
- 🔍 SEO-friendly URLs
```

## Adding New News Articles

To add a new news article:

1. Create a new `.md` file in `src/content/news/`
2. Name it with the current date: `YYYY-MM-DD-article-slug.md`
3. Add the frontmatter with required fields
4. Write your article content in markdown
5. The article will automatically appear on the news page

## Supported Categories

- Customer Validation
- Technology  
- Company News
- Honorary Mentions

## Features

- **Rich Content**: Full markdown support with images, tables, lists, etc.
- **Automatic Sorting**: News items are automatically sorted by date (newest first)
- **Responsive Design**: Works on all device sizes
- **Search & Filter**: Easy navigation and categorization
- **SEO Friendly**: Clean URLs and proper metadata

## Future Enhancements

The system is designed to be easily extensible with features like:
- Search functionality
- Tag-based filtering
- RSS feed generation
- Email notifications
- Admin interface for content management