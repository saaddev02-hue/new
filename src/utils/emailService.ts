// src/utils/emailService.ts
import emailjs from '@emailjs/browser';

/**
 * Hard-coded EmailJS config (no .env as requested)
 * Replace EMAILJS_PUBLIC_KEY with your EmailJS public key string.
 */
const EMAILJS_SERVICE_ID = 'service_azqbh9e'; // provided by you
const EMAILJS_TEMPLATE_ID_WELCOME = 'template_xa7i4og'; // provided by you
const EMAILJS_TEMPLATE_ID_NEW_ARTICLE = 'template_7msgyni'; // provided by you
const EMAILJS_TEMPLATE_ID_ADMIN_NOTIFICATION = 'template_admin_notification'; // kept for future (not used)
const EMAILJS_PUBLIC_KEY = '8tFc9GCXL3OfQUv5c'; // TODO: replace with your EmailJS public key

// Initialize EmailJS (ok to call even if public key placeholder)
try {
  emailjs.init(EMAILJS_PUBLIC_KEY);
} catch (err) {
  console.warn('EmailJS init warning:', err);
}

/* ----------------------
   Types
   ---------------------- */
export interface EmailTemplateParams {
  to_email?: string;
  to_name?: string;
  from_name?: string;
  subject?: string;
  message?: string;
  [key: string]: any;
}

/* ----------------------
   Helper
   ---------------------- */
const makeAbsoluteUrl = (urlOrPath: string): string => {
  if (!urlOrPath) return '';
  try {
    return new URL(urlOrPath).toString();
  } catch {
    if (typeof window !== 'undefined' && window.location?.origin) {
      return urlOrPath.startsWith('/') ? `${window.location.origin}${urlOrPath}` : `${window.location.origin}/${urlOrPath}`;
    }
    return urlOrPath;
  }
};

/* ----------------------
   EmailService
   ---------------------- */
export class EmailService {
  /**
   * Send welcome email to new subscriber (uses template_xa7i4og)
   * Ensure your EmailJS template expects these variable names:
   * - first_name, dashboard_url, support_email, unsubscribe_url, logo_url, year, etc.
   */
  static async sendWelcomeEmail(subscriberEmail: string, subscriberName?: string): Promise<boolean> {
    const firstName = subscriberName || 'Valued Subscriber';
    const origin = typeof window !== 'undefined' ? window.location.origin : '';

    const templateParams: EmailTemplateParams = {
      to_email: subscriberEmail,
      to_name: firstName,
      from_name: 'Saher Flow Solutions',
      subject: `Welcome to Saher Flow Solutions, ${firstName}!`,
      // template variables (match your EmailJS template fields)
      first_name: firstName,
      logo_url: `${origin}/assets/logo.png`,
      dashboard_url: `${origin}/dashboard`,
      support_email: 'support@saherflow.com',
      unsubscribe_url: `${origin}/unsubscribe?email=${encodeURIComponent(subscriberEmail)}`,
      year: new Date().getFullYear().toString(),
      // fallback message (if you use a text block in the template)
      message: `Welcome ${firstName} — thanks for subscribing to Saher Flow Solutions.`,
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_WELCOME,
        templateParams
      );
      console.log('Welcome email sent:', response);
      // EmailJS usually returns { status: 200, text: 'OK' }
      return response?.status === 200 || /ok/i.test(String(response?.text || ''));
    } catch (error) {
      console.error('Failed to send welcome email:', error);
      return false;
    }
  }

  /**
   * Send new article notification (uses template_7msgyni)
   * Template variables used here:
   * - article_title, author, publish_date, article_excerpt, article_url, logo_url, unsubscribe_url, year
   */
  static async sendNewArticleNotification(
    subscriberEmail: string,
    articleTitle: string,
    articleExcerpt: string,
    articleUrl: string,
    subscriberName?: string,
    author?: string,
    publishDate?: string
  ): Promise<boolean> {
    const name = subscriberName || 'Valued Subscriber';
    const fullArticleUrl = makeAbsoluteUrl(articleUrl);
    const origin = typeof window !== 'undefined' ? window.location.origin : '';

    const templateParams: EmailTemplateParams = {
      to_email: subscriberEmail,
      to_name: name,
      from_name: 'Saher Flow Solutions',
      subject: `New Article: ${articleTitle}`,
      // template-specific variables
      article_title: articleTitle,
      article_excerpt: articleExcerpt,
      article_url: fullArticleUrl,
      author: author || 'Saher Flow Solutions',
      publish_date: publishDate || new Date().toLocaleDateString(),
      logo_url: `${origin}/assets/logo.png`,
      unsubscribe_url: `${origin}/unsubscribe?email=${encodeURIComponent(subscriberEmail)}`,
      year: new Date().getFullYear().toString(),
      // fallback message
      message: `Hi ${name}, we've published a new article: ${articleTitle}. Read: ${fullArticleUrl}`
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_NEW_ARTICLE,
        templateParams
      );
      console.log('Article notification sent:', response);
      return response?.status === 200 || /ok/i.test(String(response?.text || ''));
    } catch (error) {
      console.error('Failed to send article notification:', error);
      return false;
    }
  }

  /**
   * Admin notification (kept for future). Right now this is intentionally disabled.
   * If you want to enable later, replace the body to call emailjs.send with the admin template id.
   */
  static async sendAdminNotification(
    subscriberEmail: string,
    adminEmail: string,
    subscriberPreferences?: any
  ): Promise<boolean> {
    console.warn('sendAdminNotification is not enabled yet. This function is reserved for future use.');
    // Keep the function signature to avoid breaking callers, but do not send anything yet.
    return false;
  }

  /**
   * Monthly digest (optional). Reuse or create a digest template later.
   */
  static async sendMonthlyDigest(
    subscriberEmail: string,
    articles: Array<{ title: string; excerpt: string; url: string }>,
    subscriberName?: string
  ): Promise<boolean> {
    // Simple implementation that reuses the article template (or you can create a dedicated digest template)
    const name = subscriberName || 'Valued Subscriber';
    const monthYear = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const origin = typeof window !== 'undefined' ? window.location.origin : '';

    const articlesList = articles
      .map(a => `📰 ${a.title}\n${a.excerpt}\nRead more: ${makeAbsoluteUrl(a.url)}`)
      .join('\n\n');

    const templateParams: EmailTemplateParams = {
      to_email: subscriberEmail,
      to_name: name,
      from_name: 'Saher Flow Solutions',
      subject: `Monthly Newsletter - ${monthYear}`,
      message: `Here's your monthly digest for ${monthYear}:\n\n${articlesList}`,
      month_year: monthYear,
      articles_list: articlesList,
      website_url: origin,
      unsubscribe_url: `${origin}/unsubscribe?email=${encodeURIComponent(subscriberEmail)}`
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_NEW_ARTICLE, // reuse for now
        templateParams
      );
      console.log('Monthly digest sent:', response);
      return response?.status === 200 || /ok/i.test(String(response?.text || ''));
    } catch (error) {
      console.error('Failed to send monthly digest:', error);
      return false;
    }
  }
}

/* ----------------------
   Small helpers you can use in app
   ---------------------- */
export const getEmailJSConfig = () => ({
  serviceId: EMAILJS_SERVICE_ID,
  welcomeTemplateId: EMAILJS_TEMPLATE_ID_WELCOME,
  articleTemplateId: EMAILJS_TEMPLATE_ID_NEW_ARTICLE,
  adminTemplateId: EMAILJS_TEMPLATE_ID_ADMIN_NOTIFICATION,
  publicKey: EMAILJS_PUBLIC_KEY
});

export const validateEmailJSConfig = (): boolean => {
  const cfg = getEmailJSConfig();
  const valid =
    !!cfg.serviceId &&
    cfg.serviceId !== 'your_service_id' &&
    !!cfg.publicKey &&
    cfg.publicKey !== 'your_public_key_here' &&
    !!cfg.welcomeTemplateId &&
    !!cfg.articleTemplateId;

  if (!valid) {
    console.warn('EmailJS configuration looks incomplete. Please replace EMAILJS_PUBLIC_KEY in src/utils/emailService.ts with your real public key.');
  }
  return valid;
};
