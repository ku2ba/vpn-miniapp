import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const menuItems = [
  { name: "Главная", path: "/" },
  { name: "Подписки", path: "/subscriptions" },
  { name: "Оплата", path: "/payment" },
  { name: "Инструкция", path: "/instruction" },
];

export default function Navigation({ currentPath }) {
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
    <nav className="navbar">
      <ul>
        {menuItems.map((item, i) => (
          <li key={item.path} ref={(el) => (menuRefs.current[i] = el)}>
            <NavLink
              to={item.path}
              className={currentPath === item.path ? "active" : ""}
            >
              {item.name}
              {currentPath === item.path && (
                <div className="active-indicator"></div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
