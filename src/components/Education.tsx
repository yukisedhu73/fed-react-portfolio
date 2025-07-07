import { Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";


interface Props {
    data: any
}

const Education: React.FC<Props> = ({ data }) => {
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

    const education = data?.education || [
        {
            degree: 'Bachelor of Science in Computer Science',
            school: 'University of Technology',
            period: '2016 - 2020',
            gpa: '3.8/4.0',
            achievements: ['Cum Laude', 'Dean\'s List', 'Programming Competition Winner']
        },
        {
            degree: 'Full Stack Web Development Certificate',
            school: 'Tech Bootcamp',
            period: '2020',
            achievements: ['Top 10% of class', 'Capstone Project Award']
        }
    ];

    return (
        <section id="education" ref={ref} className="py-20 bg-slate-800">
            <div className="max-w-6xl mx-auto px-4">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Education
                    </h2>

                    <div className="space-y-8">
                        {education?.map((edu: any, index: any) => (
                            <div
                                key={index}
                                className={`bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 ${isVisible ? 'animate-fade-in' : ''}`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                                        <p className="text-cyan-400 text-lg font-medium">{edu.school}</p>
                                    </div>
                                    <div className="text-right mt-2 md:mt-0">
                                        <span className="text-slate-400 font-medium block">{edu.period}</span>
                                        {edu.gpa && <span className="text-purple-400 text-sm">GPA: {edu.gpa}</span>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {edu.achievements.map((achievement: any, i: any) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <Award size={16} className="text-cyan-400" />
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

export default Education;