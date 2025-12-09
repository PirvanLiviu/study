import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center gap-4 mt-10">
      <button className="p-2 rounded hover:bg-emerald-500 transition-all cursor-pointer">
        Study
      </button>
      <Link
        to="/"
        search={{ addQuestion: true }}
        className="p-2 rounded hover:bg-emerald-500 transition-all cursor-pointer"
      >
        Add Question
      </Link>
    </div>
  );
}
