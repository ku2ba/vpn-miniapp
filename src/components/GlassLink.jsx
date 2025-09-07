import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GlassLink({ children, onClick, href, variant = "primary", size = "md", className = "" }) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-2xl cursor-pointer border border-transparent";
  
  const variants = {
    primary: "glass-strong text-white hover:bg-primary/20 hover:border-primary/30 hover:scale-105",
    secondary: "glass text-text-primary hover:bg-primary/10 hover:scale-105",
    outline: "bg-transparent border-primary/30 text-primary hover:bg-primary/20 hover:scale-105",
    ghost: "bg-transparent text-text-secondary hover:text-primary hover:bg-primary/10 hover:scale-105"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  // Проверяем, является ли ссылка внутренней (начинается с /)
  const isInternalLink = href && href.startsWith('/');

  return href ? (
    isInternalLink ? (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    ) : (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    )
  ) : (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
