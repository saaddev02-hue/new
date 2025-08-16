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
            EmailJS is properly configured! Newsletter subscriptions are working.
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
            To send welcome emails and article notifications to subscribers, you need to set up EmailJS (it's free!).
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
          {/* Step 1: Create Account */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
              Create EmailJS Account (Free)
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
                and click "Sign Up"
              </li>
              <li>Create account with your email (the one you want to receive notifications)</li>
              <li>Verify your email address</li>
              <li>Log in to your EmailJS dashboard</li>
            </ol>
          </div>

          {/* Step 2: Add Email Service */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
              Connect Your Email
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>In EmailJS dashboard, click "Email Services" in the left menu</li>
              <li>Click "Add New Service"</li>
              <li>Choose your email provider:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>Gmail</strong> - Most common choice</li>
                  <li><strong>Outlook/Hotmail</strong> - Microsoft emails</li>
                  <li><strong>Yahoo</strong> - Yahoo emails</li>
                  <li><strong>Other</strong> - Any SMTP email</li>
                </ul>
              </li>
              <li>Follow the setup instructions (usually just login with your email)</li>
              <li><strong>Copy your Service ID</strong> (looks like: service_abc123)</li>
            </ol>
          </div>

          {/* Step 3: Create Templates */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
              Create Email Templates
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Create 2 email templates:
            </p>
            
            <div className="space-y-4">
              {/* Welcome Template */}
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Template 1: Welcome Email
                </h5>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Go to "Email Templates" → "Create New Template" → Name it "template_welcome"
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                  <p><strong>Subject:</strong> Welcome to Saher Flow Solutions Newsletter!</p>
                  <p><strong>Body:</strong></p>
                  <pre className="whitespace-pre-wrap text-xs mt-2 bg-white dark:bg-gray-800 p-2 rounded">
{`Hi {{to_name}},

Welcome to Saher Flow Solutions newsletter! 🎉

Thank you for subscribing. You'll now receive:
✅ Latest product updates and innovations
✅ Industry insights and technical papers  
✅ Company news and achievements
✅ Exclusive content for subscribers

We're excited to keep you informed about the latest developments in multiphase flow measurement technology.

Best regards,
The Saher Flow Solutions Team

Visit our website: {{website_url}}`}
                  </pre>
                </div>
              </div>

              {/* Article Template */}
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Template 2: New Article Notification
                </h5>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Create another template → Name it "template_article"
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                  <p><strong>Subject:</strong> New Article: {{article_title}}</p>
                  <p><strong>Body:</strong></p>
                  <pre className="whitespace-pre-wrap text-xs mt-2 bg-white dark:bg-gray-800 p-2 rounded">
{`Hi {{to_name}},

We've just published a new article! 📰

Title: {{article_title}}

{{article_excerpt}}

Read the full article here: {{article_url}}

Best regards,
The Saher Flow Solutions Team

Visit our website: {{website_url}}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Get Public Key */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
              Get Your Public Key
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>In EmailJS dashboard, click "Account" in the left menu</li>
              <li>Click "General" tab</li>
              <li><strong>Copy your Public Key</strong> (looks like: abc123XYZ)</li>
            </ol>
          </div>

          {/* Step 5: Update Code */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">5</span>
              Update Your Website Code
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Open the file <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">src/utils/emailService.ts</code> and replace these values:
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Replace these lines:</span>
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
const EMAILJS_TEMPLATE_ID_ARTICLE = 'template_article';
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
{`const EMAILJS_SERVICE_ID = 'your_service_id_here';  ← Replace with your Service ID
const EMAILJS_TEMPLATE_ID_WELCOME = 'template_welcome';  ← Keep as is
const EMAILJS_TEMPLATE_ID_ARTICLE = 'template_article';  ← Keep as is  
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';  ← Replace with your Public Key`}
                </pre>
              )}
            </div>

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                <strong>Example:</strong> If your Service ID is "service_abc123" and Public Key is "xyz789", replace:
                <br />
                <code>const EMAILJS_SERVICE_ID = 'service_abc123';</code>
                <br />
                <code>const EMAILJS_PUBLIC_KEY = 'xyz789';</code>
              </p>
            </div>
          </div>

          {/* Step 6: Test */}
          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="text-green-800 dark:text-green-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">6</span>
              Test Your Setup
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-green-700 dark:text-green-300 text-sm">
              <li>Save your changes and refresh the website</li>
              <li>Try subscribing to the newsletter with your email</li>
              <li>Check your email inbox for the welcome message</li>
              <li>If it works, you're all set! 🎉</li>
            </ol>
          </div>

          {/* Troubleshooting */}
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h4 className="text-red-800 dark:text-red-400 font-semibold mb-2">
              Troubleshooting
            </h4>
            <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300 text-sm">
              <li>Make sure template names are exactly "template_welcome" and "template_article"</li>
              <li>Check that Service ID and Public Key are correct (no extra spaces)</li>
              <li>Verify your email service is connected in EmailJS dashboard</li>
              <li>Check browser console for error messages</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailJSSetupGuide;