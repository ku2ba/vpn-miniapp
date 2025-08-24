import { motion } from "framer-motion";
import { FaHome, FaSearch } from "react-icons/fa";
import GlassLink from "../components/GlassLink";

export default function NotFound() {
  return (
    <div className="min-h-screen py-8">
      <motion.div 
        className="text-center max-w-sm mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Иконка ошибки */}
        <motion.div 
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        >
          <div className="w-24 h-24 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-error/30">
            <span className="text-4xl text-error font-bold">!</span>
          </div>
        </motion.div>

        {/* Заголовок */}
        <motion.h1 
          className="text-6xl font-bold text-text-primary mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          404
        </motion.h1>

        <motion.h2 
          className="text-2xl font-semibold text-text-primary mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Страница не найдена
        </motion.h2>

        <motion.p 
          className="text-base text-text-secondary mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          К сожалению, запрашиваемая страница не существует или была перемещена. 
          Проверьте правильность URL или вернитесь на главную страницу.
        </motion.p>

        {/* Кнопки действий */}
        <motion.div 
          className="flex flex-col gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <GlassLink href="/" variant="primary" size="md" className="w-full">
            <FaHome className="mr-2" />
            На главную
          </GlassLink>
          <GlassLink href="/subscriptions" variant="outline" size="md" className="w-full">
            <FaSearch className="mr-2" />
            Выбрать подписку
          </GlassLink>
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div 
          className="glass rounded-2xl p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <p className="text-text-secondary mb-3 text-sm">
            Нужна помощь? Обратитесь в нашу техническую поддержку
          </p>
          <GlassLink href="https://t.me/your_support_bot" variant="ghost" size="sm">
            Написать в поддержку
          </GlassLink>
        </motion.div>
      </motion.div>
    </div>
  );
}
