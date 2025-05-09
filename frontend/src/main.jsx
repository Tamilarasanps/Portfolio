import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./component/Header.jsx";
import HomePage from "./component/HomePage.jsx";
import About from "./component/About.jsx";
import Skills from "./component/Skill.jsx";
import Projects from "./component/Project.jsx";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx";
import Education from "./component/Education.jsx";
import Services from "./component/Services.jsx";
import AboutAndServices from "./component/About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <HomePage />
    <AboutAndServices />
    <Skills />
    <Projects />
    <Education />
    <Contact />
    <Footer />
  </StrictMode>
);
