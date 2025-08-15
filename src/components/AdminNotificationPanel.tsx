import React, { useState } from 'react';
import { Bell, Users, Send, Eye, BarChart3, Mail } from 'lucide-react';
import { SubscriberStorage } from '../utils/subscriberStorage';
import { NewsNotificationService } from '../utils/newsNotificationService';
import { NewsArticle } from '../utils/newsLoader';

interface AdminNotificationPanelProps {
  article?: NewsArticle;
  onClose?: () => void;
}

const AdminNotificationPanel: React.FC<AdminNotificationPanelProps> = ({ article, onClose }) => {
  const [isNotifying, setIsNotifying] = useState(false);
  const [notificationResult, setNotificationResult] = useState<{ success: number; failed: number } | null>(null);
  
  const stats = NewsNotificationService.getStats();
  const subscribers = SubscriberStorage.getActiveSubscribers();

  const handleNotifySubscribers = async () => {
    if (!article) return;
    
    setIsNotifying(true);
    setNotificationResult(null);
    
    try {
      const success = await NewsNotificationService.notifyAboutArticle(article);
      if (success) {
        // Get updated stats after notification
        const newStats = NewsNotificationService.getStats();
        setNotificationResult({ success: newStats.totalSubscribers, failed: 0 });
      } else {
        setNotificationResult({ success: 0, failed: stats.totalSubscribers });
      }
    } catch (error) {
      console.error('Notification failed:', error);
      setNotificationResult({ success: 0, failed: stats.totalSubscribers });
    } finally {
      setIsNotifying(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <Bell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Newsletter Management
          </h3>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            ×
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalSubscribers}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Active Subscribers</div>
        </div>
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <Mail className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.notifiedArticles}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Articles Sent</div>
        </div>
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {stats.totalSubscribers > 0 ? Math.round((stats.notifiedArticles / stats.totalSubscribers) * 100) : 0}%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Engagement</div>
        </div>
      </div>

      {/* Article Notification */}
      {article && (
        <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            Notify About This Article
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {article.title}
          </p>
          
          <button
            onClick={handleNotifySubscribers}
            disabled={isNotifying || stats.totalSubscribers === 0}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isNotifying ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Notify {stats.totalSubscribers} Subscribers
              </>
            )}
          </button>
          
          {notificationResult && (
            <div className="mt-3 text-sm">
              {notificationResult.success > 0 ? (
                <div className="text-green-600 dark:text-green-400">
                  ✅ Successfully notified {notificationResult.success} subscribers!
                </div>
              ) : (
                <div className="text-red-600 dark:text-red-400">
                  ❌ Failed to notify subscribers. Please check your EmailJS configuration.
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Subscriber List Preview */}
      <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900 dark:text-white">Recent Subscribers</h4>
          <Eye className="w-4 h-4 text-gray-400" />
        </div>
        
        {subscribers.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">No subscribers yet</p>
        ) : (
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {subscribers.slice(0, 5).map((subscriber, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-700 dark:text-gray-300">{subscriber.email}</span>
                <span className="text-gray-500 dark:text-gray-400">
                  {new Date(subscriber.subscribedAt).toLocaleDateString()}
                </span>
              </div>
            ))}
            {subscribers.length > 5 && (
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center pt-2">
                +{subscribers.length - 5} more subscribers
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNotificationPanel;