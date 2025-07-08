import {
    User,
    Code,
    Briefcase,
    Award,
    GraduationCap,
    Mail,
    Phone,
    MapPin,
    Download
} from "lucide-react";


interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    activeSection: string;
    data: any
}



const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, activeSection, data }) => {
    const navItems = [
        { id: 'about', label: 'About', icon: User },
        { id: 'skills', label: 'Skills', icon: Code },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'projects', label: 'Projects', icon: Award },
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'contact', label: 'Contact', icon: Mail }
    ];

    const scrollToSection = (sectionId: any) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (window.innerWidth < 768) {
            toggleSidebar();
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleSidebar}></div>
            )}

            {/* Sidebar */}
            <div className={`fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-slate-700/50 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                {/* Profile Section */}
                <div className="p-6 border-b border-slate-700/50">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center font-bold text-xl">
                            {data?.initials || 'JD'}
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg">{data?.name || 'John Doe'}</h3>
                            <p className="text-slate-400 text-sm">{data?.title || 'Developer'}</p>
                        </div>
                    </div>

                    <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                        <Download size={16} className="inline mr-2" />
                        Resume
                    </button>
                </div>

                {/* Navigation */}
                <nav className="p-4">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 mb-2 ${activeSection === item.id
                                ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-l-2 border-cyan-400'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                }`}
                        >
                            <item.icon size={20} />
                            <span className="font-medium">{item.label}</span>
                        </button>
                    ))}
                </nav>

                {/* Contact Info */}
                {/* <div className="absolute bottom-6 left-6 right-6 text-slate-400 text-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <Mail size={14} />
                        <span>{data?.email || 'john@example.com'}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <Phone size={14} />
                        <span>{data?.phone || '+1 (555) 123-4567'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{data?.location || 'San Francisco, CA'}</span>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Sidebar;