import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Tamil from "../assets/Tamil.jpg";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { motion } from "framer-motion";

const HomePage = () => {
  const [key, setKey] = useState(0);
  // const location = useLocation();

  const name = "Tamilarasan";

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Reset the key state whenever this page is revisited
  useEffect(() => {
    setKey((prevKey) => prevKey + 1); // Increment the key to re-trigger the page animation
  }, [location.pathname]); // Triggers on every route change

  return (
    <section
      className="md:h-[660px] flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white px-6 sm:px-16 py-16"
      id="Home"
      key={key} // This forces a re-render on key change, triggering animation each time
    >
      {/* === Left: Text Content === */}
      <div className="max-w-xl mt-12 md:mt-0 md:mr-12 flex flex-col items-start">
        {/* Name with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-teal-400">
              {name.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: index * 0.1, // Delay the animation for each letter
                    duration: 0.5, // Duration for each letter
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl sm:text-3xl font-semibold mb-6"
        >
          Software Developer – Specializing in Web & Mobile Applications
        </motion.h2>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-300 mb-6"
        >
          I develop scalable, high-performance software solutions across web and
          mobile platforms using the MERN stack and cross-platform tools.
          Focused on clean architecture and real-world problem solving.
        </motion.p>

        {/* === Tech Stack Icons === */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex gap-6 text-3xl text-teal-400 mb-6"
        >
          <SiMongodb title="MongoDB" />
          <SiExpress title="Express" />
          <SiReact title="React" />
          <SiNodedotjs title="Node.js" />
        </motion.div>

        {/* === CTA Buttons === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex gap-4 mb-6"
        >
          <a
            href="#projects"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf" // Update with actual path
            download
            className="flex items-center gap-2 border border-teal-400 hover:bg-teal-600 text-white py-2 px-6 rounded"
          >
            <FaDownload />
            Resume
          </a>
        </motion.div>

        {/* === Social Links === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex gap-6 text-2xl"
        >
          <a
            href="https://github.com/Tamilarasanps"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tamilarasan-ps-4b66b72b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:tamilarasan.softwarengineer@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

      {/* === Right: Image === */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-10 md:mt-0"
      >
        <img
          src={Tamil}
          alt="Tamilarasan"
          className="h-[300px] w-[300px] rounded-2xl object-cover shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HomePage;
