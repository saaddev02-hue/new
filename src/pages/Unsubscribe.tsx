import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { Mail, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Unsubscribe: React.FC = () => {
  const [state, handleSubmit] = useForm("xanbkawg"); // Replace with your unsubscribe form ID
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [feedback, setFeedback] = useState('');

  // Get email from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('email');
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, []);

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('type', 'unsubscribe');
    formData.append('email', email);
    formData.append('reason', reason);
    formData.append('feedback', feedback);
    formData.append('unsubscribedAt', new Date().toISOString());
    formData.append('_subject', `Unsubscribe Request: ${email}`);
    formData.append('_template', 'table');
    
    await handleSubmit(formData);
  };

  const reasons = [
    'Too many emails',
    'Content not relevant',
    'Changed email address',
    'No longer interested',
    'Receiving duplicate emails',
    'Other'
  ];

  if (state.succeeded) {
    return (
      <section className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              
              <h1 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
                Successfully Unsubscribed
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                You have been successfully unsubscribed from our newsletter. 
                We're sorry to see you go and appreciate the feedback you provided.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  What happens next?
                </h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2 text-left">
                  <li>• You will no longer receive our newsletter emails</li>
                  <li>• Your email has been removed from our mailing list</li>
                  <li>• You may still receive transactional emails if you're a customer</li>
                  <li>• You can resubscribe anytime if you change your mind</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="flex items-center justify-center gap-2 bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors"
                >
                  <ArrowLeft size={20} />
                  Back to Website
                </Link>
                
                <Link
                  to="/subscribe"
                  className="flex items-center justify-center gap-2 border-2 border-navy-900 dark:border-yellow-500 text-navy-900 dark:text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-navy-900 dark:hover:bg-yellow-500 hover:text-white dark:hover:text-navy-900 transition-all"
                >
                  <Mail size={20} />
                  Resubscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Unsubscribe from Newsletter</h1>
          <p className="text-xl text-red-100">
            We're sorry to see you go. Help us improve by telling us why.
          </p>
        </div>
      </div>

      {/* Unsubscribe Form */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                  Confirm Unsubscribe
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Before you go, would you mind sharing why you're unsubscribing?
                </p>
              </div>

              <form onSubmit={handleUnsubscribe} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Why are you unsubscribing? (Optional)
                  </label>
                  <div className="space-y-2">
                    {reasons.map((reasonOption) => (
                      <label key={reasonOption} className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="reason"
                          value={reasonOption}
                          checked={reason === reasonOption}
                          onChange={(e) => setReason(e.target.value)}
                          className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <span className="text-gray-700 dark:text-gray-300">{reasonOption}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Feedback (Optional)
                  </label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Help us improve our newsletter..."
                  />
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                        Before you unsubscribe...
                      </h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        Consider updating your email preferences instead. You can choose to receive only the content that interests you most.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={state.submitting || !email}
                    className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Processing...' : 'Confirm Unsubscribe'}
                  </button>
                  
                  <Link
                    to="/subscribe"
                    className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center"
                  >
                    Update Preferences
                  </Link>
                </div>

                {state.errors && state.errors.length > 0 && (
                  <div className="bg-red-100 dark:bg-red-900/30 border border-red-500/30 rounded-lg p-4 text-center">
                    <p className="text-red-800 dark:text-red-400 font-medium">
                      ❌ There was an error processing your request. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Options */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8">
              Still want to stay connected?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 dark:text-white mb-3">Follow Us</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Stay updated through our social media channels
                </p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                  <a href="#" className="text-red-600 hover:text-red-700">YouTube</a>
                  <a href="#" className="text-blue-400 hover:text-blue-500">Twitter</a>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 dark:text-white mb-3">RSS Feed</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Subscribe to our RSS feed for updates
                </p>
                <a href="/rss" className="text-orange-600 hover:text-orange-700 font-medium">
                  Subscribe to RSS
                </a>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 dark:text-white mb-3">Website</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Visit our website regularly for updates
                </p>
                <Link to="/news" className="text-navy-600 dark:text-yellow-400 hover:text-navy-700 dark:hover:text-yellow-300 font-medium">
                  View News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsubscribe;