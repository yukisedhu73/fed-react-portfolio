import { Award } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface Props {
  data: any;
}

const Education: React.FC<Props> = ({ data }) => {
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

      gsap.utils.toArray(".edu-card").forEach((card: any) => {
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

  const education = data?.education || [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2016 - 2020",
      gpa: "3.8/4.0",
      achievements: ["Cum Laude", "Dean's List", "Programming Competition Winner"],
    },
    {
      degree: "Full Stack Web Development Certificate",
      school: "Tech Bootcamp",
      period: "2020",
      achievements: ["Top 10% of class", "Capstone Project Award"],
    },
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text"
        >
          Education
        </h2>

        {/* Cards */}
        <div className="space-y-8">
          {education?.map((edu: any, index: number) => (
            <div
              key={index}
              className="edu-card bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/20 hover:border-cyan-400/10"
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
                {edu.achievements.map((achievement: any, i: number) => (
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
    </section>
  );
};

export default Education;