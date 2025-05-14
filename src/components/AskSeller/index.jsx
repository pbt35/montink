import { useEffect, useState } from "react";
import commentsData from "../../api/commentsData";

const STORAGE_KEY = "userQuestions";
const EXPIRATION_MINUTES = 15;

const AskSeller = () => {
  const [question, setQuestion] = useState("");
  const [questionsList, setQuestionsList] = useState(commentsData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateLocalStorage = (userQuestions) => {
    const expiresAt = Date.now() + EXPIRATION_MINUTES * 60 * 1000;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ items: userQuestions, expiresAt })
    );
  };

  const handleSubmit = () => {
    if (question.trim() === "" || isSubmitting) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newQuestion = {
        user: "Você",
        question: question.trim(),
        answer: null,
      };

      const newUserQuestions = [...questionsList.filter((q) => q.user === "Você"), newQuestion];

      setQuestionsList((prev) => [...prev, newQuestion]);
      updateLocalStorage(newUserQuestions);
      setQuestion("");
      setIsSubmitting(false);
    }, 1000);
  };

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const { items, expiresAt } = JSON.parse(stored);
      if (Date.now() < expiresAt) {
        setQuestionsList((prev) => {
          const existing = new Set(prev.map((q) => `${q.user}-${q.question}`));
          const uniqueItems = items.filter(
            (q) => !existing.has(`${q.user}-${q.question}`)
          );
          return [...prev, ...uniqueItems];
        });
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  return (
    <div className="mt-10 border-t pt-6">
      <h2 className="text-xl font-bold mb-4">Pergunte ao vendedor</h2>

      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Digite sua pergunta..."
          className="flex-1 border rounded px-4 py-2"
          disabled={isSubmitting}
        />
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`px-6 py-2 rounded text-white transition ${
            isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </div>

      <div className="space-y-4">
        {questionsList.map((item, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded border">
            <p className="font-semibold">{item.user}:</p>
            <p className="mb-1">{item.question}</p>
            {item.answer ? (
              <p className="text-sm text-green-700">
                <strong>Vendedor:</strong> {item.answer}
              </p>
            ) : (
              <p className="text-sm text-gray-500">Aguardando resposta do vendedor</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskSeller;
