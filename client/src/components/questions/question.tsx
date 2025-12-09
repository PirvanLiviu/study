import type { Question as Type } from "../../types";
export default function Question({ q }: { q: Type }) {
  return (
    <div className="flex flex-row justify-around rounded-lg border border-stone-400 py-2">
      <h1>{q.text}</h1>
      <h1>{q.answer}</h1>
      <h1>{q.label}</h1>
    </div>
  );
}
