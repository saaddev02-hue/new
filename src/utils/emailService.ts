// EmailJS service for all email communications
import emailjs from '@emailjs/browser';

// EmailJS Configuration - Updated with your credentials
const EMAILJS_SERVICE_ID = 'service_yu0nzx3';
const EMAILJS_PUBLIC_KEY = 'B4GXKUs8SowruUqKW';

// Template IDs - You'll need to create these in EmailJS dashboard
const TEMPLATES = {
  CONTACT_ADMIN: 'template_contact_admin',
  CONTACT_AUTOREPLY: 'template_contact_autoreply', 
  CAREERS_ADMIN: 'template_careers_admin',
  CAREERS_AUTOREPLY: 'template_careers_autoreply',
  NEWSLETTER_WELCOME: 'template_newsletter_welcome',
  ARTICLE_NOTIFICATION: 'template_article_notification'
};

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export class EmailService {
  /**
   * Send contact form to admin
   */
  static async sendContactFormToAdmin(formData: {
    sender_name: string;
    sender_email: string;
    department: string;
    message: string;
  }): Promise<boolean> {
    const templateParams = {
      sender_name: formData.sender_name,
      sender_email: formData.sender_email,
      department: formData.department,
      message: formData.message,
      submitted_at: new Date().toLocaleString(),
      _replyto: formData.sender_email
    };

    try {
      console.log('Sending contact form to admin:', formData.sender_email);
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        TEMPLATES.CONTACT_ADMIN,
        templateParams
      );
      console.log('Contact form sent to admin successfully:', response);
      return response?.status === 200;
    } catch (error) {
      console.error('Failed to send contact form to admin:', error);
      return false;
    }
  }

  /**
   * Send auto-reply to contact form submitter
   */
  static async sendContactAutoReply(formData: {
    sender_name: string;
    sender_email: string;
  }): Promise<boolean> {
    const templateParams = {
      sender_name: formData.sender_name,
      to_email: formData.sender_email,
      company_name: 'Saher Flow Solutions',
      support_email: 'saad.mahmood@saherflow.com'
    };

    try {
      console.log('Sending contact auto-reply to:', formData.sender_email);
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        TEMPLATES.CONTACT_AUTOREPLY,
        templateParams
      );
      console.log('Contact auto-reply sent successfully:', response);
      return response?.status === 200;
    } catch (error) {
      console.error('Failed to send contact auto-reply:', error);
      return false;
    }
  }

  /**
   * Send job application to admin
   */
  static async sendJobApplicationToAdmin(applicationData: {
    applicant_name: string;
    applicant_email: string;
    applicant_phone: string;
    position: string;
    location: string;
    experience: string;
    cover_letter: string;
    resume_url: string;
  }): Promise<boolean> {
    const templateParams = {
      applicant_name: applicationData.applicant_name,
      applicant_email: applicationData.applicant_email,
      applicant_phone: applicationData.applicant_phone,
      position: applicationData.position,
      location: applicationData.location,
      experience: applicationData.experience,
      cover_letter: applicationData.cover_letter,
      resume_url: applicationData.resume_url,
      submitted_at: new Date().toLocaleString(),
      _replyto: applicationData.applicant_email
    };

    try {
      console.log('Sending job application to admin:', applicationData.applicant_email);
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        TEMPLATES.CAREERS_ADMIN,
        templateParams
      );
      console.log('Job application sent to admin successfully:', response);
      return response?.status === 200;
    } catch (error) {
      console.error('Failed to send job application to admin:', error);
      return false;
    }
  }

  /**
   * Send auto-reply to job applicant
   */
  static async sendJobApplicationAutoReply(applicationData: {
    applicant_name: string;
    applicant_email: string;
    position: string;
  }): Promise<boolean> {
    const templateParams = {
      applicant_name: applicationData.applicant_name,
      to_email: applicationData.applicant_email,
      position: applicationData.position,
      company_name: 'Saher Flow Solutions',
      support_email: 'saad.mahmood@saherflow.com'
    };

    try {
      console.log('Sending job application auto-reply to:', applicationData.applicant_email);
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        TEMPLATES.CAREERS_AUTOREPLY,
        templateParams
      );
      console.log('Job application auto-reply sent successfully:', response);
      return response?.status === 200;
    } catch (error) {
      console.error('Failed to send job application auto-reply:', error);
      return false;
    }
  }

  /**
   * Send welcome email to newsletter subscriber
   */
  static async sendNewsletterWelcome(subscriberEmail: string, subscriberName?: string): Promise<boolean> {
    const templateParams = {
      subscriber_name: subscriberName || subscriberEmail.split('@')[0],
      to_email: subscriberEmail,
      company_name: 'Saher Flow Solutions',
      manage_link: `${window.location.origin}/unsubscribe?email=${encodeURIComponent(subscriberEmail)}`
    };

    try {
      console.log('Sending newsletter welcome to:', subscriberEmail);
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        TEMPLATES.NEWSLETTER_WELCOME,
        templateParams
      );
      console.log('Newsletter welcome sent successfully:', response);
      return response?.status === 200;
    } catch (error) {
      console.error('Failed to send newsletter welcome:', error);
      return false;
    }
  }

  /**
   * Send article notification to subscriber
   */
  static async sendArticleNotification(
    subscriberEmail: string,
    articleData: {
      title: string;
      excerpt: string;
      url: string;
      published_date: string;
    },
    subscriberName?: string
  ): Promise<boolean> {
    const templateParams = {
      subscriber_name: subscriberName || subscriberEmail.split('@')[0],
      to_email: subscriberEmail,
      article_title: articleData.title,
      article_excerpt: articleData.excerpt,
      article_url: `${window.location.origin}${articleData.url}`,
      published_date: articleData.published_date,
      company_name: 'Saher Flow Solutions'
    };

    try {
      console.log('Sending article notification to:', subscriberEmail);
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        TEMPLATES.ARTICLE_NOTIFICATION,
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
   * Notify all subscribers about new article
   */
  static async notifyAllSubscribers(
    articleTitle: string,
    articleExcerpt: string,
    articleUrl: string,
    subscriberEmails: string[],
    publishedDate: string = new Date().toLocaleDateString()
  ): Promise<{ success: number; failed: number }> {
    let success = 0;
    let failed = 0;

    console.log(`Notifying ${subscriberEmails.length} subscribers about new article:`, articleTitle);

    for (const email of subscriberEmails) {
      try {
        const sent = await this.sendArticleNotification(
          email,
          {
            title: articleTitle,
            excerpt: articleExcerpt,
            url: articleUrl,
            published_date: publishedDate
          }
        );
        
        if (sent) {
          success++;
        } else {
          failed++;
        }
        
        // Add small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 200));
      } catch (error) {
        console.error(`Failed to notify subscriber ${email}:`, error);
        failed++;
      }
    }

    console.log(`Notification complete: ${success} successful, ${failed} failed`);
    return { success, failed };
  }
}

export const validateEmailJSConfig = (): boolean => {
  return !!(EMAILJS_SERVICE_ID && EMAILJS_PUBLIC_KEY);
};

// Legacy function for backward compatibility
export { EmailService as default };