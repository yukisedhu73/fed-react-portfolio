import { Code, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
    data: any
}
// Projects Component
const Projects: React.FC<Props> = ({ data }) => {
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

    const projects = data?.projects || [
        {
            title: 'E-commerce Platform',
            description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            github: '#',
            demo: '#',
            image: '/api/placeholder/400/250'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates',
            technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
            github: '#',
            demo: '#',
            image: '/api/placeholder/400/250'
        },
        {
            title: 'Weather Dashboard',
            description: 'Interactive weather dashboard with charts and forecasts',
            technologies: ['React', 'D3.js', 'OpenWeather API'],
            github: '#',
            demo: '#',
            image: '/api/placeholder/400/250'
        }
    ];

    return (
        <section id="projects" ref={ref} className="py-20 bg-slate-900">
            <div className="max-w-6xl mx-auto px-4">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project:any, index:any) => (
                            <div
                                key={index}
                                className={`group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 ${isVisible ? 'animate-fade-in' : ''}`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="relative overflow-hidden">
                                    <div className="w-full h-48 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                                        <Code size={48} className="text-cyan-400" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a href={project.github} className="p-2 bg-cyan-500 rounded-full hover:bg-cyan-400 transition-colors">
                                            <Github size={20} className="text-white" />
                                        </a>
                                        <a href={project.demo} className="p-2 bg-purple-500 rounded-full hover:bg-purple-400 transition-colors">
                                            <ExternalLink size={20} className="text-white" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-slate-300 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech:any, i:any) => (
                                            <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-cyan-400 text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects