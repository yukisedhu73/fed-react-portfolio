import React, { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface Props {
    data: any;
}

const Contact: React.FC<Props> = ({ data }) => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const split = SplitText.create(headingRef.current, { type: "words" });

            gsap.from(split.words, {
                opacity: 0,
                y: 40,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                    toggleActions: "play reverse play reverse",
                },
            });

            gsap.utils.toArray(".contact-card").forEach((card: any) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse",
                    },
                });
            });

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="py-20 bg-slate-900">
            <div className="max-w-6xl mx-auto px-4">
                <h2
                    ref={headingRef}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                >
                    Get In Touch
                </h2>

                <div className="text-center mb-12">
                    <p className="text-xl text-slate-300">
                        I'm always open to discussing new opportunities or collaborations.
                    </p>
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="contact-card text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/20">
                        <Mail size={40} className="text-cyan-400 mx-auto mb-2" />
                        <p className="text-slate-300 text-sm">{data?.email || "your.email@example.com"}</p>
                    </div>

                    <div className="contact-card text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/20">
                        <Phone size={40} className="text-purple-400 mx-auto mb-2" />
                        <p className="text-slate-300 text-sm">{data?.phone || "+91 9876543210"}</p>
                    </div>

                    <div className="contact-card text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/20">
                        <MapPin size={40} className="text-pink-400 mx-auto mb-2" />
                        <p className="text-slate-300 text-sm">{data?.location || "Chennai, India"}</p>
                    </div>

                    <div className="contact-card text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/20">
                        <Linkedin size={40} className="text-blue-400 mx-auto mb-2" />
                        <a
                            href={data?.linkedin || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 text-sm hover:underline"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </div>

                {/* Email Button */}
                <div className="flex justify-center mt-10">
                    <a
                        href={`mailto:${data?.email || "yukisedhu@gmail.com"}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
                    >
                        <Mail size={18} />
                        Send Message
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Contact;
