import React from 'react';
import { Gauge, Droplets, Wrench, FileText, Zap, Microscope } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Gauge size={48} />,
      title: 'Flow Measurement Consultancy',
      description: 'Multiphase flow meters (MPFM) are the most advanced type of flow meters. Being expert in the toughest part, you can trust us with your conventional flow measurement needs.',
      details: 'Whether it\'s a laminar or turbulent flow, we are here to guide you the best measurement solution needed for your application. As an expert on multiphase flow measurements, we are well acquainted with various kinds of flow technologies including ultrasonics, magnetic resonance, differential pressure, Coriolis, vortex and clamp-on.',
      image: 'https://saherflow.com/wp-content/uploads/2025/01/Flow-1024x466.png'
    },
    {
      icon: <Microscope size={48} />,
      title: 'Imaging & Sensing Design',
      description: 'Our expertise in microwave and x-ray sensing enables us to offer customized solutions to a range of imaging and characterization applications.',
      details: 'Our in-depth expertise in the domain of microwave and x-ray sensing enables us to deliver customized solutions for a wide range of sensing needs. Our in-house microwave and x-ray test setups let us optimize the performance of the "made-to-order" systems.',
      image: 'https://saherflow.com/wp-content/uploads/2025/01/x-ray.png'
    },
    {
      icon: <Wrench size={48} />,
      title: 'Engineering & Product Design',
      description: 'Our in-house design team of mechanical, electrical, RF, software and product engineers can provide best-in-class services for all of your design needs.',
      details: 'Are you a company looking for engineering services, related to designing a new part, replacing the older one or completely revamping the whole facility? Saher offers an integrated engineering package which will be fully aligned with your digital and IoT strategies.',
      image: 'https://saherflow.com/wp-content/uploads/2025/01/Flow-1024x466.png'
    }
  ];

  return (
    <section id="services" className="py-24 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our decade-long experience with commercialization of a deep-tech solution for the energy industry, has honed our multidisciplinary skills required to conduct complex R&D projects and to deliver highly specialized services in different engineering fields.
          </p>
        </div>
      </div>

      {/* Services Brochure */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Comprehensive Services Brochure</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Detailed information about all our service offerings
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-[4/3] w-full">
              <iframe
                src="https://docs.google.com/viewerng/viewer?url=https://saherflow.com/wp-content/uploads/2025/02/SaherBrochure-Vertical-English_MAK.pdf&embedded=true"
                className="w-full h-full border-0"
                title="Services Brochure"
              />
            </div>
            <div className="p-6 bg-navy-900 dark:bg-gray-800 text-white text-center">
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
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Service Details</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                    <h3 className="text-3xl font-bold text-navy-900 dark:text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.details}
                  </p>

                  <button className="bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors duration-200">
                    Request Consultation
                  </button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-navy-100 to-navy-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                    <div className="aspect-video bg-white dark:bg-gray-600 rounded-xl shadow-lg overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
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