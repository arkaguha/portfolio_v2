import ProjectImage from "./ProjectImage";

export default function Projects({ projects, techIcons }) {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="border-gray-500 border-b-1 w-full flex justify-center items-center mb-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            📂&nbsp;Projects
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid  gap-6  lg:flex-row ">
          {/* Example Project */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow p-6 grid grid-cols-1 text-white"
            >
              {/* {project.image.map((pic, index) => (
                  
                  <img key={index} src={viewImage} alt="" />
                ))} */}
              <ProjectImage
                images={project.image}
                // viewImage={viewImage}
                // setViewimage={setViewImage}
              />

              <h3 className="text-xl font-semibold mb-2">
                {++index + ". " + project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <p className="pb-4">Tech:</p>
              <div className="flex flex-row justify-evenly items-center flex-wrap gap-4">
                {project.techStack.map((skill, i) => (
                  <span key={skill + i} className="flex gap-2">
                    {techIcons[skill]} {skill}
                  </span>
                ))}
              </div>

              <a
                href={project.githubLink}
                target="_blank"
                className="mt-auto text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
          {/* Add more project cards here */}
        </div>
      </div>
    </section>
  );
}
