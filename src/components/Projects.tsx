import { Code, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface Props {
  data: any;
}

const Projects: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState<"professional" | "personal">("professional");
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
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.utils.toArray(".project-card").forEach((card: any) => {
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
  }, [activeTab]);

  const data = {
    professional: [
      {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/yourrepo1",
        demo: "https://demo.com/ecommerce",
        image: "/images/ecommerce.jpg",
      },
    ],
    personal: [
      {
        title: "Weather App",
        description: "Real-time weather dashboard using OpenWeatherMap API.",
        technologies: ["React", "TypeScript", "API"],
        github: "https://github.com/yourrepo2",
        demo: "https://demo.com/weather",
        image: "/images/weather.jpg",
      },
    ],
  };

  const projects = data?.[activeTab] || [];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setActiveTab("professional")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === "professional"
                ? "bg-cyan-500 text-white"
                : "bg-white/10 text-slate-300 hover:bg-white/20"
            }`}
          >
            Professional Projects
          </button>
          <button
            onClick={() => setActiveTab("personal")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === "personal"
                ? "bg-purple-500 text-white"
                : "bg-white/10 text-slate-300 hover:bg-white/20"
            }`}
          >
            Personal Projects
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project: any, index: number) => (
            <div
              key={index}
              className="project-card group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/20 hover:border-cyan-400/10"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-22 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                  {/* {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Code size={48} className="text-cyan-400" />
                  )} */}
                  <Code size={48} className="text-cyan-400" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-cyan-500 rounded-full hover:bg-cyan-400 transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-purple-500 rounded-full hover:bg-purple-400 transition-colors"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech:any, i:any) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-cyan-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;