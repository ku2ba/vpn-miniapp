import { useState } from "react";

export default function Instruction() {
  // Заглушка текста инструкции
  const [instructionText, setInstructionText] = useState(
    "Здесь будет подробная инструкция по использованию ключа. Текст инструкции вы можете вставить позже."
  );

  return (
    <div className="min-h-screen py-8">
      <div className="w-full max-w-sm mx-auto">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 text-center">Инструкция</h2>
        <div className="glass-strong rounded-2xl p-6 text-text-secondary whitespace-pre-line">
          {instructionText}
        </div>
      </div>
    </div>
  );
}
