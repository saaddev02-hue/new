import React from 'react';
import { CheckCircle, Mail, Bell, Users, TrendingUp, Shield, Clock } from 'lucide-react';
import NewsletterSubscription from '../components/NewsletterSubscription';
import EmailJSSetupGuide from '../components/EmailJSSetupGuide';

const Subscribe: React.FC = () => {
  const benefits = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'First to Know',
      description: 'Get instant notifications when we publish new articles, product updates, and industry insights.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Industry Insights',
      description: 'Receive exclusive analysis and trends in multiphase flow measurement and oil & gas technology.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Content',
      description: 'Access technical papers, case studies, and expert opinions from our engineering team.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Monthly Digest',
      description: 'Get a curated summary of the month\'s most important updates delivered to your inbox.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Privacy Protected',
      description: 'Your email is secure with us. No spam, no sharing with third parties, unsubscribe anytime.'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Personalized Content',
      description: 'Choose your interests and receive content tailored to your professional needs.'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      title: 'Senior Production Engineer, Saudi Aramco',
      content: 'The technical insights from Saher Flow Solutions have been invaluable for our operations. Their newsletter keeps us updated on the latest measurement technologies.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Dr. Sarah Johnson',
      title: 'Flow Assurance Manager, Shell',
      content: 'Excellent technical content and real-world case studies. The monthly digest is a must-read for anyone in flow measurement.',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Mohammed Hassan',
      title: 'Instrumentation Specialist, ADNOC',
      content: 'Saher\'s newsletter provides cutting-edge insights into multiphase flow technology. The content is always relevant and actionable.',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-yellow-500 rounded-full">
                <Mail className="w-8 h-8 text-navy-900" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold">
                Subscribe to Our Newsletter
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
              Join 500+ industry professionals who trust Saher Flow Solutions for the latest insights in multiphase flow measurement technology
            </p>
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-gray-300">Active Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Monthly</div>
                <div className="text-gray-300">Newsletter Issues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">0%</div>
                <div className="text-gray-300">Spam Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Form */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <EmailJSSetupGuide />
          <div className="max-w-2xl mx-auto">
            <NewsletterSubscription variant="default" />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Why Subscribe?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get exclusive access to industry insights, technical expertise, and the latest developments in flow measurement technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-yellow-500 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What You'll Receive */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">What You'll Receive</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Carefully curated content delivered to your inbox
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">Weekly Updates</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Latest product announcements and updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">New technical papers and case studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Industry news and market insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Partnership announcements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">Monthly Digest</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Comprehensive technology roundup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Expert analysis and predictions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Upcoming events and webinars</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Exclusive subscriber-only content</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">What Our Subscribers Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Trusted by industry professionals worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Stay Informed?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of industry professionals and never miss an important update
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterSubscription variant="compact" className="bg-white/10 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;