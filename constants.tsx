
import React from 'react';
import { Job, Project, Skill, Service, Stat } from './types';
import { Monitor, Server, Database, Layers, Code, Globe, Smartphone, Palette, Box, Layout } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Karam Elahi",
  role: "Full Stack Developer",
  email: "karam.gdc@gmail.com",
  phone: "+92 342 6418460",
  whatsapp: "https://wa.me/923426418460",
  linkedin: "https://www.linkedin.com/in/karam-elahi-674443242/",
  github: "https://github.com/Karamgithuber/",
  upwork: "https://www.upwork.com/freelancers/~014e869fa88997ad55?viewMode=1",
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
    title: "Worqua - Field Management System",
    description: "A comprehensive Field Management System built with the ABP Framework, .NET Core, and SQL Server to streamline field operations and improve task management efficiency. Features include task allocation, route planning, and real-time employee tracking.",
    tags: ["ABP Framework", ".NET Core", "Angular", "SQL Server"],
    link: "http://worqua.com",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800", // Fixed broken image with a reliable dashboard placeholder
    category: "SaaS"
  },
  {
    id: 2,
    title: "Sales Center AI",
    description: "A Sales Automation Platform designed to streamline sales workflows and enhance business productivity. Includes high-performance RESTful APIs for managing customers, leads, and order processing, along with interactive dashboards.",
    tags: [".NET Core", "Angular", "Material UI", "SaaS"],
    link: "https://www.salescenter.ai/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", // Business Dashboard
    category: "SaaS"
  },
  {
    id: 3,
    title: "Link Shortener",
    description: "A custom URL shortener service with high-performance APIs, QR code generation, and detailed analytics for tracking user engagement. Optimized SQL Server database structures ensure efficient storage and analytics.",
    tags: [".NET Core", "Angular", "SQL Server", "Analytics"],
    link: "https://www.linkshortener.at/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // Analytics Dashboard
    category: "Web Tool"
  }
];

export const SKILLS: Skill[] = [
  { name: "C# / .NET Core", percentage: 90, color: "#10b981" },
  { name: "Angular / TypeScript", percentage: 85, color: "#3b82f6" },
  { name: "SQL Server", percentage: 80, color: "#f59e0b" },
];

export const SERVICES: Service[] = [
  {
    title: "Full Stack Development",
    description: "End-to-end web application development using .NET Core for backend and Angular for frontend to build scalable enterprise solutions.",
    icon: <Globe className="w-6 h-6" />,
    techStack: [".NET Core", "Angular", "SQL Server", "Web API"]
  },
  {
    title: "SaaS Application Development",
    description: "Architecting and building multi-tenant SaaS platforms using ABP Framework and cloud-ready technologies.",
    icon: <Server className="w-6 h-6" />,
    techStack: ["ABP Framework", "Docker", "Azure", "CI/CD"]
  },
  {
    title: "API Development & Integration",
    description: "Designing high-performance RESTful APIs and integrating third-party services like Stripe, PayPal, and QuickBooks.",
    icon: <Database className="w-6 h-6" />,
    techStack: ["REST", "Swagger", "Payment Gateways", "3rd Party APIs"]
  },
  {
    title: "Dashboard & Reporting",
    description: "Creating interactive dashboards and custom reports for data visualization and business intelligence.",
    icon: <Layout className="w-6 h-6" />,
    techStack: ["Angular Material", "Chart.js", "Bold Reports", "PowerBI"]
  },
  {
    title: "Database Design & Optimization",
    description: "Designing efficient database schemas, writing complex stored procedures, and optimizing queries for performance.",
    icon: <Database className="w-6 h-6" />,
    techStack: ["SQL Server", "Entity Framework", "LINQ", "Performance Tuning"]
  }
];

export const WEEKLY_STATS: Stat[] = []; // Cleared as requested

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
