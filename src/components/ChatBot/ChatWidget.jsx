import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const mockResponses = {
    "Hi": "Hello! How can I assist you today?",
  "Hello": "Hi there! What would you like to know about SoftSell?",
    "What can I do here?": "You can ask me anything about SoftSell, our services, or how to sell your software licenses.",
  "What is SoftSell?": "SoftSell is a platform that helps you sell your unused software licenses.",
  "How does it work?": "You submit your license details, we verify them, and then we provide a quote for purchase.",
  "What types of licenses can I sell?": "You can sell enterprise and commercial software licenses.",
  "How do I get a quote?": "Fill out the form on our website with your license details, and we’ll get back to you with a quote.",
  "How do I know if my license is eligible?": "Most enterprise and commercial licenses are eligible. Just fill out the form, and we’ll let you know!",
  "What if I have multiple licenses?": "You can sell multiple licenses at once. Just provide the details for each license in the form.",
  "How do I get paid?": "Once we verify your license and finalize the sale, we’ll arrange payment via your preferred method.",
  "Is there a fee to sell my license?": "No, we don’t charge any fees to sell your license. You get the full amount we quote.",
  "How do I sell my license?": "Just click on 'Sell My Licenses', fill out the form, and we’ll get back with a quote!",
  "How long does the process take?": "Typically, 1–3 business days after license verification.",
  "What types of licenses do you accept?": "We accept most enterprise and commercial software licenses.",
};

const predefinedQuestions = [
  "What is SoftSell?",
  "How does it work?",
  "How do I get a quote?",
  "How do I sell my license?",
];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 Ask me anything about SoftSell." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (question) => {
    const userInput = question || input;
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    const botResponse = {
      sender: "bot",
      text: mockResponses[userInput.trim()] || "Sorry, I don't have an answer for that yet.",
    };

    setMessages((prev) => [...prev, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 ">
      {open ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="bg-blue-600 text-white dark:bg-blue-700 px-4 py-2 flex justify-between items-center">
              <div className="font-semibold flex items-center gap-2">
                <FaRobot /> SoftSell Chat
              </div>
              <button onClick={() => setOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="flex flex-col gap-2 p-3 h-64 overflow-y-auto text-sm">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.sender === "bot"
                      ? "bg-gray-200 dark:bg-gray-700 text-left self-start"
                      : "bg-blue-500 text-white text-right self-end"
                  }`}
                >
                  {msg.text}

                  {idx === 0 && (
                    <div className="mt-2 flex flex-col gap-1">
                      {predefinedQuestions.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(q)}
                          className="text-blue-600 dark:text-blue-400 text-left hover:underline text-xs"
                        >
                          • {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center p-2 border-t dark:border-gray-600">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-black dark:text-white rounded-l-lg focus:outline-none"
                placeholder="Ask a question..."
              />
              <button
                onClick={() => handleSend()}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-lg"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
        >
          <FaRobot size={20} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
