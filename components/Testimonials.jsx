const Testimonials = () => {
  const reviews = [
    { name: "Rahul Sharma", text: "This platform completely transformed our workflow." },
    { name: "Anita Verma", text: "Beautiful UI and extremely easy to use!" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold font-heading mb-12">What Our Users Say</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <p className="text-gray-600 mb-4">“{review.text}”</p>
              <h4 className="font-semibold">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
