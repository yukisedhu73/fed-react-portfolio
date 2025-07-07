import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

interface Props {
    data: any
}

const Contact: React.FC<Props> = ({ data }) => {
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

    return (
        <section id="contact" ref={ref} className="py-20 bg-slate-900">
            <div className="max-w-6xl mx-auto px-4">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>

                    <div className="text-center mb-12">
                        <p className="text-xl text-slate-300 mb-8">
                            I'm always open to discussing new opportunities and interesting projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                            <Mail size={48} className="text-cyan-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                            <p className="text-slate-300">{data?.email || 'john@example.com'}</p>
                        </div>

                        <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                            <Phone size={48} className="text-purple-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                            <p className="text-slate-300">{data?.phone || '+1 (555) 123-4567'}</p>
                        </div>

                        <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                            <MapPin size={48} className="text-pink-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                            <p className="text-slate-300">{data?.location || 'San Francisco, CA'}</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300">
                            <span className="flex items-center gap-2">
                                <Mail size={20} />
                                Send Message
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;