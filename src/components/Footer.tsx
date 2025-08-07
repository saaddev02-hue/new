import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Youtube, 
  Twitter, 
  Send,
  ExternalLink,
  FileText,
  Users,
  Settings,
  MessageCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setNewsletterStatus('success');
      setEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }, 1000);
  };

  const quickLinks = [
    { name: 'About Us', href: '#home' },
    { name: 'Technology', href: '#home' },
    { name: 'Case Studies', href: '#news' },
    { name: 'Support', href: '#contact' },
    { name: 'Documentation', href: '#products' },
    { name: 'Training', href: '#services' },
  ];

  const services = [
    { name: 'Water Cut Meters', href: '#services' },
    { name: 'Multiphase Flow Meters', href: '#services' },
    { name: 'Downhole Solutions', href: '#services' },
    { name: 'Digital Twin Services', href: '#services' },
    { name: 'Calibration Services', href: '#services' },
    { name: 'Technical Support', href: '#contact' },
  ];

  const resources = [
    { name: 'Product Brochures', href: '#products' },
    { name: 'Technical Papers', href: '#news' },
    { name: 'Webinars', href: '#news' },
    { name: 'Industry Insights', href: '#news' },
    { name: 'White Papers', href: '#news' },
    { name: 'FAQs', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-900 dark:bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://saherflow.com/wp-content/uploads/2021/06/Artboard-1-copy100.svg"
                alt="Saher Flow Solutions"
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold">Saher Flow Solutions</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              Leading provider of real-time multiphase flow measurement solutions for the oil and gas industry. 
              Our revolutionary DMOR technology delivers 24/7 trusted measurements without calibration.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-yellow-500 flex-shrink-0" />
                <span className="text-gray-300">1234 Energy Boulevard, Houston, TX 77002</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-yellow-500 flex-shrink-0" />
                <a href="tel:+12345678900" className="text-gray-300 hover:text-white transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-yellow-500 flex-shrink-0" />
                <a href="mailto:contact@saherflow.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@saherflow.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://linkedin.com/company/saherflow" 
                className="p-3 bg-white/10 rounded-lg hover:bg-yellow-500 hover:text-navy-900 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://youtube.com/saherflow" 
                className="p-3 bg-white/10 rounded-lg hover:bg-yellow-500 hover:text-navy-900 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://twitter.com/saherflow" 
                className="p-3 bg-white/10 rounded-lg hover:bg-yellow-500 hover:text-navy-900 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-yellow-500 flex items-center gap-2">
              <Settings size={20} />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-yellow-500 flex items-center gap-2">
              <Settings size={20} />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Resources */}
          <div className="space-y-8">
            {/* Resources */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-yellow-500 flex items-center gap-2">
                <FileText size={20} />
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href}
                      className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 group"
                    >
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-navy-800/50 to-navy-700/50 dark:from-gray-700/50 dark:to-gray-600/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-gray-600/20">
              <h4 className="text-2xl font-bold text-yellow-500 mb-4 flex items-center gap-3">
                <MessageCircle size={20} />
                Stay Connected
              </h4>
              <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
                Get industry insights, product updates, and technical resources delivered to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-4 pr-12 bg-white/20 dark:bg-gray-800/50 border border-white/30 dark:border-gray-600/30 rounded-xl text-white dark:text-gray-200 placeholder-gray-300 dark:placeholder-gray-400 focus:bg-white/30 dark:focus:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500/50 transition-all duration-300"
                  />
                  <Mail size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
                
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy-900 py-4 px-6 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-yellow-300 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                >
                  {newsletterStatus === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-navy-900 border-t-transparent" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Subscribe
                    </>
                  )}
                </button>
                
                {newsletterStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-center">
                    <p className="text-green-400 font-medium">
                    ✓ Thank you for subscribing!
                    </p>
                  </div>                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2024 Saher Flow Solutions. All rights reserved.</p>
              <p className="text-sm mt-1">Innovating flow measurement technology for the energy industry</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded border border-white/30 flex items-center justify-center">
                  <span className="text-xs font-bold">ISO</span>
                </div>
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded border border-white/30 flex items-center justify-center">
                  <span className="text-xs font-bold">API</span>
                </div>
                <span>API Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded border border-white/30 flex items-center justify-center">
                  <span className="text-xs font-bold">CE</span>
                </div>
                <span>CE Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;