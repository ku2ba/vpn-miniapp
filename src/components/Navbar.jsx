import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
<<<<<<< HEAD
import "../App.css";
=======
import { useEffect, useRef, useState } from "react";
>>>>>>> 7623ff2 (Обновление проекта: добавлены отступы и правки интерфейса)

export default function Navbar() {
  const location = useLocation();
  const routes = [
    { name: "Главная", path: "/" },
    { name: "Подписки", path: "/subscriptions" },
    { name: "Оплата", path: "/payment" },
    { name: "Инструкция", path: "/instruction" },
  ];

  return (
<<<<<<< HEAD
    <div className="navbar-bottom">
      <div className="relative flex justify-between w-full max-w-md mx-auto px-4">
        {routes.map((route, index) => (
          <NavLink key={route.path} to={route.path} className="nav-link">
            {route.name}
          </NavLink>
        ))}

        {/* Плавная рамка для активной страницы */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="active-indicator-glass"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            borderRadius: "2rem",
            background: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)",
            zIndex: -1,
          }}
        />
      </div>
    </div>
=======
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-border-light shadow-lg">
      <div className="max-w-md mx-auto">
        <ul className="flex justify-between items-center relative px-4 py-3">
          {/* Анимированная подсветка активного пункта */}
          {highlightStyle.width && (
            <motion.div
              className="absolute top-0 bottom-0 rounded-xl bg-primary/20 border border-primary/30"
              layout
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                mass: 0.8
              }}
              style={{
                left: highlightStyle.left,
                width: highlightStyle.width,
              }}
            />
          )}

          {menuItems.map((item, i) => (
            <li key={item.path} ref={(el) => (menuRefs.current[i] = el)} className="flex-1">
              <NavLink
                to={item.path}
                className={`relative block px-3 py-2 font-medium text-xs transition-all duration-300 rounded-xl text-center ${
                  currentPath === item.path
                    ? "text-primary font-semibold"
                    : "text-text-secondary hover:text-primary hover:bg-primary/10"
                }`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
>>>>>>> 7623ff2 (Обновление проекта: добавлены отступы и правки интерфейса)
  );
}
