// Service to handle automatic notifications when new articles are published
import { EmailService } from './emailService';
import { SubscriberStorage } from './subscriberStorage';
import { NewsArticle } from './newsLoader';

export class NewsNotificationService {
  private static lastNotifiedArticles: Set<string> = new Set();
  
  /**
   * Check for new articles and notify subscribers
   */
  static async checkAndNotifyNewArticles(articles: NewsArticle[]): Promise<void> {
    if (!articles || articles.length === 0) return;
    
    // Get the latest article
    const latestArticle = articles[0];
    const articleId = latestArticle.id || latestArticle.slug;
    
    // Check if we've already notified about this article
    if (this.lastNotifiedArticles.has(articleId)) {
      return;
    }
    
    // Check if article is recent (published within last 7 days)
    const articleDate = new Date(latestArticle.date);
    const now = new Date();
    const daysDiff = (now.getTime() - articleDate.getTime()) / (1000 * 60 * 60 * 24);
    
    if (daysDiff > 7) {
      console.log('Article is older than 7 days, skipping notification');
      return;
    }
    
    // Get active subscribers
    const subscriberEmails = SubscriberStorage.getSubscriberEmails();
    
    if (subscriberEmails.length === 0) {
      console.log('No active subscribers to notify');
      return;
    }
    
    console.log(`Found new article: ${latestArticle.title}`);
    console.log(`Notifying ${subscriberEmails.length} subscribers`);
    
    try {
      // Notify all subscribers
      const result = await EmailService.notifyAllSubscribers(
        latestArticle.title,
        latestArticle.excerpt,
        `/news#${latestArticle.slug}`,
        subscriberEmails,
        'Saher Flow Solutions Team',
        new Date(latestArticle.date).toLocaleDateString()
      );
      
      console.log(`Notification results: ${result.success} successful, ${result.failed} failed`);
      
      // Mark as notified
      this.lastNotifiedArticles.add(articleId);
      
      // Store in localStorage to persist across sessions
      localStorage.setItem('saher_notified_articles', JSON.stringify([...this.lastNotifiedArticles]));
      
    } catch (error) {
      console.error('Error notifying subscribers:', error);
    }
  }
  
  /**
   * Initialize the service by loading previously notified articles
   */
  static initialize(): void {
    try {
      const stored = localStorage.getItem('saher_notified_articles');
      if (stored) {
        const notifiedArticles = JSON.parse(stored);
        this.lastNotifiedArticles = new Set(notifiedArticles);
        console.log(`Loaded ${notifiedArticles.length} previously notified articles`);
      }
    } catch (error) {
      console.error('Error loading notified articles:', error);
    }
  }
  
  /**
   * Manually trigger notification for a specific article
   */
  static async notifyAboutArticle(article: NewsArticle): Promise<boolean> {
    const subscriberEmails = SubscriberStorage.getSubscriberEmails();
    
    if (subscriberEmails.length === 0) {
      console.log('No subscribers to notify');
      return false;
    }
    
    try {
      const result = await EmailService.notifyAllSubscribers(
        article.title,
        article.excerpt,
        `/news#${article.slug}`,
        subscriberEmails,
        'Saher Flow Solutions Team',
        new Date(article.date).toLocaleDateString()
      );
      
      console.log(`Manual notification results: ${result.success} successful, ${result.failed} failed`);
      
      // Mark as notified
      const articleId = article.id || article.slug;
      this.lastNotifiedArticles.add(articleId);
      localStorage.setItem('saher_notified_articles', JSON.stringify([...this.lastNotifiedArticles]));
      
      return result.success > 0;
    } catch (error) {
      console.error('Error in manual notification:', error);
      return false;
    }
  }
  
  /**
   * Get notification statistics
   */
  static getStats() {
    return {
      totalSubscribers: SubscriberStorage.getSubscriberCount(),
      notifiedArticles: this.lastNotifiedArticles.size,
      activeSubscribers: SubscriberStorage.getActiveSubscribers().length
    };
  }
}

// Initialize the service
NewsNotificationService.initialize();