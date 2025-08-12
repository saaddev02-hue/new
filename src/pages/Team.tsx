import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Team: React.FC = () => {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);

  // Updated team members with Saudi-based roles (removed Hafiz Arsalan and green dots)
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
    <section id="team" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
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
              <div className="text-3xl font-bold text-navy-900 dark:text-yellow-400">10+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Combined Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-navy-900 dark:text-yellow-400">3+</div>
              <div className="text-gray-600 dark:text-gray-300">Countries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-navy-900 dark:text-yellow-400">5+</div>
              <div className="text-gray-600 dark:text-gray-300">Patents & Publications</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-navy-900 dark:text-yellow-400">5+</div>
              <div className="text-gray-600 dark:text-gray-300">Successful Deployments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;