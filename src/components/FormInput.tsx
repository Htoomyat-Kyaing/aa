const FormInput = ({
  name,
  type,
  label,
  autoComplete,
  onChange,
}: {
  name: React.HTMLInputTypeAttribute;
  type: React.HTMLInputTypeAttribute;
  label?: React.HTMLInputTypeAttribute;
  autoComplete?: React.HTMLInputTypeAttribute;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600 text-sm">{label}</label>
      <input
        className="border border-gray-600 rounded p-1 indent-1"
        name={name}
        type={type}
        onChange={onChange}
        autoComplete={autoComplete}
        required
      />
    </div>
  );
};

export default FormInput;
