import React from 'react';
import { Play, ArrowRight, CheckCircle, AlertTriangle, Zap, Shield, Gauge, Wifi, DollarSign, Activity } from 'lucide-react';

const Home: React.FC = () => {
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
    description: 'Multiphase fraction sensing (WC & GVF) does not require PVT data & our advanced algorithms minimize the requirement of frequent recalibration.',  // ← added comma here
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
    color: 'bg-indigo-500',  // ← and here
  }
];


  return (
    <section id="home" className="relative dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("https://saherflow.com/wp-content/uploads/2025/01/combined-enhanced_image-1024x591.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/80 dark:from-gray-900/90 dark:to-gray-800/80" />
        
        {/* Content */}
        <div className="relative z-10 pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Optimize Your <span className="text-yellow-500">Upstream Production</span> with Real-Time Flow Metering
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                    Revolutionary PVT-independent DMOR technology delivers 24/7 trusted measurements for oil-water separation, eliminating calibration costs and data gaps.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-yellow-500 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
                  >
                    Request Demo
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 flex items-center justify-center gap-2">
                    <Play size={20} />
                    Watch Video
                  </button>
                </div>

                {/* Video Section */}
                <div className="mt-16 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-4">See Our Technology in Action</h3>
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

              {/* Right Visual - Technology Showcase */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-yellow-500 mb-2">DMOR Technology</h3>
                    <p className="text-gray-300">Advanced Multiphase Flow Measurement</p>
                    <div className="mx-auto mt-4 flex justify-center">
                      <img 
                        src="https://saherflow.com/wp-content/uploads/2023/01/Group-65-1.svg"
                        alt="DMOR Technology"
                        className="h-20 w-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Replace SVG with actual multiphase flow meter image */}
                  <div className="mb-6">
                    <img 
                      src="https://saherflow.com/wp-content/uploads/2025/01/MPFM-SFS-3G-X-1536x1187.png"
                      alt="Multiphase Flow Meter"
                      className="w-full h-auto rounded-lg object-contain"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-500">99.9%</div>
                      <div className="text-sm text-gray-300">Accuracy</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">24/7</div>
                      <div className="text-sm text-gray-300">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Featured Image Section */}
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Advanced Flow Measurement Technology</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of multiphase flow measurement with our revolutionary DMOR technology
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://saherflow.com/wp-content/uploads/2025/01/combined-enhanced_image-1024x591.png"
                alt="Saher Flow Advanced Technology"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hidden lg:block">
              <div className="text-2xl font-bold text-navy-900 dark:text-white">PVT Independent</div>
              <div className="text-gray-600 dark:text-gray-300">No Calibration Required</div>
            </div>
            
            <div className="absolute -top-8 -left-8 bg-yellow-500 text-navy-900 p-6 rounded-xl shadow-lg hidden lg:block">
              <div className="text-2xl font-bold">DMOR Technology</div>
              <div className="font-medium">Revolutionary Measurement</div>
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
              className="bg-yellow-500 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 flex items-center justify-center gap-2">
              Learn More <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Industry experts driving innovation in flow measurement technology
            </p>
          </div>

          <div className="overflow-x-auto pb-6">
            <div className="flex gap-8 min-w-max">
              {[
                {
                  name: 'Prof. Atif Shamim',
                  role: 'Founder & CEO',
                  image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
                  description: 'Distinguished Professor of Electrical and Computer Engineering at KAUST'
                },
                {
                  name: 'Dr. Sarah Ahmed',
                  role: 'CTO',
                  image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
                  description: 'Expert in microwave sensing and DMOR technology development'
                },
                {
                  name: 'Mohammed Al-Rashid',
                  role: 'VP Engineering',
                  image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
                  description: 'Leading multiphase flow measurement innovations'
                },
                {
                  name: 'Dr. Emily Chen',
                  role: 'Head of R&D',
                  image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
                  description: 'Pioneering AI-based sensor technologies'
                },
                {
                  name: 'Ahmed Hassan',
                  role: 'Field Operations Manager',
                  image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
                  description: 'Ensuring successful field deployments across the GCC'
                },
                {
                  name: 'Dr. Lisa Rodriguez',
                  role: 'Data Analytics Lead',
                  image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
                  description: 'Developing digital twin modeling solutions'
                }
              ].map((member, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 group"
                >
                  <div className="p-8 text-center">
                    <div className="relative mb-6">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-navy-900/20 to-transparent" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">{member.name}</h3>
                    <p className="text-yellow-600 dark:text-yellow-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;