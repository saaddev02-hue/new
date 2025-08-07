import React, { useState } from 'react';
import { Play, ArrowRight, CheckCircle, AlertTriangle, Zap, Shield, Gauge, Wifi, DollarSign, Activity, Star, Award, TrendingUp, Globe, ChevronLeft, ChevronRight, Building } from 'lucide-react';

const Home: React.FC = () => {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);

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
      icon: <Shield className="w-8 h-8" />,
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
      color: 'from-yellow-500 to-orange-500'
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

  // Updated team members with Saudi-based roles
  const teamMembers = [
    {
      name: 'Dr. M. Akram Karimi',
      role: 'CTO/General Manager',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555205/Dr.Akram__wtiwxi.png',
      description: 'Leading the technical strategy and operations from our Thuwal headquarters, driving innovation in multiphase flow measurement.',
      expertise: ['Strategic Leadership', 'Technical Innovation', 'Operations Management'],
      achievements: '15+ Years Experience, Multiple Patents'
    },
    {
      name: 'Dr. Atif Shamim',
      role: 'Technical Director',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/ATIF-SHAMIM-2020_v6cyab.png',
      description: 'Distinguished Professor at KAUST and pioneer of DMOR technology, leading our advanced research initiatives.',
      expertise: ['DMOR Technology', 'RF Engineering', 'Research & Development'],
      achievements: 'KAUST Professor, 50+ Patents, 300+ Publications'
    },
    {
      name: 'Dr. Shehab Ahmed',
      role: 'Business Advisor',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Dr.-Shehab_aq2wvj.jpg',
      description: 'Strategic business advisor with deep industry expertise in GCC energy markets and commercial development.',
      expertise: ['Business Strategy', 'Market Development', 'Client Relations'],
      achievements: '20+ Years Industry Experience, MBA Harvard'
    },
    {
      name: 'Dr. Zubair Akhtar',
      role: 'Technical Consultant',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/Dr.Zubair-e1648630424669_mnj1he.jpg',
      description: 'Senior technical consultant specializing in flow measurement systems and field deployment strategies.',
      expertise: ['Flow Measurement', 'System Design', 'Field Operations'],
      achievements: 'PhD Engineering, 25+ Successful Projects'
    },
    {
      name: 'Babar Zia',
      role: 'Office Manager',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/Babar-Zia-Picture_kxkfjw.jpg',
      description: 'Managing daily operations and administrative functions at our Thuwal office, ensuring operational excellence.',
      expertise: ['Operations Management', 'Administration', 'Team Coordination'],
      achievements: '10+ Years Management Experience'
    },
    {
      name: 'Hafiz Arsalan',
      role: 'Sr. Embedded Systems Consultant',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555213/Hafiz-Arslan-Sr.-Embedded-Engineer_xfmy7e.png',
      description: 'Senior embedded systems specialist developing advanced sensor control and data acquisition systems.',
      expertise: ['Embedded Systems', 'Sensor Integration', 'IoT Development'],
      achievements: 'M.S. Engineering, 12+ Years Embedded Systems'
    },
    {
      name: 'Rashad Maqsood',
      role: 'Software Project Manager',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Rashad_lddbgq.jpg',
      description: 'Leading software development projects and digital twin implementation for enhanced production monitoring.',
      expertise: ['Project Management', 'Software Development', 'Digital Solutions'],
      achievements: 'PMP Certified, 8+ Years Project Management'
    },
    {
      name: 'Fahad Usman Meer',
      role: 'Sr. Software Engineer',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555208/Fahad-Usman-Meer-Sr.-Software-Engineer_cc1ssv.jpg',
      description: 'Senior software engineer developing cutting-edge analytics and machine learning solutions for flow measurement.',
      expertise: ['Software Engineering', 'Machine Learning', 'Data Analytics'],
      achievements: 'M.S. Computer Science, 10+ Years Development'
    },
  
    {
      name: 'Ammar Ayub',
      role: 'Mechanical Team Lead',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/Ammar-Ayub-Picture_azw5hy.jpg',
      description: 'Leading mechanical design and engineering for robust, field-ready measurement systems.',
      expertise: ['Mechanical Design', 'Manufacturing', 'Quality Assurance'],
      achievements: 'P.E. License, 12+ Years Mechanical Engineering'
    },
    {
      name: 'Arsalan Raza',
      role: 'Procurement Manager',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754562693/Arsalan-Raza_rcd4rs.png',
      description: 'Managing procurement and supply chain operations to ensure timely delivery of quality components.',
      expertise: ['Supply Chain', 'Vendor Management', 'Cost Optimization'],
      achievements: 'CPIM Certified, 9+ Years Procurement'
    },
    {
      name: 'Salem Bawazir',
      role: 'Embedded Design Engineer',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754562693/photo_6059953427796046688_x_1_nsecls.jpg',
      description: 'Designing and developing embedded systems for real-time data processing and sensor control.',
      expertise: ['Embedded Design', 'Hardware Development', 'Signal Processing'],
      achievements: 'B.S. Electronics, 6+ Years Embedded Systems'
    },
    {
      name: 'Saad Mahmood',
      role: 'Software Engineer',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocKnZU_WA_aQiqteE5IvCZKIKm7JlGv5WlGPCnZGCcj-9Fgtmaar=s288-c-no',
      description: 'Developing software solutions for data visualization and remote monitoring capabilities.',
      expertise: ['Full-Stack Development', 'Data Visualization', 'Cloud Computing'],
      achievements: 'B.S. Software Engineering, 1+ Years Development'
    }
  ];

  const partnersAndBrands = [
    {
      name: 'Saudi Aramco',
      logo: 'https://cdn.worldvectorlogo.com/logos/aramco-1.svg',
      description: 'Pre-qualified technology partner',
      status: 'Active Partnership'
    },
    {
      name: 'ADNOC',
      logo: 'https://cdn.worldvectorlogo.com/logos/adnoc.svg',
      description: 'Strategic technology collaboration',
      status: 'Ongoing Projects'
    },
    {
      name: 'Shell',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/640px-Shell_logo.svg.png',
      description: 'Global deployment partner',
      status: 'Multi-region Implementation'
    },
    {
      name: 'BP',
      logo: 'https://logos-world.net/wp-content/uploads/2020/08/BP-Logo.png',
      description: 'Technology validation partner',
      status: 'Field Testing'
    }
  ];

  const nextTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
  };

  const prevTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentTeamSlide(slideIndex);
  };

  return (
    <section id="home" className="relative dark:bg-gray-900">
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
                  <button
                    onClick={() =>
                      document
                        .getElementById('contact')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
                  >
                    Request Demo
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 flex items-center gap-2 hover:scale-105">
                    <Play size={20} />
                    Watch Video
                  </button>
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
                {/* DMOR Technology Card - Enlarged */}
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
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="h-40 w-40 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-navy-900 font-bold text-4xl">DMOR</div>';
                          }
                        }}
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

                {/* Key Achievements - New Creative Content */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Industry Recognition</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="relative p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
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

                {/* Performance Metrics - Additional Content */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                  <h4 className="text-lg font-bold text-white mb-4 text-center">Live Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">System Uptime</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-white/20 rounded-full h-2">
                          <div className="w-[99%] bg-green-400 rounded-full h-2" />
                        </div>
                        <span className="text-green-400 text-sm font-bold">99%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Data Accuracy</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-white/20 rounded-full h-2">
                          <div className="w-full bg-yellow-400 rounded-full h-2" />
                        </div>
                        <span className="text-yellow-400 text-sm font-bold">99.9%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Response Time</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-white/20 rounded-full h-2">
                          <div className="w-[95%] bg-blue-400 rounded-full h-2" />
                        </div>
                        <span className="text-blue-400 text-sm font-bold">&lt;1ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Partners Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Partnering with the world's leading energy companies to deliver cutting-edge solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnersAndBrands.map((partner, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="h-16 flex items-center justify-center mb-4">
                  <img 
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain  transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=1a3a5c&color=ffffff&size=200`;
                    }}
                  />
                </div>
                <h3 className="font-bold text-navy-900 dark:text-white mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{partner.description}</p>
                <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded-full">
                  {partner.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Salient Features Section */}
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
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
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 group"
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
      <div className="py-24 bg-white dark:bg-gray-900">
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
                  <li key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
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
                  <li key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg text-gray-700 dark:text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Team Members Section - Horizontal Scroll with Dots */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Star size={16} />
              Meet Our Expert Team
            </div>
            <h2 className="text-5xl font-bold text-navy-900 dark:text-white mb-6">
              World-Class Engineering Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our multidisciplinary team of industry veterans and innovation leaders drives breakthrough 
              technologies that transform energy production worldwide from our Thuwal, Saudi Arabia headquarters.
            </p>
          </div>

          {/* Team Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-3 gap-8 px-4">
                      {teamMembers.slice(slideIndex * 3, slideIndex * 3 + 3).map((member, index) => (
                        <div
                          key={index}
                          className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
                        >
                          {/* Card Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-navy-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="relative p-8">
                            {/* Profile Image */}
                            <div className="relative mb-6">
                              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden ring-4 ring-white dark:ring-gray-700 shadow-lg group-hover:ring-yellow-400 transition-all duration-300">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=ffd500&color=1a3a5c&size=200&font-size=0.6`;
                                  }}
                                />
                              </div>
                              {/* Status Indicator */}
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                              </div>
                            </div>

                            {/* Member Info */}
                            <div className="text-center mb-6">
                              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                                {member.name}
                              </h3>
                              <p className="text-yellow-600 dark:text-yellow-400 font-semibold mb-3 text-sm">
                                {member.role}
                              </p>
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                {member.description}
                              </p>
                              
                              {/* Achievements */}
                              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                  {member.achievements}
                                </p>
                              </div>
                            </div>

                            {/* Expertise Tags */}
                            <div className="flex flex-wrap gap-2 justify-center mb-6">
                              {member.expertise.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-3 py-1 bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-300 text-xs rounded-full font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            {/* Connect Button */}
                            <div className="text-center">
                              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-yellow-500 dark:to-yellow-400 text-white dark:text-navy-900 px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                Connect
                              </button>
                            </div>
                          </div>

                          {/* Hover Effect Decoration */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500" />
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
              <ChevronLeft size={24} className="text-navy-900 dark:text-white" />
            </button>
            <button 
              onClick={nextTeamSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronRight size={24} className="text-navy-900 dark:text-white" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTeamSlide === index 
                      ? 'bg-yellow-500 w-8' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Team Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg mt-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-navy-900 dark:text-yellow-400">200+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Combined Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-navy-900 dark:text-yellow-400">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Countries Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-navy-900 dark:text-yellow-400">100+</div>
                <div className="text-gray-600 dark:text-gray-300">Patents & Publications</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-navy-900 dark:text-yellow-400">500+</div>
                <div className="text-gray-600 dark:text-gray-300">Successful Deployments</div>
              </div>
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
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
            >
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
              Learn More <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;