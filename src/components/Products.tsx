import React from 'react';
import { FileText, Download, Gauge, Droplets, Settings } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      name: '3 Phase Wellhead Water-cut Meter (SF-321)',
      model: 'SF-321',
      image: 'https://saherflow.com/wp-content/uploads/2025/02/High-Res-render-1536x1187.png',
      description: 'Produced water is one of the biggest challenges of production team in any oil field. Mature fields start producing more and more water with each passing day. It is crucial to measure the amount of produced water in the production stream in order to schedule and effectively manage the well intervention tasks.',
      features: [
        'Non-radioactive, non-intrusive measurement',
        'Full range water-cut measurement',
        'Orientation insensitive',
        'Real-time insights for production optimization',
        'Patented DMOR™ technology'
      ],
      icon: <Droplets className="w-8 h-8" />
    },
    {
      name: '3-Phase Multi Phase Flow Meter (SF-331)',
      model: 'SF-331',
      image: 'https://saherflow.com/wp-content/uploads/2025/02/High-Res-render-1536x1187.png',
      description: 'Multiphase mixture is very common in upstream sector of oil industry. Our 3-phase flow meter gives flow rates of all three fluids (oil, gas and water). Our patented microwave DMOR technology provides unparalleled accuracy to measure the multiphase fluid without any separation.',
      features: [
        'Simultaneous three-phase measurement',
        'Ultra-compact integration with venturi',
        'Minimal pressure drop (<2 psi)',
        'Full range accuracy (0~100% WC & 0~95% GVF)',
        'Dual microwave resonators on 2 different bands'
      ],
      icon: <Gauge className="w-8 h-8" />
    },
    {
      name: 'Skid Mounted MPFM (SK-100)',
      model: 'SK-100',
      image: 'https://saherflow.com/wp-content/uploads/2025/02/MPFM-with-SKID-1536x1187.png',
      description: 'SK-100 is a compact and portable skid integrating Saher\'s patented multiphase meter (MPM). The skid is equipped with a high-pressure sampling valve and ATEX/IECEx certified readout electronics box with plug-and-play setup.',
      features: [
        'Portable and compact design',
        'Safe sampling system with custom bottles',
        'Local HMI integrated',
        'Cloud data upload capability',
        'Fits in pickup truck compartment',
        'Dramatically reduces OPEX'
      ],
      icon: <Settings className="w-8 h-8" />
    }
  ];

  return (
    <section id="products" className="py-24 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Industry-leading flow measurement instruments and digital solutions
          </p>
        </div>
      </div>

      {/* Product Brochure */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Complete Product Catalog</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive specifications and technical details for all our products
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-[4/3] w-full">
              <iframe
                src="https://docs.google.com/viewerng/viewer?url=https://saherflow.com/wp-content/uploads/2025/01/Saher-Products-Broucher-2025-01.pdf&embedded=true"
                className="w-full h-full border-0"
                title="Product Brochure"
              />
            </div>
            <div className="p-6 bg-navy-900 dark:bg-gray-800 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">Download Our Product Brochure</h3>
              <p className="text-gray-300 mb-4">Complete technical specifications and product details</p>
              <a
                href="https://saherflow.com/wp-content/uploads/2025/01/Saher-Products-Broucher-2025-01.pdf"
                download
                className="inline-flex items-center gap-2 bg-yellow-500 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                <Download size={20} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Product Portfolio</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Precision-engineered instruments designed for the most demanding applications
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-500 rounded-xl text-navy-900">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-navy-900 dark:text-white">{product.name}</h3>
                      <p className="text-lg text-yellow-600 dark:text-yellow-400 font-semibold">{product.model}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-navy-900 dark:text-white">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors duration-200">
                      Get Quote
                    </button>
                    <button className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-navy-900 dark:border-yellow-500 text-navy-900 dark:text-yellow-500 rounded-lg font-semibold hover:bg-navy-900 dark:hover:bg-yellow-500 hover:text-white dark:hover:text-navy-900 transition-all duration-200">
                      <FileText size={16} />
                      Specs
                    </button>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-navy-100 to-navy-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                    <div className="aspect-square bg-white dark:bg-gray-600 rounded-xl shadow-lg overflow-hidden">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Solutions */}
          <div className="mt-20 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our engineering team can develop tailored solutions for your specific measurement challenges
            </p>
            <button className="bg-yellow-500 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200">
              Discuss Custom Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;