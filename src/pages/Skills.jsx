import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { SiRedux, SiExpress, SiChakraui } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  {
    name: "React",
    icon: <FaReact className="text-blue-400 animate-spin-slow" />,
  },
  { name: "Express", icon: <SiExpress className="text-red-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-700" /> },
  { name: "Chakra UI", icon: <SiChakraui className="text-teal-400" /> },
];


const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        My Skills
      </motion.h2>

      {/* Skill Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center space-y-4 hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <div className="text-5xl sm:text-6xl">{skill.icon}</div>
            <p className="text-lg sm:text-xl font-semibold text-gray-800">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;