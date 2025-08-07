import React from 'react';
import { Calendar, ArrowRight, Tag, Award, Users, TrendingUp, Building } from 'lucide-react';

const News: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const newsItems = [
    {
      title: 'Saher\'s multiphase technology pre-qualified by Saudi Aramco',
      date: 'January 15, 2025',
      category: 'Customer Validation',
      image: 'https://saherflow.com/wp-content/uploads/2025/01/combined-enhanced_image-1024x591.png',
      excerpt: 'Saher is a technology company specializing in three-phase water-cut and multiphase flow metering solutions. Our innovative technology is being validated by a growing number of energy companies worldwide, underscoring its reliability and effectiveness. Recently, we achieved a historic milestone: obtaining pre-qualification approval from Saudi Aramco, the world\'s largest oil and gas company.',
      icon: <Award className="w-6 h-6" />,
      fullContent: 'Saher is a technology company specializing in three-phase water-cut and multiphase flow metering solutions. Our innovative technology is being validated by a growing number of energy companies worldwide, underscoring its reliability and effectiveness. Notably, we are the first company in the GCC to have developed multiphase metering technology entirely within the Kingdom of Saudi Arabia. This distinction has made Saudi Aramco a particularly valued partner for Saher.\n\nRecently, we achieved a historic milestone: obtaining pre-qualification approval from Saudi Aramco, the world\'s largest oil and gas company. This approval followed rigorous blind flow loop trials conducted at DNV\'s state-of-the-art, third-party test facility in the Netherlands.\n\nDuring these trials, conducted in collaboration with Saudi Aramco and DNV, Saher\'s multiphase meter was tested with various combinations of oil, water, and gas flow rates. Adhering to Saudi Aramco\'s stringent engineering procedure, the meter\'s performance was compared to highly accurate reference measurements from DNV\'s flow loop. The tests used field-representative fluids, including natural gas, synthetic oil (D-120), and brine, at a controlled pressure of 500 psi. Over five days of testing, detailed data analytics were applied, considering reference equipment measurement uncertainties. The results demonstrated that Saher\'s multiphase meter performed within specifications in both oil- and water-continuous flow regions.\n\nFor a detailed case study or to see the technology in action, contact our technical team at contact@saherflow.com today.'
    },
    {
      title: 'Successful field trial in major NOC in the GCC region',
      date: 'December 10, 2024',
      category: 'Customer Validation',
      image: 'https://saherflow.com/wp-content/uploads/2024/09/1725954027560-transformed-1024x353.jpg',
      excerpt: 'We are thrilled to announce that Saher Flow Solutions has successfully completed a field trial in collaboration with one of the major National Oil Companies (NOCs) in the GCC region. Our innovative compact, skid-mounted, non-radioactive Multiphase Flow Meter (MPFM) exceeded expectations...',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Welcomes Senior Leadership from Saudi Aramco!',
      date: 'December 5, 2024',
      category: 'Customer Validation',
      image: 'https://saherflow.com/wp-content/uploads/2024/08/1724671748289.jpg',
      excerpt: 'We are proud to have recently hosted senior management from Saudi Aramco, including the esteemed Vice President of Aramco Digital. This visit marks a significant milestone in our journey towards revolutionizing flow measurement solutions in the GCC...',
      icon: <Building className="w-6 h-6" />
    }
  ];

  const categories = ['All', 'Honorary Mentions', 'Customer Validation', 'Technology', 'Company News'];
  const recentPosts = [
    'Q4 2024 Performance Report',
    'Expansion into European Markets',
    'New R&D Facility Opening',
    'Sustainability Initiative Launch'
  ];

  return (
    <section id="news" className="py-24 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Latest News & Updates</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A lot is happening in our company's dynamic environment. Stay updated about latest news by subscribing to our mailing list.
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
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] group"
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
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Calendar size={16} />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4 group-hover:text-navy-700 dark:group-hover:text-yellow-400 transition-colors duration-200">
                      {item.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {item.excerpt}
                    </p>
                    
                    <button 
                      onClick={() => setSelectedArticle(item)}
                      className="flex items-center gap-2 text-navy-900 dark:text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-200"
                    >
                      Read More <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left py-2 px-4 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-navy-900 dark:hover:text-white transition-colors duration-200">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <li key={index}>
                      <button className="text-left text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white transition-colors duration-200">
                        {post}
                      </button>
                    </li>
                  ))}
                </ul>
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