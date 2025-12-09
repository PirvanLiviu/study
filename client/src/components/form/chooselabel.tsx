import { useState } from "react";

export default function ChooseLabel() {
  const [value, setValue] = useState("Choose label");
  const [dropdown, setDropdown] = useState(false);

  function Option(text: { text: string }) {
    return (
      <button
      className="w-full text-center hover:bg-stone-100 py-1 bg-white transition-all"
        onClick={() => {
          setValue(text.text);
          setDropdown(false);
        }}
      >
        {text.text}
      </button>
    );
  }
  return (
    <div className="relative w-full">
      <input name="label" hidden value={value} />
      <button onClick={() => setDropdown(true)} className="w-full rounded py-1 font-medium hover:opacity-80 transition-all border border-stone-400 bg-white">
        {value}
      </button>
      {dropdown && (
        <div className="flex flex-col gap-2 rounded border border-stone-400 bg-white absolute top-10 w-full py-1">
          <Option {...{ text: "DS" }} />
          <Option {...{ text: "DM" }} />
          <Option {...{ text: "AM" }} />
          <Option {...{ text: "CN" }} />
        </div>
      )}
    </div>
  );
}
