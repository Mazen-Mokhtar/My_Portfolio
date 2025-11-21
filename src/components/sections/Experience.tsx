
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Saraha Messaging Platform — Anonymous Real-time App',
    company: 'Backend Developer (Personal Project)',
    date: 'Jan 2023 – Apr 2023',
    location: 'Cairo, Egypt',
    description: [
      'Developed a real-time anonymous messaging platform with secure media sharing and SEO-friendly interface.',
      'Built backend from scratch and integrated a Next.js frontend with backend APIs.',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'Next.js', 'REST APIs']
  },
  {
    title: 'Social Gaming Platform — Real-time Chat & Multiplayer',
    company: 'Backend Developer (Contract)',
    date: 'May 2023 – Oct 2023',
    location: 'Cairo, Egypt',
    description: [
      'Developed scalable backend services supporting 10,000+ daily users.',
      'Integrated real-time communication with Socket.IO and delivered a responsive frontend.',
    ],
    technologies: ['Node.js', 'MongoDB', 'Socket.IO', 'Next.js', 'REST APIs']
  },
  {
    title: 'WhatsApp Clone — Real-time Messaging',
    company: 'Backend Developer (Contract)',
    date: 'Nov 2023 – Jan 2024',
    location: 'Cairo, Egypt',
    description: [
      'Built low-latency backend services and optimized REST APIs.',
      'Implemented group chats, secure media sharing, and performance improvements (15%).',
    ],
    technologies: ['Node.js', 'MongoDB', 'Socket.IO', 'Cloudinary', 'JavaScript', 'CSS']
  },
  {
    title: 'LinkedIn-like Job Portal — Profiles & Recruiter Messaging',
    company: 'Backend Developer (Contract)',
    date: 'Feb 2024 – May 2024',
    location: 'Cairo, Egypt',
    description: [
      'Built GraphQL backend with authentication and notifications.',
      'Deployed via Docker; unit testing reduced response times by 25%.',
    ],
    technologies: ['Node.js', 'MongoDB', 'GraphQL', 'JWT', 'Socket.IO', 'Docker']
  },
  {
    title: 'E-Commerce Platform — Amazon/Noon Clone',
    company: 'Backend Developer (Contract)',
    date: 'Jun 2024 – Sep 2024',
    location: 'Cairo, Egypt',
    description: [
      'Developed full-featured e-commerce backend using NestJS with REST & GraphQL.',
      'Implemented RBAC, Cloudinary uploads, and improved order processing (20%).',
    ],
    technologies: ['NestJS', 'MongoDB', 'GraphQL', 'REST APIs', 'Cloudinary', 'Docker']
  },
  {
    title: 'Scalable E-Commerce API Platform',
    company: 'Backend Developer (Personal Project)',
    date: 'Oct 2024 – Jan 2025',
    location: 'Cairo, Egypt',
    description: [
      'Production-ready e-commerce backend with JWT auth, cart/products, and Stripe orders.',
      'Implemented RBAC, Cloudinary uploads, event-driven emails, and admin analytics.',
    ],
    technologies: ['NestJS', 'TypeScript', 'MongoDB', 'REST APIs', 'JWT', 'Stripe', 'Cloudinary', 'Nodemailer', 'Multer', 'RBAC', 'Jest']
  },
  {
    title: 'Website Marketplace API — Buying & Selling Websites',
    company: 'Backend Developer (Personal Project)',
    date: 'Feb 2025 – Apr 2025',
    location: 'Cairo, Egypt',
    description: [
      'Developed modular backend with secure auth, role-based access, and Stripe payments.',
      'Implemented Cloudinary media handling and event-driven workflows for sales and emails.',
    ],
    technologies: ['NestJS', 'TypeScript', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT', 'Stripe', 'Cloudinary', 'Nodemailer', 'RBAC', 'Jest']
  },
  {
    title: 'Subscription Management Platform',
    company: 'Backend Developer (Personal Project)',
    date: 'May 2025 – Present',
    location: 'Cairo, Egypt',
    description: [
      'Built subscription backend with JWT and Google OAuth, automated emails, and payment tracking.',
      'Implemented RBAC, Cloudinary uploads, cron jobs, and event-driven architecture.',
    ],
    technologies: ['NestJS', 'TypeScript', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT', 'Google OAuth', 'Cloudinary', 'Nodemailer', 'Cron Jobs', 'RBAC', 'Jest', 'Swagger']
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Professional Experience
            </h2>
            <div className="w-12 h-1 bg-indigo-500 mx-auto mt-2 mb-8 rounded-full"></div>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/80 via-purple-500/50 to-transparent"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } gap-8 md:gap-0`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-indigo-600 border-4 border-indigo-900 transform -translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`flex-1 md:pr-12 ${index % 2 === 0 ? 'md:pl-12 md:pr-0' : ''} pl-8 md:pl-0`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all hover:bg-white/10">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <span className="text-xs font-medium bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
                          {exp.date}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
                        <span>{exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                        <span>{exp.location}</span>
                      </div>
                      
                      <ul className="list-disc list-inside space-y-2 mb-5 text-gray-300">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm">{item}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-xs bg-white/10 text-indigo-200 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty div for layout */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-bold mb-6 text-center text-indigo-300">Education</h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <h4 className="text-lg font-semibold text-white">Arab Open University (AOU)</h4>
                <span className="text-xs font-medium bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
                  2024 – 2027
                </span>
              </div>
              <div className="mb-3">
                <span className="text-gray-300">Bachelor's Degree in Computer Science – Second Year</span>
              </div>
              <div className="flex gap-4 text-sm text-gray-400 mb-4">
                <div>
                  <span className="font-medium text-gray-300">GPA:</span> 3.01
                </div>
                <div>
                  <span className="font-medium text-gray-300">Location:</span> Cairo, Egypt
                </div>
              </div>
              <p className="text-sm text-gray-300">
                Currently building a strong foundation in computer science fundamentals
                including algorithms, data structures, and software engineering principles.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
