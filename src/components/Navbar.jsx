import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../App.css";

const menuItems = [
  { name: "Главная", path: "/" },
  { name: "Подписки", path: "/subscriptions" },
  { name: "Оплата", path: "/payment" },
  { name: "Инструкция", path: "/instruction" },
];

export default function Navbar({ currentPath }) {
  const [highlightStyle, setHighlightStyle] = useState({});
  const menuRefs = useRef([]);

  useEffect(() => {
    const activeIndex = menuItems.findIndex((item) => item.path === currentPath);
    if (activeIndex !== -1 && menuRefs.current[activeIndex]) {
      const activeEl = menuRefs.current[activeIndex];
      setHighlightStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [currentPath]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-white/30 shadow-lg rounded-2xl px-4 py-2">
      <ul className="flex gap-4 relative">
        {/* Подсветка активного пункта */}
        {highlightStyle.width && (
          <motion.div
            className="absolute top-0 bottom-0 rounded-full bg-white/50 shadow-md"
            layout
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              left: highlightStyle.left,
              width: highlightStyle.width,
            }}
          />
        )}

        {menuItems.map((item, i) => (
          <li key={item.path} ref={(el) => (menuRefs.current[i] = el)}>
            <NavLink
              to={item.path}
              className={`relative px-4 py-2 font-medium transition-colors duration-300 ${
                currentPath === item.path
                  ? "text-pink-600"
                  : "text-gray-700 hover:text-pink-500"
              }`}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
