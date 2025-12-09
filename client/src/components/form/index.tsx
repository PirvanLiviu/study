import React from "react"

type Props = {
  children: React.ReactNode
  submit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function Form({ children, submit }: Props) {
  return (
    <form onSubmit={submit} className="flex flex-col gap-4 items-center bg-stone-200 text-stone-900 rounded-lg px-10 py-5">
      {children}
    </form>
  )
}
