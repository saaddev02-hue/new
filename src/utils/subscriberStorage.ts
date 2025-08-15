// Simple subscriber storage using localStorage for demo
// In production, use a proper database

export interface Subscriber {
  email: string;
  name?: string;
  subscribedAt: string;
  preferences: {
    productUpdates: boolean;
    industryNews: boolean;
    technicalPapers: boolean;
    events: boolean;
  };
  status: 'active' | 'unsubscribed';
}

const STORAGE_KEY = 'saher_newsletter_subscribers';

export class SubscriberStorage {
  static getSubscribers(): Subscriber[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading subscribers:', error);
      return [];
    }
  }

  static addSubscriber(subscriber: Omit<Subscriber, 'subscribedAt' | 'status'>): boolean {
    try {
      const subscribers = this.getSubscribers();
      
      // Check if already subscribed
      const existingIndex = subscribers.findIndex(s => s.email === subscriber.email);
      
      if (existingIndex >= 0) {
        // Update existing subscriber
        subscribers[existingIndex] = {
          ...subscribers[existingIndex],
          ...subscriber,
          status: 'active',
          subscribedAt: subscribers[existingIndex].subscribedAt // Keep original date
        };
      } else {
        // Add new subscriber
        subscribers.push({
          ...subscriber,
          subscribedAt: new Date().toISOString(),
          status: 'active'
        });
      }
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(subscribers));
      console.log('Subscriber added/updated:', subscriber.email);
      return true;
    } catch (error) {
      console.error('Error adding subscriber:', error);
      return false;
    }
  }

  static getActiveSubscribers(): Subscriber[] {
    return this.getSubscribers().filter(s => s.status === 'active');
  }

  static unsubscribe(email: string): boolean {
    try {
      const subscribers = this.getSubscribers();
      const index = subscribers.findIndex(s => s.email === email);
      
      if (index >= 0) {
        subscribers[index].status = 'unsubscribed';
        localStorage.setItem(STORAGE_KEY, JSON.stringify(subscribers));
        console.log('Subscriber unsubscribed:', email);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error unsubscribing:', error);
      return false;
    }
  }

  static getSubscriberEmails(): string[] {
    return this.getActiveSubscribers().map(s => s.email);
  }

  static getSubscriberCount(): number {
    return this.getActiveSubscribers().length;
  }
}