// src/utils/emailService.ts
import emailjs from '@emailjs/browser';

/**
 * EmailJS Configuration
 * Replace these with your actual EmailJS credentials
 */
const EMAILJS_SERVICE_ID = 'service_azqbh9e';
const EMAILJS_TEMPLATE_ID_WELCOME = 'template_xa7i4og';
const EMAILJS_TEMPLATE_ID_NEW_ARTICLE = 'template_7msgyni';
const EMAILJS_TEMPLATE_ID_ADMIN_NOTIFICATION = 'template_admin_notification';
const EMAILJS_PUBLIC_KEY = '8tFc9GCXL3OfQUv5c';

// Initialize EmailJS
try {
  emailjs.init(EMAILJS_PUBLIC_KEY);
} catch (err) {
  console.warn('EmailJS init warning:', err);
}

export interface EmailTemplateParams {
  to_email?: string;
  to_name?: string;
  from_name?: string;
  subject?: string;
  message?: string;
  [key: string]: any;
}

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

export class EmailService {
  /**
   * Send welcome email to new subscriber
   */
  static async sendWelcomeEmail(subscriberEmail: string, subscriberName?: string): Promise<boolean> {
    const firstName = subscriberName || subscriberEmail.split('@')[0];
    const origin = typeof window !== 'undefined' ? window.location.origin : '';

    const templateParams: EmailTemplateParams = {
      to_email: subscriberEmail,
      to_name: firstName,
      from_name: 'Saher Flow Solutions',
      subject: `Welcome to Saher Flow Solutions Newsletter!`,
      first_name: firstName,
      subscriber_email: subscriberEmail,
      company_name: 'Saher Flow Solutions',
      website_url: origin,
      unsubscribe_url: `${origin}/unsubscribe?email=${encodeURIComponent(subscriberEmail)}`,
      support_email: 'contact@saherflow.com',
      year: new Date().getFullYear().toString(),
      message: `Welcome ${firstName}! Thank you for subscribing to our newsletter. You'll receive the latest updates about multiphase flow measurement technology.`,
    };

    try {
      console.log('Sending welcome email to:', subscriberEmail);
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_WELCOME,
        templateParams
      );
      console.log('Welcome email sent successfully:', response);
      return response?.status === 200;
    } catch (error) {
      console.error('Failed to send welcome email:', error);
      return false;
    }
  }

  /**
   * Send new article notification to subscriber
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
    const name = subscriberName || subscriberEmail.split('@')[0];
    const fullArticleUrl = makeAbsoluteUrl(articleUrl);
    const origin = typeof window !== 'undefined' ? window.location.origin : '';

    const templateParams: EmailTemplateParams = {
      to_email: subscriberEmail,
      to_name: name,
      from_name: 'Saher Flow Solutions',
      subject: `New Article: ${articleTitle}`,
      subscriber_name: name,
      subscriber_email: subscriberEmail,
      article_title: articleTitle,
      article_excerpt: articleExcerpt,
      article_url: fullArticleUrl,
      author: author || 'Saher Flow Solutions Team',
      publish_date: publishDate || new Date().toLocaleDateString(),
      company_name: 'Saher Flow Solutions',
      website_url: origin,
      unsubscribe_url: `${origin}/unsubscribe?email=${encodeURIComponent(subscriberEmail)}`,
      year: new Date().getFullYear().toString(),
      message: `Hi ${name}, we've published a new article: ${articleTitle}. ${articleExcerpt} Read more: ${fullArticleUrl}`
    };

    try {
      console.log('Sending article notification to:', subscriberEmail);
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_NEW_ARTICLE,
        templateParams
      );
      console.log('Article notification sent successfully:', response);
      return response?.status === 200;
    } catch (error) {
      console.error('Failed to send article notification:', error);
      return false;
    }
  }

  /**
   * Send admin notification about new subscriber
   */
  static async sendAdminNotification(
    subscriberEmail: string,
    adminEmail: string,
    subscriberPreferences?: any
  ): Promise<boolean> {
    const templateParams: EmailTemplateParams = {
      to_email: adminEmail,
      to_name: 'Admin',
      from_name: 'Website Notification System',
      subject: `New Newsletter Subscriber: ${subscriberEmail}`,
      subscriber_email: subscriberEmail,
      subscription_date: new Date().toLocaleDateString(),
      subscription_time: new Date().toLocaleTimeString(),
      preferences: subscriberPreferences ? JSON.stringify(subscriberPreferences, null, 2) : 'Default preferences',
      source: 'Website Newsletter Form',
      message: `New subscriber alert!\n\nEmail: ${subscriberEmail}\nSubscribed: ${new Date().toLocaleString()}\nSource: Website Newsletter Form\n\nThis is an automated notification.`
    };

    try {
      console.log('Sending admin notification for new subscriber:', subscriberEmail);
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_ADMIN_NOTIFICATION,
        templateParams
      );
      console.log('Admin notification sent successfully:', response);
      return response?.status === 200;
    } catch (error) {
      console.error('Failed to send admin notification:', error);
      return false;
    }
  }

  /**
   * Notify all subscribers about a new article
   */
  static async notifyAllSubscribers(
    articleTitle: string,
    articleExcerpt: string,
    articleUrl: string,
    subscriberEmails: string[],
    author?: string,
    publishDate?: string
  ): Promise<{ success: number; failed: number }> {
    let success = 0;
    let failed = 0;

    console.log(`Notifying ${subscriberEmails.length} subscribers about new article:`, articleTitle);

    for (const email of subscriberEmails) {
      try {
        const sent = await this.sendNewArticleNotification(
          email,
          articleTitle,
          articleExcerpt,
          articleUrl,
          undefined,
          author,
          publishDate
        );
        
        if (sent) {
          success++;
        } else {
          failed++;
        }
        
        // Add small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`Failed to notify subscriber ${email}:`, error);
        failed++;
      }
    }

    console.log(`Notification complete: ${success} successful, ${failed} failed`);
    return { success, failed };
  }
}

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
    console.warn('EmailJS configuration incomplete. Please update credentials in emailService.ts');
  }
  return valid;
};