import { useState, useEffect } from "react";
import type { Question as QuestionType } from "../../types";
import Question from "./question";

export default function Questions() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const res = await fetch("http://localhost:5161/api/questions/DS=1", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const json = await res.json();
        setQuestions(json);
        localStorage.setItem("questions", JSON.stringify(json));
      } catch (e) {
        console.log("Error while fetching questions");
        console.log(e);
      }
    };

    if (!localStorage.getItem("questions")) getQuestions();
    else setQuestions(JSON.parse(localStorage.getItem("questions")!));
  }, []);

  if (questions)
    return (
      <div className="w-[97.5%] top-40 absolute flex flex-col gap-4">
        {questions.map((q) => (
          <Question key={q.text + q.label} q={q} />
        ))}
      </div>
    );
}
