import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle, Users, Award, TrendingUp, Globe, Zap, Shield, Clock, Star, Building2, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import Team from './Team';
import { getRecentNews, NewsArticle } from '../utils/newsLoader';

const Home: React.FC = () => {
  const [recentNews, setRecentNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const news = await getRecentNews(3);
        setRecentNews(news);
      } catch (error) {
        console.error('Error loading recent news:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Enhanced Hero Section with Mobile Optimization */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Mobile Optimization */}
        <div className="absolute inset-0">
          <picture>
            {/* Mobile optimized background */}
            <source 
              media="(max-width: 768px)" 
              srcSet="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800" 
            />
            {/* Desktop background */}
            <img
              src="https://res.cloudinary.com/drnak5yb2/image/upload/v1754555213/1725954027560-transformed-scaled_n7gle2.jpg"
              alt="Industrial Background"
              className="w-full h-full object-cover"
            />
          </picture>
          
          {/* Enhanced Mobile Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-800/90 to-navy-700/85 md:from-navy-900/80 md:via-navy-800/70 md:to-transparent"></div>
          
          {/* Mobile Pattern Overlay */}
          <div className="absolute inset-0 md:hidden" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 213, 0, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255, 213, 0, 0.08) 0%, transparent 50%)`
          }}></div>
        </div>

        {/* Content Container with Mobile Optimization */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content - Enhanced for Mobile */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-6 md:space-y-8"
            >
              {/* Mobile-First Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold">
                <Award size={16} />
                <span className="hidden sm:inline">Saudi Aramco Pre-Qualified Technology</span>
                <span className="sm:hidden">Aramco Pre-Qualified</span>
              </div>

              {/* Mobile-Optimized Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="block">Revolutionary</span>
                <span className="block text-yellow-400">Flow Measurement</span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-300 mt-2 md:mt-4">
                  Made in Saudi Arabia
                </span>
              </h1>

              {/* Mobile-Optimized Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <span className="hidden md:inline">
                  Pioneering DMOR™ technology delivers real-time multiphase flow measurements without calibration. 
                  Trusted by energy leaders worldwide for 24/7 production optimization.
                </span>
                <span className="md:hidden">
                  Revolutionary DMOR™ technology for real-time multiphase flow measurement. 
                  Trusted by global energy leaders.
                </span>
              </p>

              {/* Mobile-Optimized CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/products"
                  className="group bg-yellow-500 text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Explore Products
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="group border-2 border-white/30 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play size={20} />
                  Schedule Demo
                </a>
              </div>

              {/* Mobile-Optimized Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 pt-6 md:pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">99.8%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">±2%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="text-center lg:text-left col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-400">Real-time</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Product Showcase (Hidden on Mobile) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <img
                    src="https://res.cloudinary.com/drnak5yb2/image/upload/v1754555754/High-Res-render-min_oqcyvr.png"
                    alt="Saher Flow Meter"
                    className="w-full h-auto object-contain"
                    onError={handleImageError}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Mobile Optimized */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Handshake size={16} />
              Trusted Partnerships
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
              Strategic Industry Collaborations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Building the future of energy measurement through strategic partnerships with industry leaders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Saudi Aramco Partnership */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-yellow-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-2xl">
                    <Building2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 dark:text-white">Saudi Aramco</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600 dark:text-green-400 font-semibold">Ongoing Project</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    <strong className="text-navy-900 dark:text-white">Pre-Qualified Technology Partner</strong> - 
                    Our multiphase flow measurement technology has been rigorously tested and pre-qualified 
                    by the world's largest oil company.
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                    <h4 className="font-semibold text-navy-900 dark:text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">Successful blind flow loop trials at DNV facility</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">First GCC company to achieve pre-qualification</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">Ongoing field deployment projects</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Partnership since 2023
                  </div>
                  <a 
                    href="/news#aramco-prequalified" 
                    className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* US Company Partnership */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-yellow-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                    <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 dark:text-white">Major US Energy Company</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">Active Partnership</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    <strong className="text-navy-900 dark:text-white">Strategic Technology Alliance</strong> - 
                    Collaborating with a leading US energy corporation to deploy our advanced 
                    multiphase flow measurement solutions across their operations.
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                    <h4 className="font-semibold text-navy-900 dark:text-white mb-3">Partnership Highlights:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">Joint technology development initiatives</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">Multi-site deployment program</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">Expanding to international markets</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Active since 2024
                  </div>
                  <a 
                    href="/contact" 
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Partnership Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 text-white"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">2+</div>
                <div className="text-gray-300 text-sm">Strategic Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
                <div className="text-gray-300 text-sm">Active Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
                <div className="text-gray-300 text-sm">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Star size={16} />
              Product Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
              Revolutionary Flow Measurement Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Precision-engineered instruments designed for the most demanding applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: '3 Phase Wellhead Water-cut Meter',
                model: 'SF-321',
                image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555754/High-Res-render-min_oqcyvr.png',
                description: 'Non-radioactive, non-intrusive measurement for full range water-cut monitoring.',
                features: ['Real-time insights', 'Orientation insensitive', 'DMOR™ technology'],
                icon: <Droplets className="w-8 h-8" />
              },
              {
                name: '3-Phase Multi Phase Flow Meter',
                model: 'SF-331',
                image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555854/MPFM-SFS-3G-X-1536x1187_qhmxbs.png',
                description: 'Simultaneous three-phase measurement with ultra-compact integration.',
                features: ['Minimal pressure drop', 'Full range accuracy', 'Dual microwave resonators'],
                icon: <Gauge className="w-8 h-8" />
              },
              {
                name: 'Skid Mounted MPFM',
                model: 'SK-100',
                image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555852/MPFM-with-SKID-1536x1187_sjrvdp.png',
                description: 'Portable and compact skid with plug-and-play setup capabilities.',
                features: ['Cloud data upload', 'Local HMI integrated', 'Dramatically reduces OPEX'],
                icon: <Settings className="w-8 h-8" />
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-yellow-500/30"
              >
                <div className="aspect-video bg-gradient-to-br from-navy-50 to-navy-100 dark:from-gray-700 dark:to-gray-600 p-6 flex items-center justify-center">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    onError={handleImageError}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-yellow-500 rounded-lg text-navy-900">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 dark:text-white">{product.name}</h3>
                      <p className="text-yellow-600 dark:text-yellow-400 font-semibold">{product.model}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/products"
                    className="w-full bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 py-3 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center gap-2 group-hover:gap-3"
                  >
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Saher Flow Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of flow measurement with innovative technology and unmatched expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap size={48} />,
                title: 'Revolutionary Technology',
                description: 'Patented DMOR™ technology eliminates the need for calibration and delivers unparalleled accuracy.'
              },
              {
                icon: <Shield size={48} />,
                title: 'Non-Radioactive Safety',
                description: 'Safe, environmentally friendly solutions without radioactive sources or hazardous materials.'
              },
              {
                icon: <Clock size={48} />,
                title: '24/7 Real-Time Data',
                description: 'Continuous monitoring and instant insights for optimal production decision-making.'
              },
              {
                icon: <Award size={48} />,
                title: 'Industry Validated',
                description: 'Pre-qualified by Saudi Aramco and trusted by energy leaders worldwide.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="p-4 bg-yellow-500/20 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-yellow-500/30 transition-colors duration-300">
                  <div className="text-yellow-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <TrendingUp size={16} />
              Latest Updates
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">Recent News & Achievements</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest breakthroughs, partnerships, and industry recognition
            </p>
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-700 rounded-2xl p-6 animate-pulse">
                  <div className="aspect-video bg-gray-300 dark:bg-gray-600 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded mb-4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {recentNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <a
                      href="/news"
                      className="text-navy-600 dark:text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-200 text-sm flex items-center gap-2 group-hover:gap-3"
                    >
                      Read More <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/news"
              className="inline-flex items-center gap-3 bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-800 dark:hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All News
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-900 dark:to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Production?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join industry leaders who trust Saher Flow Solutions for their critical flow measurement needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRight size={20} />
              </a>
              <a
                href="/products"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users size={20} />
                Explore Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;