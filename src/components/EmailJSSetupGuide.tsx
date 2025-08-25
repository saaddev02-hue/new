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
            EmailJS is properly configured! All email services are working.
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
            EmailJS Templates Setup Required
          </h3>
          <p className="text-yellow-700 dark:text-yellow-300 mb-4">
            You have EmailJS configured but need to create the email templates for the contact form, careers, and newsletter to work properly.
          </p>
          
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
          >
            <Settings className="w-4 h-4" />
            {showGuide ? 'Hide Setup Guide' : 'Show Template Setup Guide'}
          </button>
        </div>
      </div>

      {showGuide && (
        <div className="mt-6 space-y-6">
          {/* Current Configuration */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">✓</span>
              Your Current Configuration
            </h4>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Service ID:</strong> service_yu0nzx3
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Public Key:</strong> B4GXKUs8SowruUqKW
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Admin Email:</strong> saad.mahmood@saherflow.com
              </p>
            </div>
          </div>

          {/* Template Creation Steps */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
              Create Email Templates in EmailJS
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You need to create 6 email templates in your EmailJS dashboard. Go to{' '}
              <a 
                href="https://dashboard.emailjs.com/admin/templates" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                EmailJS Templates <ExternalLink className="w-3 h-3" />
              </a>
            </p>

            <div className="space-y-4">
              {/* Template 1: Contact Admin */}
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    1. Contact Form → Admin (template_contact_admin)
                  </h5>
                  <button
                    onClick={() => copyToClipboard(`Subject: New Contact Form: {{sender_name}} — {{department}}

New contact form submission

Name: {{sender_name}}
Email: {{sender_email}}
Department: {{department}}
Sent at: {{submitted_at}}

Message:
{{message}}

---
Reply directly to: {{sender_email}}`)}
                    className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy Template
                  </button>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>To Email:</strong> saad.mahmood@saherflow.com
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-xs">
                  <p><strong>Subject:</strong> New Contact Form: {`{{sender_name}}`} — {`{{department}}`}</p>
                  <p><strong>Body:</strong></p>
                  <pre className="whitespace-pre-wrap mt-2">
{`New contact form submission

Name: {{sender_name}}
Email: {{sender_email}}
Department: {{department}}
Sent at: {{submitted_at}}

Message:
{{message}}

---
Reply directly to: {{sender_email}}`}
                  </pre>
                </div>
              </div>

              {/* Template 2: Contact Auto-reply */}
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    2. Contact Auto-reply (template_contact_autoreply)
                  </h5>
                  <button
                    onClick={() => copyToClipboard(`Subject: Thanks for contacting {{company_name}} — we received your message

Hi {{sender_name}},

Thanks — we received your message and will reply within 1–2 business days.

If urgent, contact us at {{support_email}}.

— {{company_name}}`)}
                    className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy Template
                  </button>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>To Email:</strong> {`{{to_email}}`} (dynamic)
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap">
{`Subject: Thanks for contacting {{company_name}} — we received your message

Hi {{sender_name}},

Thanks — we received your message and will reply within 1–2 business days.

If urgent, contact us at {{support_email}}.

— {{company_name}}`}
                  </pre>
                </div>
              </div>

              {/* Template 3: Careers Admin */}
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    3. Job Application → Admin (template_careers_admin)
                  </h5>
                  <button
                    onClick={() => copyToClipboard(`Subject: Job Application: {{position}} — {{applicant_name}}

New job application

Name: {{applicant_name}}
Email: {{applicant_email}}
Phone: {{applicant_phone}}
Position: {{position}}
Location: {{location}}
Experience: {{experience}}
Submitted: {{submitted_at}}

Cover letter:
{{cover_letter}}

Resume download link (expires in 14 days): {{resume_url}}

---
Reply directly to: {{applicant_email}}`)}
                    className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy Template
                  </button>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>To Email:</strong> saad.mahmood@saherflow.com
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap">
{`Subject: Job Application: {{position}} — {{applicant_name}}

New job application

Name: {{applicant_name}}
Email: {{applicant_email}}
Phone: {{applicant_phone}}
Position: {{position}}
Location: {{location}}
Experience: {{experience}}
Submitted: {{submitted_at}}

Cover letter:
{{cover_letter}}

Resume download link (expires in 14 days): {{resume_url}}

---
Reply directly to: {{applicant_email}}`}
                  </pre>
                </div>
              </div>

              {/* Template 4: Careers Auto-reply */}
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    4. Job Application Auto-reply (template_careers_autoreply)
                  </h5>
                  <button
                    onClick={() => copyToClipboard(`Subject: Application received — {{position}} at {{company_name}}

Hi {{applicant_name}},

Thanks for applying for the {{position}} role at {{company_name}}.
We've received your application and will review it. If shortlisted, we'll contact you at {{to_email}}.

For queries: {{support_email}}

Best,
{{company_name}} HR`)}
                    className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy Template
                  </button>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>To Email:</strong> {`{{to_email}}`} (dynamic)
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap">
{`Subject: Application received — {{position}} at {{company_name}}

Hi {{applicant_name}},

Thanks for applying for the {{position}} role at {{company_name}}.
We've received your application and will review it. If shortlisted, we'll contact you at {{to_email}}.

For queries: {{support_email}}

Best,
{{company_name}} HR`}
                  </pre>
                </div>
              </div>

              {/* Template 5: Newsletter Welcome */}
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    5. Newsletter Welcome (template_newsletter_welcome)
                  </h5>
                  <button
                    onClick={() => copyToClipboard(`Subject: Welcome to {{company_name}} newsletter

Hi {{subscriber_name}},

Welcome — thanks for subscribing to {{company_name}}'s updates. We'll send occasional news and new blog posts to this email.

Manage your preferences: {{manage_link}}

Best regards,
The {{company_name}} Team`)}
                    className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy Template
                  </button>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>To Email:</strong> {`{{to_email}}`} (dynamic)
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap">
{`Subject: Welcome to {{company_name}} newsletter

Hi {{subscriber_name}},

Welcome — thanks for subscribing to {{company_name}}'s updates. We'll send occasional news and new blog posts to this email.

Manage your preferences: {{manage_link}}

Best regards,
The {{company_name}} Team`}
                  </pre>
                </div>
              </div>

              {/* Template 6: Article Notification */}
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    6. Article Notification (template_article_notification)
                  </h5>
                  <button
                    onClick={() => copyToClipboard(`Subject: New article: {{article_title}} — {{company_name}}

Hi {{subscriber_name}},

A new article is live: {{article_title}}
{{article_excerpt}}

Read it: {{article_url}}

Published on: {{published_date}}

Best regards,
The {{company_name}} Team`)}
                    className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy Template
                  </button>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>To Email:</strong> {`{{to_email}}`} (dynamic)
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap">
{`Subject: New article: {{article_title}} — {{company_name}}

Hi {{subscriber_name}},

A new article is live: {{article_title}}
{{article_excerpt}}

Read it: {{article_url}}

Published on: {{published_date}}

Best regards,
The {{company_name}} Team`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Testing Instructions */}
          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="text-green-800 dark:text-green-400 font-semibold mb-2 flex items-center gap-2">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
              Test Your Setup
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-green-700 dark:text-green-300 text-sm">
              <li>Create all 6 templates in EmailJS with the exact template IDs shown above</li>
              <li>Test the contact form - you should receive an email at saad.mahmood@saherflow.com</li>
              <li>Test the careers form - upload a resume and check your email</li>
              <li>Test newsletter subscription - you should get a welcome email</li>
              <li>If everything works, this yellow warning will disappear! 🎉</li>
            </ol>
          </div>

          {/* File Upload Info */}
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="text-blue-800 dark:text-blue-400 font-semibold mb-2">
              File Upload Service
            </h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Resume uploads now use <strong>file.io</strong> - a free service that provides temporary download links. 
              Files expire after 14 days or 10 downloads, which is perfect for job applications.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailJSSetupGuide;