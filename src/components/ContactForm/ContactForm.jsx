import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    // console.log("Submitted Data:", formData);
    setFormData({
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    });
  };
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
    
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions or ready to sell your software licenses? Fill out the
            form and our team will get back to you within 24 hours.
          </p>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Email:</strong> contact@softsell.com</li>
            <li><strong>Phone:</strong> +1 234 567 8900</li>
          </ul>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-style"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-style"
            />
          </div>
          <input
            name="company"
            type="text"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="input-style"
          />
          <select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
            required
            className="input-style"
          >
            <option value="">Select License Type</option>
            <option value="Office">Microsoft Office</option>
            <option value="Adobe">Adobe Suite</option>
            <option value="Antivirus">Antivirus</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="input-style"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" 
        style={{ zIndex: 9999 }} 
               />
    </section>
  );
}
