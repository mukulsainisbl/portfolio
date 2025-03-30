import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const navItems = ["Home", "Skills", "Projects", "Statistics", "Contact"];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isActive ? "bg-white shadow-md" : "bg-transparent border-b  border-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 sm:py-2">
        {/* Logo (Clicking navigates to Home) */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-serif font-bold text-black cursor-pointer"
        >
          Mukul
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 text-lg font-medium">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative"
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer text-black hover:text-gray-600 transition-all duration-300"
              >
                {item}
              </Link>
              {/* Underline Animation */}
              <motion.div
                initial={{ width: "0%" }}
                animate={{
                  width: hovered === index ? "100%" : "0%",
                  backgroundColor: "black",
                  height: "2px",
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0"
              />
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className={`lg:hidden cursor-pointer z-50 ${isActive ? "hidden" : "block"}`}>
          <FaBars className="text-black" size={24} onClick={handleToggle} />
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isActive ? 0 : "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 h-full w-3/4 bg-black flex flex-col items-center py-6 px-5 space-y-6 shadow-lg z-50"
        >
          {/* Close Button */}
          <div className="w-full flex justify-end">
            <FaTimes size={24} onClick={handleToggle} className="cursor-pointer text-white" />
          </div>

          {/* Mobile Navigation Links */}
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              initial={{ scale: 1 }}
              animate={{ scale: hovered === index ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center"
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={handleToggle}
                className="cursor-pointer text-white text-lg hover:text-yellow-300 transition-all"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Overlay when menu is open */}
        {isActive && (
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleToggle}></div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
