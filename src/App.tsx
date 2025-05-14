import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';
import { ArrowUp } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // For scroll to top button
      setShowScrollTop(window.scrollY > 500);
      
      // For active section
      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // If the section is in view (adjust the values as needed)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="circuit-pattern">
      <ScrollToTop />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      
      {/* Scroll to Top Button */}
      <button
        className={`fixed right-6 bottom-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-30 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;