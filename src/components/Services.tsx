import React from 'react';
import { Gauge, Droplets, Wrench, FileText } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Droplets size={48} />,
      title: 'Water Cut Meters',
      description: 'Precise water content measurement in oil production streams with real-time monitoring capabilities.',
      features: [
        'PVT-independent measurement',
        'Real-time data transmission',
        'Zero maintenance requirements',
        'Industry-leading accuracy'
      ]
    },
    {
      icon: <Gauge size={48} />,
      title: 'Multiphase Flow Meters',
      description: 'Advanced multiphase measurement technology for oil, gas, and water flow determination.',
      features: [
        'Simultaneous three-phase measurement',
        'No separation required',
        'Suitable for harsh environments',
        'Digital twin integration'
      ]
    },
    {
      icon: <Wrench size={48} />,
      title: 'Downhole Solutions',
      description: 'Specialized downhole measurement systems for challenging wellbore environments.',
      features: [
        'High-temperature rated components',
        'Pressure resistant design',
        'Wireless data transmission',
        'Long-term reliability'
      ]
    }
  ];

  return (
    <section id="services" className="py-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive flow measurement solutions for the oil and gas industry
          </p>
        </div>
      </div>

      {/* Services Brochure */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Comprehensive Services Brochure</h2>
            <p className="text-xl text-gray-600">
              Detailed information about all our service offerings
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-[4/3] w-full">
              <iframe
                src="https://docs.google.com/viewerng/viewer?url=https://saherflow.com/wp-content/uploads/2025/02/SaherBrochure-Vertical-English_MAK.pdf&embedded=true"
                className="w-full h-full border-0"
                title="Services Brochure"
              />
            </div>
            <div className="p-6 bg-navy-900 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">Download Our Services Brochure</h3>
              <p className="text-gray-300 mb-4">Complete overview of our technical capabilities</p>
              <a
                href="https://saherflow.com/wp-content/uploads/2025/02/SaherBrochure-Vertical-English_MAK.pdf"
                download
                className="inline-flex items-center gap-2 bg-yellow-500 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                <FileText size={20} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Services */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Service Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert solutions tailored to your specific measurement requirements
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-500 rounded-xl text-navy-900">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-navy-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-navy-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="bg-navy-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 transition-colors duration-200">
                    Request Consultation
                  </button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-navy-100 to-navy-50 p-8 rounded-2xl">
                    <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center">
                      <div className="text-navy-900 scale-150">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;