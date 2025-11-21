
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Database as DbIcon, Wrench } from "lucide-react";

// Interface for skill items
interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "other";
}

// Skill data
const skills: SkillItem[] = [
  { name: "JavaScript (ES6+)", category: "backend" },
  { name: "TypeScript", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "WebSocket", category: "backend" },
  { name: "Socket.IO", category: "backend" },
  { name: "JWT", category: "backend" },
  { name: "RBAC", category: "backend" },
  { name: "Swagger", category: "backend" },
  { name: "class-validator", category: "backend" },
  { name: "class-transformer", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "Mongoose", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Sequelize", category: "database" },
  { name: "Docker", category: "tools" },
  { name: "Git & GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "CI/CD", category: "tools" },
  { name: "Stripe", category: "tools" },
  { name: "Nodemailer", category: "tools" },
  { name: "Multer", category: "tools" },
  { name: "Cloudinary", category: "tools" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  // Group skills by category
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const databaseSkills = skills.filter((skill) => skill.category === "database");
  const toolSkills = skills.filter((skill) => skill.category === "tools");

  return (
    <div className="min-h-screen flex flex-col justify-center py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              My Skills
            </h2>
            <div className="w-12 h-1 bg-indigo-500 mx-auto mt-2 mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I specialize in backend development with a strong foundation in
              JavaScript/TypeScript ecosystem. Here are my key technical skills and
              proficiencies.
            </p>
          </motion.div>

          <div className="space-y-10">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-6 text-indigo-300">
                <Server className="h-5 w-5" />
                <h3 className="text-xl font-semibold">Backend Development</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-colors">
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-white hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-all shadow-sm hover:shadow-md"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-6 text-indigo-300">
                <DbIcon className="h-5 w-5" />
                <h3 className="text-xl font-semibold">Database Management</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-colors">
              <div className="flex flex-wrap gap-3">
                {databaseSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-white hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-all shadow-sm hover:shadow-md"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-6 text-indigo-300">
                <Wrench className="h-5 w-5" />
                <h3 className="text-xl font-semibold">DevOps & Tools</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-colors">
              <div className="flex flex-wrap gap-3">
                {toolSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-white hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-all shadow-sm hover:shadow-md"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
              </div>
            </motion.div>
          </div>
          
          {/* Key strengths */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-indigo-300 text-center">Key Strengths</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Error Handling", "Input Validation", "Problem Solving", "Debugging", "Scalable Architecture Design", "Clean Code", "Maintainability", "JWT", "API Security", "RBAC", "Event-driven Architecture", "DTO Pattern", "Repository Pattern", "Swagger", "Stripe Integration", "Google OAuth"].map((strength) => (
                <motion.div
                  key={strength}
                  className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.2)" }}
                >
                  {strength}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
