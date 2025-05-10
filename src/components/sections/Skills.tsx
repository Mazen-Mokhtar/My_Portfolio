
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Interface for skill items
interface SkillItem {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools" | "other";
}

// Skill data
const skills: SkillItem[] = [
  { name: "JavaScript (ES6+)", level: 90, category: "backend" },
  { name: "TypeScript", level: 85, category: "backend" },
  { name: "Node.js", level: 92, category: "backend" },
  { name: "Express.js", level: 90, category: "backend" },
  { name: "NestJS", level: 85, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },
  { name: "RESTful APIs", level: 90, category: "backend" },
  { name: "MongoDB", level: 88, category: "database" },
  { name: "Mongoose", level: 88, category: "database" },
  { name: "PostgreSQL", level: 75, category: "database" },
  { name: "Sequelize", level: 75, category: "database" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Git & GitHub", level: 85, category: "tools" },
  { name: "WebSocket", level: 85, category: "backend" },
  { name: "JWT Authentication", level: 90, category: "backend" },
  { name: "API Security", level: 85, category: "backend" },
  { name: "Cloudinary", level: 80, category: "tools" },
  { name: "Google Services Integration", level: 75, category: "tools" },
  { name: "Postman", level: 82, category: "tools" },
  { name: "CI/CD Basics", level: 70, category: "tools" },
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
              <h3 className="text-xl font-semibold mb-6 text-indigo-300 border-l-4 border-indigo-500 pl-3">
                Backend Development
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-indigo-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? `${skill.level}%` : 0 }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-indigo-300 border-l-4 border-indigo-500 pl-3">
                Database Management
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {databaseSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-indigo-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? `${skill.level}%` : 0 }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-indigo-300 border-l-4 border-indigo-500 pl-3">
                DevOps & Tools
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {toolSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-indigo-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? `${skill.level}%` : 0 }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Key strengths */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-indigo-300 text-center">Key Strengths</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Error Handling", "Data Validation", "Problem Solving", "Debugging", "Scalable Architecture Design", "Clean Code", "Maintainability", "JWT Authentication", "API Security", "Deployment", "CI/CD Basics", "Vibe Coding (AI Tools)"].map((strength) => (
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
