const steps = [
  {
    title: "1. Upload License",
    icon: "📤",
    desc: "Submit your software license details securely.",
  },
  {
    title: "2. Get Valuation",
    icon: "💰",
    desc: "We analyze and offer a competitive price instantly.",
  },
  {
    title: "3. Get Paid",
    icon: "🏦",
    desc: "Accept the offer and receive payment directly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        How It Works
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4">
        {steps.map((step, idx) => (
          <div key={idx} className="text-center max-w-xs">
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
