import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import blikit from "../assets/blinkit.png";
import imagebot from "../assets/imagebot.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Blinkit Replica",
      description:
        "A full-featured online store with product listings, cart functionality Built with React, Node.js, and MongoDB.",
      tags: [
        "React",
        "Node.js",
        "Tailwind",
        "MongoDB",
        "Redux",
        "Express",
       
      ],
      image: blikit,
      github: "https://github.com/mukulsainisbl/Blinkit_Frontend",
      live: "https://blinkit-frontend-one.vercel.app",
    },
    {
      id: 2,
      title: "Image Bot",
      description:
        "An AI-powered image generation  platform with integrated payment gateway for premium features.",
      tags: [
        "React",
        "Node.js",
        "Tailwind",  
        "MongoDB", 
        "Razorpay",
        "Clipdrop API",
       
      ],
      image: imagebot,
      github: "https://github.com/mukulsainisbl/Imagebot-frontend",
      live: "https://imagebot-frontend.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 sm:px-12 lg:px-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16"
        >
          Here are some of my recent projects. Each one was built to solve
          specific problems and showcase different technical skills.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
