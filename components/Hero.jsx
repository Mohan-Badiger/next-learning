const Hero = () => {
  return (
    <section className="bg-linear-to-br from-indigo-950 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl mb-6 font-heading font-medium">
          Build Website Using Next.js
        </h1>
        <p className="text-lg md:text-xl text-indigo-100 mb-8">
          A modern platform to grow your business and manage everything easily.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-indigo-950 px-6 py-3 rounded font-semibold hover:bg-gray-100">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded font-semibold hover:bg-white/10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
