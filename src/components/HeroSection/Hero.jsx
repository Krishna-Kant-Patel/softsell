import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Turn Unused Software Licenses Into Profit
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Easily resell your unused software licenses and get top market value—fast, secure, and hassle-free.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
          Sell My Licenses
        </button>
      </motion.div>
    </section>
  );
}
