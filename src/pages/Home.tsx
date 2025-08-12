import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Gauge, 
  Droplets, 
  Settings, 
  Award,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Globe,
  Star,
  Play,
  X,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Tag
} from 'lucide-react';
import { getRecentNews, NewsArticle } from '../utils/newsLoader';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [recentNews, setRecentNews] = useState<NewsArticle[]>([]);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);

  // Load recent news
  useEffect(() => {
    const loadNews = async () => {
      try {
        const news = await getRecentNews(6);
        setRecentNews(news);
      } catch (error) {
        console.error('Error loading recent news:', error);
      }
    };
    loadNews();
  }, []);

  const heroSlides = [
    {
      title: "Revolutionary DMOR Technology",
      subtitle: "Real-time multiphase flow measurement without calibration",
      description: "Experience 24/7 trusted measurements with our patented Dual Microwave Resonator technology",
      image: "https://res.cloudinary.com/drnak5yb2/image/upload/v1754555754/High-Res-render-min_oqcyvr.png",
      cta: "Discover DMOR",
      features: ["No Calibration Required", "Real-time Data", "99.8% Uptime"]
    },
    {
      title: "Saudi Aramco Pre-Qualified",
      subtitle: "First GCC company to achieve this milestone",
      description: "Rigorous testing at DNV facilities validates our world-class measurement accuracy",
      image: "https://res.cloudinary.com/drnak5yb2/image/upload/v1754556084/combined-enhanced_image-1024x591_pkpnc5.png",
      cta: "Read Success Story",
      features: ["DNV Validated", "Industry Leading", "Proven Performance"]
    },
    {
      title: "Complete Flow Solutions",
      subtitle: "From wellhead to processing facilities",
      description: "Comprehensive portfolio of water-cut meters, multiphase meters, and skid-mounted systems",
      image: "https://res.cloudinary.com/drnak5yb2/image/upload/v1754555852/MPFM-with-SKID-1536x1187_sjrvdp.png",
      cta: "View Products",
      features: ["Full Range", "Portable Options", "Custom Solutions"]
    }
  ];

  const salientFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Non-Radioactive Technology",
      description: "Safe, environmentally friendly measurement without radioactive sources",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "Instant data processing and transmission for immediate decision making",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Unmatched Accuracy",
      description: "±2% water cut accuracy across full 0-100% range",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Zero Calibration",
      description: "Patented DMOR technology eliminates need for field calibration",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Deployment",
      description: "Proven performance across diverse operating conditions worldwide",
      color: "from-teal-500 to-green-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Validated",
      description: "Pre-qualified by major oil companies and validated by third-party testing",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const products = [
    {
      name: '3 Phase Wellhead Water-cut Meter',
      model: 'SF-321',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555754/High-Res-render-min_oqcyvr.png',
      description: 'Non-intrusive water-cut measurement for production optimization',
      features: ['Full range measurement', 'Orientation insensitive', 'Real-time insights'],
      icon: <Droplets className="w-6 h-6" />
    },
    {
      name: '3-Phase Multi Phase Flow Meter',
      model: 'SF-331',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555854/MPFM-SFS-3G-X-1536x1187_qhmxbs.png',
      description: 'Simultaneous measurement of oil, gas, and water flow rates',
      features: ['Three-phase measurement', 'Ultra-compact design', 'Minimal pressure drop'],
      icon: <Gauge className="w-6 h-6" />
    },
    {
      name: 'Skid Mounted MPFM',
      model: 'SK-100',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555852/MPFM-with-SKID-1536x1187_sjrvdp.png',
      description: 'Portable, plug-and-play multiphase measurement solution',
      features: ['Portable design', 'Cloud connectivity', 'Safe sampling system'],
      icon: <Settings className="w-6 h-6" />
    }
  ];

  const problems = [
    {
      title: "Inaccurate Measurements",
      description: "Traditional methods provide unreliable data leading to poor production decisions",
      icon: "❌",
      impact: "Lost Revenue"
    },
    {
      title: "Frequent Calibration",
      description: "Constant maintenance and calibration requirements increase operational costs",
      icon: "🔧",
      impact: "High OPEX"
    },
    {
      title: "Safety Concerns",
      description: "Radioactive sources pose environmental and safety risks",
      icon: "☢️",
      impact: "Compliance Issues"
    },
    {
      title: "Limited Range",
      description: "Existing technologies struggle with full-range water cut measurement",
      icon: "📊",
      impact: "Operational Limits"
    }
  ];

  const solutions = [
    {
      title: "Precise DMOR Technology",
      description: "±2% accuracy across 0-100% water cut range with real-time data",
      icon: "✅",
      benefit: "Optimized Production"
    },
    {
      title: "Zero Calibration Required",
      description: "Patented technology eliminates field calibration needs permanently",
      icon: "🎯",
      benefit: "Reduced OPEX"
    },
    {
      title: "Non-Radioactive Design",
      description: "Completely safe microwave-based measurement technology",
      icon: "🛡️",
      benefit: "Full Compliance"
    },
    {
      title: "Full-Range Capability",
      description: "Accurate measurement from 0-100% water cut and 0-95% GVF",
      icon: "📈",
      benefit: "Complete Coverage"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev + 1) % Math.ceil(recentNews.length / 3));
  };

  const prevNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev - 1 + Math.ceil(recentNews.length / 3)) % Math.ceil(recentNews.length / 3));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/70 dark:from-gray-900/90 dark:to-gray-800/70 z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          ))}
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <h2 className="text-2xl lg:text-3xl text-yellow-400 font-semibold mb-6">
                  {heroSlides[currentSlide].subtitle}
                </h2>
                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
                  {heroSlides[currentSlide].description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  {heroSlides[currentSlide].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <CheckCircle size={16} className="text-yellow-400" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/products"
                    className="inline-flex items-center gap-3 bg-yellow-500 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {heroSlides[currentSlide].cta}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setShowVideo(true)}
                    className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300"
                  >
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-yellow-500 w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Salient Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Star size={16} />
              Key Advantages
            </div>
            <h2 className="text-5xl font-bold text-navy-900 dark:text-white mb-6">
              Why Choose Saher Flow Solutions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Revolutionary technology that transforms how the energy industry measures multiphase flow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salientFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-navy-900 group-hover:to-yellow-600 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={20} className="text-yellow-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy-900 dark:text-white mb-6">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive range of flow measurement instruments designed for the most demanding applications
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="aspect-square bg-white dark:bg-gray-600 p-8 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    onError={handleImageError}
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-yellow-500 rounded-lg text-navy-900">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 dark:text-white">{product.name}</h3>
                      <p className="text-yellow-600 dark:text-yellow-400 font-semibold">{product.model}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/products"
                    className="inline-flex items-center gap-2 text-navy-600 dark:text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-200 group-hover:gap-3"
                  >
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/products"
              className="inline-flex items-center gap-3 bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-800 dark:hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Problems vs Solutions Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy-900 dark:text-white mb-6">
              Transforming Industry Challenges
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how our innovative DMOR technology addresses critical measurement challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Problems */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-red-600 mb-4">Industry Challenges</h3>
                <p className="text-gray-600 dark:text-gray-300">Traditional measurement limitations</p>
              </div>
              
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border-l-4 border-red-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{problem.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-navy-900 dark:text-white mb-2">{problem.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{problem.description}</p>
                        <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          {problem.impact}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-green-600 mb-4">Saher Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300">Revolutionary DMOR technology advantages</p>
              </div>
              
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border-l-4 border-green-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{solution.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-navy-900 dark:text-white mb-2">{solution.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{solution.description}</p>
                        <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          {solution.benefit}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Transform Your Operations
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      {recentNews.length > 0 && (
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Calendar size={16} />
                Latest Updates
              </div>
              <h2 className="text-5xl font-bold text-navy-900 dark:text-white mb-6">
                Recent News & Achievements
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Stay updated with our latest developments, partnerships, and industry recognition
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentNewsSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(recentNews.length / 3) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-3 gap-8 px-4">
                        {recentNews.slice(slideIndex * 3, slideIndex * 3 + 3).map((article, index) => (
                          <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
                          >
                            <div className="aspect-video overflow-hidden">
                              <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={handleImageError}
                              />
                            </div>
                            
                            <div className="p-6">
                              <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full text-sm">
                                  <Tag size={12} />
                                  {article.category}
                                </div>
                                <span className="text-gray-500 dark:text-gray-400 text-sm">
                                  {formatDate(article.date)}
                                </span>
                              </div>
                              
                              <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-3 line-clamp-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                                {article.title}
                              </h3>
                              
                              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                {article.excerpt}
                              </p>
                              
                              <a
                                href="/news"
                                className="inline-flex items-center gap-2 text-navy-600 dark:text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-200 text-sm group-hover:gap-3"
                              >
                                Read More <ArrowRight size={14} />
                              </a>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              {Math.ceil(recentNews.length / 3) > 1 && (
                <>
                  <button
                    onClick={prevNewsSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                  >
                    <ChevronLeft size={24} className="text-navy-900 dark:text-white" />
                  </button>
                  <button
                    onClick={nextNewsSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                  >
                    <ChevronRight size={24} className="text-navy-900 dark:text-white" />
                  </button>
                </>
              )}
            </div>

            <div className="text-center mt-12">
              <a
                href="/news"
                className="inline-flex items-center gap-3 bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-800 dark:hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All News
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-900 dark:to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold text-yellow-400">10+</div>
              <div className="text-xl font-semibold">Years Experience</div>
              <div className="text-gray-300">Pioneering flow measurement technology</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold text-yellow-400">99.8%</div>
              <div className="text-xl font-semibold">Uptime Achieved</div>
              <div className="text-gray-300">Reliable 24/7 operation</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold text-yellow-400">±2%</div>
              <div className="text-xl font-semibold">Measurement Accuracy</div>
              <div className="text-gray-300">Industry-leading precision</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold text-yellow-400">3+</div>
              <div className="text-xl font-semibold">Countries Served</div>
              <div className="text-gray-300">Global deployment success</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-500 to-yellow-400 text-navy-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to Transform Your Production?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join industry leaders who trust Saher Flow Solutions for their critical flow measurement needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-navy-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/products"
                className="inline-flex items-center gap-3 border-2 border-navy-900 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-900 hover:text-white transition-all duration-300"
              >
                View Products
                <Gauge className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Saher Flow Solutions Demo"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;