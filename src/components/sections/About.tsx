
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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
              About Me
            </h2>
            <div className="w-12 h-1 bg-indigo-500 mx-auto mt-2 mb-8 rounded-full"></div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                Backend Developer with expertise in Node.js, Express.js, NestJS, and MongoDB. 
                I'm passionate about building high-performance backend systems with clean, 
                maintainable code and scalable architecture.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">My Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                I focus on designing and building scalable RESTful APIs and GraphQL endpoints,
                real-time applications using WebSocket, and deploying containerized services with Docker.
                I value clean architecture, error handling, and data validation.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 text-indigo-300">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm currently pursuing a Bachelor's Degree in Computer Science at Arab Open University (AOU) in Cairo.
                While studying, I've been developing my skills through hands-on projects spanning from 
                messaging platforms to social gaming networks and e-commerce systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My portfolio includes full-stack applications with features like real-time communication,
                secure authentication, media handling via Cloudinary, and integration with various services.
                I'm skilled in image handling via Cloudinary, integrating Google services, and leveraging AI tools like
                Vibe Coding. I'm continuously expanding my skills in backend development and exploring new technologies.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-400 border border-gray-700 rounded-full px-4 py-1.5 hover:border-indigo-500 transition-colors">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Currently available for new opportunities
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
