import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percent: number;
  color: string;
  category: 'technical' | 'safety' | 'cyber';
}

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<boolean>(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const technicalSkills: Skill[] = [
    { name: 'Heavy Equipment Operation', percent: 90, color: 'from-blue-500 to-blue-700', category: 'technical' },
    { name: 'Vehicle Maintenance', percent: 85, color: 'from-blue-500 to-blue-700', category: 'technical' },
    { name: 'Technical Inspection', percent: 80, color: 'from-blue-500 to-blue-700', category: 'technical' },
    { name: 'Project Management', percent: 75, color: 'from-blue-500 to-blue-700', category: 'technical' },
  ];

  const safetySkills: Skill[] = [
    { name: 'K3 Implementation', percent: 95, color: 'from-green-500 to-green-700', category: 'safety' },
    { name: 'Risk Assessment', percent: 90, color: 'from-green-500 to-green-700', category: 'safety' },
    { name: 'Safety Training', percent: 85, color: 'from-green-500 to-green-700', category: 'safety' },
    { name: 'Emergency Response', percent: 80, color: 'from-green-500 to-green-700', category: 'safety' },
  ];

  const cyberSkills: Skill[] = [
    { name: 'Network Security', percent: 85, color: 'from-orange-500 to-orange-700', category: 'cyber' },
    { name: 'Vulnerability Assessment', percent: 80, color: 'from-orange-500 to-orange-700', category: 'cyber' },
    { name: 'Security Auditing', percent: 75, color: 'from-orange-500 to-orange-700', category: 'cyber' },
    { name: 'Penetration Testing', percent: 70, color: 'from-orange-500 to-orange-700', category: 'cyber' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisibleSkills(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <h4 className="text-white font-medium">{skill.name}</h4>
          <span className="text-primary font-semibold">{skill.percent}%</span>
        </div>
        <div className="progress-track">
          <div
            className={`progress-fill bg-gradient-to-r ${skill.color}`}
            style={{
              width: visibleSkills ? `${skill.percent}%` : '0%',
              transitionDelay: `${delay * 0.1}s`,
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-dark-bg/50 relative">
      <div className="container mx-auto px-4" ref={skillsRef}>
        <h2 className="section-heading">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="card p-6 hover:animate-glow">
            <h3 className="text-xl font-montserrat font-bold mb-6 text-primary">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index} />
            ))}
          </div>
          
          {/* Safety Skills */}
          <div className="card p-6 hover:animate-glow">
            <h3 className="text-xl font-montserrat font-bold mb-6 text-secondary">Safety Skills</h3>
            {safetySkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index + 4} />
            ))}
          </div>
          
          {/* Cyber Security Skills */}
          <div className="card p-6 hover:animate-glow">
            <h3 className="text-xl font-montserrat font-bold mb-6 text-accent">Cyber Security Skills</h3>
            {cyberSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index + 8} />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            My diverse skill set combines industrial safety expertise with cutting-edge digital security knowledge, making me uniquely qualified to address the complex challenges facing modern industrial operations.
          </p>
          <button className="btn btn-primary">Download My CV</button>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default Skills;