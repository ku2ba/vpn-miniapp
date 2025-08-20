import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import "../App.css";

export default function TelegramWidget() {
  return (
    <motion.a
      href="https://t.me/your_support_bot"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.2 }}
      className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-200 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"
    >
      <FaTelegramPlane size={24} />
    </motion.a>
  );
}
