import React, { useLayoutEffect, useRef } from 'react';
import { Download, Mail, Github, Linkedin, Twitter, ChevronRight, User, Eye } from 'lucide-react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

interface Props {
    data: any;
}

const Header: React.FC<Props> = ({ data }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const headlineSplit = SplitText.create('.split-headline', {
                type: 'words',
            });

            const subtitleSplit = SplitText.create('.split-subtitle', {
                type: 'words',
            });

            const taglineSplit = SplitText.create('.split-tagline', {
                type: 'words',
            });

            // Headline animation (fade in/out per word)
            gsap.from(headlineSplit.words, {
                y: 60,
                opacity: 0,
                duration: 1.2, // Slower animation duration
                stagger: 0.12, // Slower stagger
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.split-subtitle',
                    start: 'top 85%',
                    toggleActions: 'play reverse play reverse',
                },
            });

            // Subtitle
            gsap.from(subtitleSplit.words, {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.12,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.split-subtitle',
                    start: 'top 85%',
                    toggleActions: 'play reverse play reverse',
                },
            });

            // Tagline
            gsap.from(taglineSplit.words, {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '.split-tagline',
                    start: 'top 90%',
                    toggleActions: 'play reverse play reverse',
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);


    return (
        <section
            id="about"
            className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-4">
                <div ref={containerRef} className="text-center transition-all duration-2000">
                    {/* Profile Image */}
                    <div className="mb-8 relative">
                        <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-purple-500/25">
                            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                                <User size={80} className="text-cyan-400" />
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 shadow-lg shadow-green-500/50"></div>
                    </div>

                    {/* Name and Title */}
                    <h1 className="split-headline text-6xl md:text-8xl font-bold mb-4 text-blue-800">
                        {data?.name || 'Yukisedhu R'}
                    </h1>

                    {/* Title */}
                    <p className="split-subtitle text-xl md:text-2xl text-slate-300 mb-8 font-light">
                        {data?.role || 'Software Developer'}
                    </p>

                    {/* Tagline */}
                    <div className="split-tagline text-cyan-400 text-lg mb-12 font-mono">
                        <span>{'>'}</span> {data?.tagline || 'Building the future, one line of code at a time'}
                        <span className="ml-1">_</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300">
                            <span className="flex items-center gap-2">
                                <Eye size={20} />
                                View My Work
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <button className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                            <span className="flex items-center gap-2">
                                <Download size={20} />
                                Download Resume
                            </span>
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mt-12">
                        {[
                            { icon: Github, href: data?.github || '#' },
                            { icon: Linkedin, href: data?.linkedin || '#' },
                            { icon: Twitter, href: data?.twitter || '#' },
                            { icon: Mail, href: `mailto:${data?.email || 'john@example.com'}` }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="group w-12 h-12 border-2 border-slate-600 rounded-full flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                            >
                                <social.icon size={20} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
