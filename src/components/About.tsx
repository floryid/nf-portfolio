import React from 'react';
import { Shield, HardHat, Award, Briefcase, Calendar, GraduationCap, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Side */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-white">
                Heavy Equipment & Light Vehicle <span className="text-primary">Contractor Professional</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a dedicated professional working at a heavy equipment and light vehicle contractor company, where I combine my expertise in K3 Migas with advanced knowledge in cyber security to ensure both physical and digital safety in high-risk environments.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My unique combination of skills allows me to understand both the operational hazards of industrial environments and the digital threats that modern connected systems face, providing comprehensive protection strategies for critical infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card p-4 flex items-start">
                <Calendar className="text-primary mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-white">Experience</h4>
                  <p className="text-gray-400 text-sm">5+ Years</p>
                </div>
              </div>
              
              <div className="card p-4 flex items-start">
                <Briefcase className="text-primary mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-white">Projects</h4>
                  <p className="text-gray-400 text-sm">Multiple sectors</p>
                </div>
              </div>
              
              <div className="card p-4 flex items-start">
                <GraduationCap className="text-primary mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-white">Education</h4>
                  <p className="text-gray-400 text-sm">Technical specialization</p>
                </div>
              </div>
              
              <div className="card p-4 flex items-start">
                <Award className="text-primary mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-white">Certifications</h4>
                  <p className="text-gray-400 text-sm">Multiple specialized areas</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications Side */}
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-white">
              <span className="text-primary">Certifications</span> & Expertise
            </h3>
            
            <div className="space-y-6">
              <div className="card p-6 hover:transform hover:scale-[1.02] transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <HardHat size={24} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-montserrat font-semibold text-white">K3 Migas Certification</h4>
                </div>
                <p className="text-gray-300">
                  Certified in K3 Migas (Health, Safety, and Environment in Oil and Gas), specialized in ensuring operational safety and minimizing risks in industrial environments. Trained in hazard identification, risk assessment, emergency response, and safety management systems.
                </p>
              </div>
              
              <div className="card p-6 hover:transform hover:scale-[1.02] transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                    <Shield size={24} className="text-secondary" />
                  </div>
                  <h4 className="text-xl font-montserrat font-semibold text-white">Cyber Security Fundamental</h4>
                </div>
                <p className="text-gray-300">
                  Proficient in the fundamentals of cyber security, including network security, vulnerability assessment, threat detection, and security frameworks. Capable of implementing security measures to protect digital assets and information systems from cyber threats.
                </p>
              </div>
              
              <div className="card p-6 hover:transform hover:scale-[1.02] transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                    <Code size={24} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-montserrat font-semibold text-white">Ethical Hacking Fundamental</h4>
                </div>
                <p className="text-gray-300">
                  Trained in ethical hacking principles and practices, including penetration testing, vulnerability exploitation, and security auditing. Skilled in identifying security weaknesses and recommending appropriate countermeasures to strengthen system defenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-72 h-72 rounded-full bg-secondary/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default About;