import React, { useState } from 'react';
import { MapPin, Briefcase, Clock, Users } from 'lucide-react';

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs = [
    {
      id: 'senior-flow-engineer',
      title: 'Senior Flow Measurement Engineer',
      location: 'Houston, TX',
      department: 'Engineering',
      type: 'Full-time',
      description: 'Lead development of next-generation multiphase flow meters. Join our team of innovators working on cutting-edge DMOR technology.',
      requirements: [
        '10+ years experience in flow measurement',
        'PhD in Chemical/Petroleum Engineering',
        'Experience with multiphase flow systems',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Comprehensive health benefits',
        'Professional development budget',
        'Flexible work arrangements'
      ]
    },
    {
      id: 'software-developer',
      title: 'Software Developer - Digital Twin',
      location: 'Remote',
      department: 'Software',
      type: 'Full-time',
      description: 'Develop advanced digital twin modeling software for oil and gas production optimization. Work with machine learning and real-time data processing.',
      requirements: [
        '5+ years software development experience',
        'Proficiency in Python, C++, and JavaScript',
        'Experience with ML/AI frameworks',
        'Knowledge of industrial IoT systems'
      ],
      benefits: [
        'Remote-first culture',
        'Stock options',
        'Learning and development budget',
        'Top-tier equipment and tools'
      ]
    },
    {
      id: 'field-technician',
      title: 'Field Service Technician',
      location: 'Middle East',
      department: 'Operations',
      type: 'Full-time',
      description: 'Install, maintain, and support flow measurement systems at client locations. Travel required.',
      requirements: [
        'Technical diploma or equivalent',
        '3+ years instrumentation experience',
        'Willingness to travel internationally',
        'Strong troubleshooting skills'
      ],
      benefits: [
        'Travel allowances and accommodations',
        'International experience',
        'Technical training programs',
        'Career progression opportunities'
      ]
    }
  ];

  const openApplication = (jobId: string) => {
    setSelectedJob(jobId);
  };

  const closeApplication = () => {
    setSelectedJob(null);
  };

  return (
    <section id="careers" className="py-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Build the future of flow measurement technology with us
          </p>
        </div>
      </div>

      {/* Culture & Values */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that's revolutionizing the oil and gas industry with innovative measurement solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users size={48} />,
                title: 'Innovation Culture',
                description: 'Work on cutting-edge technology that shapes the industry future'
              },
              {
                icon: <Briefcase size={48} />,
                title: 'Growth Opportunities',
                description: 'Clear career paths with mentorship and development programs'
              },
              {
                icon: <Clock size={48} />,
                title: 'Work-Life Balance',
                description: 'Flexible schedules and remote work options'
              },
              {
                icon: <MapPin size={48} />,
                title: 'Global Impact',
                description: 'Projects that make a difference in energy production worldwide'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="text-yellow-500 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Discover exciting opportunities to advance your career
            </p>
          </div>

          <div className="space-y-8">
            {jobs.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-navy-900 mb-3">{job.title}</h3>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Briefcase size={16} />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock size={16} />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">{job.description}</p>
                    </div>

                    <div className="flex flex-col gap-3 lg:flex-shrink-0">
                      <button 
                        onClick={() => openApplication(job.id)}
                        className="bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors duration-200"
                      >
                        Apply Now
                      </button>
                      <button className="border-2 border-navy-900 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-navy-900 hover:text-white transition-all duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto m-4">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-navy-900">Apply for Position</h2>
                <button 
                  onClick={closeApplication}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position
                  </label>
                  <input 
                    type="text"
                    value={jobs.find(j => j.id === selectedJob)?.title || ''}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="Tell us why you're perfect for this role..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV
                  </label>
                  <input 
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    type="submit"
                    className="flex-1 bg-navy-900 text-white py-4 rounded-lg font-semibold hover:bg-navy-800 transition-colors duration-200"
                  >
                    Submit Application
                  </button>
                  <button 
                    type="button"
                    onClick={closeApplication}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Careers;