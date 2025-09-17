import { Sun, Moon, Github, Linkedin } from "lucide-react";

export default function Navbar({ setDarkMode, darkMode }) {
  return (
    <nav className="sticky top-0 z-50 bg-inherit shadow-[0_2px_15px_rgba(0,123,255,0.5)]">
      <div className="sm:max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">Arka Guha</h1>

        {/* Links (hidden on small screens, flex on md+) */}
        <div className="hidden lg:flex  lg:flex-row lg:gap-3">
          <a href="#home" className="hover:text-blue-500 hover:scale-105">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500 hover:scale-105">
            About
          </a>
          <a href="#work" className="hover:text-blue-500 hover:scale-105">
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

        {/* Icons (theme toggle, GitHub, LinkedIn) */}
        <div className="flex flex-row-reverse gap-3">
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
      </div>
    </nav>
  );
}
