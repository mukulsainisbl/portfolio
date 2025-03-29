import { motion } from "framer-motion";
import {  useEffect, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub,  FaHeart } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMail, MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser"
import { useRef } from "react";
import {  BiUpArrowCircle } from "react-icons/bi";
import { Link } from "react-scroll";
const Contact = () => {






const formRef = useRef();
const [isSent, setIsSent] = useState(false);
const [loading, setLoading] = useState(false);

const cards = [
  { id: 1, title: "9719105128", icon: <BsFillTelephoneFill />, link: "tel:+919719105128" },
  { id: 2, title: "Sambhal, Uttar Pradesh", icon: <MdLocationOn />, link: "https://www.google.com/maps?q=Sambhal,Uttar+Pradesh" },
  { id: 3, title: "mukulsainisbl1234@gmail.com", icon: <MdOutlineMail />, link: "mailto:mukulsainisbl1234@gmail.com" },
];


  const [hovered, setHovered] = useState(null);
  const [socialHovered, setSocialHovered] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show button only if scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
  
    emailjs
      .sendForm(
        "service_ayv5q8c", // Replace with your actual Service ID
        "template_fw7qpbc", // Replace with your actual Template ID
        formRef.current,
        "niMOT4w2TnQAJjBZA" // Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          setIsSent(true);
          setLoading(false);
          e.target.reset(); // Clear the form
        },
        (error) => {
          console.error("Error sending message:", error.text);
          setLoading(false);
        }
      );
  };
  

  return (
    
    <section id="contact"  className="bg-gray-50  text-black min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="flex-1 py-12 px-4 sm:px-3 lg:px-8 borde-2 ">
        {/* Section Title */}
        <motion.h2
          className="text-center text-black text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>

        {/* Contact Content */}
        <div className=" mx-auto flex flex-col  items-center  lg:flex-row gap-12 lg:gap-24">
          {/* Left Side: Contact Cards */}
          <motion.div
            className="flex-1 flex flex-col gap-6 sm:gap-3 items-center lg:items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {cards.map((card) => (
              <motion.a
                key={card.id}
                href={card.link}
                className="relative w-full max-w-xs py-4 px-6 text-white flex items-center gap-4 font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-gradient-to-r from-blue-500 to-purple-600"
                onHoverStart={() => setHovered(card.id)}
                onHoverEnd={() => setHovered(null)}
                animate={{
                  filter: hovered && hovered !== card.id ? "blur(1px)" : "blur(0px)",
                  scale: hovered === card.id ? 1.05 : 1,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{card.icon}</span>
                <span>{card.title}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Right Side: Contact Form */}
          <div className="flex-1 flex justify-center ">
          <form
  ref={formRef}
  onSubmit={sendEmail}
  className="w-full max-w-lg bg-white px-8 py-6 border border-gray-500 rounded-xl shadow-lg"
>
  <h2 className="text-2xl font-semibold text-black text-center mb-4">Get in Touch</h2>
  <div className="flex flex-col gap-4 sm:gap-2">
    <input
      type="text"
      name="user_name"
      placeholder="Your Name"
      required
      className="p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
    />
    <input
      type="email"
      name="user_email"
      placeholder="Your Email"
      required
      className="p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="3"
      required
      className="p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
    />
    <motion.button
      type="submit"
      disabled={loading}
      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
        loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gray-800"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {loading ? "Sending..." : "Send Message"}
    </motion.button>
  </div>
  {isSent && <p className="text-green-500 text-center mt-3">Message sent successfully!</p>}
</form>

          </div>
        </div>

      </div>
        {/* Social Icons */}
        <div className=" pb-4  flex gap-5 justify-center items-center  ">
          {[
            { icon: <FaInstagram />, color: "text-red-500", hoverColor: "text-red-600", link: "https://www.instagram.com" },
            { icon: <FaLinkedinIn />, color: "text-blue-600", hoverColor: "text-blue-700", link: "https://www.linkedin.com/in/mukul-saini-sambhal/" },
            { icon: <FaGithub />, color: "text-black", hoverColor: "text-gray-700", link: "https://github.com/mukulsainisbl" },
          ].map((social, index) => (
            <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 text-2xl ${
              socialHovered === index ? social.hoverColor : social.color
            }`}
            onMouseEnter={() => setSocialHovered(index)}
            onMouseLeave={() => setSocialHovered(null)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            {social.icon}
          </motion.a>
          
          ))}
        </div>

        {showButton && (
        <div className="fixed bottom-8 right-3 sm:right-1 md:right-1 flex justify-end items-end z-50">
          <Link to="home" smooth={true} duration={800}>
            <BiUpArrowCircle className="text-4xl text-black  animate-bounce hover:text-gray-700 transition-all cursor-pointer" />
          </Link>
        </div>
      )}

<div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 text-center">
  <h3 className="flex justify-center items-center gap-2 text-white font-bold ">
    Made with <FaHeart className="text-red-500 " /> by Mukul
  </h3>
</div>


    </section>
  
  );
};

export default Contact;

