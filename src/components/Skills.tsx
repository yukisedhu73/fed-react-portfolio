import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface Props {
  data: any;
}

const Skills: React.FC<Props> = ({ data }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const skills = data?.skills;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      const split = SplitText.create(headingRef.current, { type: 'chars' });
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

      // Animate cards one-by-one on scroll
      gsap.utils.toArray(".skill-card").forEach((card: any) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.9,
          y: 20,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

      // Animate progress bars
      gsap.utils.toArray(".skill-bar").forEach((bar: any) => {
        const level = bar.getAttribute("data-level");
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${level}%`,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 95%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text"
        >
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill: any, index: number) => (
            <div
              key={index}
              className="skill-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                <span className="text-cyan-400 text-sm font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="skill-bar bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                  data-level={skill.level}
                ></div>
              </div>
              <p className="text-slate-400 text-sm mt-2">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
