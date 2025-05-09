import React from "react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiGithub,
  SiJenkins,
  SiDocker,
  SiPostman,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

// Reusable Skill Icon Component
const SkillIcon = ({ Icon, label, color }) => (
  <div className={`flex flex-col items-center ${color}`}>
    <Icon size={40} />
    <span className="mt-2 text-sm text-gray-100">{label}</span>
  </div>
);

const Skills = () => {
  const frontendSkills = [
    { Icon: SiHtml5, label: "HTML5", color: "text-orange-500" },
    { Icon: SiCss3, label: "CSS3", color: "text-blue-500" },
    { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
    { Icon: SiReact, label: "React", color: "text-cyan-400" },
    { Icon: SiReact, label: "React Native", color: "text-cyan-300" },
    { Icon: SiRedux, label: "Redux", color: "text-purple-400" },
    { Icon: SiTailwindcss, label: "Tailwind", color: "text-teal-400" },
  ];

  const backendSkills = [
    { Icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
    { Icon: SiExpress, label: "Express", color: "text-gray-300" },
    { Icon: SiMongodb, label: "MongoDB", color: "text-green-400" },
  ];

  const toolsAndPlatforms = [
    { Icon: FaLaptopCode, label: "VS Code", color: "text-blue-500" },
    { Icon: SiGit, label: "Git", color: "text-orange-400" },
    { Icon: SiGithub, label: "GitHub", color: "text-white" },
    { Icon: SiPostman, label: "Postman", color: "text-orange-500" },
    { Icon: SiNetlify, label: "Netlify", color: "text-green-400" },
    { Icon: SiVercel, label: "Vercel", color: "text-white" },
  ];

  const devOpsSkills = [
    { Icon: SiJenkins, label: "Jenkins", color: "text-red-500" },
    { Icon: SiDocker, label: "Docker", color: "text-blue-400" },
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white py-16 px-6 sm:px-16">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-teal-400">
          Technical Skills
        </h2>

        <div className="space-y-10">
          {/* Frontend */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Frontend
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
              {frontendSkills.map(({ Icon, label, color }, idx) => (
                <SkillIcon key={idx} Icon={Icon} label={label} color={color} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Backend
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
              {backendSkills.map(({ Icon, label, color }, idx) => (
                <SkillIcon key={idx} Icon={Icon} label={label} color={color} />
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
              {toolsAndPlatforms.map(({ Icon, label, color }, idx) => (
                <SkillIcon key={idx} Icon={Icon} label={label} color={color} />
              ))}
            </div>
          </div>

          {/* DevOps / CI-CD */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              CI/CD & DevOps
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
              {devOpsSkills.map(({ Icon, label, color }, idx) => (
                <SkillIcon key={idx} Icon={Icon} label={label} color={color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
