import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-center">
          <a href="#home" className="text-2xl font-bold font-montserrat text-gradient mb-4">
            NF
            <span className="text-white ml-2">
              <ChevronRight size={16} className="inline" />
              Portfolio
            </span>
          </a>
          
          <p className="text-gray-400 mb-6 text-center">
            Bridging physical and digital safety with expertise in K3 Migas and Cyber Security.
          </p>
          
          <div className="flex space-x-4 mb-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <div className="w-full border-t border-dark-border my-4"></div>
          
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Nofrinto Flory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Import missing component
import { Linkedin, Github, Mail } from 'lucide-react';

export default Footer;