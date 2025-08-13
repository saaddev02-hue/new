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
  Tag,
  Microscope,
  Wrench,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';
import { getRecentNews, NewsArticle } from '../utils/newsLoader';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [recentNews, setRecentNews] = useState<NewsArticle[]>([]);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  // Load recent news (only 3)
  useEffect(() => {
    const loadNews = async () => {
      try {
        const news = await getRecentNews(3);
        setRecentNews(news);
      } catch (error) {
        console.error('Error loading recent news:', error);
      }
    };
    loadNews();
  }, []);

  // Hero background images
  const heroImages = [
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555754/High-Res-render-min_oqcyvr.png',
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1754556084/combined-enhanced_image-1024x591_pkpnc5.png',
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555852/MPFM-with-SKID-1536x1187_sjrvdp.png'
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
      title: "Only One Time Calibration Required",
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

  const services = [
    {
      icon: <Gauge size={48} />,
      title: 'Flow Measurement Consultancy',
      description: 'Expert guidance on multiphase flow measurement solutions tailored to your specific needs.',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Flow_p9rkop.png',
    },
    {
      icon: <Microscope size={48} />,
      title: 'Imaging & Sensing Design',
      description: 'Customized microwave and x-ray sensing solutions for various industrial applications.',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555205/x-ray_bhg3rp.png',
    },
    {
      icon: <Wrench size={48} />,
      title: 'Engineering & Product Design',
      description: 'Comprehensive engineering services from concept to deployment with IoT integration.',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555205/Saher-Flow-Meter-in-DNV_gmjfnr.jpg',
    }
  ];

  // Enhanced Team members data with more detailed information
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Muhammad Akram Karimi',
      role: 'Co-founder / CTO',
      location: 'Makkah, Saudi Arabia',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555205/Dr.Akram__wtiwxi.png',
      description: 'Co-founder & CTO at SaherFlow, pioneering non-gamma multiphase flow meters with over a decade of R&D in microwave sensing.',
      longDescription: 'Dr. Karimi leads Saher Flow Solutions in developing revolutionary non-gamma multiphase flow meters for the oil and gas industry. With over 10 years of R&D in microwave sensing, he has authored 20+ research papers, filed 10+ patents, and secured $3M+ in funding from Saudi Aramco and KAUST Innovation Fund. He has built a 20+ member team, driven product innovation from concept to field deployment, and collaborated globally to advance multiphase flow measurement technologies.',
      expertise: [
        'Microwave Sensing',
        'Multiphase Flow Measurement',
        'Product Development',
        'Startup Structuring & Fundraising',
        'Team Leadership'
      ],
      achievements: [
        'Co-founder of Saher Flow Solutions',
        'Inventor of 10+ patents',
        '20+ peer-reviewed publications',
        '$3M+ funding secured',
        'Led 20+ engineers & scientists in product commercialization'
      ],
      education: 'Ph.D. in RF/Microwave Engineering, KAUST'
    },
    {
      id: 2,
      name: 'Dr. Atif Shamim',
      role: 'Chair Professor, ECE at KAUST & Technical Director at SaherFlow',
      location: 'Makkah, Saudi Arabia',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/ATIF-SHAMIM-2020_v6cyab.png',
      description: 'IEEE Fellow, Chair Professor at KAUST, and pioneer in innovative antenna and sensing technologies with 400+ publications and 40 patents.',
      longDescription: 'Dr. Atif Shamim is Chair Professor of Electrical and Computer Engineering at KAUST, leading the IMPACT Lab. He is a Fellow of IEEE and a globally recognized leader in antenna design, RF systems, and wireless sensing technologies, integrating CMOS and additive manufacturing for flexible and wearable systems. He holds a Ph.D. in Electronics from Carleton University and has authored 400+ publications, 1 book, and 40 patents. His work has earned prestigious awards, including the King’s Prize for Best Innovation, OCRI Researcher of the Year, multiple IEEE Best Paper Awards, and several international design competition wins. Beyond academia, he has successfully commercialized technologies for the oil industry, winning Canada’s national business plan competition and OCRI Entrepreneur of the Year.',
      expertise: [
        'Antenna Design',
        'RF & Microwave Systems',
        'Wireless Sensing',
        'Additive Manufacturing for Electronics',
        'CMOS Integration'
      ],
      achievements: [
        'IEEE Fellow',
        '400+ publications & 40 patents',
        'Multiple IEEE Best Paper Awards',
        'King’s Prize for Best Innovation (2018)',
        'OCRI Researcher & Entrepreneur of the Year'
      ],
      education: 'Ph.D. in Electronics, Carleton University; B.Sc. in Electrical Engineering, UET Lahore'
    }
    , {
      id: 3,
      name: 'Dr. Shehab Ahmed',
      role: 'Business Advisor',
      location: 'GCC Region',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Dr.-Shehab_aq2wvj.jpg',
      description: 'Strategic business advisor with deep expertise in GCC energy markets and strategic partnerships.',
      longDescription: 'Dr. Shehab Ahmed serves as a trusted business advisor to Saher Flow Solutions, offering strategic insight rooted in extensive experience across energy markets in the GCC region. With a strong focus on facilitating strategic partnerships, market expansion, and business development, he helps align the company’s technical innovations with regional market needs and operational success.',
      expertise: [
        'GCC Energy Market Strategy',
        'Business Development',
        'Strategic Partnerships',
        'Market Expansion',
        'Client Relations'
      ],
      achievements: [
        'Guided strategic market entry in GCC energy sectors',
        'Advised on key business development initiatives',
        'Strengthened client and partner relationships in the region'
      ],
      education: ''
    }
    ,
    {
      id: 7,
      name: 'Dr. Zubair Akhter',
      role: 'Senior Antenna / RF Engineer',
      location: 'Abu Dhabi, UAE',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/Dr.Zubair-e1648630424669_mnj1he.jpg',
      description: 'RF and microwave specialist with extensive expertise in antenna design, high-power electromagnetic systems, and innovative RF solutions.',
      longDescription: 'Dr. Zubair Akhter is a Senior Antenna Engineer at the High Power Electromagnetic (EM) Division of the Directed Energy Research Center, Technology Innovation Institute (TII) in Abu Dhabi, UAE. He leads pioneering research and development in advanced antenna systems, high-power microwave technologies, and thermal effect mitigation for extreme operational environments. His career spans groundbreaking projects in 5G intelligent reflecting surfaces, UAV conformal antennas, and microwave sensing systems for industrial applications. With a PhD in RF and Microwave Engineering from IIT Kanpur and a teaching credential from Harvard University, Dr. Akhter combines deep technical knowledge with a passion for mentoring and innovation.',
      expertise: [
        'Antenna Design & Optimization',
        'High-Power Electromagnetic Systems',
        'Thermal Analysis for RF Devices',
        'RF/Microwave Measurement & Testing',
        'Intelligent Reflecting Surfaces (5G/6G)',
        'Microwave Sensing Technologies'
      ],
      achievements: [
        'Led development of high-performance antennas including reflectors, horns, helices, arrays, and patches',
        'Pioneered thermal effect mitigation strategies for high-power microwave systems',
        'Executed advanced multipaction, PIM, and corona testing methodologies',
        'Developed UAV ultra-thin conformal antennas in collaboration with Lockheed Martin',
        'Designed 3-phase compact MPFM meter using microwave sensing for the oil & gas industry',
        'Awarded Early Career Researcher Teaching Award at KAUST'
      ],
      education: [
        'PhD in RF and Microwave Engineering – IIT Kanpur',
        'Higher Education Teaching Certificate – Harvard University'
      ]
    }
    ,

    {
      id: 4,
      name: 'Babar Zia',
      role: 'Office Manager',
      location: 'Lahore, Pakistan',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/Babar-Zia-Picture_kxkfjw.jpg',
      description: 'Managing daily operations at our Thuwal office with expertise in organizational excellence and administrative coordination.',
      longDescription: 'Babar ensures smooth daily operations at our Thuwal headquarters, managing administrative functions and coordinating between different teams to maintain operational excellence and efficiency.',
      expertise: ['Operations Management', 'Administration', 'Team Coordination', 'Process Optimization', 'Office Management'],
      achievements: ['10+ years operations experience', 'Process improvement initiatives', 'Team coordination expertise'],
      education: 'MBA in Operations Management',

    },

    {
      id: 5,
      name: 'Muhammad Ammar Ayub',
      role: 'Mechanical Team Lead',
      location: 'Lahore, Pakistan',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/Ammar-Ayub-Picture_azw5hy.jpg',
      description: 'Mechanical engineer and team lead specializing in precision product development, CFD simulations, and design optimization for manufacturability.',
      longDescription: 'Muhammad Ammar Ayub is a Mechanical Team Lead at Saher Flow Solutions with over six years of expertise in advanced mechanical design and product development. He drives innovation by implementing Design for Assembly (DFA) and Design for Manufacturability (DFM) principles, conducting detailed CFD simulations and stress analysis to ensure product performance and reliability. His leadership spans hardware development, engineering documentation, 3D rendering, and rigorous product testing. Prior to his current role, Ammar served as a Mechanical Design Engineer at MGA Industries, focusing on die design, jigs and fixtures, and manufacturing process optimization. With a BS in Mechanical Engineering from COMSATS and certifications in CAD/CAM, he combines technical depth with a strong commitment to engineering excellence.',
      expertise: [
        'Design for Assembly (DFA)',
        'Design for Manufacturability (DFM)',
        'CFD Simulations',
        'Stress Analysis',
        '3D Modeling & Rendering',
        'SOLIDWORKS',
        'ANSYS',
        'MATLAB',
        'Die & Fixture Design',
        'Product Testing & Validation'
      ],
      achievements: [
        'Led mechanical design efforts for advanced flow measurement products at Saher Flow Solutions',
        'Implemented DFA and DFM principles to streamline manufacturing processes',
        'Conducted high-fidelity CFD simulations to optimize product performance',
        'Oversaw complete product lifecycle from concept to deployment',
        'Designed dies, jigs, and fixtures to improve manufacturing efficiency at MGA Industries',
        'Produced engineering animations and documentation for improved communication'
      ],
      education: [
        'BS in Mechanical Engineering – COMSATS Institute of Information and Technology',
        '3D CAD/CAM Certification – Pakistan Industrial Technical Assistance Center'
      ]
    },
    {
      id: 6,
      name: 'Rashad Maqsood',
      role: 'Software Project Manager',
      location: 'Makkah, Saudi Arabia',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Rashad_lddbgq.jpg',
      description: 'Versatile software project manager and engineer specializing in .NET, smart metering, embedded systems, and oil & gas instrumentation.',
      longDescription: 'Rashad Maqsood is a Software Project Manager at Saher Flow Solutions with over a decade of experience spanning smart metering, document intelligence systems, custom application development, and oil & gas instrumentation. He has led teams in building robust solutions for automated meter reading, prepaid metering, and real-time data analytics using C#, .NET, Electron, AWS, and advanced communication protocols. His background includes key roles at MicroTech Industries, FiveRivers Technologies, and NorthBay Solutions, delivering high-performance software in both industrial and financial domains. At SaherFlow, he contributes to the R&D of cutting-edge multiphase flow meters by integrating multiple sensors, x-ray sources, and detectors into advanced measurement systems.',
      expertise: [
        '.NET Development (C#, WPF, .NET Core)',
        'Smart Metering & AMI Solutions',
        'Embedded Systems Debugging',
        'Multiphase Flow Metering',
        'Agile & Scrum Project Management'
      ],
      achievements: [
        'Led development of SmartWindows cross-platform state management software',
        'Developed advanced automated metering and energy audit solutions',
        'Contributed to SEC filing analysis system at NorthBay Solutions',
        'Integrated multi-sensor systems for oil & gas instrumentation',
        'Over 10 years of cross-industry software development leadership'
      ],
      education: 'MS in Computer Science, Information Technology University; BS in Computer Science, COMSATS Institute of Information Technology'
    }
    ,
    {
      id: 7,
      name: 'Fahad Usman Meer',
      role: 'Senior Software Engineer',
      location: 'Makkah, Saudi Arabia',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555208/Fahad-Usman-Meer-Sr.-Software-Engineer_cc1ssv.jpg',
      description: 'Senior software developer with expertise in full-stack .NET solutions, multi-threaded applications, and hardware-software integration for oil & gas measurement systems.',
      longDescription: 'Fahad Usman Meer is a senior software developer at Saher Flow Solutions with extensive experience in building robust business and industrial applications. Since 2014, he has specialized in .NET technologies, C#, and full-stack web and desktop development. At SaherFlow, he leads the development of multi-threaded proprietary software capable of interfacing with hardware devices such as Vector Network Analyzers to collect and process real-time sensor data for multiphase flow meters in the oil and gas industry. His prior experience includes key roles at NorthBay Solutions, Strategic Systems International, and MicroTech Industries, where he developed background services, WCF APIs, and advanced search solutions using Apache SOLR. He is proficient in SQL Server, MySQL, WPF, WinForms, RESTful APIs, and microservices, with a strong focus on high-performance, user-friendly applications.',
      expertise: [
        'C# & .NET Framework / .NET Core',
        'WPF, WinForms, WCF',
        'Multi-threaded Application Development',
        'RESTful APIs & Microservices',
        'Hardware-Software Integration'
      ],
      achievements: [
        'Developed proprietary multi-threaded oil & gas measurement software',
        'Integrated VNAs with real-time sensor data visualization',
        'Built advanced search and indexing systems using Apache SOLR',
        'Full-stack development in web, desktop, and background services',
        '8+ years of professional software development experience'
      ],
      education: 'BS in Information Technology, University of the Punjab'
    },

    {
      id: 8,
      name: 'Saad Mahmood',
      role: 'Software Engineer',
      location: 'Lahore, Punjab, Pakistan',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639157/saad-profile_swp9ep.jpg',
      description: 'Full-stack software engineer specializing in scalable, user-focused web and mobile applications using Flutter, React, Node.js, and modern databases.',
      longDescription: 'Saad Mahmood is a software engineer at Saher Flow Solutions with a passion for building high-performance, maintainable, and user-centric applications. He brings hands-on experience in mobile and web development using Flutter, React, Node.js/Express, MongoDB, and PostgreSQL. Skilled in REST API design, third-party integrations, and end-to-end feature development, Saad has contributed to diverse projects, from Android apps at Lalaland.pk to backend API systems at DHA Lahore. He also has teaching experience in computer science and holds IBM certifications in DevOps, Cloud, Agile, and Full Stack Development. His approach emphasizes clean coding, scalability, and effective cross-functional collaboration within Agile environments.',
      expertise: [
        'Flutter & React',
        'Node.js / Express',
        'MongoDB & PostgreSQL',
        'REST API Development',
        'Agile Development Practices'
      ],
      achievements: [
        'Developed cross-platform mobile and web applications',
        'Integrated third-party APIs and services for seamless UX',
        'Built backend systems for real estate and e-commerce platforms',
        'Earned IBM DevOps, Cloud, Agile, and Full Stack certifications',
        'Experience in both teaching and software engineering roles'
      ],
      education: 'BS in Software Engineering, University of Central Punjab'
    },
    {
      id: 9,
      name: 'Arsalan Raza',
      role: 'Procurement Manager',
      location: 'Jaddah, Saudi Arabia',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754562693/Arsalan-Raza_rcd4rs.png',
      description: 'Skilled procurement manager focused on streamlining supply chain operations and vendor management.',
      longDescription: 'Arsalan Raza serves as Procurement Manager at Saher Flow Solutions, where he optimizes sourcing strategies, manages supplier relationships, and ensures efficient supply chain operations. Bringing a pragmatic approach to procurement, Arsalan is committed to delivering quality and reliability in procurement while supporting operational excellence through optimized inventory, cost efficiency, and vendor performance.',
      expertise: [
        'Vendor Management',
        'Strategic Sourcing',
        'Supply Chain Optimization',
        'Inventory Control',
        'Cost Analysis'
      ],
      achievements: [
        'Implemented streamlined procurement workflows for improved cost savings',
        'Built strong supplier partnerships to ensure product quality and delivery',
        'Optimized inventory processes for better operational efficiency'
      ],
      education: ''
    },

    {
      id: 10,
      name: 'Muneeb Haider',
      role: 'Accountant',
      location: 'Jeddah, Saudi Arabia',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Syed-Muneeb-Haider-Accountant-Business-Administrator_aerlfp.jpg',
      description: 'Accountant and ACCA candidate specializing in financial forecasting, bookkeeping, and compliance with IFRS standards.',
      longDescription: 'Muneeb Haider is an Accountant at Saher Flow Solutions with over three years of professional experience in financial management and compliance. As an ACCA candidate and AAT member, he excels in financial forecasting, bank reconciliation, receivables and payables management, and VAT/WHT compliance. His role also spans cross-departmental support in administration, HR, and supply chain operations. Previously, he interned at Brainnest, where he prepared and analyzed financial statements using key financial ratios. Muneeb’s meticulous approach to accounting ensures accuracy, transparency, and informed decision-making for the organizations he supports.',
      expertise: [
        'Financial Forecasting',
        'Bookkeeping',
        'Bank Reconciliation',
        'IFRS Compliance',
        'Receivables & Payables Management',
        'VAT & WHT Records',
        'Client & Supplier Relations',
        'Financial Statement Analysis',
        'Budgeting',
        'RFQ Handling'
      ],
      achievements: [
        'Implemented accurate bookkeeping systems aligning with IFRS standards',
        'Streamlined receivables and payables tracking for improved cash flow management',
        'Maintained precise VAT and WHT records ensuring tax compliance',
        'Supported HR and supply chain teams with administrative tasks',
        'Earned AAT Membership (MAAT) and ACCA Diploma in Accounting and Business'
      ],
      education: [
        'Association of Chartered Certified Accountants (ACCA) – Part Qualified (2020–2024)',
        'Full Member (MAAT) – Association of Accounting Technicians (2023)',
        'ACCA Diploma in Accounting and Business – RQF Level 4 (2021)'
      ]
    }
    ,
    {
      id: 11,
      name: 'Salem Bawazir',
      role: 'Embedded Design Engineer',
      location: 'Jeddah, Saudi Arabia',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754562693/photo_6059953427796046688_x_1_nsecls.jpg',
      description: 'Electrical and Electronics Engineer specializing in embedded systems, PCB design, and automation.',
      longDescription: 'Salem Bawazir is an Embedded Design Engineer at Saher Flow Solutions with a solid foundation in electrical and electronics engineering. His expertise spans embedded systems, PCB design, electronics troubleshooting, and automation, with hands-on experience in microcontroller programming (PIC, STM32), robotics, and PLC systems. Prior to joining Saher Flow Solutions, Salem worked as a Production Engineer at Al Wefag Trading & Manufacturing Co. Ltd and completed internships as a Robotics Engineer at Smart Methods and as an Electrical/Electronics Trainee at Smart Life Technology and Hamid Nawaz Engineering Services. He is adept with tools like Altium Designer and KiCad, and brings strong problem-solving, time management, and communication skills to every project. Salem is also a certified engineer with the Saudi Council of Engineers and the Board of Engineers Malaysia.',
      expertise: [
        'Embedded Systems Development',
        'PCB Design (Altium Designer, KiCad)',
        'Electronics Troubleshooting & Repair',
        'Microcontroller Programming (PIC, STM32)',
        'Robotics Engineering',
        'PLC Programming',
        'Automation Systems',
        'CFD & ROS Integration',
        'IoT Development'
      ],
      achievements: [
        'Designed and implemented embedded solutions for industrial automation',
        'Completed 12 multi-domain robotics engineering tasks at Smart Methods',
        'Certified Electrical and Electronics Engineer by the Saudi Council of Engineers',
        'Certified Graduate Engineer by the Board of Engineers Malaysia'
      ],
      education: [
        'Bachelor’s Degree in Electrical and Electronics Engineering – Universiti Tenaga Nasional (2018–2022)',
        'Foundation in Engineering – Universiti Tenaga Nasional (2017–2018)'
      ]
    }




  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const nextTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
  };

  const prevTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3));
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

  // Add smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Changing Background */}
      <section className="relative min-h-screen overflow-hidden pt-24 lg:pt-20">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 z-0 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/85 to-navy-700/75 dark:from-gray-900/95 dark:via-gray-800/85 dark:to-gray-700/75 z-10" />
              <img
                src={image}
                alt="Saher Flow Solutions"
                className="w-full h-full object-cover object-center"
                onError={handleImageError}
              />
            </div>
          ))}
        </div>

        <div className="relative z-20 min-h-screen flex items-center py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content - Professional Left Alignment */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    Revolutionary
                    <span className="block text-yellow-400 mt-2">Flow Measurement</span>
                    <span className="block mt-2">Solutions</span>
                  </h1>

                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-semibold mb-8 max-w-3xl">
                    Patented DMOR Technology • Real-time Data • Only One Time Calibration Required
                  </h2>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl">
                    Transform your production with industry-leading multiphase flow meters.
                    Trusted by major oil companies worldwide for accurate, reliable measurements.
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
                    {['Saudi Aramco Pre-Qualified', '±2% Accuracy', '99.8% Uptime', 'Non-Radioactive'].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                        className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-3 rounded-full text-sm sm:text-base font-medium"
                      >
                        <CheckCircle size={16} className="text-yellow-400 flex-shrink-0" />
                        <span className="whitespace-nowrap">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <motion.a
                      href="/products"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="inline-flex items-center justify-center gap-3 bg-yellow-500 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Explore Products
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                    <motion.button
                      onClick={() => setShowVideo(true)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300"
                    >
                      <Play className="w-5 h-5" />
                      Watch Demo
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Optional space for additional elements */}
              <div className="lg:col-span-5 hidden lg:block">
                {/* This space can be used for additional graphics or left empty for clean look */}
              </div>
            </div>
          </div>
        </div>



        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-yellow-500 w-8' : 'bg-white/50 hover:bg-white/70 w-3'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold mb-4 sm:mb-6">
              <Star size={14} className="sm:w-4 sm:h-4" />
              Key Advantages
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4 sm:mb-6">
              Why Choose Saher Flow Solutions?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Revolutionary technology that transforms how the energy industry measures multiphase flow
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {salientFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4 sm:mb-6`}>
                  {feature.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white mb-3 sm:mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4 sm:mb-6">
              Our Product Portfolio
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive range of flow measurement instruments designed for the most demanding applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="aspect-square bg-white dark:bg-gray-600 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    onError={handleImageError}
                  />
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-yellow-500 rounded-lg text-navy-900 flex-shrink-0">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white leading-tight">{product.name}</h3>
                      <p className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm sm:text-base">{product.model}</p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0 sm:w-4 sm:h-4" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>


                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-navy-800 dark:hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4 sm:mb-6">
              Our Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Expert solutions and consultancy services tailored to your measurement requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-700 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-navy-100 to-navy-50 dark:from-gray-800 dark:to-gray-700 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                    onError={handleImageError}
                  />
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-yellow-500 rounded-lg text-navy-900 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white leading-tight">{service.title}</h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>


                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-navy-800 dark:hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="pt-20 md:pt-32 pb-20 md:pb-32 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* ...background... */}

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            // small negative lift on mobile, larger on md+; consistent spacing between items
            className="text-center mb-20 -mt-6 md:-mt-16 space-y-4 md:space-y-6"
          >
            {/* Responsive pill */}
            <div className="inline-flex items-center gap-2 sm:gap-3 md:gap-5 bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 text-yellow-600 dark:text-yellow-400
                      px-4 py-2 sm:px-8 sm:py-3 md:px-14 md:py-5 rounded-full text-sm sm:text-base md:text-2xl font-semibold mx-auto">
              {/* Icon: prefer width/height classes for responsive sizing */}
              <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8" aria-hidden="true" />
              <span>Our Expert Team</span>
            </div>

            {/* Responsive paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
              Our multidisciplinary team drives breakthrough technologies from our Thuwal, Saudi Arabia headquarters,
              bringing together decades of experience in flow measurement innovation.
            </p>
          </motion.div>


          {/* Team Grid with Enhanced Cards */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {teamMembers.slice(slideIndex * 3, slideIndex * 3 + 3).map((member, index) => (
                        <motion.div
                          key={member.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100 dark:border-gray-600 relative overflow-hidden"
                        >
                          {/* Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-navy-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          {/* Content */}
                          <div className="relative z-10">
                            {/* Profile Section */}
                            <div className="text-center mb-6">
                              <div className="relative mb-6">
                                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-yellow-400/20 shadow-xl group-hover:ring-yellow-400/50 transition-all duration-500 group-hover:scale-110">
                                  <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=ffd500&color=1a3a5c&size=200&font-size=0.6`;
                                    }}
                                  />
                                </div>

                              </div>

                              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                                {member.name}
                              </h3>
                              <p className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm sm:text-base">{member.role}</p>
                              <div className="flex items-center justify-center gap-1 text-gray-500 dark:text-gray-400 text-xs mb-4">
                                <MapPin size={12} />
                                <span>{member.location}</span>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed text-center">
                              {member.description}
                            </p>

                            {/* Expertise Tags */}
                            <div className="flex flex-wrap gap-2 justify-center mb-6">
                              {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-3 py-1 bg-gradient-to-r from-navy-100 to-navy-50 dark:from-navy-800 dark:to-navy-700 text-navy-700 dark:text-navy-300 text-xs rounded-full border border-navy-200 dark:border-navy-600 hover:shadow-md transition-shadow duration-300"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>


                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Navigation */}
            {Math.ceil(teamMembers.length / 3) > 1 && (
              <>
                <button
                  onClick={prevTeamSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:-translate-x-7"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextTeamSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:translate-x-7"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Slide Indicators */}
            {Math.ceil(teamMembers.length / 3) > 1 && (
              <div className="flex justify-center mt-12 gap-3">
                {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTeamSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 hover:scale-125 ${currentTeamSlide === index
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 shadow-lg'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-3'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 p-8 bg-gradient-to-r from-navy-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-900 dark:text-white mb-2">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-900 dark:text-white mb-2">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-900 dark:text-white mb-2">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Patents & Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-900 dark:text-white mb-2">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Successful Deployments</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent News Section */}
      {recentNews.length > 0 && (
        <section className="py-12 sm:py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold mb-4 sm:mb-6">
                <Calendar size={14} className="sm:w-4 sm:h-4" />
                Latest Updates
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4 sm:mb-6">
                Recent News & Achievements
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                Stay updated with our latest developments and industry recognition
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {recentNews.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-700 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={handleImageError}
                    />
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        <Tag size={10} className="sm:w-3 sm:h-3" />
                        {article.category}
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                        {formatDate(article.date)}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-navy-900 dark:text-white mb-3 line-clamp-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <a
                      href="/news"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-navy-600 dark:text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-200 text-xs sm:text-sm"
                    >
                      Read More <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href="/news"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-navy-800 dark:hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All News
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-900 dark:to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-2 sm:space-y-4"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">10+</div>
              <div className="text-base sm:text-lg md:text-xl font-semibold">Years Experience</div>
              <div className="text-gray-300 text-sm sm:text-base">Pioneering flow measurement technology</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2 sm:space-y-4"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">99.8%</div>
              <div className="text-base sm:text-lg md:text-xl font-semibold">Uptime Achieved</div>
              <div className="text-gray-300 text-sm sm:text-base">Reliable 24/7 operation</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-2 sm:space-y-4"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">±2%</div>
              <div className="text-base sm:text-lg md:text-xl font-semibold">Measurement Accuracy</div>
              <div className="text-gray-300 text-sm sm:text-base">Industry-leading precision</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-2 sm:space-y-4"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">3+</div>
              <div className="text-base sm:text-lg md:text-xl font-semibold">Countries Served</div>
              <div className="text-gray-300 text-sm sm:text-base">Global deployment success</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-yellow-500 to-yellow-400 text-navy-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Production?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90 px-4">
              Join industry leaders who trust Saher Flow Solutions for their critical flow measurement needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-navy-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-navy-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border-2 border-navy-900 text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-navy-900 hover:text-white transition-all duration-300"
              >
                View Products
                <Gauge className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 pt-20">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-yellow-400/30 shadow-xl mb-4">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedMember.name)}&background=ffd500&color=1a3a5c&size=200&font-size=0.6`;
                      }}
                    />
                  </div>
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300"
                  >
                    <Linkedin size={16} />
                    Connect on LinkedIn
                  </a>
                </div>

                {/* Profile Details */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-navy-900 dark:text-white mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xl text-yellow-600 dark:text-yellow-400 font-semibold mb-2">
                    {selectedMember.role}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-6">
                    <MapPin size={16} />
                    <span>{selectedMember.location}</span>
                  </div>

                  <div className="space-y-6">
                    {/* Long Description */}
                    <div>
                      <h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-3">About</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedMember.longDescription}
                      </p>
                    </div>

                    {/* Education */}
                    <div>
                      <h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-3">Education</h4>
                      <p className="text-gray-600 dark:text-gray-300">{selectedMember.education}</p>
                    </div>

                    {/* Expertise */}
                    <div>
                      <h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.expertise.map((skill: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-navy-100 to-navy-50 dark:from-navy-800 dark:to-navy-700 text-navy-700 dark:text-navy-300 text-sm rounded-full border border-navy-200 dark:border-navy-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {selectedMember.achievements.map((achievement: string, index: number) => (
                          <li key={index} className="flex items-center gap-3">
                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact */}
                    <div>
                      <h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-3">Contact</h4>
                      <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <Mail size={16} />
                        <a href={`mailto:${selectedMember.email}`} className="hover:text-yellow-500 transition-colors">
                          {selectedMember.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal - Fixed YouTube embed and improved mobile responsiveness */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4 lg:p-8">
          <div className="relative bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden w-full h-full sm:w-auto sm:h-auto sm:max-w-6xl shadow-2xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <X size={20} className="sm:w-5 sm:h-5" />
            </button>

            {/* Video Container with proper aspect ratio and mobile optimization */}
            <div className="relative w-full h-full sm:h-auto">
              <div className="aspect-video w-full h-full sm:h-auto">
                <iframe
                  src="https://www.youtube.com/embed/KmRtSAURurM?autoplay=1&rel=0&modestbranding=1&showinfo=0"
                  title="Saher Flow Solutions Demo"
                  className="w-full h-full rounded-lg sm:rounded-xl lg:rounded-2xl"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Optional: Video info section for larger screens */}
            <div className="hidden sm:block p-4 lg:p-6 bg-gray-50 dark:bg-gray-800">
              <h3 className="text-lg lg:text-xl font-bold text-navy-900 dark:text-white mb-2">
                Saher Flow Solutions Technology Demo
              </h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">
                Watch our revolutionary DMOR technology in action and see how we're transforming flow measurement in the energy industry.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;