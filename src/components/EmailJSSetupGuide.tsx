import React, { useState } from 'react';
import { Mail, Settings, CheckCircle, AlertTriangle, ExternalLink, Copy, Eye, EyeOff } from 'lucide-react';
import { validateEmailJSConfig } from '../utils/emailService';

const EmailJSSetupGuide: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const isConfigured = validateEmailJSConfig();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (isConfigured) {
    return (
      <div className="bg-green-100 dark:bg-green-900/30 border border-green-500/30 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span className="text-green-800 dark:text-green-400 font-medium">
            EmailJS is properly configured and ready to use!
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-6 mb-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-yellow-800 dark:text-yellow-400 font-semibold mb-2">
            EmailJS Setup Required
          </h3>
          <p className="text-yellow-700 dark:text-yellow-300 mb-4">
            The email subscription system needs to be configured with your EmailJS account to send emails to subscribers.
          </p>
          
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
          >
            <Settings className="w-4 h-4" />
            {showGuide ? 'Hide Setup Guide' : 'Show Setup Guide'}
          </button>
        </div>
      </div>

      {showGuide && (
        <div className="mt-6 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Step 1: Create EmailJS Account
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Go to{' '}
                <a 
                  href="https://www.emailjs.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  EmailJS.com <ExternalLink className="w-3 h-3" />
                </a>{' '}
                and create a free account
              </li>
              <li>Verify your email address</li>
              <li>Log in to your EmailJS dashboard</li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Step 2: Set Up Email Service
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>In EmailJS dashboard, go to "Email Services"</li>
              <li>Click "Add New Service"</li>
              <li>Choose your email provider (Gmail, Outlook, etc.)</li>
              <li>Follow the setup instructions for your provider</li>
              <li>Copy your <strong>Service ID</strong></li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Step 3: Create Email Templates
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Create these 3 templates in EmailJS:
            </p>
            
            <div className="space-y-4">
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                  1. Welcome Email Template (ID: template_welcome)
                </h5>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                  <p><strong>Subject:</strong> Welcome to Saher Flow Solutions Newsletter!</p>
                  <p><strong>Body:</strong></p>
                  <pre className="whitespace-pre-wrap text-xs mt-2">
{`Dear {{to_name}},

Thank you for subscribing to the Saher Flow Solutions newsletter!

You'll now receive:
✅ Latest product updates and innovations
✅ Industry insights and technical papers  
✅ Company news and achievements
✅ Exclusive content for subscribers

We're excited to keep you informed about the latest developments in multiphase flow measurement technology.

Best regards,
The Saher Flow Solutions Team

---
To unsubscribe, visit: {{unsubscribe_url}}`}
                  </pre>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                  2. New Article Template (ID: template_new_article)
                </h5>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                  <p><strong>Subject:</strong> New Article: {{article_title}}</p>
                  <p><strong>Body:</strong></p>
                  <pre className="whitespace-pre-wrap text-xs mt-2">
{`Dear {{to_name}},

We've just published a new article:

📰 {{article_title}}

{{article_excerpt}}

Read the full article: {{article_url}}

Best regards,
The Saher Flow Solutions Team

---
To unsubscribe, visit: {{unsubscribe_url}}`}
                  </pre>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                  3. Admin Notification Template (ID: template_admin_notification)
                </h5>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                  <p><strong>Subject:</strong> 🎉 New Newsletter Subscriber</p>
                  <p><strong>Body:</strong></p>
                  <pre className="whitespace-pre-wrap text-xs mt-2">
{`New subscriber alert!

📧 Email: {{subscriber_email}}
📅 Subscribed: {{subscription_date}}
🌐 Source: Website Newsletter Form

This is an automated notification from your website.`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Step 4: Get Your Public Key
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>In EmailJS dashboard, go to "Account" → "General"</li>
              <li>Copy your <strong>Public Key</strong></li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Step 5: Update Configuration
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Update the configuration in <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">src/utils/emailService.ts</code>:
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Configuration Code:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowConfig(!showConfig)}
                    className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                  >
                    {showConfig ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    {showConfig ? 'Hide' : 'Show'}
                  </button>
                  <button
                    onClick={() => copyToClipboard(`const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID_WELCOME = 'template_welcome';
const EMAILJS_TEMPLATE_ID_NEW_ARTICLE = 'template_new_article';
const EMAILJS_TEMPLATE_ID_ADMIN_NOTIFICATION = 'template_admin_notification';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';`)}
                    className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </button>
                </div>
              </div>
              
              {showConfig && (
                <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID_WELCOME = 'template_welcome';
const EMAILJS_TEMPLATE_ID_NEW_ARTICLE = 'template_new_article';
const EMAILJS_TEMPLATE_ID_ADMIN_NOTIFICATION = 'template_admin_notification';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';`}
                </pre>
              )}
            </div>

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                <strong>Important:</strong> Replace the placeholder values with your actual EmailJS credentials.
                Also update the admin email address in the NewsletterSubscription component.
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="text-green-800 dark:text-green-400 font-semibold mb-2">
              How It Works After Setup:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300 text-sm">
              <li><strong>Subscriber fills form</strong> → Gets welcome email instantly</li>
              <li><strong>You get notification</strong> → "New subscriber: email@example.com"</li>
              <li><strong>New article published</strong> → All subscribers get notified</li>
              <li><strong>No more emails to you</strong> → Only admin notifications</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailJSSetupGuide;