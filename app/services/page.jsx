export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      desc: "Fast, scalable, and modern websites built with Next.js and React for maximum performance.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      desc: "Elegant, intuitive, and user-focused interfaces designed for exceptional experiences.",
      icon: "🎨",
    },
    {
      title: "SEO Optimization",
      desc: "Boost visibility, traffic, and rankings with proven search optimization strategies.",
      icon: "📈",
    },
    {
      title: "App Development",
      desc: "Robust web & mobile applications crafted for reliability and seamless usability.",
      icon: "📱",
    },
    {
      title: "Maintenance & Support",
      desc: "Continuous updates, monitoring, and improvements to keep everything running smoothly.",
      icon: "🛠️",
    },
    {
      title: "Consulting",
      desc: "Expert technical guidance to help you choose the right architecture and tools.",
      icon: "💡",
    },
  ];

  return (
    <div className="bg-linear-to-b from-gray-50 to-white">

      {/* ✅ Hero Section */}
      <section className="bg-linear-to-br from-indigo-950 to-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
            Our Services
          </h1>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Modern digital solutions crafted with elegance, performance, and precision.
          </p>
        </div>
      </section>

      {/* ✅ Services Grid */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-heading font-semibold">
            What We Offer
          </h2>
          <p className="text-gray-600 mt-2">
            High-quality services designed for growth & success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-sm shadow-sm hover:shadow-lg transition"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Process Section */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-semibold">
              How We Work
            </h2>
            <p className="text-gray-600 mt-2">
              A refined and effective workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "1. Planning",
                desc: "We understand your goals, audience, and requirements.",
                icon: "📝",
              },
              {
                step: "2. Execution",
                desc: "Designing and developing with precision & quality.",
                icon: "🎯",
              },
              {
                step: "3. Launch",
                desc: "Testing, deployment, and continuous improvements.",
                icon: "🚀",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.step}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Pricing Section */}
      <section className="py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold">
              Pricing
            </h2>
            <p className="text-gray-600 mt-2">
              Flexible plans tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Starter */}
            <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Starter</h3>
              <p className="text-3xl font-bold mb-4">₹9,999</p>
              <p className="text-sm text-gray-600 mb-6">
                Perfect for small businesses & portfolio websites.
              </p>
              <button className="w-full bg-indigo-950 text-white py-2 rounded hover:bg-indigo-950">
                Choose Plan
              </button>
            </div>

            {/* Professional (Highlighted) */}
            <div className="bg-white p-6 rounded-sm shadow-lg border border-indigo-200 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-950 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="font-semibold text-lg mb-2">Professional</h3>
              <p className="text-3xl font-bold mb-4">₹24,999</p>
              <p className="text-sm text-gray-600 mb-6">
                Ideal for growing businesses & dynamic web apps.
              </p>
              <button className="w-full bg-indigo-950 text-white py-2 rounded hover:bg-indigo-950">
                Choose Plan
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">Custom</p>
              <p className="text-sm text-gray-600 mb-6">
                Tailored solutions for large-scale & complex projects.
              </p>
              <button className="w-full bg-indigo-950 text-white py-2 rounded hover:bg-indigo-950">
                Contact Us
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="bg-linear-to-r from-indigo-950 to-purple-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Let’s Build Something Great ✨
          </h2>
          <p className="text-indigo-100 mb-8">
            Have a project in mind? Let’s create something extraordinary together.
          </p>
          <button className="bg-white text-indigo-950 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">
            Get in Touch
          </button>
        </div>
      </section>

    </div>
  );
}
