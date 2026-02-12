const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Us
        </h2>

        <form className="bg-white p-8 rounded-sm shadow-sm space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border p-3 rounded"
          ></textarea>

          <button className="w-full bg-blue-950 text-white py-3 rounded hover:bg-indigo-950">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
