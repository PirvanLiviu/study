import type React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full absolute left-0 top-0 bg-black/25 flex items-center justify-center">
      { children }
    </div>
  )
}
