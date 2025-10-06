import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface Props {
  data: any;
}

const Experience: React.FC<Props> = ({ data }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const experiences = data?.experience;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      const split = SplitText.create(headingRef.current, { type: 'words' });
      gsap.from(split.words, {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      });

      // Animate experience cards individually
      gsap.utils.toArray(".exp-card").forEach((card: any) => {
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
    <section id="experience" ref={sectionRef} className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text"
        >
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp: any, index: number) => (
            <div
              key={index}
              className="exp-card bg-slate-900/50 backdrop-blur-sm p-4 border border-slate-700/50 hover:border-cyan-400/30"
            >
              <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-cyan-400 text-lg font-medium">{exp.company}</p>
                </div>
                <span className="text-slate-400 text-sm whitespace-nowrap">{exp.period}</span>
              </div>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4">{exp.description}</p>

              <div className="space-y-2">
                {exp.achievements.map((achievement: string, i: number) => (
                  <div key={i} className="flex items-start gap-2">
                    <ChevronRight size={16} className="text-cyan-400 mt-1" />
                    <span className="text-slate-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Experience;
