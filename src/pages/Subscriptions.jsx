import { useState } from "react";
import GlassLink from "../components/GlassLink";
import { motion, AnimatePresence } from "framer-motion";
import { FaInfoCircle, FaCheck } from "react-icons/fa";

const presets = [
  {
    name: "Instagram",
    price: 50,
    info: "При выборе данной подписки через ВПН вы будете подключаться только к Instagram. Ко всем остальным сайтам и приложениям вы будете подключаться через свой обычный IP адрес. Т.е. при включённом ВПН вы будете входить в Instagram через ВПН, а например в ВК, Госуслуги и прочее через свой обычный IP адрес. Выключать ВПН не придётся.",
    color: "from-primary to-primary-light"
  },
  {
    name: "Instagram + YouTube",
    price: 70,
    info: "При выборе данной подписки через ВПН вы будете подключаться только к Instagram и YouTube. Остальные сайты через обычный IP.",
    color: "from-secondary to-accent"
  },
  {
    name: "Instagram + YouTube + Chat GPT",
    price: 100,
    info: "При выборе данной подписки через ВПН вы будете подключаться к Instagram, YouTube и Chat GPT. Остальные сайты через обычный IP.",
    color: "from-warning to-secondary"
  },
  {
    name: "900+ заблокированных доменов",
    price: 120,
    info: "Включает доступ к списку из 900+ доменов, заблокированных в России.",
    color: "from-accent to-success"
  },
  {
    name: "Все включено",
    price: 150,
    info: "Полный доступ ко всем сервисам через ВПН.",
    color: "from-primary to-secondary"
  },
];

export default function Subscriptions() {
  const [infoPreset, setInfoPreset] = useState(null);
  const [confirmPreset, setConfirmPreset] = useState(null);

  // Заглушка баланса
  const userBalance = 100; // можно потом заменить реальной логикой

  const handleChoose = (preset) => {
    setConfirmPreset(preset);
  };

  const handleConfirmPurchase = () => {
    alert(`Подписка ${confirmPreset.name} активирована!`);
    setConfirmPreset(null);
  };

  return (
    <div className="min-h-screen py-8">
      <motion.div 
        className="w-full max-w-sm mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Заголовок */}
        <div className="text-center mb-4">
          <motion.h1 
            className="text-2xl font-bold text-text-primary mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Выберите подписку
          </motion.h1>
          <motion.p 
            className="text-base text-text-secondary mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Выберите подходящий тариф для безопасного доступа
          </motion.p>
          <motion.div 
            className="glass rounded-2xl p-4 inline-block mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span className="text-text-muted text-sm">Ваш текущий баланс: </span>
            <span className="text-xl font-bold text-text-primary align-middle">{userBalance}₽</span>
          </motion.div>
        </div>

        {/* Список подписок */}
        <div className="space-y-4 text-center">
          {presets.map((preset, index) => (
            <motion.div
              key={preset.name}
              className={`glass-strong rounded-2xl p-4 text-center${index === presets.length - 1 ? ' mb-last-subscription' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${preset.color} flex items-center justify-center shadow-lg mx-auto mb-3`}>
                  <span className="text-xl text-white font-bold">{preset.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{preset.name}</h3>
                <p className="text-text-muted text-sm mb-3">Доступ к выбранным сервисам</p>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="text-3xl font-bold text-text-primary">{preset.price}₽</div>
                  <div className="text-text-muted text-sm">в месяц</div>
                </div>
              </div>

              <div className="flex gap-2 justify-center">
                <GlassLink 
                  onClick={() => setInfoPreset(preset)}
                  variant="ghost"
                  size="sm"
                  className="flex-1 max-w-32"
                >
                  <FaInfoCircle className="icon-gap" />
                  Инфо
                </GlassLink>
                <GlassLink 
                  onClick={() => handleChoose(preset)}
                  variant="primary"
                  size="sm"
                  className="flex-1 max-w-32"
                >
                  <FaCheck className="icon-gap" />
                  Выбрать
                </GlassLink>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Модальное окно Инфо */}
        <AnimatePresence>
          {infoPreset && (
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInfoPreset(null)}
            >
              <motion.div
                className="glass-strong rounded-2xl p-6 w-full max-w-sm relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-text-muted hover:text-text-primary text-xl font-bold transition-colors"
                  onClick={() => setInfoPreset(null)}
                >
                  ✕
                </button>
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{infoPreset.name}</h3>
                  <p className="text-text-muted text-sm">Подробная информация</p>
                </div>
                
                <p className="text-text-secondary leading-relaxed mb-4 text-left text-sm">{infoPreset.info}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold text-text-primary">{infoPreset.price}₽/месяц</div>
                  <GlassLink 
                    onClick={() => {
                      setInfoPreset(null);
                      handleChoose(infoPreset);
                    }}
                    variant="primary"
                    size="sm"
                  >
                    Выбрать
                  </GlassLink>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Модальное окно Подтверждения покупки */}
        <AnimatePresence>
          {confirmPreset && (
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setConfirmPreset(null)}
            >
              <motion.div
                className="glass-strong rounded-2xl p-6 w-full max-w-sm relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-text-muted hover:text-text-primary text-xl font-bold transition-colors"
                  onClick={() => setConfirmPreset(null)}
                >
                  ✕
                </button>

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${confirmPreset.color} flex items-center justify-center shadow-lg mx-auto mb-3`}>
                    <span className="text-2xl text-white font-bold">{confirmPreset.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Подтверждение покупки</h3>
                  <p className="text-text-muted text-sm">Подписка: {confirmPreset.name}</p>
                </div>

                {userBalance >= confirmPreset.price ? (
                  <div className="space-y-4">
                    <div className="bg-bg-tertiary rounded-xl p-4 border border-border-light">
                      <p className="text-text-secondary text-center leading-relaxed text-sm">
                        После нажатия кнопки <strong>Подтвердить</strong> с вашего баланса спишутся средства в размере <strong>{confirmPreset.price}₽</strong> и подписка будет активирована. На главной нажмите <strong>Получить ключ</strong>.
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <GlassLink onClick={handleConfirmPurchase} variant="primary" size="md" className="flex-1">
                        <FaCheck className="mr-2" />
                        Подтвердить
                      </GlassLink>
                      <GlassLink href="https://t.me/your_support_bot" variant="outline" size="md" className="flex-1">
                        Поддержка
                      </GlassLink>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="bg-error/20 rounded-xl p-4 border border-error/30">
                      <p className="text-error text-sm">
                        Для активации подписки пополните баланс на <strong>{confirmPreset.price}₽</strong>
                      </p>
                    </div>
                    <GlassLink href="/payment" variant="primary" size="md" className="w-full">
                      Пополнить баланс
                    </GlassLink>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
