export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="bg-gray-800 text-white py-16 sm:py-20 flex flex-col-reverse"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-4  md:gap-17 items-center  px-4 sm:px-6 lg:px-12">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            Hi, I'm Arka 👋
          </h2>
          <p className="text-base sm:text-lg">
            MERN Stack Developer | Building modern web apps
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              View Projects
            </a>
            <a
              href="/resume/16thSept2025.pdf"
              target="_blank"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center gap-2">
          {/* Profile Photo */}
          <div className="mt-8 md:mt-0 flex justify-center  md:justify-end">
            <img
              className={`w-40 h-40 sm:w-48  sm:h-48 rounded-full object-cover object-top shadow-lg hover:scale-105 transition ${
                darkMode ? "shadow-blue-200" : "shadow-black"
              }`}
              src="/profilePhoto.jpg"
              alt="Profile"
            />
          </div>
          {/* Tags */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 items-center justify-center md:justify-start">
            {/* Location */}
            <span className="flex items-center bg-transparent rounded px-3 py-1 text-sm font-medium">
              <img
                alt="India"
                className="w-4 h-4 mr-2"
                src="/icons/india.svg"
              />
              India
            </span>
          </div>

          {/* Availability */}
          <span className="flex items-center bg-green-100 text-green-800 rounded px-3 py-1 font-bold shadow-sm text-sm animate-pulse">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></span>
            Available for projects
          </span>
        </div>
      </div>
    </section>
  );
}
