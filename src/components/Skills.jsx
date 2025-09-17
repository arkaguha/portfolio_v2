export default function Skills({ skills, darkMode, techIcons }) {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="border-gray-500 border-b-1 w-full flex justify-center items-center mb-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            🛠️&nbsp;Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((stack, index) => (
            <div
              key={index}
              className={`rounded-xl shadow p-6 transition-colors text-black  ${
                darkMode ? `${stack.dark}` : `${stack.light}`
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center text-center gap-2">
                {stack.icon} {stack.category}
              </h3>
              <ul className="space-y-2">
                {stack.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {techIcons[
                      skill.trim().replace(/\s+/g, "").toLowerCase()
                    ] || "🔧"}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
