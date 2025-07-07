import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
    data: any
}

const Experience: React.FC<Props> = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = data?.experience || [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Led development of scalable web applications using React and Node.js',
      achievements: ['Increased performance by 40%', 'Led team of 5 developers', 'Implemented CI/CD pipeline']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Built responsive web applications with modern JavaScript frameworks',
      achievements: ['Reduced bundle size by 60%', 'Implemented design system', 'Mentored junior developers']
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp:any, index:any) => (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-cyan-400 text-lg font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <p className="text-slate-300 mb-4 text-lg">{exp.description}</p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement:any, i:any) => (
                    <div key={i} className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-cyan-400" />
                      <span className="text-slate-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience