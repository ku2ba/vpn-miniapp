import { useState } from "react";
import GlassLink from "../components/GlassLink";
import { FaCopy } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaKey } from "react-icons/fa";

export default function Home() {
  // Заглушка текущей подписки
  const [subscription, setSubscription] = useState(null); // null или { name: 'Preset 1', active: true }
  const [key, setKey] = useState(""); // сюда будет ключ после нажатия
  const [copied, setCopied] = useState(false);
  const [userBalance, setUserBalance] = useState(0); // Add balance state

  const handleGetKey = () => {
    if (subscription && subscription.active) {
      // Заглушка: ключи по пресету
      const presetKeys = {
        "Preset 1": "ABC123XYZ789DEF",
        "Preset 2": "DEF456UVW012GHI",
      };
      setKey(presetKeys[subscription.name] || "DEFAULTKEY123");
      setCopied(false);
    } else {
      // Если нет подписки → перейти на страницу подписок
      window.location.href = "/subscriptions";
    }
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <motion.div 
        className="w-full max-w-sm mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Заголовок */}
        <div className="text-center mb-8">
          <motion.h1 
            className="text-3xl font-bold text-text-primary mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            VPN Mini App
          </motion.h1>
          <motion.p 
            className="text-base text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Безопасный доступ к заблокированным сервисам
          </motion.p>
        </div>

        {/* Основной контент */}
        <div className="space-y-6">
          {/* Balance block */}
          <motion.div 
            className="glass rounded-2xl p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span className="text-text-muted text-sm">Ваш текущий баланс: </span>
            <span className="text-xl font-bold text-text-primary">{userBalance}₽</span>
          </motion.div>

          {/* Подписка */}
          <motion.div 
            className="glass-strong rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="text-lg font-semibold text-text-primary mb-4 text-center">Текущая подписка</h2>
            
            {subscription ? (
              <div className="space-y-3 text-center">
                <div className="px-4 py-2 rounded-xl bg-primary/20 text-text-primary font-medium border border-primary/30">
                  {subscription.name}
                </div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    subscription.active 
                      ? "bg-success/20 text-success border border-success/30" 
                      : "bg-error/20 text-error border border-error/30"
                  }`}
                >
                  {subscription.active ? "Активна" : "Неактивна"}
                </span>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-text-secondary mb-4 text-sm">У вас пока нет активной подписки</p>
                <GlassLink href="/subscriptions" variant="primary" size="md" className="w-full btn-xs-text btn-lg-x-padding">
                  Выбрать подписку
                </GlassLink>
              </div>
            )}
          </motion.div>

          {/* VPN Ключ */}
          <motion.div 
            className="glass-strong rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <h2 className="text-lg font-semibold text-text-primary mb-4 text-center">VPN Ключ</h2>
            
            <div className="space-y-4">
              {key ? (
                <div className="space-y-3">
                  <div className="bg-bg-tertiary rounded-xl p-3 border border-border-light">
                    <p className="text-xs text-text-muted mb-1">Ваш ключ:</p>
                    <p className="font-mono text-sm text-text-primary break-all">{key}</p>
                  </div>
                  <GlassLink 
                    onClick={handleCopyKey}
                    variant="secondary"
                    size="md"
                    className="w-full"
                  >
                    <FaCopy className="mr-2" />
                    {copied ? "Скопировано!" : "Скопировать ключ"}
                  </GlassLink>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-text-secondary mb-4 text-sm">
                    {subscription && subscription.active 
                      ? "Нажмите кнопку ниже, чтобы получить VPN ключ"
                      : "Сначала выберите подписку для получения ключа"
                    }
                  </p>
                  {subscription && subscription.active ? (
                    <GlassLink 
                      onClick={handleGetKey}
                      variant="primary"
                      size="md"
                      className="w-full"
                    >
                      Получить ключ
                    </GlassLink>
                  ) : (
                    <GlassLink 
                      href="/subscriptions"
                      variant="outline"
                      size="md"
                      className="w-full btn-xs-text btn-lg-x-padding outline glass-link"
                    >
                      Перейти к подпискам
                    </GlassLink>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Дополнительная информация */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-text-secondary mb-3 text-sm">
            Нужна помощь? Обратитесь в поддержку
          </p>
          <GlassLink href="https://t.me/your_support_bot" variant="ghost" size="sm">
            Написать в поддержку
          </GlassLink>
        </motion.div>
      </motion.div>
    </div>
  );
}
