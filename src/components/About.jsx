export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 ">
        {/* Heading */}
        <div className="border-gray-500 border-b-1 w-full flex justify-center items-center mb-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            📝&nbsp;About Me
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-center md:text-left leading-relaxed">
          👨‍💻 I’m a MERN Stack Developer passionate about building dynamic web
          apps. <br />
          📚 Currently learning frontend patterns & testing with backend. <br />
          🚀 Love taking ideas from concept to deployment. <br />
          🤝 Open to collaboration and always eager to learn new technologies.{" "}
          <br />
          🌍 Based in India, working towards becoming a professional full-stack
          engineer.
        </p>
      </div>
    </section>
  );
}
