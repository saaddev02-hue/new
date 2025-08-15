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

## Newsletter Subscription System Setup

The website includes a comprehensive newsletter subscription system with automatic notifications. To set it up:

### 1. Newsletter Subscription Form

Create a form in Formspree for newsletter subscriptions:

1. Create a new form in your Formspree account for subscriptions
2. Replace the form ID in `src/components/NewsletterSubscription.tsx`:
   ```typescript
   const [state, handleSubmit] = useForm("YOUR_SUBSCRIPTION_FORM_ID");
   ```
3. Configure the subscription form settings:
   - Set up email notifications to your marketing team
   - Configure autoresponder for welcome emails
   - Set up integrations with email marketing tools

### 2. New Article Notifications

Create a separate form for sending notifications about new articles:

1. Create another form in Formspree for article notifications
2. Replace the form ID in `src/utils/subscriptionManager.ts`:
   ```typescript
   const { notifySubscribers } = useAutoNotification(); // Update form ID in this hook
   ```
3. Configure notification settings:
   - Set up email templates for new article notifications
   - Configure subscriber list management
   - Set up automated email sending

### 3. Unsubscribe Management

Create a form for handling unsubscribe requests:

1. Create a form for unsubscribe requests
2. Replace the form ID in `src/pages/Unsubscribe.tsx`:
   ```typescript
   const [state, handleSubmit] = useForm("YOUR_UNSUBSCRIBE_FORM_ID");
   ```

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