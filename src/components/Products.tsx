import React from 'react';
import { FileText, Download } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      name: 'WC-5000 Water Cut Meter',
      image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: [
        'Accuracy: ±0.5% water cut',
        'Operating pressure: 5000 psi',
        'Temperature range: -40°C to 150°C',
        'Response time: <2 seconds'
      ]
    },
    {
      name: 'MF-3000 Multiphase Flow Meter',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: [
        'Flow rate: 10-10,000 bpd',
        'GVF range: 0-100%',
        'Water cut: 0-100%',
        'Uncertainty: ±5% of reading'
      ]
    },
    {
      name: 'DH-2000 Downhole Meter',
      image: 'https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: [
        'Depth rating: 15,000 ft',
        'Pressure rating: 10,000 psi',
        'Temperature: 175°C max',
        'Battery life: 2 years'
      ]
    },
    {
      name: 'Digital Twin Model Service',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: [
        'Real-time flow modeling',
        'Predictive maintenance',
        'Performance optimization',
        'Remote monitoring dashboard'
      ]
    }
  ];

  return (
    <section id="products" className="py-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Industry-leading flow measurement instruments and digital solutions
          </p>
        </div>
      </div>

      {/* Product Brochure */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Complete Product Catalog</h2>
            <p className="text-xl text-gray-600">
              Comprehensive specifications and technical details for all our products
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-[4/3] w-full">
              <iframe
                src="https://docs.google.com/viewerng/viewer?url=https://saherflow.com/wp-content/uploads/2025/01/Saher-Products-Broucher-2025-01.pdf&embedded=true"
                className="w-full h-full border-0"
                title="Product Brochure"
              />
            </div>
            <div className="p-6 bg-navy-900 text-white text-center">
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
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precision-engineered instruments designed for the most demanding applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{product.name}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="text-lg font-semibold text-navy-900">Key Specifications:</h4>
                    <ul className="space-y-2">
                      {product.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-navy-900 text-white py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors duration-200">
                      Get Quote
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-navy-900 text-navy-900 rounded-lg font-semibold hover:bg-navy-900 hover:text-white transition-all duration-200">
                      <FileText size={16} />
                      Specs
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Solutions */}
          <div className="mt-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white rounded-2xl p-12 text-center">
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