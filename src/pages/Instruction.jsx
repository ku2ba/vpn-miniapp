import { useState } from "react";

export default function Instruction() {
  // Заглушка текста инструкции
  const [instructionText, setInstructionText] = useState(
    "Здесь будет подробная инструкция по использованию ключа. Текст инструкции вы можете вставить позже."
  );

  return (
    <div className="mt-20 flex flex-col gap-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Инструкция</h2>
      <div className="px-6 py-4 bg-white/30 backdrop-blur-md shadow-md rounded-2xl text-gray-700 whitespace-pre-line">
        {instructionText}
      </div>
    </div>
  );
}
