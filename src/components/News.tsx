import React, { useState } from 'react';
import { Calendar, ArrowRight, Tag, Award, Users, TrendingUp, Building, X, ChevronLeft, ChevronRight } from 'lucide-react';

const News: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);

  const newsItems = [
    {
      title: 'Saher\'s multiphase technology pre-qualified by Saudi Aramco',
      date: 'January 15, 2025',
      category: 'Customer Validation',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754556084/combined-enhanced_image-1024x591_pkpnc5.png',
      fallbackImage: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Saher is a technology company specializing in three-phase water-cut and multiphase flow metering solutions. Our innovative technology is being validated by a growing number of energy companies worldwide...',
      icon: <Award className="w-6 h-6" />,
      fullContent: 'Saher is a technology company specializing in three-phase water-cut and multiphase flow metering solutions. Our innovative technology is being validated by a growing number of energy companies worldwide, underscoring its reliability and effectiveness. Notably, we are the first company in the GCC to have developed multiphase metering technology entirely within the Kingdom of Saudi Arabia. This distinction has made Saudi Aramco a particularly valued partner for Saher.\n\nRecently, we achieved a historic milestone: obtaining pre-qualification approval from Saudi Aramco, the world\'s largest oil and gas company. This approval followed rigorous blind flow loop trials conducted at DNV\'s state-of-the-art, third-party test facility in the Netherlands.\n\nDuring these trials, conducted in collaboration with Saudi Aramco and DNV, Saher\'s multiphase meter was tested with various combinations of oil, water, and gas flow rates. Adhering to Saudi Aramco\'s stringent engineering procedure, the meter\'s performance was compared to highly accurate reference measurements from DNV\'s flow loop. The tests used field-representative fluids, including natural gas, synthetic oil (D-120), and brine, at a controlled pressure of 500 psi. Over five days of testing, detailed data analytics were applied, considering reference equipment measurement uncertainties. The results demonstrated that Saher\'s multiphase meter performed within specifications in both oil- and water-continuous flow regions.\n\nFor a detailed case study or to see the technology in action, contact our technical team at contact@saherflow.com today.'
    },
    {
      title: 'Successful field trial in major NOC in the GCC region',
      date: 'December 10, 2024',
      category: 'Customer Validation',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555213/1725954027560-transformed-scaled_n7gle2.jpg',
      fallbackImage: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'We are thrilled to announce that Saher Flow Solutions has successfully completed a field trial in collaboration with one of the major National Oil Companies (NOCs) in the GCC region...',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Welcomes Senior Leadership from Saudi Aramco!',
      date: 'December 5, 2024',
      category: 'Customer Validation',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555212/1724671748289_orlzkb.jpg',
      fallbackImage: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'We are proud to have recently hosted senior management from Saudi Aramco, including the esteemed Vice President of Aramco Digital...',
      icon: <Building className="w-6 h-6" />
    },
    {
      title: 'New Research Facility Opens in Thuwal',
      date: 'November 20, 2024',
      category: 'Company News',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      fallbackImage: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Saher Flow Solutions expands its R&D capabilities with a state-of-the-art research facility in Thuwal, Saudi Arabia...',
      icon: <Building className="w-6 h-6" />
    },
    {
      title: 'Partnership with Local Universities',
      date: 'October 15, 2024',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800',
      fallbackImage: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Strengthening ties with Saudi universities to advance flow measurement research and development...',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const categories = ['All', 'Honorary Mentions', 'Customer Validation', 'Technology', 'Company News'];
  const recentPosts = [
    'Q4 2024 Performance Report',
    'Expansion into European Markets', 
    'New R&D Facility Opening',
    'Sustainability Initiative Launch'
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackSrc) {
      target.src = fallbackSrc;
    }
  };

  const nextNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev + 1) % Math.ceil(newsItems.length / 2));
  };

  const prevNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev - 1 + Math.ceil(newsItems.length / 2)) % Math.ceil(newsItems.length / 2));
  };

  const goToNewsSlide = (slideIndex: number) => {
    setCurrentNewsSlide(slideIndex);
  };

  return (
    <section id="news" className="py-24 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Latest News & Updates</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with our latest developments and industry insights from Thuwal, Saudi Arabia
          </p>
        </div>
      </div>

      {/* Modern Compact News Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Recent Updates</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Latest news and developments from our team
            </p>
          </div>
          
          {/* News Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentNewsSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(newsItems.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 px-4">
                      {newsItems.slice(slideIndex * 2, slideIndex * 2 + 2).map((item, index) => (
                        <div
                          key={index}
                          className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02]"
                        >
                          <div className="aspect-video overflow-hidden">
                            <img 
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => handleImageError(e, item.fallbackImage)}
                            />
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-center gap-4 mb-3">
                              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                <Calendar size={14} />
                                <span className="text-sm">{item.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-yellow-600 dark:text-yellow-400">
                                  {item.icon}
                                </div>
                                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
                                  {item.category}
                                </span>
                              </div>
                            </div>
                            
                            <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-3 group-hover:text-navy-700 dark:group-hover:text-yellow-400 transition-colors duration-200 line-clamp-2">
                              {item.title}
                            </h3>
                            
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                              {item.excerpt}
                            </p>
                            
                            <button 
                              onClick={() => setSelectedArticle(item)}
                              className="flex items-center gap-2 text-navy-900 dark:text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-200 text-sm"
                            >
                              Read More <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevNewsSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronLeft size={20} className="text-navy-900 dark:text-white" />
            </button>
            <button 
              onClick={nextNewsSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronRight size={20} className="text-navy-900 dark:text-white" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: Math.ceil(newsItems.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToNewsSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentNewsSlide === index 
                      ? 'bg-yellow-500 w-8' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar and Newsletter Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Categories */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">Categories</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className="text-left py-3 px-4 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-navy-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <button 
                    key={index}
                    className="block text-left text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white transition-colors duration-200 py-2"
                  >
                    {post}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest news and insights delivered to your inbox
              </p>
              <div className="space-y-4">
                <input 
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700"
                />
                <button className="w-full bg-yellow-500 text-navy-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-t-2xl"
                onError={(e) => handleImageError(e, selectedArticle.fallbackImage)}
              />
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  {selectedArticle.icon}
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedArticle.category}
                  </span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-navy-900 dark:text-white mb-6">
                {selectedArticle.title}
              </h1>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {selectedArticle.fullContent ? (
                  selectedArticle.fullContent.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedArticle.excerpt}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default News;