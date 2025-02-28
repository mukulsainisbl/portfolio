import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-800 p-6 md:p-12"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          My journey into the world of development began with a spark of curiosity
          and has grown into a passion for solving real-world problems through code.
          From building my first simple webpage to developing complex applications,
          every step has taught me the value of persistence, creativity, and continuous learning.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          I believe that coding is not just about writing lines of code, but about crafting solutions
          that make a difference. I thrive in collaborative environments and enjoy turning challenges
          into opportunities. Whether it's refining a user experience or exploring innovative technologies,
          I am driven by the desire to make an impact.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          When I'm not coding, you can find me exploring new technologies, reading about emerging trends,
          or indulging in creative pursuits. My goal is to keep pushing boundaries and evolve as a developer,
          all while staying true to the values that define my work ethic.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
