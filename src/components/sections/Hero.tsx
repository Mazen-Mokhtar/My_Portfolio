
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);
  
  useEffect(() => {
    if (typedRef.current) {
      typed.current = new Typed(typedRef.current, {
        strings: [
          'Backend Developer',
          'Node.js & NestJS',
          'REST & GraphQL APIs',
          'WebSocket & Socket.IO',
          'MongoDB & Mongoose',
          'Docker & CI/CD',
          'JWT & RBAC',
          'Stripe & Cloudinary'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
      });
    }
    
    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-4 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] z-0" />
      
      <div className="z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div 
          className="flex-1 text-center md:text-left" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400">
              Mazen Mokhtar
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 h-[80px] md:h-auto">
            <span ref={typedRef}></span>
          </h2>
          
          <p className="text-gray-400 max-w-lg mb-8">
            Backend Developer focused on building scalable, secure systems with clean architecture
            and rigorous validation. Experienced with Node.js, Express.js, NestJS, MongoDB, real-time
            apps using WebSocket/Socket.IO, and deploying containerized services with Docker.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            
            <motion.a 
              href="#projects" 
              className="bg-transparent border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="./My_CV_last_v4.pdf"
              download
              className="bg-transparent border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV (PDF)
            </motion.a>

            <motion.a
              href="./My_CV_last_v4.docx"
              download
              className="bg-transparent border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV (Word)
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full max-w-xs md:max-w-sm flex-shrink-0" 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl opacity-50 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
              <img 
                alt="Mazen Mokhtar" 
                className="w-full h-full object-cover" 
                loading="lazy"
                decoding="async"
                src="/lovable-uploads/62c7ad4b-e4f3-4a6c-b091-197da7bcbaf7.jpg" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
