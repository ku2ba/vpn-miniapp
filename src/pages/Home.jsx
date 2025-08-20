import { useState } from "react";
import GlassLink from "../components/GlassLink";
import { FaCopy } from "react-icons/fa";

export default function Home() {
  // Заглушка текущей подписки
  const [subscription, setSubscription] = useState(null); // null или { name: 'Preset 1', active: true }
  const [key, setKey] = useState(""); // сюда будет ключ после нажатия
  const [copied, setCopied] = useState(false);

  const handleGetKey = () => {
    if (subscription && subscription.active) {
      // Заглушка: ключи по пресету
      const presetKeys = {
        "Preset 1": "ABC123XYZ",
        "Preset 2": "DEF456UVW",
      };
      setKey(presetKeys[subscription.name] || "DEFAULTKEY");
      setCopied(false);
    } else {
      // Если нет подписки → перейти на страницу подписок
      window.location.href = "/subscriptions";
    }
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(key);
    setCopied(true);
  };

  return (
    <div className="flex flex-col gap-8 mt-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-gray-700">Текущая подписка:</h2>
        {subscription ? (
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 rounded-xl bg-white/30 backdrop-blur-md shadow-md text-gray-800">
              {subscription.name}
            </span>
            <span
              className={`px-2 py-1 rounded-full text-sm font-medium ${
                subscription.active ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
              }`}
            >
              {subscription.active ? "Активна" : "Неактивна"}
            </span>
          </div>
        ) : (
          <GlassLink href="/subscriptions">Выбрать подписку</GlassLink>
        )}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-gray-700 font-medium">
          {key ? `Ваш ключ: ${key}` : "Ключ отсутствует"}
        </span>
        {key && (
          <button
            onClick={handleCopyKey}
            className="flex items-center gap-2 px-3 py-1 bg-white/30 backdrop-blur-md rounded-xl shadow-md text-gray-800 hover:bg-white/50 transition-colors"
          >
            <FaCopy /> {copied ? "Скопировано!" : "Скопировать"}
          </button>
        )}
        {!key && <GlassLink onClick={handleGetKey}>Получить ключ</GlassLink>}
      </div>
    </div>
  );
}
