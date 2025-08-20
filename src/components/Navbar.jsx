import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

export default function Navbar() {
  const location = useLocation();
  const routes = [
    { name: "Главная", path: "/" },
    { name: "Подписки", path: "/subscriptions" },
    { name: "Оплата", path: "/payment" },
    { name: "Инструкция", path: "/instruction" },
  ];

  return (
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
  );
}
