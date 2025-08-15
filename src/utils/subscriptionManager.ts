// Subscription management utilities
import { useForm } from '@formspree/react';

export interface Subscriber {
  email: string;
  preferences: {
    productUpdates: boolean;
    industryNews: boolean;
    technicalPapers: boolean;
    events: boolean;
  };
  subscribedAt: string;
  source: string;
  status: 'active' | 'unsubscribed' | 'bounced';
}

export interface NewsArticle {
  title: string;
  url: string;
  excerpt: string;
  image: string;
  category: string;
  publishedAt: string;
}

// Email templates for different notification types
export const emailTemplates = {
  welcomeEmail: (email: string) => ({
    subject: 'Welcome to Saher Flow Solutions Newsletter!',
    template: 'welcome',
    data: {
      email,
      companyName: 'Saher Flow Solutions',
      unsubscribeUrl: `${window.location.origin}/unsubscribe?email=${encodeURIComponent(email)}`,
      websiteUrl: window.location.origin,
    }
  }),

  newArticleNotification: (article: NewsArticle, subscriber: Subscriber) => ({
    subject: `New Article: ${article.title}`,
    template: 'new_article',
    data: {
      subscriberEmail: subscriber.email,
      articleTitle: article.title,
      articleUrl: `${window.location.origin}${article.url}`,
      articleExcerpt: article.excerpt,
      articleImage: article.image,
      articleCategory: article.category,
      publishedAt: article.publishedAt,
      unsubscribeUrl: `${window.location.origin}/unsubscribe?email=${encodeURIComponent(subscriber.email)}`,
      websiteUrl: window.location.origin,
    }
  }),

  monthlyDigest: (articles: NewsArticle[], subscriber: Subscriber) => ({
    subject: 'Monthly Newsletter - Latest Updates from Saher Flow Solutions',
    template: 'monthly_digest',
    data: {
      subscriberEmail: subscriber.email,
      articles: articles.slice(0, 5), // Top 5 articles
      monthYear: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      unsubscribeUrl: `${window.location.origin}/unsubscribe?email=${encodeURIComponent(subscriber.email)}`,
      websiteUrl: window.location.origin,
    }
  }),

  unsubscribeConfirmation: (email: string) => ({
    subject: 'You have been unsubscribed from Saher Flow Solutions Newsletter',
    template: 'unsubscribe_confirmation',
    data: {
      email,
      resubscribeUrl: `${window.location.origin}/subscribe`,
      websiteUrl: window.location.origin,
    }
  })
};

// Subscription management functions
export class SubscriptionManager {
  private formspreeEndpoint: string;

  constructor(formspreeEndpoint: string) {
    this.formspreeEndpoint = formspreeEndpoint;
  }

  // Send welcome email to new subscriber
  async sendWelcomeEmail(email: string, preferences: Subscriber['preferences']) {
    const template = emailTemplates.welcomeEmail(email);
    
    const formData = new FormData();
    formData.append('type', 'welcome_email');
    formData.append('email', email);
    formData.append('preferences', JSON.stringify(preferences));
    formData.append('subject', template.subject);
    formData.append('template', template.template);
    formData.append('data', JSON.stringify(template.data));
    formData.append('_subject', `Welcome Email: ${email}`);

    try {
      const response = await fetch(`https://formspree.io/f/${this.formspreeEndpoint}`, {
        method: 'POST',
        body: formData,
      });
      return response.ok;
    } catch (error) {
      console.error('Failed to send welcome email:', error);
      return false;
    }
  }

  // Notify all subscribers about new article
  async notifyNewArticle(article: NewsArticle) {
    const formData = new FormData();
    formData.append('type', 'new_article_notification');
    formData.append('articleTitle', article.title);
    formData.append('articleUrl', article.url);
    formData.append('articleExcerpt', article.excerpt);
    formData.append('articleImage', article.image);
    formData.append('articleCategory', article.category);
    formData.append('publishedAt', article.publishedAt);
    formData.append('_subject', `New Article Notification: ${article.title}`);

    try {
      const response = await fetch(`https://formspree.io/f/${this.formspreeEndpoint}`, {
        method: 'POST',
        body: formData,
      });
      return response.ok;
    } catch (error) {
      console.error('Failed to send article notification:', error);
      return false;
    }
  }

  // Send monthly digest
  async sendMonthlyDigest(articles: NewsArticle[]) {
    const formData = new FormData();
    formData.append('type', 'monthly_digest');
    formData.append('articles', JSON.stringify(articles));
    formData.append('monthYear', new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
    formData.append('_subject', 'Monthly Newsletter Digest');

    try {
      const response = await fetch(`https://formspree.io/f/${this.formspreeEndpoint}`, {
        method: 'POST',
        body: formData,
      });
      return response.ok;
    } catch (error) {
      console.error('Failed to send monthly digest:', error);
      return false;
    }
  }

  // Handle unsubscribe request
  async handleUnsubscribe(email: string) {
    const template = emailTemplates.unsubscribeConfirmation(email);
    
    const formData = new FormData();
    formData.append('type', 'unsubscribe');
    formData.append('email', email);
    formData.append('unsubscribedAt', new Date().toISOString());
    formData.append('subject', template.subject);
    formData.append('_subject', `Unsubscribe Request: ${email}`);

    try {
      const response = await fetch(`https://formspree.io/f/${this.formspreeEndpoint}`, {
        method: 'POST',
        body: formData,
      });
      return response.ok;
    } catch (error) {
      console.error('Failed to process unsubscribe:', error);
      return false;
    }
  }
}

// Hook for subscription management
export const useSubscriptionManager = (formspreeEndpoint: string) => {
  const manager = new SubscriptionManager(formspreeEndpoint);
  
  return {
    sendWelcomeEmail: manager.sendWelcomeEmail.bind(manager),
    notifyNewArticle: manager.notifyNewArticle.bind(manager),
    sendMonthlyDigest: manager.sendMonthlyDigest.bind(manager),
    handleUnsubscribe: manager.handleUnsubscribe.bind(manager),
  };
};

// Auto-notification hook for new articles
export const useAutoNotification = () => {
  const [state, handleSubmit] = useForm("mnnzrdzo"); // Replace with your notification form ID
  
  const notifySubscribers = async (article: NewsArticle) => {
    const formData = new FormData();
    formData.append('type', 'auto_notification');
    formData.append('articleTitle', article.title);
    formData.append('articleUrl', article.url);
    formData.append('articleExcerpt', article.excerpt);
    formData.append('articleImage', article.image);
    formData.append('articleCategory', article.category);
    formData.append('publishedAt', article.publishedAt);
    formData.append('_subject', `Auto Notification: ${article.title}`);
    
    await handleSubmit(formData);
  };
  
  return { notifySubscribers, state };
};