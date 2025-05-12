import { motion } from "framer-motion";
import { FaShieldAlt, FaSyncAlt, FaDollarSign, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
    title: "Secure Process",
    desc: "All transfers are encrypted and legally compliant.",
  },
  {
    icon: <FaSyncAlt className="text-blue-600 text-3xl" />,
    title: "Quick Turnaround",
    desc: "Valuation and payments completed in 24-48 hours.",
  },
  {
    icon: <FaDollarSign className="text-blue-600 text-3xl" />,
    title: "Best Payouts",
    desc: "We guarantee top dollar for your unused licenses.",
  },
  {
    icon: <FaHeadset className="text-blue-600 text-3xl" />,
    title: "24/7 Support",
    desc: "Our team is always here to help you through the process.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Why Choose SoftSell
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
