import GlassLink from "../components/GlassLink";
import { useState } from "react";

export default function Payment() {
  // Заглушка текущего баланса
  const [balance, setBalance] = useState(100); // можно потом подключить реальный API

  const handleTopUp = () => {
    // редирект на форму оплаты (замени на реальную ссылку)
    window.location.href = "https://your-payment-form.com";
  };

  return (
    <div className="mt-20 flex flex-col gap-8 max-w-md mx-auto">
      <div className="px-4 py-6 bg-white/30 backdrop-blur-md shadow-md rounded-2xl flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-700">Текущий баланс</h2>
        <span className="text-2xl font-bold text-gray-800">{balance}₽</span>
        <GlassLink onClick={handleTopUp}>Внести средства на баланс</GlassLink>
      </div>
    </div>
  );
}
