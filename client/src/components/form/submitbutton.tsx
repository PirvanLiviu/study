import React from "react";

export default function SubmitButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="w-full text-stone-200 rounded px-3 py-1 bg-emerald-600 hover:bg-emerald-700 transition-all cursor-pointer"
    >
      {children}
    </button>
  );
}
