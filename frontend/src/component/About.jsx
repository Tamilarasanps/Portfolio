import { FaLaptopCode, FaMobileAlt, FaUserTie } from "react-icons/fa";
import { motion, useInView } from "framer-motion"; // Import Framer Motion
import { useRef, useState } from "react";

const services = [
  {
    title: "Full Stack Web Development",
    icon: <FaLaptopCode size={40} className="text-teal-400" />,
    description:
      "Building modern, scalable web applications using the MERN stack (MongoDB, Express, React, Node.js) with clean architecture and responsive design.",
    borderColor: "border-teal-500", // Dynamic border color
  },
  {
    title: "Mobile Application Development",
    icon: <FaMobileAlt size={40} className="text-teal-400" />,
    description:
      "Creating high-performance, cross-platform mobile apps using React Native with intuitive user experiences and real-time data syncing.",
    borderColor: "border-yellow-500", // Dynamic border color
  },
  {
    title: "Freelance Services",
    icon: <FaUserTie size={40} className="text-teal-400" />,
    description:
      "Delivering tailored development solutions for businesses and individuals — from landing pages to full-stack applications, with deployment and support.",
    borderColor: "border-blue-500", // Dynamic border color
  },
];

const ServiceCard = ({ title, icon, description, borderColor }) => {
  const [showPopup, setShowPopup] = useState(false); // State to show popup
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 relative ${borderColor} border-4`}
      onMouseEnter={() => setShowPopup(true)} // Show popup on hover
      onMouseLeave={() => setShowPopup(false)} // Hide popup when not hovering
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-white text-center mb-2">
        {title}
      </h3>
      <p className="text-gray-300 text-sm text-center">{description}</p>

      {/* Popup when hovering */}
      {showPopup && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-80 text-white p-4 rounded-lg mt-4 text-center"
          style={{
            position: "absolute",
            zIndex: 10,
            width: "100%",
            marginTop: "10px",
          }}
        >
          <h4 className="text-lg font-bold">More About {title}</h4>
          <p className="text-sm">{description}</p>
        </div>
      )}
    </motion.div>
  );
};

const AboutAndServices = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: false, margin: "-100px" });

  return (
    <section
      className="bg-gray-800 text-white py-16 px-6 sm:px-16"
      id="Aboutus"
    >
      {/* About Me Section */}
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 40 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
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
      </motion.div>

      {/* Services Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-teal-400">Services</h2>
        <p className="text-gray-400 mt-2">What I can do for you</p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
            borderColor={service.borderColor}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutAndServices;
