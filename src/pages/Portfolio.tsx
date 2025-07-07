import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Sidebar from "../shared/Sidebar";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import { Menu, X } from "lucide-react";

const Portfolio = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
    const [portfolioData, setPortfolioData] = useState(null);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // File upload handler
    const handleFileUpload = async (event: any) => {
        const file = event.target.files[0];
        if (file) {
            try {
                let data;
                if (file.type === 'application/pdf') {
                    // For PDF files, you would need to extract text content
                    // This is a placeholder - you'd need a PDF parsing library
                    data = {
                        name: 'John Doe',
                        title: 'Full Stack Developer',
                        email: 'john@example.com',
                        phone: '+1 (555) 123-4567',
                        location: 'San Francisco, CA'
                    };
                } else if (file.type === 'application/json') {
                    const text = await file.text();
                    data = JSON.parse(text);
                }
                setPortfolioData(data);
            } catch (error) {
                console.error('Error parsing file:', error);
            }
        }
    };

    // Intersection Observer for active section
    useEffect(() => {
        const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
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
            {/* File Upload Input */}
            <div className="fixed top-4 right-4 z-50">
                <input
                    type="file"
                    accept=".pdf,.json"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                />
                <label
                    htmlFor="resume-upload"
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 rounded-lg cursor-pointer transition-colors duration-300 text-sm font-medium"
                >
                    Upload Resume
                </label>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-4 left-4 z-50 md:hidden p-2 bg-slate-800 rounded-lg border border-slate-700"
            >
                {sidebarOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>

            {/* Sidebar */}
            <Sidebar
                isOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
                activeSection={activeSection}
                data={portfolioData}
            />

            {/* Main Content */}
            <div className="md:ml-80">
                <Header data={portfolioData} />
                <Skills data={portfolioData} />
                <Experience data={portfolioData} />
                <Projects data={portfolioData} />
                <Education data={portfolioData} />
                <Contact data={portfolioData} />
            </div>

            {/* Custom Styles */}
            <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
        </div>
    );
};

export default Portfolio; 