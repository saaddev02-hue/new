import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

import { Play, ArrowRight, CheckCircle, AlertTriangle, Zap, Shield, Gauge, Wifi, DollarSign, Activity, Star, Award, TrendingUp, Globe, ChevronLeft, ChevronRight, Building, Users, Briefcase, FileText, Download, Eye, Calendar, AtomIcon as NonRadioactiveIcon, X } from 'lucide-react';

// Import news loader
import { getRecentNews, NewsArticle } from '../utils/newsLoader';

const Home: React.FC = () => {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [currentCareerSlide, setCurrentCareerSlide] = useState(0);
  const [showPDFViewer, setShowPDFViewer] = useState<string | null>(null);
  const [featuredNews, setFeaturedNews] = useState<NewsArticle[]>([]);

  // Load recent news on component mount
  useEffect(() => {
    const loadNews = async () => {
      try {
        const recentNews = await getRecentNews(4);
        setFeaturedNews(recentNews);
      } catch (error) {
        console.error('Error loading recent news:', error);
        // Fallback to empty array if loading fails
        setFeaturedNews([]);
      }
    };

    loadNews();
  }, []);

  const challenges = [
    'Complex oil-water separation processes',
    'High calibration and maintenance costs', 
    'Critical data gaps in production monitoring',
    'Unreliable traditional measurement methods'
  ];

  const solutions = [
    'Fully PVT-independent DMOR technology',
    '24/7 trusted measurements and monitoring',
    'Zero calibration requirements',
    'Real-time digital twin modeling'
  ];

  const salientFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Compact',
      description: 'Power of advanced multiphase sensing in a compact package.',
      color: 'bg-blue-500',
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Remote Monitoring',
      description: 'No need to visit well site in remote location or to access data center to view well performance. Our sensors are equipped with secure cloud connectivity and data can be accessed from anywhere in the world.',
      color: 'bg-green-500',
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Min. Calibration Requirements',
      description: 'Multiphase fraction sensing (WC & GVF) does not require PVT data & our advanced algorithms minimize the requirement of frequent recalibration.',
      color: 'bg-purple-500',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Cost Effective',
      description: 'Get superior performance at a competitive price compared to our competitors.',
      color: 'bg-orange-500',
    },
    {
      icon: <NonRadioactiveIcon className="w-8 h-8" />,
      title: 'Non-Gamma',
      description: 'Gamma rays were the solutions of the past. Our solution does not use any radioactive source such as gamma rays and yet gives accurate measurements.',
      color: 'bg-red-500',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Non-intrusive (Full bore design)',
      description: 'Microwave sensor is completely isolated from process fluid and does not come in physical contact with it. It eliminates the possibility of sensor fouling and wear effects ensuring longevity of the device.',
      color: 'bg-indigo-500',
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: 'Saudi Aramco Pre-qualified',
      description: 'First GCC company to achieve this milestone',
      color: 'from-yellow-500 to-orange-500',
      link: '/news#aramco-prequalified'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Global Deployments',
      description: 'Operating in 15+ countries worldwide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: '99.9% Uptime',
      description: 'Industry-leading reliability record',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Star className="w-8 h-8 text-purple-500" />,
      title: 'R&D Excellence',
      description: 'Patent-pending DMOR technology',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Sample team members for home page preview
  const featuredTeamMembers = [
    {
      name: 'Dr. M. Akram Karimi',
      role: 'CTO/General Manager',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555205/Dr.Akram__wtiwxi.png',
      description: 'Leading the technical strategy and operations from our Thuwal headquarters.',
      expertise: ['Strategic Leadership', 'Technical Innovation', 'Operations Management']
    },
    {
      name: 'Dr. Atif Shamim',
      role: 'Technical Director',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/ATIF-SHAMIM-2020_v6cyab.png',
      description: 'Distinguished Professor at KAUST and pioneer of DMOR technology.',
      expertise: ['DMOR Technology', 'RF Engineering', 'Research & Development']
    },
    {
      name: 'Dr. Shehab Ahmed',
      role: 'Business Advisor',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Dr.-Shehab_aq2wvj.jpg',
      description: 'Strategic business advisor with deep industry expertise in GCC energy markets.',
      expertise: ['Business Strategy', 'Market Development', 'Client Relations']
    },
    {
      name: 'Dr. Zubair Akhtar',
      role: 'Technical Consultant',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/Dr.Zubair-e1648630424669_mnj1he.jpg',
      description: 'Senior technical consultant specializing in flow measurement systems.',
      expertise: ['Flow Measurement', 'System Design', 'Field Operations']
    },
    {
      name: 'Babar Zia',
      role: 'Office Manager',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/Babar-Zia-Picture_kxkfjw.jpg',
      description: 'Managing daily operations and administrative functions at our Thuwal office.',
      expertise: ['Operations Management', 'Administration', 'Team Coordination']
    },
    {
      name: 'Rashad Maqsood',
      role: 'Software Project Manager',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Rashad_lddbgq.jpg',
      description: 'Leading software development projects and digital twin implementation.',
      expertise: ['Project Management', 'Software Development', 'Digital Solutions']
    }
  ];

  // Enhanced products with navigation
  const featuredProducts = [
    {
      name: '3 Phase Wellhead Water-cut Meter (SF-321)',
      description: 'Non-radioactive, non-intrusive measurement for oil field water management.',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555754/High-Res-render-min_oqcyvr.png'
    },
    {
      name: '3-Phase Multi Phase Flow Meter (SF-331)',
      description: 'Simultaneous three-phase measurement with ultra-compact design.',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555854/MPFM-SFS-3G-X-1536x1187_qhmxbs.png'
    },
    {
      name: 'Skid Mounted MPFM (SK-100)',
      description: 'Portable skid integrating Saher\'s patented multiphase meter.',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555852/MPFM-with-SKID-1536x1187_sjrvdp.png'
    }
  ];

  // Enhanced services with navigation
  const featuredServices = [
    {
      title: 'Flow Measurement Consultancy',
      description: 'Expert guidance for conventional and multiphase flow measurement solutions.',
      icon: <Gauge size={48} />
    },
    {
      title: 'Engineering & Product Design',
      description: 'Integrated engineering services for all your design needs.',
      icon: <FileText size={48} />
    },
    {
      title: 'Imaging & Sensing Design',
      description: 'Customized solutions for microwave and x-ray sensing applications.',
      icon: <Activity size={48} />
    }
  ];

  // Enhanced careers with navigation
  const featuredCareers = [
    {
      title: 'Senior Flow Measurement Engineer',
      location: 'Thuwal, Saudi Arabia',
      department: 'Engineering',
      type: 'Full-time'
    },
    {
      title: 'Embedded Systems Engineer',
      location: 'Thuwal, Saudi Arabia',
      department: 'R&D',
      type: 'Full-time'
    },
    {
      title: 'Field Service Technician - GCC Region',
      location: 'Thuwal, Saudi Arabia (Travel Required)',
      department: 'Operations',
      type: 'Full-time'
    },
    {
      title: 'Business Development Manager - MENA',
      location: 'Thuwal, Saudi Arabia / Remote',
      department: 'Sales',
      type: 'Full-time'
    }
  ];

  // Updated to only show Aramco and US company
  const partnersAndBrands = [
    {
      name: 'Saudi Aramco',
      logo: 'https://cdn.worldvectorlogo.com/logos/aramco-1.svg',
      description: 'Multiphase technology pre-qualification partner',
      status: 'Ongoing Project'
    },
    {
      name: 'Chevron Corporation',
      logo: 'https://logos-world.net/wp-content/uploads/2020/08/Chevron-Logo.png',
      description: 'Strategic technology deployment partner',
      status: 'Active Partnership'
    }
  ];

  // Helper function to get icon for news category
  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'Customer Validation':
        return <Award className="w-6 h-6" />;
      case 'Technology':
        return <TrendingUp className="w-6 h-6" />;
      case 'Company News':
        return <Building className="w-6 h-6" />;
      default:
        return <Users className="w-6 h-6" />;
    }
  };

  // Navigation functions
  const nextTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % Math.ceil(featuredTeamMembers.length / 3));
  };

  const prevTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + Math.ceil(featuredTeamMembers.length / 3)) % Math.ceil(featuredTeamMembers.length / 3));
  };

  const nextNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev + 1) % Math.ceil(featuredNews.length / 2));
  };

  const prevNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev - 1 + Math.ceil(featuredNews.length / 2)) % Math.ceil(featuredNews.length / 2));
  };

  const nextProductSlide = () => {
    setCurrentProductSlide((prev) => (prev + 1) % Math.ceil(featuredProducts.length / 2));
  };

  const prevProductSlide = () => {
    setCurrentProductSlide((prev) => (prev - 1 + Math.ceil(featuredProducts.length / 2)) % Math.ceil(featuredProducts.length / 2));
  };

  const nextServiceSlide = () => {
    setCurrentServiceSlide((prev) => (prev + 1) % Math.ceil(featuredServices.length / 2));
  };

  const prevServiceSlide = () => {
    setCurrentServiceSlide((prev) => (prev - 1 + Math.ceil(featuredServices.length / 2)) % Math.ceil(featuredServices.length / 2));
  };

  const nextCareerSlide = () => {
    setCurrentCareerSlide((prev) => (prev + 1) % Math.ceil(featuredCareers.length / 2));
  };

  const prevCareerSlide = () => {
    setCurrentCareerSlide((prev) => (prev - 1 + Math.ceil(featuredCareers.length / 2)) % Math.ceil(featuredCareers.length / 2));
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
  };

  const PDFViewer = ({ url, title }: { url: string; title: string }) => (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <div className="flex gap-2">
            <a
              href={url}
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              <Download size={16} />
              Download
            </a>
            <button
              onClick={() => setShowPDFViewer(null)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="h-[calc(90vh-80px)]">
          <iframe
            src={`https://docs.google.com/viewerng/viewer?url=${encodeURIComponent(url)}&embedded=true`}
            className="w-full h-full border-0"
            title={title}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div id="home" className="relative dark:bg-gray-900 pt-24">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,213,0,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,119,198,0.2),transparent_50%)]" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/80 dark:from-gray-900/90 dark:to-gray-800/80" />

        {/* Content */}
        <div className="relative z-10 pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[80vh]">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Optimize Your{' '}
                    <span className="text-yellow-500 relative inline-block">
                      Upstream Production
                    </span>{' '}
                    with Real-Time Flow Metering
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                    Revolutionary PVT-independent DMOR technology delivers 24/7
                    trusted measurements for oil-water separation, eliminating
                    calibration costs and data gaps.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25 text-center"
                  >
                    Request Demo
                  </Link>
                </div>

                {/* Video Section */}
                <div className="mt-16 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl">
                  <h3 className="text-2xl font-semibold mb-4">
                    See Our Technology in Action
                  </h3>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                      src="https://www.youtube.com/embed/KmRtSAURurM"
                      title="Saher Flow Solutions Technology"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="relative space-y-8">
                {/* DMOR Technology Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-yellow-500 mb-3">
                      DMOR Technology
                    </h3>
                    <p className="text-xl text-gray-300 mb-6">
                      Advanced Multiphase Flow Measurement
                    </p>
                    <div className="mx-auto flex justify-center bg-white/5 rounded-2xl p-8 border border-white/10">
                      <img
                        src="https://saherflow.com/wp-content/uploads/2023/01/Group-65-1.svg"
                        alt="DMOR Technology"
                        className="h-40 w-auto hover:scale-110 transition-transform duration-300"
                        onError={handleImageError}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-3xl font-bold text-yellow-500 mb-1">
                        99.9%
                      </div>
                      <div className="text-sm text-gray-300">Accuracy</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-3xl font-bold text-green-400 mb-1">
                        24/7
                      </div>
                      <div className="text-sm text-gray-300">Monitoring</div>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Industry Recognition</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`relative p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group ${
                          achievement.link ? 'cursor-pointer' : ''
                        }`}
                        onClick={() => achievement.link && (window.location.href = achievement.link)}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                        <div className="relative z-10">
                          <div className="flex items-center justify-center mb-3">
                            {achievement.icon}
                          </div>
                          <h4 className="text-sm font-bold text-white text-center mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-xs text-gray-300 text-center leading-tight">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics - Fixed alignment */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                  <h4 className="text-lg font-bold text-white mb-4 text-center">Live Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">System Uptime</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-white/20 rounded-full h-2">
                          <div className="w-[99%] bg-green-400 rounded-full h-2" />
                        </div>
                        <span className="text-green-400 text-sm font-bold w-12">99%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Data Accuracy</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-white/20 rounded-full h-2">
                          <div className="w-full bg-yellow-400 rounded-full h-2" />
                        </div>
                        <span className="text-yellow-400 text-sm font-bold w-12">99.9%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Response Time</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-white/20 rounded-full h-2">
                          <div className="w-[95%] bg-blue-400 rounded-full h-2" />
                        </div>
                        <span className="text-blue-400 text-sm font-bold w-12">&lt;1ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Partners Section - Only Aramco and US Company */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Strategic partnerships with leading energy companies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partnersAndBrands.map((partner, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="h-16 flex items-center justify-center mb-4">
                  <img 
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=1a3a5c&color=ffffff&size=200`;
                    }}
                  />
                </div>
                <h3 className="font-bold text-navy-900 dark:text-white mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{partner.description}</p>
                <div className={`inline-block px-3 py-1 text-xs rounded-full font-medium ${
                  partner.status === 'Active Partnership' 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400'
                    : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                }`}>
                  {partner.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Preview Section with Navigation */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Our Products</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Industry-leading flow measurement instruments
              </p>
            </div>
            <Link
              to="/products"
              className="bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              View All Products <ArrowRight size={20} />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(featuredProducts.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 px-4">
                      {featuredProducts.slice(slideIndex * 2, slideIndex * 2 + 2).map((product, index) => (
                        <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                          <div className="aspect-square bg-gray-100 dark:bg-gray-600 rounded-xl mb-6 overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-300"
                              onError={handleImageError}
                            />
                          </div>
                          <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{product.name}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                          <Link 
                            to="/products"
                            className="inline-flex items-center gap-2 text-navy-900 dark:text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-200"
                          >
                            Learn More <ArrowRight size={16} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevProductSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronLeft size={20} className="text-navy-900 dark:text-white" />
            </button>
            <button 
              onClick={nextProductSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronRight size={20} className="text-navy-900 dark:text-white" />
            </button>
          </div>

          {/* Product Brochure Preview with Download/View buttons */}
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 mt-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white">Product Catalog</h3>
                <p className="text-gray-600 dark:text-gray-300">Complete technical specifications</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowPDFViewer('https://saherflow.com/wp-content/uploads/2025/01/Saher-Products-Broucher-2025-01.pdf')}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  <Eye size={16} />
                  View
                </button>
                <a
                  href="https://saherflow.com/wp-content/uploads/2025/01/Saher-Products-Broucher-2025-01.pdf"
                  download
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview Section with Navigation */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Expert engineering solutions and consultancy
              </p>
            </div>
            <Link
              to="/services"
              className="bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(featuredServices.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 px-4">
                      {featuredServices.slice(slideIndex * 2, slideIndex * 2 + 2).map((service, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-yellow-500 rounded-xl text-navy-900">
                              {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-navy-900 dark:text-white">{service.title}</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                          <Link 
                            to="/services"
                            className="inline-flex items-center gap-2 text-navy-900 dark:text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-200"
                          >
                            Learn More <ArrowRight size={16} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevServiceSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronLeft size={20} className="text-navy-900 dark:text-white" />
            </button>
            <button 
              onClick={nextServiceSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronRight size={20} className="text-navy-900 dark:text-white" />
            </button>
          </div>

          {/* Services Brochure Preview */}
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 mt-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white">Services Brochure</h3>
                <p className="text-gray-600 dark:text-gray-300">Comprehensive service offerings</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowPDFViewer('https://saherflow.com/wp-content/uploads/2025/02/SaherBrochure-Vertical-English_MAK.pdf')}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  <Eye size={16} />
                  View
                </button>
                <a
                  href="https://saherflow.com/wp-content/uploads/2025/02/SaherBrochure-Vertical-English_MAK.pdf"
                  download
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Preview Section with Dynamic Content */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Latest News</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Stay updated with our latest developments
              </p>
            </div>
            <Link
              to="/news"
              className="bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              View All News <ArrowRight size={20} />
            </Link>
          </div>

          {featuredNews.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400">Loading latest news...</p>
            </div>
          ) : (
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentNewsSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(featuredNews.length / 2) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-2 gap-8 px-4">
                        {featuredNews.slice(slideIndex * 2, slideIndex * 2 + 2).map((news, index) => (
                          <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="aspect-video overflow-hidden">
                              <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                onError={handleImageError}
                              />
                            </div>
                            <div className="p-6">
                              <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                  <Calendar size={14} />
                                  <span className="text-sm">{news.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="text-yellow-600 dark:text-yellow-400">
                                    {getIconForCategory(news.category)}
                                  </div>
                                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
                                    {news.category}
                                  </span>
                                </div>
                              </div>
                              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{news.title}</h3>
                              <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{news.excerpt}</p>
                              <Link 
                                to="/news"
                                className="inline-flex items-center gap-2 text-navy-900 dark:text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-200"
                              >
                                Read More <ArrowRight size={16} />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Only show if there are enough items */}
              {featuredNews.length > 2 && (
                <>
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
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Team Preview Section with Navigation */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Our Team</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Meet our world-class engineering experts
              </p>
            </div>
            <Link
              to="/team"
              className="bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              Meet Full Team <ArrowRight size={20} />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(featuredTeamMembers.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-3 gap-8 px-4">
                      {featuredTeamMembers.slice(slideIndex * 3, slideIndex * 3 + 3).map((member, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                          <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden mb-4">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=ffd500&color=1a3a5c&size=200&font-size=0.6`;
                              }}
                            />
                          </div>
                          <div className="text-center">
                            <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-1">{member.name}</h3>
                            <p className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm mb-3">{member.role}</p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.description}</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                              {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-2 py-1 bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-300 text-xs rounded-full font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
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
              onClick={prevTeamSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronLeft size={20} className="text-navy-900 dark:text-white" />
            </button>
            <button 
              onClick={nextTeamSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronRight size={20} className="text-navy-900 dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Careers Preview Section with Navigation */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Join Our Team</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Build the future of flow measurement technology in Saudi Arabia
              </p>
            </div>
            <Link
              to="/careers"
              className="bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              View All Positions <ArrowRight size={20} />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCareerSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(featuredCareers.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-6 px-4">
                      {featuredCareers.slice(slideIndex * 2, slideIndex * 2 + 2).map((job, index) => (
                        <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                          <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <MapPin size={16} />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <Briefcase size={16} />
                              <span>{job.department}</span>
                            </div>
                            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                              {job.type}
                            </div>
                          </div>
                          <Link 
                            to="/careers"
                            className="inline-flex items-center gap-2 text-navy-900 dark:text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-200"
                          >
                            View Details <ArrowRight size={16} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevCareerSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronLeft size={20} className="text-navy-900 dark:text-white" />
            </button>
            <button 
              onClick={nextCareerSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronRight size={20} className="text-navy-900 dark:text-white" />
            </button>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Be part of Saudi Vision 2030 and help transform the Kingdom's energy sector
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-yellow-500 dark:to-yellow-400 text-white dark:text-navy-900 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Users size={20} />
              Explore Career Opportunities
            </Link>
          </div>
        </div>
      </div>

      {/* Salient Features Section */}
      <div className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Salient Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Revolutionary technology that sets new standards in multiphase flow measurement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salientFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 ${feature.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge & Solution Section */}
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Challenges */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-red-500" size={32} />
                <h2 className="text-4xl font-bold text-navy-900 dark:text-white">The Challenge</h2>
              </div>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg text-gray-700 dark:text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={32} />
                <h2 className="text-4xl font-bold text-navy-900 dark:text-white">Our Solution</h2>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg text-gray-700 dark:text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-navy-900 dark:bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Production?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join industry leaders who trust Saher Flow Solutions for their critical flow measurement needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {showPDFViewer && (
        <PDFViewer 
          url={showPDFViewer} 
          title={showPDFViewer.includes('Products') ? 'Product Catalog' : 'Services Brochure'} 
        />
      )}
    </div>
  );
};

export default Home;