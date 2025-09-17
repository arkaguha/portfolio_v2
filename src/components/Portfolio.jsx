import { useState } from "react";
import { Github } from "lucide-react";
import { FaNode, FaReact, FaJsSquare } from "react-icons/fa";
import { SiMongodb, SiMongoose, SiExpress, SiEjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import ContactMe from "./ContactMe";
import { injectSpeedInsights } from "@vercel/speed-insights";

const techIcons = {
  nodejs: <FaNode size="2em" fill="rgb(93,174,71)" />,
  express: <SiExpress size="1.5em" />,
  reactjs: <img src="/icons/react.svg" className="w-7" />,
  mongoose: <SiMongoose size="2em" fill="rgb(136,0,0)" />,
  mongodb: <SiMongodb size="1.5em" fill="rgb(0,150,43)" />,
  tailwindcss: <RiTailwindCssFill size="1.5em" fill="rgb(0,188,255)" />,
  // html: <TiHtml5 size="1.5em" />,
  html: <img src="/icons/HTML5_logo_and_wordmark.svg" className="w-7" />,
  css: <img src="/icons/Official_CSS_Logo.svg" className="w-6" />,
  // css: <IoLogoCss3 size="1.5em" fill="rgb(102,48,154)" />,
  javascript: <FaJsSquare size="1.5em" fill="rgb(247,223,30)" />,
  vite: <img src="/icons/vite.svg" className="w-6" />,
  emailjs: (
    <img
      src="https://avatars.githubusercontent.com/u/17705215?s=200&v=4"
      className="w-6"
    />
  ) || <img src="/icons/emailjs.svg" className="w-6" />,
  ejs: <SiEjs size="2em" fill="rgb(143,61,61)" />,
  playwright: (
    <img src="https://playwright.dev/img/playwright-logo.svg" className="w-6" />
  ),
  crud: "",
  github: <Github />,
  rest: "",
};
// const techNames = {
//   nodejs: "Node.js",
//   express: "Express.js",
//   reactjs: "React",
//   mongoose: "Mongoose",
//   mongodb: "MongoDB",
//   html: "HTML5",
//   css: "CSS3",
//   tailwindcss: "Tailwind CSS",
//   javascript: "JavaScript",
//   vite: "Vite",
//   emailjs: "EmailJs",
// };

const skills = [
  {
    category: "Frontend",
    light: "bg-blue-100",
    dark: "bg-blue-200",
    skills: ["Reactjs", "EJS", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    light: "bg-green-100",
    dark: "bg-green-200",
    skills: ["Nodejs", "Express", "JavaScript"],
  },
  {
    category: "Database",
    light: "bg-yellow-100",
    dark: "bg-yellow-200",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    category: "Testing",
    light: "bg-purple-100",
    dark: "bg-purple-200",
    skills: ["Playwright"],
  },
  {
    category: "Others",
    light: "bg-pink-100",
    dark: "bg-pink-200",
    skills: ["REST", "CRUD", "GitHub"],
  },
];

const projects = [
  {
    id: 1,
    title: "Todo List App",
    description:
      "A full-stack Todo application built with the MERN stack, featuring secure authentication, intuitive task management, and real-time updates. Designed with a responsive UI for seamless use across devices, it offers efficient CRUD operations and a clean, modern user experience.",
    githubLink: "https://github.com/arkaguha/to-do-list--MERN",
    techStack: [
      "nodejs",
      "express",
      "reactjs",
      "mongoose",
      "mongodb",
      "html",
      "css",
      "tailwindcss",
      "javascript",
    ],
    image: [
      "/todo/dark add new.jpg",
      "/todo/dark editing.jpg",
      "/todo/dark home.jpg",
      "/todo/light home.jpg",
      "/todo/light edit.jpg",
      "/todo/light add new.jpg",
    ],
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio built using React (Vite) and TailwindCSS, featuring dynamic sections for projects and skills. Includes a fully functional contact form integrated with EmailJS for instant email submissions. Implements a dark/light theme toggle, smooth animations, and showcases my MERN stack projects with real-time updates.",
    githubLink: "https://github.com/arkaguha/portfolio_v2",
    liveLink: "https://portfolio-v2-chi-rust.vercel.app/",
    techStack: [
      "reactjs",
      "tailwindcss",
      "html",
      "css",
      "javascript",
      "emailjs",
      "vite",
    ],
    image: [
      "/portfolio/Screenshot 2025-09-17 143607.png",
      "/portfolio/Screenshot 2025-09-17 143759.png",
      "/portfolio/Screenshot 2025-09-17 143820.png",
    ],
  },

  // {
  //   id: 2,
  //   title: "portfolio",
  //   description: "lorem",
  //   githubLink: "#",
  //   techStack: ["nodejs"],
  //   image: ["https://picsum.photos/300/200", "https://picsum.photos/180/120"],
  // },
  // {
  //   id: 3,
  //   title: "experss",
  //   description: "lorem",
  //   githubLink: "#",
  //   techStack: [],
  //   image: ["https://picsum.photos/300/200", "https://picsum.photos/180/120"],
  // },
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  injectSpeedInsights();

  // console.log(projects.map((p, i) => p.image[i]));

  return (
    <div
      className={
        darkMode ? "bg-gray-900 text-white sm" : "bg-white text-gray-900"
      }
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <Hero darkMode={darkMode} />

      {/* About */}
      <About />

      {/* Work Experience */}
      <WorkExperience />

      {/* Education */}
      <Education />

      {/* Projects */}
      <Projects projects={projects} techIcons={techIcons} />

      {/* Skills */}
      <Skills skills={skills} darkMode={darkMode} techIcons={techIcons} />

      <ContactMe />

      {/* Footer */}
      <Footer />
    </div>
  );
}
