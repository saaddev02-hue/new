import React from 'react';
import { Play, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

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

  return (
    <section id="home" className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/80" />
        
        {/* Content */}
        <div className="relative z-10 pt-24 pb-16">
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
                  <button className="bg-yellow-500 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
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

              {/* Right Visual */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-yellow-500 mb-2">Real-Time Flow Meter</h3>
                    <p className="text-gray-300">Advanced DMOR Technology</p>
                  </div>
                  
                  <svg width="100%" height="300" viewBox="0 0 400 300" className="mx-auto">
                    {/* Device Frame */}
                    <rect x="50" y="80" width="300" height="140" rx="12" fill="#1e293b" stroke="#fbbf24" strokeWidth="3"/>
                    
                    {/* Measurement Points */}
                    <circle cx="120" cy="120" r="12" fill="#fbbf24" className="animate-pulse" />
                    <circle cx="200" cy="120" r="12" fill="#10b981" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                    <circle cx="280" cy="120" r="12" fill="#3b82f6" className="animate-pulse" style={{animationDelay: '1s'}} />
                    <circle cx="200" cy="180" r="12" fill="#f97316" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                    
                    {/* Labels */}
                    <text x="120" y="140" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">GVF</text>
                    <text x="200" y="140" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">WC</text>
                    <text x="280" y="140" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">DMOR</text>
                    <text x="200" y="200" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Digital Twin</text>
                    
                    {/* Flow Lines */}
                    <path d="M20 150 Q200 150 380 150" stroke="#fbbf24" strokeWidth="2" fill="none" className="animate-pulse" />
                  </svg>

                  <div className="grid grid-cols-2 gap-4 mt-8">
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

      {/* Challenge & Solution Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Challenges */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-red-500" size={32} />
                <h2 className="text-4xl font-bold text-navy-900">The Challenge</h2>
              </div>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={32} />
                <h2 className="text-4xl font-bold text-navy-900">Our Solution</h2>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Advanced Flow Measurement Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of multiphase flow measurement with our revolutionary DMOR technology
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://saherflow.com/wp-content/uploads/2025/01/combined-enhanced_image-1024x591.png"
                alt="Saher Flow Advanced Technology"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg hidden lg:block">
              <div className="text-2xl font-bold text-navy-900">PVT Independent</div>
              <div className="text-gray-600">No Calibration Required</div>
            </div>
            
            <div className="absolute -top-8 -left-8 bg-yellow-500 text-navy-900 p-6 rounded-xl shadow-lg hidden lg:block">
              <div className="text-2xl font-bold">DMOR Technology</div>
              <div className="font-medium">Revolutionary Measurement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Production?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join industry leaders who trust Saher Flow Solutions for their critical flow measurement needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 flex items-center justify-center gap-2">
              Learn More <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;