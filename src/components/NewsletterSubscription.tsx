import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Send, CheckCircle, AlertCircle, Bell, Users, TrendingUp } from 'lucide-react';

interface NewsletterSubscriptionProps {
  variant?: 'default' | 'compact' | 'footer';
  className?: string;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({ 
  variant = 'default',
  className = '' 
}) => {
  const [state, handleSubmit] = useForm("xanbkawg"); // Replace with your Formspree form ID
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    productUpdates: true,
    industryNews: true,
    technicalPapers: false,
    events: false
  });

  const handleSubscriptionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData with subscription details
    const formData = new FormData();
    formData.append('email', email);
    formData.append('subscriptionType', 'newsletter');
    formData.append('preferences', JSON.stringify(preferences));
    formData.append('subscribedAt', new Date().toISOString());
    formData.append('source', 'website');
    formData.append('_subject', `New Newsletter Subscription: ${email}`);
    formData.append('_template', 'table');
    
    // Submit to Formspree
    await handleSubmit(formData);
    
    if (state.succeeded) {
      setEmail('');
      setPreferences({
        productUpdates: true,
        industryNews: true,
        technicalPapers: false,
        events: false
      });
    }
  };

  // Compact variant for inline use
  if (variant === 'compact') {
    return (
      <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm ${className}`}>
        <form onSubmit={handleSubscriptionSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-navy-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-4 py-2 rounded-md font-medium hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {state.submitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        
        {state.succeeded && (
          <div className="mt-2 text-sm text-green-600 dark:text-green-400">
            ✅ Subscribed! Check your email for confirmation.
          </div>
        )}
        
        {state.errors && state.errors.length > 0 && (
          <div className="mt-2 text-sm text-red-600 dark:text-red-400">
            ❌ Subscription failed. Please try again.
          </div>
        )}
      </div>
    );
  }

  // Footer variant
  if (variant === 'footer') {
    return (
      <div className={className}>
        <form onSubmit={handleSubscriptionSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 pr-12 bg-white/20 dark:bg-gray-800/50 border border-white/30 dark:border-gray-600/30 rounded-xl text-white dark:text-gray-200 placeholder-gray-300 dark:placeholder-gray-400 focus:bg-white/30 dark:focus:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500/50 transition-all duration-300"
            />
            <Mail size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          </div>
          
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy-900 py-4 px-4 rounded-xl font-bold hover:from-yellow-400 hover:to-yellow-300 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
          >
            {state.submitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-navy-900 border-t-transparent" />
                Subscribing...
              </>
            ) : (
              <>
                <Send size={18} />
                Subscribe Now
              </>
            )}
          </button>
          
          {state.succeeded && (
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle size={18} className="text-green-400" />
                <p className="text-green-400 font-medium">
                  Successfully subscribed! Check your email for confirmation.
                </p>
              </div>
            </div>
          )}
          
          {state.errors && state.errors.length > 0 && (
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <AlertCircle size={18} className="text-red-400" />
                <p className="text-red-400 font-medium">
                  Subscription failed. Please try again.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }

  // Default variant - full featured
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 ${className}`}>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-yellow-500 rounded-full">
            <Bell className="w-6 h-6 text-navy-900" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white">Stay Updated</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Get the latest news, product updates, and industry insights delivered to your inbox
        </p>
      </div>

      <form onSubmit={handleSubscriptionSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy-500 dark:focus:ring-yellow-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="your.email@company.com"
            />
            <Mail size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Subscription Preferences
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={preferences.productUpdates}
                onChange={(e) => setPreferences(prev => ({ ...prev, productUpdates: e.target.checked }))}
                className="w-4 h-4 text-navy-600 bg-gray-100 border-gray-300 rounded focus:ring-navy-500 dark:focus:ring-yellow-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-gray-700 dark:text-gray-300">Product Updates & Announcements</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={preferences.industryNews}
                onChange={(e) => setPreferences(prev => ({ ...prev, industryNews: e.target.checked }))}
                className="w-4 h-4 text-navy-600 bg-gray-100 border-gray-300 rounded focus:ring-navy-500 dark:focus:ring-yellow-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-gray-700 dark:text-gray-300">Industry News & Insights</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={preferences.technicalPapers}
                onChange={(e) => setPreferences(prev => ({ ...prev, technicalPapers: e.target.checked }))}
                className="w-4 h-4 text-navy-600 bg-gray-100 border-gray-300 rounded focus:ring-navy-500 dark:focus:ring-yellow-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-gray-700 dark:text-gray-300">Technical Papers & Research</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={preferences.events}
                onChange={(e) => setPreferences(prev => ({ ...prev, events: e.target.checked }))}
                className="w-4 h-4 text-navy-600 bg-gray-100 border-gray-300 rounded focus:ring-navy-500 dark:focus:ring-yellow-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-gray-700 dark:text-gray-300">Events & Webinars</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white dark:border-navy-900 border-t-transparent" />
              Subscribing...
            </>
          ) : (
            <>
              <Send size={20} />
              Subscribe to Newsletter
            </>
          )}
        </button>
        
        {state.succeeded && (
          <div className="bg-green-100 dark:bg-green-900/30 border border-green-500/30 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
              <p className="text-green-800 dark:text-green-400 font-medium">
                Successfully Subscribed!
              </p>
            </div>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Thank you for subscribing! You'll receive a confirmation email shortly, and we'll keep you updated with the latest news and insights.
            </p>
          </div>
        )}
        
        {state.errors && state.errors.length > 0 && (
          <div className="bg-red-100 dark:bg-red-900/30 border border-red-500/30 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertCircle size={20} className="text-red-600 dark:text-red-400" />
              <p className="text-red-800 dark:text-red-400 font-medium">
                Subscription Failed
              </p>
            </div>
            <p className="text-red-700 dark:text-red-300 text-sm">
              There was an error processing your subscription. Please try again or contact us directly.
            </p>
          </div>
        )}
      </form>

      {/* Trust Indicators */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white">500+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Subscribers</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white">Monthly</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Updates</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2">
              <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white">No Spam</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Promise</div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            🔒 Your privacy is protected. Unsubscribe anytime with one click.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;