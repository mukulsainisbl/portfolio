import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpg";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-scroll";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // Function to download Resume
  const handleDownloadResume = () => {
    const resumeUrl = "/Mukulsaini.pdf"; // Place your resume in the public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Mukul_Saini_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 text-black py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Section (Text) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-black">Mukul Saini</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Frontend Specialist",
                "Backend Expert",
              ]}
              loop={Infinity}
              cursor
              cursorStyle={<span className="text-black">|</span>}
              typeSpeed={70}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Passionate about crafting modern web experiences with cutting-edge
            technologies. Specializing in responsive design, performance
            optimization, and scalable architecture.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Navigate to Contact Page */}
            <Link 
            
            to="contact"
            smooth={true}
            duration={800}
            className="px-8 py-3 font-semibold rounded-lg bg-black text-white hover:bg-gray-800 hover:shadow-lg transition-all duration-300">
              Hire Me
            </Link>

          

            {/* Download Resume */}
            <button
              onClick={handleDownloadResume}
              className="px-8 py-3 font-semibold rounded-lg border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://github.com/mukulsainisbl"
              target="_blank"
              rel="noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mukul-saini-sambhal/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right Section (Profile Image) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-black shadow-2xl">
            <img
              className="w-full h-full object-scale-down scale-100"
              src={profile}
              alt="Mukul Saini Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
