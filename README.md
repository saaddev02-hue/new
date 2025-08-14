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

## Contact Form Setup

The contact form is integrated with Formspree for receiving real messages. To set it up:

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Replace the form ID in `src/components/Contact.tsx`:
   ```typescript
   const [state, handleSubmit] = useForm("YOUR_FORM_ID_HERE");
   ```
4. Configure your form settings in Formspree dashboard:
   - Set up email notifications
   - Configure spam protection
   - Add custom thank you messages
   - Set up integrations (Slack, email, etc.)

### Form Features:
- ✅ Real-time form submission
- 📧 Email notifications to your inbox
- 🛡️ Built-in spam protection
- 📊 Submission analytics
- 🔄 Form validation and error handling
- 📱 Mobile-friendly interface

### Free Plan Limits:
- 50 submissions per month
- Basic spam filtering
- Email notifications

For higher volume, upgrade to a paid plan for unlimited submissions and advanced features.

## Job Applications Setup

The careers page also has a functional application form. To receive job applications:

1. Create a second form in your Formspree account for job applications
2. Replace the form ID in `src/pages/Careers.tsx`:
   ```typescript
   const [state, handleSubmit] = useForm("YOUR_CAREERS_FORM_ID_HERE");
   ```
3. Configure the careers form in Formspree dashboard:
   - Set up separate email notifications for HR/recruitment team
   - Configure file upload settings for resumes
   - Set up automated responses for applicants

### Job Application Features:
- ✅ Complete candidate information collection
- 📄 Resume/CV file upload support
- 📧 Automatic email notifications to HR team
- 🔄 Form validation and error handling
- 📱 Mobile-friendly application process
- 🛡️ Spam protection for applications

### Application Data Collected:
- Full name and contact information
- Phone number and current location
- Years of experience
- Position applied for
- Cover letter
- Resume/CV file attachment

This allows you to receive complete job applications with all candidate data and documents directly in your email inbox.