    const testimonials = [
  {
    name: "Anjali Mehra",
    role: "IT Manager",
    company: "TechNova Inc.",
    quote:
      "SoftSell made it incredibly easy to offload our unused licenses. The process was seamless and fast!",
  },
  {
    name: "Michael Johnson",
    role: "Procurement Head",
    company: "BlueMatrix Solutions",
    quote:
      "We got great value from licenses we no longer needed. Professional team and prompt payments!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        What Our Clients Say
      </h2>
      <div className="flex flex-col md:flex-row gap-8 px-6 max-w-5xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex-1 transition-all duration-300"
          >
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              “{item.quote}”
            </p>
            <div className="text-sm text-gray-800 dark:text-white font-semibold">
              {item.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {item.role}, {item.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
