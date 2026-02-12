const About = () => {
  return (
    <section className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-24">

        {/* ✅ Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-heading mb-4">
            About Us
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Crafting modern digital experiences with a touch of timeless design.
          </p>
        </div>

        {/* ✅ Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are dedicated to building high-quality, visually stunning, and
              performance-driven digital products that empower businesses to
              grow and succeed in the modern world.
            </p>

            <h2 className="text-2xl font-heading font-semibold mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From web development to UI/UX design, we focus on delivering
              elegant, scalable, and user-friendly solutions using cutting-edge
              technologies.
            </p>
          </div>

          {/* Image */}
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/10 rounded-sm blur-2xl"></div>
              <div className="relative bg-white p-2 rounded-sm shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  alt="Team"
                  className="rounded"
                />
              </div>
            </div>
          </div>

        </div>

        {/* ✅ Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {[
            { number: "150+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-sm shadow-sm p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-indigo-950">
                {stat.number}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ Values Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                desc: "We embrace creativity and forward-thinking solutions.",
                icon: "💡",
              },
              {
                title: "Quality",
                desc: "Delivering excellence in every detail of our work.",
                icon: "🏆",
              },
              {
                title: "Trust",
                desc: "Building long-lasting relationships with our clients.",
                icon: "🤝",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition"
              >
                <div className="text-sm mb-3">{value.icon}</div>
                <h3 className="font-semibold text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
