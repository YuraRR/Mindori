export default function Input({ title, type = "text", placeholder = "", value, onChange }) {
  const className =
    "border border-darkGreen border-opacity-50 max-h-[48px] w-full my-6 py-3 pl-5 text-18 bg-lightBeige text-gray";

  return (
    <div className="relative w-full">
      <input
        className={className}
        name={title}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className="text-12 absolute left-3 top-3 bg-lightBeige px-1">{title}</span>
    </div>
  );
}
