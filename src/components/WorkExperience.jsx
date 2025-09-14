import Timeline from "./Timeline";

const workExperience = [
  {
    role: "👨‍💻 MERN Stack Developer",
    company: "Freelance",
    period: "2024 – Present",
    description:
      "Developing full-stack web apps with React, Node.js, Express, and MongoDB.",
  },
  {
    role: "🛠️ Software Engineer",
    company: "Aziro (formerly MSys Technologies)",
    period: "2022 – 2024",
    description:
      "Built responsive UIs, worked with Tailwind CSS, and contributed to REST API integration.",
  },
];

export default function WorkExperience() {
  return (
    <section id="work" className="py-16 px-2.5 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 ">
        <div className="border-gray-500 border-b-1 w-full flex justify-center items-center mb-4">
          <h2 className="text-3xl font-bold text-center mb-8 ">
            📝&nbsp;Work Experience
          </h2>
        </div>
        <Timeline items={workExperience} />
      </div>
    </section>
  );
}
