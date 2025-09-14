import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Sun, Moon, Github, Linkedin } from "lucide-react";
import { FaNode, FaReact, FaJsSquare } from "react-icons/fa";
import { SiMongodb, SiMongoose, SiExpress, SiEjs } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";

const YOUR_SERVICE_ID = "service_6ndk5ok";
const YOUR_TEMPLATE_ID = "template_xfeurla";
const YOUR_PUBLIC_KEY = "sZUZsiP-8zHdZij-5";

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
const techNames = {
  nodejs: "Node.js",
  express: "Express.js",
  reactjs: "React",
  mongoose: "Mongoose",
  mongodb: "MongoDB",
  html: "HTML5",
  css: "CSS3",
  tailwindcss: "Tailwind CSS",
  javascript: "JavaScript",
  vite: "Vite",
  emailjs: "EmailJs",
};

const techStack = [
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
    githubLink: "https://github.com/arkaguha/portfolio",
    liveLink: "https://arka-guha-portfolio.vercel.app",
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
      "/portfolio/screenshot1.png",
      "/portfolio/screenshot2.png",
      "/portfolio/screenshot3.png",
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

//import ImageCarousel from "./components/ImageCarousel";
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const test = techStack.map((tech) => tech);
  console.log(test);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_PUBLIC_KEY)
      .then(() => {
        alert("Message sent!");
        e.target.reset();
      })

      .catch((err) => {
        console.error(err);
        alert("Failed");
      });
  };

  // console.log(projects.map((p, i) => p.image[i]));

  return (
    <div
      className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-40 py-4 sticky top-0 z-50 bg-inherit shadow-[0_2px_15px_rgba(0,123,255,0.5)]">
        <h1 className="text-xl font-bold">Arka Guha</h1>
        <div className="space-x-6 hidden md:flex ">
          <a href="#home" className="hover:text-blue-500 hover:scale-105 ">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500 hover:scale-105">
            About
          </a>
          <a href="#experience" className="hover:text-blue-500 hover:scale-105">
            Work Experience
          </a>
          <a href="#education" className="hover:text-blue-500 hover:scale-105">
            Education
          </a>
          <a href="#projects" className="hover:text-blue-500 hover:scale-105">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-500 hover:scale-105">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-500 hover:scale-105">
            Contact
          </a>
        </div>
        {/* <div className="flex flex-row-reverse gap-2">
          <button
            title="theme"
            className="hover:scale-115  rounded-2xl "
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <Sun fill="orangered" color="yellow" />
            ) : (
              <Moon color="black" />
            )}
          </button>
          <button className="hover:scale-115 hover:fill-white">
            <a
              href="https://github.com/arkaguha"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<Github fill={darkMode ? "white" : "black"} />}
            </a>
          </button>
          <button className="text-blue-400 hover:scale-115">
            <a
              href="https://www.linkedin.com/in/arka-guha-7010232b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<Linkedin />}
            </a>
          </button>
        </div> */}
        <div className="flex flex-row-reverse gap-2">
          {/* Theme Toggle */}
          <div className="relative group">
            <button
              className="hover:scale-115 rounded-2xl transition-transform duration-300"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <Sun fill="orangered" color="yellow" />
              ) : (
                <Moon color="black" />
              )}
            </button>
            {/* Tooltip */}
            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2
                     bg-gray-800 text-white text-xs px-2 py-1 rounded
                     opacity-0 group-hover:opacity-100 transition-opacity
                     duration-300 whitespace-nowrap"
            >
              Theme
            </span>
          </div>

          {/* GitHub */}
          <div className="relative group">
            <button className="hover:scale-115 transition-transform duration-300">
              <a
                href="https://github.com/arkaguha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github fill={darkMode ? "white" : "black"} />
              </a>
            </button>
            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2
                     bg-gray-800 text-white text-xs px-2 py-1 rounded
                     opacity-0 group-hover:opacity-100 transition-opacity
                     duration-300 whitespace-nowrap"
            >
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <button className="text-blue-400 hover:scale-115 transition-transform duration-300">
              <a
                href="https://www.linkedin.com/in/arka-guha-7010232b0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </button>
            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2
                     bg-gray-800 text-white text-xs px-2 py-1 rounded
                     opacity-0 group-hover:opacity-100 transition-opacity
                     duration-300 whitespace-nowrap"
            >
              LinkedIn
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-evenly px-40 py-35 text-white bg-gray-800"
      >
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-4xl font-bold">Hi, I'm Arka 👋</h2>
          <p className="text-lg">
            MERN Stack Developer | Building modern web apps
            {/* <span>
              I am a passionate MERN stack developer learning to build scalable
              web applications. I enjoy problem-solving and continuously
              learning new technologies.
            </span> */}
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-2  bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              View Projects
            </a>
            <a
              href="http://localhost:5173/public/Resume 09th July 24.pdf"
              target="_blank"
              className="px-6 py-2  bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto">
            <img
              className={
                darkMode
                  ? "object-cover object-top  block w-48 h-48 bg-gray-300 rounded-full hover:scale-115  shadow-blue-200 shadow-lg"
                  : "object-cover object-top w-48 h-48 bg-gray-300 rounded-full hover:scale-115  shadow-black shadow-lg"
              }
              src="/profilePhoto.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-40 py-20  text-center  ">
        <div className="bg-orange-50 rounded-2xl px-6 py-4 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-8 text-center text-black ">
            📝&nbsp;About Me
          </h2>
          <p className="max-w-2xl mx-auto md:mx-0 text-gray-700 dark:text-gray-400">
            👨‍💻 I’m a MERN Stack Developer passionate about building dynamic web
            apps. <br />
            📚 Currently learning frontend patterns & testing with backend.{" "}
            <br />
            🚀 Love taking ideas from concept to deployment. <br />
            🤝 Open to collaboration and always eager to learn new technologies.{" "}
            <br />
            🌍 Based in India, working towards becoming a professional
            full-stack engineer.
          </p>
        </div>
        <div className="w-3xs flex flex-row m-2">
          <span className="flex items-center bg-transparent rounded px-3 py-1 font-medium  text-xs md:text-sm">
            <span className="mr-1">
              <img
                alt="India"
                className="w-3 h-3 md:w-4 md:h-4"
                src="/icons/india.svg"
              />
            </span>
            India
          </span>
          <span className="flex items-center bg-green-100 text-green-800 rounded px-3 py-1 font-bold animate-pulse shadow-sm text-xs md:text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></span>
            Available for projects
          </span>
        </div>
      </section>

      <section
        id="experience"
        className="px-40 py-20 text-center md:text-left bg-gray-800 "
      >
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-12 text-center">
          💼&nbsp;Work Experience
        </h2>

        {/* Work Experience Items */}
        <div className="space-y-10 max-w-3xl mx-auto md:mx-0 ">
          {/* Example 1 */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow ">
            <h3 className="text-xl font-semibold mb-2 text-black">
              👨‍💻 Software Engineer - Aziro (formerly MSys Technologies)
            </h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
              August 2022 - August 2024 | Pune, India
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2 text-left">
              <li>
                Implemented CRUD operations, and REST APIs using Nodejs and
                Express.
              </li>
              <li>
                MongoDB and Mongoose was also Implemented for CRUD operations.
              </li>
              <li>Implemented authentication using JWT.</li>
            </ul>
          </div>

          {/* Example 2 */}
          {/* <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              🛠️ Web Developer Intern — [Company Name]
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Jun 2023 – Dec 2023 | Kolkata, India
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2 text-left">
              <li>Worked on frontend modules using React and EJS templates.</li>
              <li>Optimized backend APIs with Express & Node.js.</li>
              <li>
                Integrated MongoDB with Mongoose for scalable data handling.
              </li>
              <li>Collaborated with senior devs in agile sprints.</li>
            </ul>
          </div> */}
        </div>
      </section>

      <section id="education" className="px-40 py-20 text-center md:text-left">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-12 text-center">
          🎓&nbsp;Education
        </h2>

        {/* Education Items */}
        <div className="space-y-10  mx-auto md:mx-0  flex flex-col md:flex-row lg:flex-row">
          {/* Example 1 */}
          <div className="bg-gray-50 dark:bg-green-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">
              🏫 Bachelor of Technology in Electronics and Communication
              Engineering
            </h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
              2018 – 2022 | Hooghly Engineering and Technology College, West
              Bengal, India
            </p>
            {/* <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2 text-left">
              <li>Specialized in Web Development & Software Engineering.</li>
              <li>Completed projects on MERN stack & RESTful APIs.</li>
              <li>Active member of the coding club & hackathons.</li>
            </ul> */}
          </div>

          {/* Example 2 */}
          <div className="bg-gray-50 dark:bg-indigo-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">
              📘 Higher Secondary Education
            </h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
              2016 – 2018 | Sudhir Memorial Institute, Kolkata, India
            </p>
            {/* <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2 text-left">
              <li>Majored in Science (PCM + Computer Science).</li>
              <li>
                Built foundational knowledge in programming & mathematics.
              </li>
              <li>Graduated with distinction.</li>
            </ul> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}

      <section className="px-40 py-20 bg-gray-800  " id="skills">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-white justify-center pb-4">
          <span>💻</span> Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((stack, index) => (
            <div
              key={index}
              className={
                darkMode
                  ? `${stack.dark} rounded-xl shadow p-5`
                  : `${stack.light} rounded-xl shadow p-5`
              }
            >
              {/* Category Title */}
              <h3 className="text-lg text-black font-semibold mb-3">
                {stack.category}
              </h3>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {stack.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border rounded-lg shadow-sm text-gray-700 font-medium text-sm hover:bg-gray-100 transition items-center justify-center flex gap-1"
                  >
                    {console.log(
                      "techskills: " +
                        skill.trim().toLowerCase() +
                        "  skill :" +
                        skill
                    )}
                    {techIcons[skill.trim().replace(/\s+/g, "").toLowerCase()]}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-40 py-20 ">
        <h2 className="text-3xl font-bold text-center mb-8 items-center pb-4">
          <span>📂</span>&nbsp;Projects
        </h2>
        <div className="grid md:grid-cols-1 gap-8  rounded">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-green-100 dark:bg-transparent border rounded-lg shadow-lg p-4"
            >
              {
                <div className="flex flex-row gap-1  justify-evenly">
                  {p.image.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      style={{ width: `${100 / p.image.length - 0.5}%` }}
                      className="h-40 rounded-md mb-4 object-cover object-center transition-all duration-500 ease-in-out hover:h-auto hover:object-contain hover:scale-200    "
                    />
                  ))}
                </div>
              }
              {/* <div className="bg-gray-300 rounded-md">
                <ImageCarousel images={p.image} />
              </div> */}
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="mb-2">{p.description}</p>
              <div className="flex items-center ">
                <p>Tech Stack :&nbsp;</p>
                <div className="flex flex-row flex-wrap gap-0  p-0 items-center">
                  {p.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="relative group flex items-center justify-center w-10 h-10"
                    >
                      {techIcons[tech] || null}

                      {/* Tooltip */}
                      <span
                        className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 
                       bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 
                       group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                      >
                        {techNames[tech] || tech}
                      </span>
                    </div>
                  ))}
                </div>
                <span>&nbsp; | &nbsp;</span>
                <p className="p-1">Repo:&nbsp;</p>
                <a
                  href={p.githubLink}
                  className="text-black-500 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github fill={darkMode ? "white" : "black"} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-40 py-20  bg-gray-100 dark:bg-gray-800 text-white "
      >
        <h2 className="text-white text-3xl font-bold text-center mb-8">
          📧&nbsp;Contact Me
        </h2>
        <p className="text-center px-5 pb-10">
          Interested in collaborating or have a project in mind?
          <br /> Feel free to reach out and let's discuss how we can work
          together.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 ">
          <input
            name="form_name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-500 rounded-lg placeholder-gray-600"
          />
          <input
            name="form_email"
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border-gray-500 border rounded-lg placeholder-gray-600"
          />
          <input
            name="form_subject"
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 border-gray-500 border rounded-lg placeholder-gray-600"
          />

          <textarea
            name="form_message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 border-gray-500 border rounded-lg placeholder-gray-600"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="px-6 py-4 text-center bg-inherit border-t mt-10 shadow-[0_-2px_15px_rgba(0,123,255,0.5)] flex justify-center items-center gap-1.5">
        <p>© 2025 Arka Guha | Made with ❤️ using React</p>
        <span className="flex flex-row">
          <img src="/icons/react.svg" className="w-4" />
          {/* &nbsp; */}
          <p>+</p>
          <img src="/icons/vite.svg" className="w-4" />
        </span>
      </footer>
    </div>
  );
}
