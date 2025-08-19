import React, { useState, useEffect } from 'react';
import { Gauge, Droplets, Wrench, FileText, Zap, Microscope, Download, Eye, X } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Services: React.FC = () => {
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [isPDFLoaded, setIsPDFLoaded] = useState(false);

  const services = [
    {
      icon: <Gauge size={48} />,
      title: 'Flow Measurement Consultancy',
      description:
        'Multiphase flow meters (MPFM) are the most advanced type of flow meters. Being expert in the toughest part, you can trust us with your conventional flow measurement needs.',
      details:
        "Whether it's a laminar or turbulent flow, we are here to guide you to the best measurement solution needed for your application. As an expert on multiphase flow measurements, we are well acquainted with various kinds of flow technologies including ultrasonics, magnetic resonance, differential pressure, Coriolis, vortex and clamp-on.",
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Flow_p9rkop.png',
      fallbackImage:
        'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Microscope size={48} />,
      title: 'Imaging & Sensing Design',
      description:
        'Our expertise in microwave and x-ray sensing enables us to offer customized solutions to a range of imaging and characterization applications.',
      details:
        'Our in-depth expertise in the domain of microwave and x-ray sensing enables us to deliver customized solutions for a wide range of sensing needs. Our in-house microwave and x-ray test setups let us optimize the performance of the "made-to-order" systems.',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555205/x-ray_bhg3rp.png',
      fallbackImage:
        'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Wrench size={48} />,
      title: 'Engineering & Product Design',
      description:
        'Our in-house design team of mechanical, electrical, RF, software and product engineers can provide best-in-class services for all of your design needs.',
      details:
        'Are you a company looking for engineering services, related to designing a new part, replacing the older one or completely revamping the whole facility? Saher offers an integrated engineering package which will be fully aligned with your digital and IoT strategies.',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555205/Saher-Flow-Meter-in-DNV_gmjfnr.jpg',
      fallbackImage:
        'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const pdfUrl = 'https://saherflow.com/wp-content/uploads/2025/02/SaherBrochure-Vertical-English_MAK.pdf';

  // Preload PDF in background
  useEffect(() => {
    const preloadPDF = () => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://docs.google.com/viewerng/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
      iframe.style.display = 'none';
      iframe.onload = () => {
        setIsPDFLoaded(true);
        document.body.removeChild(iframe);
      };
      document.body.appendChild(iframe);
    };

    preloadPDF();
  }, []);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackSrc) {
      target.src = fallbackSrc;
    }
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
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <Download size={16} />
              Download
            </a>
            <button
              onClick={() => setShowPDFViewer(false)}
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
    <>
      <SEOHead
        title="Engineering Services | Flow Measurement Consultancy | Saher Flow Solutions"
        description="Expert engineering services: Flow measurement consultancy, imaging & sensing design, product engineering. Multidisciplinary R&D solutions for oil & gas industry."
        keywords="flow measurement consultancy, engineering services, imaging sensing design, product engineering, R&D services, oil gas consulting, microwave sensing, x-ray sensing"
        url="/services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Engineering and Consultancy Services",
          "description": "Expert engineering services for flow measurement and sensing applications",
          "provider": {
            "@type": "Organization",
            "name": "Saher Flow Solutions"
          },
          "serviceType": [
            "Flow Measurement Consultancy",
            "Imaging & Sensing Design", 
            "Engineering & Product Design"
          ],
          "areaServed": {
            "@type": "Place",
            "name": "Global"
          }
        }}
      />
    <section id="services" className="py-24 dark:bg-gray-900 pt-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our decade-long experience with commercialization of a deep-tech solution for the energy industry, has honed our multidisciplinary skills required to conduct complex R&D projects and to deliver highly specialized services in different engineering fields.
          </p>
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

                  <a
                    href="/contact"
                    className="inline-block bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors duration-200"
                  >
                    Request Consultation
                  </a>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-navy-100 to-navy-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                    <div className="aspect-video bg-white dark:bg-gray-600 rounded-xl shadow-lg overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        onError={(e) => handleImageError(e, service.fallbackImage)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Brochure with Preloaded PDF */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Comprehensive Services Brochure</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Detailed information about all our service offerings
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="aspect-[4/3] w-full bg-white dark:bg-gray-700 flex items-center justify-center relative">
              {isPDFLoaded ? (
                <iframe
                  src={`https://docs.google.com/viewerng/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
                  className="w-full h-full border-0"
                  title="Services Brochure Preview"
                />
              ) : (
                <div className="text-center p-8">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
                  <FileText size={64} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Loading Services Brochure...</h3>
                  <p className="text-gray-500 dark:text-gray-400">Complete overview of our technical capabilities</p>
                </div>
              )}
              
              {/* Overlay with buttons */}
              <div className="absolute bottom-4 right-4 flex gap-3">
                <button
                  onClick={() => setShowPDFViewer(true)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  <Eye size={16} />
                  Full View
                </button>
                <a
                  href={pdfUrl}
                  download
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {showPDFViewer && (
        <PDFViewer 
          url={pdfUrl}
          title="Services Brochure"
        />
      )}
    </section>
    </>
  );
};

export default Services;