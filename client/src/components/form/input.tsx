export default function Input({
  name,
  placeholder,
  defaultValue,
}: {
  name: string;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="placeholder:italic outline-none rounded border border-stone-300 px-2 py-1 focus:border-stone-700 transition-all"
    />
  );
}
