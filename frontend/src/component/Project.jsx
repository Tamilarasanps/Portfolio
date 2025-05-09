import React from "react";

const projects = [
  {
    name: "TaskMaster Pro",
    description:
      "A full-featured task management app with authentication and real-time updates.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
    features: [
      "JWT Authentication",
      "Real-time updates with WebSockets",
      "Task status tracking",
    ],
    liveDemo: "https://taskmasterpro.live",
    github: "https://github.com/yourusername/taskmaster-pro",
  },
  {
    name: "DevConnect",
    description:
      "A social network for developers to share projects and connect.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "OAuth login with GitHub",
      "Developer profiles & project posts",
      "Likes and comments system",
    ],
    liveDemo: "https://devconnect.live",
    github: "https://github.com/yourusername/devconnect",
  },
  {
    name: "ShopEase",
    description: "An e-commerce platform with user and admin dashboards.",
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    features: [
      "Product management (CRUD)",
      "Stripe payment integration",
      "Admin dashboard with analytics",
    ],
    liveDemo: "https://shopease.store",
    github: "https://github.com/yourusername/shopease",
  },
  {
    name: "FitTrack",
    description:
      "Fitness tracking app with custom routines and progress charts.",
    techStack: ["React", "Chart.js", "Node.js", "MongoDB"],
    features: [
      "Workout logging",
      "Progress charts with Chart.js",
      "Mobile-first responsive design",
    ],
    liveDemo: "https://fittrackapp.com",
    github: "https://github.com/yourusername/fittrack",
  },
  {
    name: "EduQuest",
    description: "Online course platform with video lectures and quizzes.",
    techStack: ["React", "Node.js", "MongoDB", "JWT"],
    features: [
      "Secure login for instructors & students",
      "Course enrollment & tracking",
      "Interactive quizzes and results",
    ],
    liveDemo: "https://eduquest.io",
    github: "https://github.com/yourusername/eduquest",
  },
  {
    name: "NoteNest",
    description: "A real-time collaborative note-taking app.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    features: [
      "Live note syncing",
      "Markdown editor support",
      "Room-based collaboration",
    ],
    liveDemo: "https://notenest.live",
    github: "https://github.com/yourusername/notenest",
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-2xl font-semibold text-teal-400">{project.name}</h3>
    <p className="mt-2 text-gray-300">{project.description}</p>
    <p className="mt-2 text-sm text-gray-400">
      <span className="font-semibold">Tech Stack:</span>{" "}
      {project.techStack.join(", ")}
    </p>
    <ul className="list-disc list-inside mt-2 text-sm text-gray-200">
      {project.features.map((feature, idx) => (
        <li key={idx}>✅ {feature}</li>
      ))}
    </ul>
    <div className="mt-4 space-x-4">
      <a
        href={project.liveDemo}
        target="_blank"
        rel="noreferrer"
        className="text-teal-400 hover:underline"
      >
        🔗 Live Demo
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="text-teal-400 hover:underline"
      >
        📂 GitHub
      </a>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="bg-gray-800 text-white py-16 px-6 sm:px-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-teal-400">Projects</h2>
      <p className="text-gray-400 mt-2">
        Here are some of the MERN stack apps I've built
      </p>
    </div>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
