import emailjs from "@emailjs/browser";

const YOUR_SERVICE_ID = "service_6ndk5ok";
const YOUR_TEMPLATE_ID = "template_xfeurla";
const YOUR_PUBLIC_KEY = "sZUZsiP-8zHdZij-5";

export default function ContactMe() {
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
  return (
    <section
      id="contact"
      className="px-10 py-10  bg-gray-100 dark:bg-gray-800 text-white "
    >
      <div className="border-gray-500 border-b-1 w-full flex justify-center items-center mb-4">
        <h2 className="text-white text-3xl font-bold text-center mb-8">
          📧&nbsp;Contact Me
        </h2>
      </div>
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
  );
}
