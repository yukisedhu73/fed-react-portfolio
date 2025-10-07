const reactData = {
    type: "React",
    name: "Yukisedhu R",
    initials:"YR",
    role: "Software Developer",
    tagline: "Aspiring developer crafting clean and creative user interfaces",
    email: "yukisedhu@gmail.com",
    phone: "+91-7358863984",
    location: "Coimbatore, TN",
    linkedin: "https://www.linkedin.com/in/yukisedhu/",
    github: "https://github.com/yukisedhu73",
    skills: [
        { name: 'HTML5, CSS3', level: 97, category: 'Languages' },
        { name: 'Javascript, TypeScript', level: 93, category: 'Languages' },
        { name: 'React, Angular, JQuery', level: 95, category: 'Javascript Frame Works' },
        { name: 'Redux', level: 85, category: 'State Management' },
        { name: 'SASS, LESS, Tailwind CSS, Bootstrap5', level: 95, category: 'CSS preprocessor/ Frameworks' },
        { name: 'Ant Design, MUI, Angular Material', level: 90, category: 'Design Systems' },
        { name: 'GitLab, GitHub', level: 90, category: 'Version Control' },
        { name: 'Node.js', level: 80, category: 'Package Managers' },
        { name: 'Vitest', level: 75, category: 'Testing Tool' },
        { name: 'Jenkins, Docker', level: 80, category: 'Build & Deployment' },
    ],
    experience: [
        {
            title: 'Software Developer',
            company: 'Digitide, Coimbatore, TN',
            period: 'Apr 2025 - Present (Internal Transfer)',
            description: 'Built scalable React.js applications and contributed to AI chatbot frontend, while upskilling in full-stack PERN development.',
            achievements: ['Delivered modular, reusable components that reduced development time and improved maintainability.',
                'Proactively learned backend (Node.js + PostgreSQL) to support full-stack tasks and increase delivery speed.'
            ]
        },
        {
            title: 'Software Developer',
            company: 'Conneqt Digital, Coimbatore, TN',
            period: 'Sep 2023 - Mar 2025 (Internal Transfer)',
            description: 'Developed high-performance React.js apps with Redux, integrated Microsoft SSO, and contributed to Agile development cycles.',
            achievements: ['Implemented code-splitting and lazy loading to enhance app load times and efficiency.',
                'Actively participated in code reviews and sprint ceremonies, improving team collaboration and code quality.'
            ]
        },
        {
            title: 'Software Developer',
            company: 'Heptagon Technologies, Coimbatore, TN',
            period: 'Dec 2021 - Sep 2023',
            description: 'Created responsive, cross-browser web interfaces using React and TypeScript, ensuring seamless API integration and accessibility.',
            achievements: ['Improved UI/UX by enhancing web accessibility and implementing dynamic, responsive layouts.',
                'Identified and resolved performance bottlenecks, leading to faster rendering and better user engagement.'
            ]
        }
    ],
    projects: [
        {
            professional: [
                {
                    title: "HCM – Digitide (Candidate Onboarding Verification System)",
                    description: "Integrated Digilocker for Aadhaar verification with secure document uploads, and enabled form auto-fill using DocSense API for smooth onboarding flow.",
                    technologies: ["ReactJs", "Typescript", "Vite", "Taiwind CSS"],
                    github: "",
                    demo: "",
                    image: "/images/ecommerce.jpg",
                },
                {
                    title: "Walkaroo - MDM Management Tool",
                    description: "Led end-to-end Frontend development of Walkaroo MDM with SAP integration, delivering high-integrity multi-departmental data management and faster feature rollout using AI-driven workflows in an Agile setup.",
                    technologies: ["ReactJS", "Redux", "Typescript", "Ant Design System"],
                    github: "",
                    demo: "",
                    image: "/images/ecommerce.jpg",
                },
                {
                    title: "PD-PMS (Performance Management System)",
                    description: "Designed and built core frontend features for attendance and appraisal tracking, contributing to scalable architecture and efficient data handling with senior developers.",
                    technologies: ["ReactJS", "Typescript", "Vite", "Ant Design System"],
                    github: "",
                    demo: "",
                    image: "/images/ecommerce.jpg",
                },
                {
                    title: "Sequre (Enterprise Management System)",
                    description: "Redesigned multiple facility management modules—including visitor check-in, seat booking, helpdesk, and meeting rooms—by optimizing workflows, migrating to React, and enhancing UI responsiveness with AOS animations and lazy loading.",
                    technologies: ["React", "Angular", "Microservices Architecture"],
                    github: "",
                    demo: "",
                    image: "/images/ecommerce.jpg",
                },
            ],
            personal: [
                {
                    title: "Redux UserList",
                    description: "A CRUD app using Redux for state management and MockAPI for backend simulation. Demonstrates user CRUD Operations with clean async handling.",
                    technologies: ["ReactJS", "Redux", "TypeScript", "Ant Design System", "ReqRes Mock API"],
                    github: "https://github.com/yukisedhu73/userlist-redux",
                    demo: "https://userlist-redux.vercel.app/login",
                    image: "/images/weather.jpg",
                },
                {
                    title: "Audio Video Recorder",
                    description: "A React app to record audio/video using getUserMedia. Supports recording, previewing, and downloading. Includes live camera preview, playback, and a list of saved recordings.",
                    technologies: ["ReactJS", "TypeScript", "HTML5", "CSS3", "JavaScript Media APIs"],
                    github: "https://github.com/yukisedhu73/audio-video-recorder/tree/main/src",
                    demo: "https://audio-video-recorder-omega.vercel.app",
                    image: "/images/weather.jpg",
                },
                {
                    title: "E-Commerece Full Stack",
                    description: "A complete web application with admin functionality to add, update, delete, and list products. Includes a user-facing view for browsing products and adding items to a cart.",
                    technologies: ["Angular", "TypeScript", " Node.js", "Express.js", "PostgreSQL"],
                    github: "https://github.com/yukisedhu73/ecommerece-poc-fe",
                    demo: "https://ecommerece-poc-fe.vercel.app/products",
                    image: "/images/weather.jpg",
                },
            ],
        }
    ],
    education: [
        {
            degree: "Bachelor of Engineering in Computer Science",
            school: "KPR Institute of Engineering and Technology",
            period: "2018 - 2022",
            gpa: "8.5/10",
            // achievements: ["Cum Laude", "Dean's List", "Programming Competition Winner"],
        }
    ]
};

export default reactData;