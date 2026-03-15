
import React from 'react';
import { Job, Project, Skill, Service, Stat } from './types';
import { Monitor, Server, Database, Layers, Code, Globe, Smartphone, Palette, Box, Layout } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Karam Elahi",
  role: "Senior Full Stack Developer & SaaS Architect",
  email: "karam.gdc@gmail.com",
  phone: "+92 342 6418460",
  whatsapp: "https://wa.me/923426418460",
  linkedin: "https://www.linkedin.com/in/karam-elahi-674443242/",
  github: "https://github.com/Karamgithuber/",
  upwork: "https://www.upwork.com/freelancers/~014e869fa88997ad55?viewMode=1",
  about: "I am Karam Elahi, a Senior Full Stack Developer and SaaS Architect with over 4 years of professional experience in the software industry. My expertise lies in designing and building scalable enterprise-grade applications using .NET Core, Angular, and modern cloud architectures. I specialize in the ABP Framework, microservices, and high-performance RESTful APIs. I am dedicated to delivering practical, reliable digital solutions that drive business growth and solve complex technical challenges."
};

export const EXPERIENCE: Job[] = [
  {
    id: 1,
    company: "East & West Web Development and SEO Agency (Collaboration with CubeOne)",
    role: "Senior Full Stack Developer",
    period: "Nov 2024 - Present",
    description: [
      "Developed a Field Management System using the ABP Framework with .NET Core and SQL Server, designed to streamline field operations and improve task management efficiency.",
      "Built responsive and interactive dashboards using Angular and Material UI, ensuring an intuitive user experience.",
      "Implemented RESTful APIs for field task allocation, route planning, and employee performance tracking.",
      "Applied role-based authentication, multi-tenancy, and permission management features of the ABP Framework for secure access control.",
      "Followed agile methodology, collaborating with cross-functional teams to deliver efficient, enterprise-grade solutions."
    ],
    links: ["http://worqua.com", "https://worqwize.com/"],
    skills: ["SAAS", ".NET Core", "ABP Framework", "Angular", "SQL Server", "Material UI", "Bootstrap", "IIS Server"]
  },
  {
    id: 2,
    company: "East & West Web Development and SEO Agency – Islamabad",
    role: "Full Stack Developer",
    period: "Oct 2022 - Nov 2024",
    description: [
      "Developed a Sales Automation Platform using .NET Core and SQL Server, streamlining sales workflows and enhancing productivity for businesses.",
      "Designed and implemented high-performance RESTful APIs for managing customers, leads, and order processing.",
      "Built responsive and interactive dashboards with Angular and Material UI for real-time sales insights.",
      "Implemented role-based authentication and access control to ensure secure operations.",
      "Worked in an agile environment, collaborating with cross-functional teams to deliver scalable and maintainable enterprise solutions."
    ],
    links: ["https://www.salescenter.ai/"],
    skills: ["SAAS", ".NET Core", "Clean Architecture", "Angular", "SQL Server", "Bootstrap", "IIS Server"]
  },
  {
    id: 3,
    company: "East & West Web Development and SEO Agency – Islamabad",
    role: "Full Stack Developer | Internship | Job",
    period: "Jan 2022 - Oct 2022",
    description: [
      "Developed high-performance RESTful APIs using .NET Core, ensuring fast and secure link processing.",
      "Designed and optimized SQL Server database structures for efficient storage and analytics of shortened URLs.",
      "Built a clean, responsive, and intuitive user interface with Angular and Material UI, ensuring a seamless experience.",
      "Implemented custom short links, QR code generation, and detailed analytics for tracking user engagement.",
      "Integrated authentication and role-based access control to enhance platform security.",
      "Deployed the application on a cloud-based IIS Server with CI/CD pipelines for continuous integration and delivery.",
      "Collaborated with team members to ensure scalability, maintainability, and performance optimization across all modules."
    ],
    links: ["https://www.linkshortener.at/"],
    skills: ["SAAS", ".NET Core", "ABP Framework", "Angular", "SQL Server", "Material UI", "Bootstrap", "IIS Server"]
  }
];

export const SKILLS_DATA = {
  technical: [
    {
      category: ".NET & Architecture",
      skills: ["ASP.NET Core / C#", "ABP Framework", "Clean Architecture / CQRS", "RESTful APIs / SignalR", "ASP.NET Identity (JWT/RBAC)"]
    },
    {
      category: "Angular, React & UI",
      skills: ["Angular (RxJS)", "TypeScript", "React", "HTML5 / CSS3 / Bootstrap", "DevExtreme", "PrimeNG / Angular Material", "ngx-datatable", "Chart.js / ECharts"]
    },
    {
      category: "Databases",
      skills: ["SQL Server", "EF Core & LINQ", "Stored Procedures", "Query Optimization", "Data Modeling"]
    },
    {
      category: "Integrations",
      skills: ["Stripe / PayPal", "Authorize.Net", "QuickBooks API", "OpenAI GPT (Azure SDK)", "Bold Reports", "PowerBI (Basic)"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Git (GitHub/Bitbucket)", "CI/CD (GitHub Actions)", "Trello", "Azure Boards", "Agile/Scrum"]
    },
    {
      category: "Secondary Skills (CMS, E-com, SEO)",
      skills: ["WordPress Dev", "Elementor Pro", "WooCommerce / E-Commerce", "SEO & Optimization", "Performance Optimization", "Malware Removal"]
    }
  ],
  creative: [
    {
      category: "Core Skills",
      skills: ["Responsive Web Design", "Mobile-First Development", "Cross-Browser Compatibility", "UI/UX Implementation", "Performance Optimization", "JavaScript Frameworks", "Version Control (Git)", "Web Accessibility"]
    },
    {
      category: "Design Implementation",
      skills: ["PSD to HTML/CSS", "Figma to HTML", "Custom Design Implementation", "Template Integration", "Design System Implementation"]
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Worqua - Enterprise Field Management System",
    description: "A comprehensive, multi-tenant Field Management System (FMS) architected with the ABP Framework, .NET Core, and SQL Server. This enterprise solution streamlines complex field operations, featuring real-time task allocation, intelligent route planning, and advanced employee performance tracking.",
    tags: ["ABP Framework", ".NET Core", "Angular", "SQL Server", "Enterprise SaaS"],
    link: "http://worqua.com",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    category: ".NET & Angular Development"
  },
  {
    id: 2,
    title: "Sales Center AI - Intelligent Automation Platform",
    description: "An AI-driven Sales Automation Platform engineered to optimize sales workflows and significantly boost business productivity. Features high-performance RESTful APIs for seamless lead management and customer relationship management (CRM).",
    tags: [".NET Core", "Angular", "Material UI", "AI Automation", "SaaS"],
    link: "https://www.salescenter.ai/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: ".NET & Angular Development"
  },
  {
    id: 3,
    title: "LinkShortener - High-Performance Analytics Tool",
    description: "A high-scale URL shortening service featuring rapid link processing, dynamic QR code generation, and sophisticated real-time analytics. Built with a focus on performance and scalability.",
    tags: [".NET Core", "Angular", "SQL Server", "Real-time Analytics"],
    link: "https://www.linkshortener.at/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: ".NET & Angular Development"
  },
  {
    id: 4,
    title: "Exchange My Car",
    description: "An ongoing automotive project for car exchanges in the UK. Managing UI/UX updates and ongoing site improvements as a Front-End Developer.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    link: "https://www.exchangemycar.co.uk/",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    category: "Custom Coding & Development"
  },
  {
    id: 5,
    title: "Real Results SEO",
    description: "A custom-coded website offering SEO tools and agency services. Integrated SEO tools and built the site from scratch using modern web technologies.",
    tags: ["HTML", "CSS", "JavaScript", "SEO Tools"],
    link: "https://www.realresultsseo.com/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Custom Coding & Development"
  },
  {
    id: 6,
    title: "Dealer Platform",
    description: "A custom-built admin dashboard for dealership management. Features a functional and responsive UI for data management built with Bootstrap.",
    tags: ["Bootstrap", "JavaScript", "Admin Dashboard"],
    link: "https://dealerplatform.netlify.app/dashboard/matching-your-criteria.html",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
    category: "Custom Coding & Development"
  },
  {
    id: 7,
    title: "Car Adviser",
    description: "A professional platform focused on vehicle reviews and expert automotive advice for UK buyers. Developed with WordPress and custom PHP designs.",
    tags: ["WordPress", "PHP", "SEO", "Optimization"],
    link: "https://www.caradviser.co.uk/",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
    category: "WordPress & CMS Development"
  },
  {
    id: 8,
    title: "Pegasus Auto Mobiles",
    description: "An automotive marketplace for buying and selling cars with a sleek, user-friendly interface. Built on WordPress with technical SEO and speed optimization.",
    tags: ["WordPress", "E-commerce", "SEO"],
    link: "https://pegasusautomobiles.com/",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    category: "WordPress & CMS Development"
  },
  {
    id: 9,
    title: "Gowoda",
    description: "A comprehensive job portal designed to connect employers with potential candidates. Developed using a hybrid of WordPress and PHP.",
    tags: ["WordPress", "PHP", "Job Portal"],
    link: "https://gowoda.com/",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    category: "WordPress & CMS Development"
  },
  {
    id: 10,
    title: "Precision SEO",
    description: "A professional digital marketing agency website based in Australia. Implemented top-tier technical and on-page SEO plus extreme speed optimization.",
    tags: ["WordPress", "SEO", "Digital Marketing"],
    link: "https://precisionseo.com.au/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "WordPress & CMS Development"
  },
  {
    id: 11,
    title: "Homiely",
    description: "A modern e-commerce store dedicated to home essentials and decor in the UK. Developed using WordPress/WooCommerce with performance tuning.",
    tags: ["WooCommerce", "E-commerce", "Performance"],
    link: "https://homiely.co.uk/",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    category: "E-Commerce Solutions"
  },
  {
    id: 12,
    title: "Halub Medical",
    description: "An e-commerce store specializing in medical equipment and healthcare supplies. Built on WordPress with secure checkout and SEO optimization.",
    tags: ["WordPress", "Medical E-commerce", "SEO"],
    link: "https://medical.halubmtc.com/",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    category: "E-Commerce Solutions"
  },
  {
    id: 13,
    title: "Green Pharms Cannabis",
    description: "An online e-commerce shop for cannabis products and pharmacy services. WordPress e-commerce development with full technical SEO audits.",
    tags: ["WordPress", "Pharmacy", "E-commerce"],
    link: "https://greenpharmscannabis.com/",
    image: "https://images.unsplash.com/photo-1587910381911-781aba21ac45?auto=format&fit=crop&q=80&w=800",
    category: "E-Commerce Solutions"
  },
  {
    id: 14,
    title: "Sasta Bazar Deals",
    description: "A multi-product e-commerce store focused on discounted deals. WordPress e-com development with technical SEO and optimized page speed.",
    tags: ["WordPress", "E-commerce", "SEO"],
    link: "https://sastabazardeals.com/",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    category: "E-Commerce Solutions"
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
