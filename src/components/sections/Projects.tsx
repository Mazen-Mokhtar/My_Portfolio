import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'fullstack' | 'backend' | 'frontend';
  date: string;
  location: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Saraha App',
    description: 'Anonymous messaging platform with real-time feedback and media handling. Built with secure authentication using JWT and image uploads via Cloudinary. Frontend powered by Next.js for fast and SEO-friendly pages.',
    image: 'https://images.unsplash.com/photo-1512626120412-faf41adb4874?w=800&auto=format&fit=crop',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Cloudinary', 'Next.js'],
    category: 'fullstack',
    date: '08/2023 – 11/2023',
    location: 'Cairo, Egypt',
    link: 'https://saraha-fe.vercel.app/'
  },
  {
    id: 2,
    title: 'Social Gaming App',
    description: 'A hybrid social platform inspired by WhatsApp, Facebook, and Instagram. Users can chat in real-time, post content, like/comment, and interact within a gaming-oriented environment.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&auto=format&fit=crop',
    technologies: ['Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Mongoose', 'Cloudinary', 'Next.js'],
    category: 'fullstack',
    date: '12/2023 – 06/2024',
    location: 'Cairo, Egypt',
    link: 'http://social-gaming-fe-zendex.vercel.app'
  },
  {
    id: 3,
    title: 'WhatsApp Clone',
    description: 'A real-time messaging platform that replicates core features of WhatsApp including private/group chats, media sharing, typing indicators, and online/offline status.',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800&auto=format&fit=crop',
    technologies: ['Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Mongoose', 'Cloudinary', 'JavaScript', 'HTML', 'CSS'],
    category: 'fullstack',
    date: '7/2024 – 09/2024',
    location: 'New Cairo, Egypt'
  },
  {
    id: 4,
    title: 'Job Portal',
    description: 'A full-stack job portal platform where users can create profiles, post/apply for jobs, and chat with recruiters in real time. Backend built with GraphQL for flexible data fetching and Docker for containerized deployment.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Cloudinary', 'GraphQL', 'Socket.IO', 'Docker'],
    category: 'fullstack',
    date: '10/2024 – 01/2025',
    location: 'New Cairo, Egypt'
  },
  {
    id: 5,
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce system featuring product browsing, cart management, secure checkout, and admin dashboard. Developed full-stack using NestJS on the backend and integrated both REST and GraphQL APIs.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
    technologies: ['NestJS', 'MongoDB', 'Mongoose', 'Cloudinary', 'JWT', 'REST APIs', 'GraphQL', 'Socket.IO', 'Docker'],
    category: 'fullstack',
    date: '2/2025 – 05/2025',
    location: 'New Cairo, Egypt',
    link: 'https://fresh-cart-tau-rosy.vercel.app'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'backend' | 'frontend'>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col justify-center py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              My Projects
            </h2>
            <div className="w-12 h-1 bg-indigo-500 mx-auto mt-2 mb-6 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Here's a showcase of my recent work across various domains including messaging platforms,
              social networks, job portals, and e-commerce systems.
            </p>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['all', 'fullstack', 'backend', 'frontend'].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category as any)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Card className="overflow-hidden h-full bg-white/5 backdrop-blur-sm border-white/10 hover:border-indigo-500/50 transition-all text-white">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{project.title}</CardTitle>
                      <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
                        {project.date}
                      </span>
                    </div>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    <div className="text-sm text-gray-400 mt-2">
                      <span>{project.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 text-sm hover:text-indigo-300 flex items-center gap-1"
                      >
                        View Project
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <span className="text-gray-500 text-sm italic">
                        Private Project
                      </span>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-10"
            >
              <p className="text-gray-400">No projects found in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
