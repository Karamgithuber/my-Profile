import React from 'react';
import { Job, Project, Skill, Service, Stat } from './types';
import { Monitor, Server, Database, Layers, Code, Globe, Smartphone, Palette, Box, Layout } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Karam Elahi",
  role: "Full Stack Developer",
  email: "karam.ciit@gmail.com",
  phone: "+92 342 6418460",
  whatsapp: "https://wa.me/923426418460",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  about: "I'm Karam Elahi, I've been working in tech for over 4 years. I focus on building practical and reliable solutions that help businesses solve problems and achieve their goals. I am a firm believer in the power of technology to transform businesses and lives."
};

export const EXPERIENCE: Job[] = [
  {
    id: 1,
    company: "Uzisystems",
    role: "Full Stack Developer",
    period: "Nov 2024 - Present",
    description: [
      "Developed a Field Management System using ABP Framework.",
      "Built responsive interactive dashboards using Angular and Material UI.",
      "Implemented RESTful APIs for field task allocation.",
    ],
    link: "http://worqua.com",
    skills: [".NET Core", "ABP", "Angular", "SQL"]
  },
  {
    id: 2,
    company: "East & West",
    role: "Full Stack Developer",
    period: "Oct 2022 - Nov 2024",
    description: [
      "Developed a Sales Automation Platform streamlining sales workflows.",
      "Designed high-performance RESTful APIs.",
      "Implemented role-based authentication and access control.",
    ],
    link: "https://www.salescenter.ai/",
    skills: ["SAAS", ".NET Core", "Angular"]
  },
  {
    id: 3,
    company: "East & West Web Dev",
    role: "Full Stack Developer",
    period: "Jan 2022 - Oct 2022",
    description: [
      "Developed high-performance APIs for a URL Shortener service.",
      "Integrated payment gateways like Stripe and PayPal."
    ],
    link: "https://www.linkshortener.at/",
    skills: [".NET Core", "SQL Server", "Web API"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NavegaApp",
    description: "NavegaApp is a modern boat rental platform that allows users to browse, select, and rent boats with ease. The platform provides multiple payment options, making the booking process seamless.",
    tags: ["Boat Rent", "Booking"],
    link: "https://navegaapp.com",
    image: "https://picsum.photos/seed/navega/800/500",
    category: "Boat Rent"
  },
  {
    id: 2,
    title: "Tomorrow Byte",
    description: "Tomorrow Byte is a software-service agency website that offers a suite of digital design and development services including web apps, mobile apps, desktop apps, SaaS products, and UI/UX design.",
    tags: ["Agency", "Portfolio"],
    link: "#",
    image: "https://picsum.photos/seed/tomorrow/800/500",
    category: "Ecommerce"
  },
  {
    id: 3,
    title: "Awake Solution",
    description: "Awake Company is a professional service / software-agency style website built to showcase the company's offerings, services, and portfolio.",
    tags: ["Corporate", "Service"],
    link: "#",
    image: "https://picsum.photos/seed/awake/800/500",
    category: "Software Company"
  },
  {
    id: 4,
    title: "CodeWatan",
    description: "CodeWatan is a professional software development agency offering custom software, web, and mobile application solutions. The platform is designed to showcase the company's services.",
    tags: ["Agency", "Dev"],
    link: "#",
    image: "https://picsum.photos/seed/watan/800/500",
    category: "Software Company"
  },
  {
    id: 5,
    title: "Brit Beds",
    description: "Brit Beds is a UK-based eCommerce platform specializing in premium beds, mattresses, and bedroom furniture.",
    tags: ["E-commerce", "Retail"],
    link: "#",
    image: "https://picsum.photos/seed/brit/800/500",
    category: "Ecommerce"
  },
  {
    id: 6,
    title: "Dream Furniture UK",
    description: "Dream Furniture is a UK-based eCommerce platform specializing in beds, mattresses, and bedroom furniture.",
    tags: ["E-commerce", "Furniture"],
    link: "#",
    image: "https://picsum.photos/seed/dream/800/500",
    category: "Ecommerce"
  }
];

export const SKILLS: Skill[] = [
  { name: "C# / .NET Core", percentage: 90, color: "#10b981" },
  { name: "Angular / TypeScript", percentage: 85, color: "#3b82f6" },
  { name: "SQL Server", percentage: 80, color: "#f59e0b" },
];

export const SERVICES: Service[] = [
  {
    title: "Mobile Development",
    description: "Build scalable, high-performance mobile apps to reach users on the devices they use most.",
    icon: <Smartphone className="w-6 h-6" />,
    techStack: ["React Native", "iOS", "Android", "Flutter"]
  },
  {
    title: "Website Development",
    description: "Create fast, responsive, and conversion-focused websites that deliver strong digital presence and user trust.",
    icon: <Globe className="w-6 h-6" />,
    techStack: ["React", "Angular", "Next.js", "Tailwind"]
  },
  {
    title: "SaaS Applications",
    description: "Launch powerful SaaS platforms with flexible architecture to serve users at scale and drive recurring revenue.",
    icon: <Server className="w-6 h-6" />,
    techStack: ["Docker", "Typescript", "Node.js", "Postgresql"]
  },
  {
    title: "UI/UX Design",
    description: "Transform complex ideas into intuitive, user-friendly interfaces that boost engagement and retention.",
    icon: <Palette className="w-6 h-6" />,
    techStack: ["Figma", "Illustrator", "Framer"]
  },
  {
    title: "CMS Development",
    description: "Control over your website content with a custom or CMS-based solution tailored for easy updates and growth.",
    icon: <Layout className="w-6 h-6" />,
    techStack: ["Shopify", "Wordpress", "Framer"]
  }
];

export const WEEKLY_STATS: Stat[] = [
  { label: "Start Date", value: "November 28, 2025" },
  { label: "End Date", value: "December 05, 2025" },
  { label: "Daily Coding Average", value: "4 hrs 51 mins" },
  { label: "This Week Coding Time", value: "34 hrs" },
  { label: "Best Day Coding Time", value: "December 03, 2025 (10 hrs 5 mins)" },
  { label: "All Time Since Today", value: "1,638 hrs 55 mins" },
];

export const FAQS = [
    {
        question: "Can you fix bugs or errors in my existing backend?",
        answer: "Yes, I specialize in debugging and optimizing existing .NET and Node.js backends to ensure stability and performance."
    },
    {
        question: "Can you fix issues or update my existing website?",
        answer: "Absolutely. I can audit your current website, fix bugs, improve performance, or implement new features using modern frameworks."
    },
    {
        question: "Do you offer support after project delivery?",
        answer: "Yes, I provide ongoing support and maintenance packages to ensure your application remains up-to-date and secure."
    },
    {
        question: "What do I need to provide before starting the project?",
        answer: "A clear project scope, design assets (if any), and access to necessary repositories or server environments are usually a good start."
    },
    {
        question: "What technologies do you use for backend development?",
        answer: "I primarily use ASP.NET Core and Node.js, along with SQL Server or PostgreSQL for database management."
    },
    {
        question: "Do you provide deployment services?",
        answer: "Yes, I handle deployment on platforms like Azure, AWS, and traditional IIS servers with CI/CD pipelines."
    }
];