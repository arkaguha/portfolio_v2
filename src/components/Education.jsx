import Timeline from "./Timeline";

const education = [
  {
    role: "🏫 B.Tech in Electronics and Communication Engineering",
    company: "Hooghly Engineering and Technology College, West Bengal, India",
    period: "2018 – 2022",
    description: "Focused on fundamentals, data structures, and algorithms.",
  },
  {
    role: "📘 Higher Secondary Education",
    company: "Sudhir Memorial Institute, Kolkata, India",
    period: "2016 – 2018",
    description:
      "Completed high school with strong foundation in mathematics and computer science.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-2.5 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="border-gray-500 border-b-1 w-full flex justify-center items-center mb-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            🎓&nbsp;Education
          </h2>
        </div>
        <Timeline items={education} />
      </div>
    </section>
  );
}
