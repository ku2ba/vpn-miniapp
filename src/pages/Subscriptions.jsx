import { useState } from "react";
import GlassLink from "../components/GlassLink";
import { motion, AnimatePresence } from "framer-motion";

const presets = [
  {
    name: "Instagram",
    price: 50,
    info: "При выборе данной подписки через ВПН вы будете подключаться только к Instagram. Ко всем остальным сайтам и приложениям вы будете подключаться через свой обычный IP адрес. Т.е. при включённом ВПН вы будете входить в Instagram через ВПН, а например в ВК, Госуслуги и прочее через свой обычный IP адрес. Выключать ВПН не придётся.",
  },
  {
    name: "Instagram + YouTube",
    price: 70,
    info: "При выборе данной подписки через ВПН вы будете подключаться только к Instagram и YouTube. Остальные сайты через обычный IP.",
  },
  {
    name: "Instagram + YouTube + Chat GPT",
    price: 100,
    info: "При выборе данной подписки через ВПН вы будете подключаться к Instagram, YouTube и Chat GPT. Остальные сайты через обычный IP.",
  },
  {
    name: "900+ заблокированных доменов",
    price: 120,
    info: "Включает доступ к списку из 900+ доменов, заблокированных в России.",
  },
  {
    name: "Все включено",
    price: 150,
    info: "Полный доступ ко всем сервисам через ВПН.",
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
    <div className="mt-20 flex flex-col gap-6">
      {presets.map((preset) => (
        <div
          key={preset.name}
          className="flex items-center justify-between px-4 py-3 bg-white/30 backdrop-blur-md shadow-md rounded-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-white/40 rounded-full shadow-sm font-medium text-gray-800">
              {preset.name.split(" ")[0]}
            </div>
            <span className="font-medium text-gray-700">{preset.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-800">{preset.price}₽</span>
            <GlassLink onClick={() => setInfoPreset(preset)}>Инфо</GlassLink>
            <GlassLink onClick={() => handleChoose(preset)}>Выбрать</GlassLink>
          </div>
        </div>
      ))}

      {/* Модальное окно Инфо */}
      <AnimatePresence>
        {infoPreset && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setInfoPreset(null)}
          >
            <motion.div
              className="bg-white/30 backdrop-blur-md rounded-xl p-6 max-w-lg relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-700 font-bold text-lg"
                onClick={() => setInfoPreset(null)}
              >
                ✕
              </button>
              <h3 className="font-semibold text-gray-800 mb-2">{infoPreset.name}</h3>
              <p className="text-gray-700">{infoPreset.info}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Модальное окно Подтверждения покупки */}
      <AnimatePresence>
        {confirmPreset && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setConfirmPreset(null)}
          >
            <motion.div
              className="bg-white/30 backdrop-blur-md rounded-xl p-6 max-w-lg relative flex flex-col gap-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-700 font-bold text-lg"
                onClick={() => setConfirmPreset(null)}
              >
                ✕
              </button>

              {userBalance >= confirmPreset.price ? (
                <>
                  <p className="text-gray-700">
                    После нажатия кнопки <b>Подтвердить</b> с вашего баланса спишутся средства в размере {confirmPreset.price}₽ и подписка будет активирована. На главной нажмите <b>Получить ключ</b>. Как использовать ключ читайте на вкладке Инструкция или напишите в техподдержку.
                  </p>
                  <div className="flex gap-3 mt-4">
                    <GlassLink onClick={handleConfirmPurchase}>Подтвердить</GlassLink>
                    <GlassLink href="https://t.me/your_support_bot">Техподдержка</GlassLink>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-gray-700">
                    Для активации подписки пополните баланс на {confirmPreset.price}₽
                  </p>
                  <GlassLink href="/payment">Оплатить</GlassLink>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
