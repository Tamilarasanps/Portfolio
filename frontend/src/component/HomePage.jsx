import React from "react";
import Tamil from "../assets/Tamil.jpg";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const HomePage = () => {
  return (
    <section className="md:h-[660px] flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white px-6 sm:px-16 py-16" id="Home">
      {/* === Left: Text Content === */}
      <div className="max-w-xl mt-12 md:mt-0 md:mr-12 flex flex-col items-start">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-teal-400">Tamilarasan</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Software Developer – Specializing in Web & Mobile Applications
        </h2>
        <p className="text-gray-300 mb-6">
          I develop scalable, high-performance software solutions across web and
          mobile platforms using the MERN stack and cross-platform tools.
          Focused on clean architecture and real-world problem solving.
        </p>

        {/* === Tech Stack Icons === */}
        <div className="flex gap-6 text-3xl text-teal-400 mb-6">
          <SiMongodb title="MongoDB" />
          <SiExpress title="Express" />
          <SiReact title="React" />
          <SiNodedotjs title="Node.js" />
        </div>

        {/* === CTA Buttons === */}
        <div className="flex gap-4 mb-6">
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
        </div>

        {/* <div className="flex space-x-6">
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
        </div> */}

        {/* === Social Links === */}
        <div className="flex gap-6 text-2xl">
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
        </div>
      </div>

      {/* === Right: Image === */}
      <div className="mt-10 md:mt-0">
        <img
          src={Tamil}
          alt="Tamilarasan"
          className="h-[300px] w-[300px] rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default HomePage;

// import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
// import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

{
  /* <div className="flex gap-6 text-4xl text-teal-400 mb-8">
    <SiMongodb title="MongoDB" />
    <SiExpress title="Express" />
    <SiReact title="React" />
    <SiNodedotjs title="Node.js" />
</div>


<div className="flex gap-4 mb-10">
    <a
    href="#projects"
    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded"
    >
    View Projects
    </a>
    <a
    href="/resume.pdf" // Replace with your actual resume path
    download
    className="flex items-center gap-2 border border-teal-400 hover:bg-teal-600 text-white py-2 px-6 rounded"
    >
    <FaDownload />
    Resume
    </a>
</div>


<div className="flex gap-6 text-3xl">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
    <FaGithub />
    </a>
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
    </a>
</div> */
}
