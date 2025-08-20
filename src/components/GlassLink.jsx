import { motion } from "framer-motion";
import "../App.css";

export default function GlassLink({ children, onClick, href }) {
  return href ? (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 rounded-2xl bg-white/30 backdrop-blur-md shadow-md text-gray-800 font-medium cursor-pointer transition-colors duration-300 hover:bg-white/50"
    >
      {children}
    </motion.a>
  ) : (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 rounded-2xl bg-white/30 backdrop-blur-md shadow-md text-gray-800 font-medium cursor-pointer transition-colors duration-300 hover:bg-white/50"
    >
      {children}
    </motion.button>
  );
}
