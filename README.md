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

## Email System Setup with EmailJS

The website now uses EmailJS for a proper email system where:
- **Subscribers receive welcome emails and notifications**
- **You only receive admin notifications about new subscribers and contact forms**

### Setup Steps:

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
   - Verify your email and log in

2. **Set Up Email Service**
   - Add your email provider (Gmail, Outlook, etc.)
   - Get your Service ID

3. **Create Email Templates**
   - Welcome email template (ID: `template_welcome`)
   - New article notification template (ID: `template_new_article`)  
   - Admin notification template (ID: `template_admin_notification`)

4. **Get Your Public Key**
   - Copy your public key from Account settings

5. **Update Configuration**
   - Edit `src/utils/emailService.ts`
   - Replace placeholder values with your actual EmailJS credentials:
   ```typescript
   const EMAILJS_SERVICE_ID = 'your_service_id_here';
   const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
   ```
   - Update admin email in components to your actual email

### How It Works:

**Newsletter Subscription:**
1. User fills subscription form
2. User receives welcome email instantly
3. You receive admin notification: "New subscriber: email@example.com"

**Contact Form:**
1. User submits contact form
2. You receive the contact inquiry
3. User sees confirmation message

**New Article Notifications:**
1. When new articles are published
2. System can notify all subscribers (requires subscriber database)
3. Each subscriber gets personalized email

### Features:

- ✅ **Proper email flow** - subscribers get emails, you get notifications
- 📧 **Welcome emails** for new subscribers
- 🔔 **Article notifications** to subscribers
- 📊 **Admin notifications** for new subscribers and contact forms
- 🛡️ **No spam** - clean, professional emails
- 📱 **Mobile-friendly** forms
- 🎯 **Personalized** email content
- 🔄 **Error handling** and validation

### EmailJS Free Plan:
- 200 emails per month
- All features included
- No credit card required

For higher volume, upgrade to paid plans for unlimited emails.

### Setup Guide:
Visit the Subscribe page (`/subscribe`) to see the complete setup guide with step-by-step instructions and template examples.

### Newsletter Features:

- ✅ **Multi-variant subscription forms** (default, compact, footer)
- 📧 **Automatic welcome emails** for new subscribers
- 🔔 **Auto-notifications** when new articles are published
- 📊 **Subscription preferences** (product updates, industry news, etc.)
- 📱 **Mobile-responsive** subscription forms
- 🛡️ **Privacy protection** and easy unsubscribe
- 📈 **Subscriber analytics** and management
- 🎯 **Targeted content** based on preferences
- 📅 **Monthly digest** capability
- 🔄 **Confirmation emails** for all actions

### Email Templates:

The system supports various email templates:
- **Welcome Email**: Sent immediately after subscription
- **New Article Notification**: Sent when new content is published
- **Monthly Digest**: Curated monthly newsletter
- **Unsubscribe Confirmation**: Sent when users unsubscribe

### Subscription Management:

- **Automatic Detection**: New articles trigger subscriber notifications
- **Preference Management**: Users can choose content types
- **Easy Unsubscribe**: One-click unsubscribe with feedback collection
- **Resubscribe Option**: Users can easily resubscribe
- **Privacy Compliant**: GDPR-friendly subscription handling

### Integration Points:

1. **News Page**: Auto-notifies subscribers when new articles are detected
2. **Footer**: Compact subscription form on every page
3. **Dedicated Subscribe Page**: Full-featured subscription with preferences
4. **Unsubscribe Page**: Handles unsubscribe requests with feedback

### Setup Steps:

1. Create 3 forms in Formspree:
   - Newsletter subscriptions
   - Article notifications  
   - Unsubscribe requests

2. Update form IDs in the respective components

3. Configure email templates and autoresponders in Formspree

4. Set up email marketing integrations (optional)

5. Test the complete subscription flow

### Advanced Features:

- **Subscriber Segmentation**: Different content for different preferences
- **A/B Testing**: Test different subscription forms and content
- **Analytics Integration**: Track subscription rates and engagement
- **Email Marketing Integration**: Connect with Mailchimp, ConvertKit, etc.

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