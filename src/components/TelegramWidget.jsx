import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";

export default function TelegramWidget() {
  return (
    <motion.div
      className="telegram-widget"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.a
        href="https://t.me/your_support_bot"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="telegram-btn"
      >
        <FaTelegramPlane size={32} color="#fff" />
      </motion.a>
    </motion.div>
  );
}
