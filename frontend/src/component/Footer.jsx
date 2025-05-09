import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 sm:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left side */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Tamilarasan. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Tamilarasanps"
            target="_blank"
            rel="noreferrer"
            className="text-teal-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/tamilarasan-ps-4b66b72b2/"
            target="_blank"
            rel="noreferrer"
            className="text-teal-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:tamilarasan.softwarengineer@gmail.com"
            className="text-teal-400 hover:text-white transition-colors duration-300"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
