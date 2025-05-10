// import React from "react";

// const About = () => {
//   return (
//     <section id="about" className="bg-gray-800 text-white py-16 px-6 sm:px-16">
//       <div className="max-w-5xl mx-auto text-center">
//         {/* === About Me Text === */}
//         <h2 className="text-4xl font-bold mb-6 text-teal-400">About Me</h2>
//         <p className="text-lg text-gray-300 leading-relaxed">
//           I'm <span className="text-white font-semibold">Tamilarasan</span>, a{" "}
//           <span className="text-white font-semibold">Full-Stack Developer</span>{" "}
//           with expertise in the{" "}
//           <span className="text-teal-400 font-medium">MERN stack</span> —
//           MongoDB, Express.js, React, and Node.js.
//         </p>
//         <p className="text-lg text-gray-300 mt-4 leading-relaxed">
//           I build scalable, user-focused web applications with clean code and
//           modular architecture. My focus is on creating responsive, accessible
//           interfaces backed by efficient and secure APIs.
//         </p>
//         <p className="text-lg text-gray-300 mt-4 leading-relaxed">
//           I’m also familiar with cloud deployment, CI/CD, and DevOps practices
//           to ensure high availability and fast delivery of applications.
//         </p>

//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { FaLaptopCode, FaMobileAlt, FaUserTie } from "react-icons/fa";

const services = [
  {
    title: "Full Stack Web Development",
    icon: <FaLaptopCode size={40} className="text-teal-400" />,
    description:
      "Building modern, scalable web applications using the MERN stack (MongoDB, Express, React, Node.js) with clean architecture and responsive design.",
  },
  {
    title: "Mobile Application Development",
    icon: <FaMobileAlt size={40} className="text-teal-400" />,
    description:
      "Creating high-performance, cross-platform mobile apps using React Native with intuitive user experiences and real-time data syncing.",
  },
  {
    title: "Freelance Services",
    icon: <FaUserTie size={40} className="text-teal-400" />,
    description:
      "Delivering tailored development solutions for businesses and individuals — from landing pages to full-stack applications, with deployment and support.",
  },
];

const ServiceCard = ({ title, icon, description }) => (
  <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold text-white text-center mb-2">
      {title}
    </h3>
    <p className="text-gray-300 text-sm text-center">{description}</p>
  </div>
);

const AboutAndServices = () => {
  return (
    <section className="bg-gray-800 text-white py-16 px-6 sm:px-16"id="Aboutus">
      {/* About Me Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-teal-400 mb-4">About Me</h2>
        <p className="text-gray-300 text-lg">
          Hi, I'm{" "}
          <span className="text-teal-400 font-semibold">Tamilarasan</span>, a
          passionate Full Stack Web and Mobile Application Developer. I have a
          background in Electronics and Communication Engineering, but I
          discovered my true calling in software development. I specialize in
          the MERN stack, building dynamic web and mobile applications, and
          delivering freelance projects for clients worldwide.
        </p>
      </div>

      {/* Services Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-teal-400">Services</h2>
        <p className="text-gray-400 mt-2">What I can do for you</p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default AboutAndServices;
