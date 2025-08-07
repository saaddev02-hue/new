import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Bell } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const { activeSection, setActiveSection } = useNavigation();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'news', label: 'News' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Latest News Notification Bar */}
      {showNotification && (
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy-900 py-2 px-6 relative">
          <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
            <Bell size={16} className="animate-pulse" />
            <span className="animate-pulse">Latest News:</span>
            <span>Saher's multiphase technology pre-qualified by Saudi Aramco</span>
            <button 
              onClick={() => setShowNotification(false)}
              className="absolute right-4 hover:bg-yellow-600 rounded-full p-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        showNotification ? 'top-10' : 'top-0'
      } ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://saherflow.com/wp-content/uploads/2021/06/Artboard-1-copy100.svg"
                alt="Saher Flow Solutions"
                className="h-12 w-auto filter dark:brightness-0 dark:invert"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-navy-900 dark:text-yellow-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="hidden md:inline-flex bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-4 py-2 rounded-lg font-medium hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors duration-200"
              >
                Request Demo
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X size={24} className="dark:text-white" /> : <Menu size={24} className="dark:text-white" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-navy-900 dark:text-yellow-400 bg-gray-50 dark:bg-gray-800'
                        : 'text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-3 bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 rounded-lg font-medium mt-4 mx-4"
                >
                  Request Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;