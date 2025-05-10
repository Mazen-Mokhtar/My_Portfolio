
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
    title: 'Social Gaming App – Real-time Social & Gaming Network',
    company: 'Full-Stack Developer',
    date: '12/2023 – 06/2024',
    location: 'Cairo, Egypt',
    description: [
      'A hybrid social platform inspired by WhatsApp, Facebook, and Instagram.',
      'Users can chat in real-time, post content, like/comment, and interact within a gaming-oriented environment.',
      'Designed for scalability and responsiveness, using Socket.IO for instant communication and Next.js for seamless UI.',
      'Full-stack architecture includes secure user authentication, media handling, notifications, and dynamic content loading.'
    ],
    technologies: ['Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Mongoose', 'Cloudinary', 'Next.js']
  },
  {
    title: 'Saraha App-Anonymous Messaging Platform',
    company: 'Full-Stack Developer',
    date: '08/2023 – 11/2023',
    location: 'Cairo, Egypt',
    description: [
      'A full-stack web application that enables users to send and receive anonymous messages with real-time feedback and media handling.',
      'Built with secure authentication using JWT and image uploads via Cloudinary.',
      'Frontend powered by Next.js for fast and SEO-friendly pages.',
      'Backend designed with RESTful architecture and robust validation using Express.js and Mongoose.',
      'Features include message moderation, user tracking, and notification system.'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Cloudinary', 'Next.js']
  },
  {
    title: 'WhatsApp Clone – Real-time Messaging Web App',
    company: 'Full-Stack Developer',
    date: '7/2024 – 09/2024',
    location: 'New Cairo, Egypt',
    description: [
      'A real-time messaging platform that replicates core features of WhatsApp including private/group chats, media sharing, typing indicators, and online/offline status.',
      'Built entirely from scratch using Node.js for the backend and vanilla JavaScript with HTML/CSS for the frontend.',
      'Socket.IO powers the real-time communication.',
      'Also includes responsive design, custom chat UI, and dynamic message rendering.'
    ],
    technologies: ['Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Mongoose', 'Cloudinary', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Job App – LinkedIn-like Job Portal',
    company: 'Full-Stack Developer',
    date: '10/2024 – 01/2025',
    location: 'New Cairo, Egypt',
    description: [
      'A full-stack job portal platform where users can create profiles, post/apply for jobs, and chat with recruiters in real time.',
      'Backend built with GraphQL for flexible data fetching and Docker for containerized deployment.',
      'Authentication via JWT, file handling through Cloudinary, and real-time notifications with Socket.IO.',
      'Complex business logic handled using custom middleware and layered architecture for scalability.'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Cloudinary', 'GraphQL', 'Socket.IO', 'Docker']
  },
  {
    title: 'E-Commerce Platform – Online Store like Amazon/Noon',
    company: 'Full-Stack Developer',
    date: '2/2025 – 05/2025',
    location: 'New Cairo, Egypt',
    description: [
      'A comprehensive e-commerce system featuring product browsing, cart management, secure checkout, and admin dashboard.',
      'Developed full-stack using NestJS on the backend and integrated both REST and GraphQL APIs for maximum flexibility.',
      'Includes features like role-based access, product filtering, order tracking, and responsive frontend with dynamic UI interactions.',
      'Image storage via Cloudinary and payment logic with mocked gateways.'
    ],
    technologies: ['NestJS', 'MongoDB', 'Mongoose', 'Cloudinary', 'JWT', 'REST APIs', 'GraphQL', 'Socket.IO', 'Docker']
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
