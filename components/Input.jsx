export function TextInput({
  name,
  label,
  value,
  setData,
  notRequired,
  placeholder,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="text-gray-600 font-medium text-sm">
        {label}
      </label>

      <input
        id={name}
        value={value || ""}
        name={name}
        onChange={setData}
        placeholder={placeholder}
        type="text"
        className="mt-1 rounded bg-transparent text-gray-600 border border-blue-200 py-1.5 px-4 w-full focus:outline-blue-500"
        required={!notRequired}
      />
    </div>
  );
}

export function Email({ name, label, value, setData, placeholder }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="text-gray-600 font-medium text-sm">
        {label}
      </label>

      <input
        id={name}
        type="email"
        value={value || ""}
        name={name}
        onChange={setData}
        placeholder={placeholder}
        className="mt-1 rounded bg-transparent text-gray-600 border border-blue-200 py-1.5 px-4 w-full focus:outline-blue-500"
        required
      />
    </div>
  );
}
