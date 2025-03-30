import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, } from "react-icons/fa";
import { SiMongodb, SiExpress ,SiRedux ,SiChakraui } from "react-icons/si";
import profile from "../assets/profile.jpg";

const Home = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const techIcons = [
    { icon: <FaReact size={50} className="text-blue-500 animate-spin-slow " />, key: "react", name:  "React" },
    { icon: <FaNodeJs size={50} className="text-green-500" />, key: "node", name: "Node.js" },
    { icon: <FaHtml5 size={50} className="text-orange-500" />, key: "html", name: "HTML5" },
    { icon: <FaCss3Alt size={50} className="text-blue-600" />, key: "css", name: "CSS3" },
    { icon: <FaJs size={50} className="text-yellow-500" />, key: "js", name: "JavaScript" },
    { icon: <SiMongodb size={50} className="text-green-700" />, key: "database", name: "MongoDb" },
    { icon: <SiExpress size={50} className="text-blue-600" />, key: "express", name: "Express" },
    { icon: <SiRedux size={50} className="text-purple-600" />, key: "redux", name: "Redux" },
    { icon: <SiChakraui size={50} className="text-teal-600" />, key: "chakra", name: "chakra Ui" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % techIcons.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = "/Mukulsaini.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Mukul_Saini_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      window.open(resumeUrl, "_blank");
    }, 500);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-50 text-black py-16 px-6 sm:px-8 lg:px-10">
      <div className="container mx-auto max-w-screen-xl flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-5 md:space-y-7 px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-black">Mukul Saini</span>
          </h1>

          <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
  <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
    <Typewriter 
      words={["Full Stack Developer", "Frontend Specialist", "Backend Expert"]} 
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
</h2>


          <p className="text-base md:text-lg max-w-2xl leading-relaxed text-gray-700">
          My goal is to build responsive, efficient, and user-friendly websites that offer a seamless experience. I love creating modern websites that are visually appealing, fast-loading, and work flawlessly on any device.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="contact" smooth={true} duration={800} className="px-6 py-3 font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg transition-all duration-300 cursor-pointer">
              Hire Me
            </Link>

            <button onClick={handleDownloadResume} className="px-6 py-3 font-semibold rounded-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <a href="https://github.com/mukulsainisbl" target="_blank" rel="noreferrer">
              <FiGithub className="text-gray-800 hover:text-gray-600 transition-all" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mukul-saini-sambhal/" target="_blank" rel="noreferrer">
              <FiLinkedin className="text-blue-600 hover:text-blue-500 transition-all" size={24} />
            </a>
          </div>
        </div>

{/* Right Section (Profile Image + Rotating Tech Icon) */}
<div className="w-full md:w-1/2 flex flex-col justify-center items-center relative">
  
  {/* Profile Image */}
  <motion.div 
    initial={{ scale: 0.8 }} 
    animate={{ scale: 1 }} 
    transition={{ duration: 0.5 }} 
    className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 shadow-xl mb-8"
  >
    <img className="w-full h-full object-cover" src={profile} alt="Mukul Saini Profile" />
  </motion.div>

  {/* Animated Tech Stack Icon Below Profile */}
  <div className="w-full flex justify-center relative mt-4">
  <div className="w-24 h-24 flex flex-col items-center justify-center">
    <AnimatePresence mode="wait">
      <motion.div
        key={techIcons[currentIconIndex].key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <motion.div
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          exit={{ x: -20 }}
          transition={{ duration: 0.4 }}
        >
          {techIcons[currentIconIndex].icon}
        </motion.div>
        <motion.p 
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          exit={{ x: 20 }}
          transition={{ duration: 0.4 }}
          className="text-lg font-bold mt-2 text-gray-600"
        >
          {techIcons[currentIconIndex].name}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  </div>
</div>
</div>
      </div>
    </section>
  );
};

export default Home;
