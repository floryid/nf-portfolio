import React, { useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: 'safety' | 'cyber' | 'both';
  image: string;
  description: string;
  link?: string;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'safety' | 'cyber' | 'both'>('all');
  const [openModal, setOpenModal] = useState<number | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'K3 Safety Implementation for Mining Operation',
      category: 'safety',
      image: '/public/images/k3safety.jpg',
      description: 'Comprehensive safety program implemented for a large-scale mining operation. Included risk assessment, safety protocols, emergency response planning, and regular safety drills.',
    },
    {
      id: 2,
      title: 'Cyber Security Audit for Industrial Control Systems',
      category: 'cyber',
      image: 'public/images/sybersecurity.jpg',
      description: 'Performed a thorough security audit of industrial control systems, identifying vulnerabilities and implementing security measures to protect against cyber threats.',
    },
    {
      id: 3,
      title: 'Safety & Security Integration for Oil Platform',
      category: 'both',
      image: 'public/images/k3oil.jpg',
      description: 'Integrated physical safety protocols with digital security systems for an offshore oil platform, ensuring comprehensive protection against both operational and cyber threats.',
    },
    {
      id: 4,
      title: 'K3 Training Program Development',
      category: 'safety',
      image: 'public/images/k3trainingpd.jpg',
      description: 'Developed and led a comprehensive K3 training program for new employees, covering safety regulations, hazard identification, and emergency response procedures.',
    },
    {
      id: 5,
      title: 'Network Security Enhancement for Remote Facilities',
      category: 'cyber',
      image: 'public/images/networksecurity.jpg',
      description: 'Designed and implemented enhanced network security measures for remote industrial facilities, ensuring secure data transmission and access control.',
    },
    {
      id: 6,
      title: 'Integrated Safety Management System',
      category: 'both',
      image: 'public/images/k3sms.jpg',
      description: 'Developed an integrated safety management system that combines traditional safety protocols with digital security measures for a holistic approach to risk management.',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Portfolio</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`px-6 py-2 rounded-full border-2 transition-all ${
              activeCategory === 'all'
                ? 'border-primary bg-primary/20 text-primary'
                : 'border-dark-border text-gray-300 hover:border-primary hover:text-primary'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Projects
          </button>
          <button
            className={`px-6 py-2 rounded-full border-2 transition-all ${
              activeCategory === 'safety'
                ? 'border-secondary bg-secondary/20 text-secondary'
                : 'border-dark-border text-gray-300 hover:border-secondary hover:text-secondary'
            }`}
            onClick={() => setActiveCategory('safety')}
          >
            K3 Safety
          </button>
          <button
            className={`px-6 py-2 rounded-full border-2 transition-all ${
              activeCategory === 'cyber'
                ? 'border-accent bg-accent/20 text-accent'
                : 'border-dark-border text-gray-300 hover:border-accent hover:text-accent'
            }`}
            onClick={() => setActiveCategory('cyber')}
          >
            Cyber Security
          </button>
          <button
            className={`px-6 py-2 rounded-full border-2 transition-all ${
              activeCategory === 'both'
                ? 'border-primary bg-primary/20 text-primary'
                : 'border-dark-border text-gray-300 hover:border-primary hover:text-primary'
            }`}
            onClick={() => setActiveCategory('both')}
          >
            Integrated Projects
          </button>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card overflow-hidden group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    className="btn btn-primary mr-3"
                    onClick={() => setOpenModal(item.id)}
                  >
                    <Info size={18} className="mr-2" />
                    Details
                  </button>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      View
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      item.category === 'safety'
                        ? 'bg-secondary/20 text-secondary'
                        : item.category === 'cyber'
                        ? 'bg-accent/20 text-accent'
                        : 'bg-primary/20 text-primary'
                    }`}
                  >
                    {item.category === 'safety'
                      ? 'K3 Safety'
                      : item.category === 'cyber'
                      ? 'Cyber Security'
                      : 'Integrated'}
                  </span>
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {openModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpenModal(null)}
          ></div>
          
          {openModal !== null && (
            <div className="bg-dark-card border border-dark-border rounded-lg max-w-2xl w-full p-6 z-10 relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setOpenModal(null)}
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img
                    src={portfolioItems.find(item => item.id === openModal)?.image}
                    alt={portfolioItems.find(item => item.id === openModal)?.title}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                
                <div className="md:w-1/2">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      portfolioItems.find(item => item.id === openModal)?.category === 'safety'
                        ? 'bg-secondary/20 text-secondary'
                        : portfolioItems.find(item => item.id === openModal)?.category === 'cyber'
                        ? 'bg-accent/20 text-accent'
                        : 'bg-primary/20 text-primary'
                    }`}
                  >
                    {portfolioItems.find(item => item.id === openModal)?.category === 'safety'
                      ? 'K3 Safety'
                      : portfolioItems.find(item => item.id === openModal)?.category === 'cyber'
                      ? 'Cyber Security'
                      : 'Integrated'}
                  </span>
                  
                  <h3 className="text-xl font-montserrat font-semibold text-white mt-3 mb-4">
                    {portfolioItems.find(item => item.id === openModal)?.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {portfolioItems.find(item => item.id === openModal)?.description}
                  </p>
                  
                  {portfolioItems.find(item => item.id === openModal)?.link && (
                    <a
                      href={portfolioItems.find(item => item.id === openModal)?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Visit Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-secondary/5 blur-3xl -z-10"></div>
    </section>
  );
};

// Import missing component
import { X } from 'lucide-react';

export default Portfolio;