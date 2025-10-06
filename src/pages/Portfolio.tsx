import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Sidebar from "../shared/Sidebar";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import { Menu} from "lucide-react";
import reactData from "../data/reactData";
import angularData from "../data/angularData";

interface PortfolioProps {
  type: "react" | "angular";
}

const Portfolio: React.FC<PortfolioProps> = ({ type }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const portfolioData = type === "react" ? reactData : angularData;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const sections = ["about", "skills", "experience", "projects", "education", "contact"];
    const observers = sections.map(section => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        return observer;
      }
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 p-2 bg-slate-800 border border-slate-700 rounded-lg transition-opacity duration-300 ${
          sidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Menu size={24} className="text-white" />
      </button>

      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} activeSection={activeSection} data={portfolioData} />

      <div className="transition-all duration-300">
        <Header data={portfolioData} />
        <Skills data={portfolioData} />
        <Experience data={portfolioData} />
        <Projects data={portfolioData} />
        <Education data={portfolioData} />
        <Contact data={portfolioData} />
      </div>
    </div>
  );
};

export default Portfolio; 