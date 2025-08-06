import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const News: React.FC = () => {
  const newsItems = [
    {
      title: 'New Partnership with Major Oil Producer',
      date: 'December 15, 2024',
      category: 'Partnership',
      image: 'https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Saher Flow Solutions announces strategic partnership to deploy multiphase flow metering across 50+ wells...',
    },
    {
      title: 'DMOR Technology Breakthrough',
      date: 'December 10, 2024',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Revolutionary advancement in PVT-independent measurement achieves 99.9% accuracy in field testing...',
    },
    {
      title: 'Industry Award Recognition',
      date: 'December 5, 2024',
      category: 'Awards',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Saher Flow Solutions receives Innovation Excellence Award at the International Flow Measurement Conference...',
    }
  ];

  const categories = ['All', 'Technology', 'Partnership', 'Awards', 'Company News'];
  const recentPosts = [
    'Q4 2024 Performance Report',
    'Expansion into European Markets',
    'New R&D Facility Opening',
    'Sustainability Initiative Launch'
  ];

  return (
    <section id="news" className="py-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay informed about our latest developments and industry insights
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {newsItems.map((item, index) => (
                <article 
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag size={16} className="text-yellow-500" />
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-navy-700 transition-colors duration-200">
                      {item.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.excerpt}
                    </p>
                    
                    <button className="flex items-center gap-2 text-navy-900 font-semibold hover:text-yellow-500 transition-colors duration-200">
                      Read More <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-navy-900 transition-colors duration-200">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <li key={index}>
                      <button className="text-left text-gray-600 hover:text-navy-900 transition-colors duration-200">
                        {post}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-gray-300 mb-6">
                  Get the latest news and insights delivered to your inbox
                </p>
                <div className="space-y-4">
                  <input 
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-900"
                  />
                  <button className="w-full bg-yellow-500 text-navy-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;