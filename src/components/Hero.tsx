import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Code, Shield, HardHat } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [headRotation, setHeadRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      const moveX = (x - 0.5) * 24; // Lebih halus
      const moveY = (y - 0.5) * 24;
      // Parallax
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((elem, index) => {
        const el = elem as HTMLElement;
        const factor = 0.12 + index * 0.08; // Faktor lebih smooth
        el.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
      });
      // Robot head rotation
      const centerX = left + width / 2;
      const dx = clientX - centerX;
      const dy = clientY - (top + 400 * (height / 900));
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      setHeadRotation(angle / 3); // Lebih natural
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-pattern">
      {/* Animated AI Robot SVG Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-ai-bg">
          <g>
            <ellipse cx="720" cy="450" rx="400" ry="180" fill="#1e293b" fillOpacity="0.18">
              <animate attributeName="rx" values="400;420;400" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="ry" values="180;200;180" dur="6s" repeatCount="indefinite"/>
            </ellipse>
            {/* Robot Baru */}
            <g>
              {/* Kepala dengan rotasi mengikuti kursor */}
              <g className="robot-head" style={{ transform: `rotate(${headRotation}deg)`, transformOrigin: '720px 340px' }}>
                <rect x="650" y="270" rx="32" ry="32" width="140" height="120" fill="#b0c4d6" stroke="#222" strokeWidth="4"/>
                {/* Wajah biru */}
                <rect x="670" y="290" rx="18" ry="18" width="100" height="80" fill="#4fc3f7" stroke="#333" strokeWidth="3"/>
                {/* Mata besar */}
                <ellipse cx="700" cy="330" rx="22" ry="22" fill="#fff" stroke="#222" strokeWidth="3"/>
                <ellipse cx="740" cy="330" rx="22" ry="22" fill="#fff" stroke="#222" strokeWidth="3"/>
                <ellipse cx="700" cy="330" rx="10" ry="10" fill="#ffe600" stroke="#222" strokeWidth="2"/>
                <ellipse cx="740" cy="330" rx="10" ry="10" fill="#ffe600" stroke="#222" strokeWidth="2"/>
                <ellipse cx="700" cy="330" rx="4" ry="4" fill="#222"/>
                <ellipse cx="740" cy="330" rx="4" ry="4" fill="#222"/>
                {/* Titik biru di wajah */}
                <ellipse cx="720" cy="350" rx="4" ry="4" fill="#1976d2"/>
                {/* Mulut */}
                <rect x="710" y="355" width="20" height="8" rx="4" fill="#222"/>
                {/* Antena */}
                <rect x="715" y="250" width="10" height="30" rx="5" fill="#1976d2"/>
                <ellipse cx="720" cy="250" rx="10" ry="8" fill="#ffe600" stroke="#1976d2" strokeWidth="2"/>
              </g>
              {/* Badan */}
              <g className="robot-body">
                <rect x="670" y="390" width="100" height="110" rx="30" fill="#b0c4d6" stroke="#222" strokeWidth="4"/>
                <ellipse cx="720" cy="445" rx="32" ry="32" fill="#fff" stroke="#1976d2" strokeWidth="3"/>
                <ellipse cx="720" cy="445" rx="12" ry="12" fill="#b0c4d6"/>
                {/* Lampu dada */}
                <ellipse cx="720" cy="445" rx="8" ry="8" fill="#ff9800"/>
              </g>
              {/* Lengan kiri */}
              <g className="robot-arm-left">
                <rect x="630" y="410" width="40" height="90" rx="20" fill="#8d99ae" stroke="#222" strokeWidth="3"/>
                <ellipse cx="650" cy="500" rx="18" ry="18" fill="#b0c4d6" stroke="#222" strokeWidth="2"/>
              </g>
              {/* Lengan kanan */}
              <g className="robot-arm-right">
                <rect x="770" y="410" width="40" height="90" rx="20" fill="#8d99ae" stroke="#222" strokeWidth="3"/>
                <ellipse cx="790" cy="500" rx="18" ry="18" fill="#b0c4d6" stroke="#222" strokeWidth="2"/>
              </g>
              {/* Kaki kiri */}
              <g className="robot-leg-left">
                <rect x="690" y="500" width="24" height="80" rx="12" fill="#8d99ae" stroke="#222" strokeWidth="2"/>
                <ellipse cx="702" cy="580" rx="18" ry="10" fill="#b0c4d6" stroke="#222" strokeWidth="2"/>
              </g>
              {/* Kaki kanan */}
              <g className="robot-leg-right">
                <rect x="726" y="500" width="24" height="80" rx="12" fill="#8d99ae" stroke="#222" strokeWidth="2"/>
                <ellipse cx="738" cy="580" rx="18" ry="10" fill="#b0c4d6" stroke="#222" strokeWidth="2"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute inset-0 bg-dark-bg/70 backdrop-blur-sm"></div>
      
      <div ref={heroRef} className="container px-4 mx-auto z-10 py-32 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2 mt-16 md:mt-0">
            <p className="text-primary font-medium mb-4 tracking-wider">WELCOME TO MY PORTFOLIO</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6 heading-text-shadow">
              <span className="text-white">I'm </span>
              <span className="text-gradient">Nofrinto Flory</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
              Specializing in <span className="text-primary font-semibold">K3 Migas</span> and <span className="text-secondary font-semibold">Cyber Security</span>, 
              bringing safety and digital protection to heavy equipment operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="btn btn-primary" onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  window.scrollTo({
                    top: portfolioSection.offsetTop - 80,
                    behavior: 'smooth',
                  });
                }
              }}>
                View Portfolio
              </button>
              <button className="btn btn-outline" onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth',
                  });
                }
              }}>
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Profile Image Placeholder */}
              <div className="w-full h-full rounded-full bg-dark-card border-4 border-primary overflow-hidden relative animate-pulse-slow flex items-center justify-center">
                <img
                  src="/images/profile.png"
                  alt="Foto Profil Nofrinto Flory"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              {/* Nama NF di bawah foto */}
              <div className="mt-4 flex justify-center">
                <span className="text-2xl font-bold text-primary">NF</span>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-dark-card rounded-lg border border-dark-border flex items-center justify-center parallax-element animate-float">
                <HardHat size={32} className="text-primary" />
              </div>
              
              <div className="absolute -bottom-2 -left-6 w-16 h-16 bg-dark-card rounded-lg border border-dark-border flex items-center justify-center parallax-element animate-float" style={{ animationDelay: '1s' }}>
                <Shield size={32} className="text-secondary" />
              </div>
              
              <div className="absolute top-1/2 -right-12 w-16 h-16 bg-dark-card rounded-lg border border-dark-border flex items-center justify-center parallax-element animate-float" style={{ animationDelay: '2s' }}>
                <Code size={32} className="text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToAbout}>
        <ChevronDown size={32} className="text-primary" />
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 rounded-full bg-secondary/5 blur-3xl"></div>
    </section>
  );
};

export default Hero;