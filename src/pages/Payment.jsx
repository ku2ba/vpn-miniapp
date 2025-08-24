import GlassLink from "../components/GlassLink";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Payment() {
  // Заглушка текущего баланса
  const [balance, setBalance] = useState(100); // можно потом подключить реальный API

  const handleTopUp = () => {
    // редирект на форму оплаты (замени на реальную ссылку)
    window.location.href = "https://your-payment-form.com";
  };

  return (
    <div className="min-h-screen py-8">
      <motion.div 
        className="w-full max-w-sm mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Заголовок */}
        <div className="text-center mb-8">
          <motion.h1 
            className="text-2xl font-bold text-text-primary mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Пополнение баланса
          </motion.h1>
          <motion.p 
            className="text-base text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Пополните баланс для активации подписки
          </motion.p>
        </div>

        {/* Текущий баланс */}
        <motion.div 
          className="glass-strong rounded-2xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-lg font-semibold text-text-primary mb-4">Текущий баланс</h2>
          <div className="text-4xl font-bold text-text-primary mb-4">{balance}₽</div>
          <p className="text-text-secondary text-sm mb-6">Доступно для покупки подписок</p>
          
          <GlassLink 
            onClick={handleTopUp}
            variant="primary"
            size="md"
            className="w-full"
          >
            Внести средства на баланс
          </GlassLink>
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-text-secondary mb-3 text-sm">
            Возникли вопросы по оплате? Обратитесь в поддержку
          </p>
          <GlassLink href="https://t.me/your_support_bot" variant="ghost" size="sm">
            Написать в поддержку
          </GlassLink>
        </motion.div>
      </motion.div>
    </div>
  );
}
