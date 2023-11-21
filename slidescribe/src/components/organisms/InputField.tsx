type InputProps = {
  value: string;
  type: "email" | "password";
  onChange?: () => void;
  placeholder: string;
  str: string;
};

const InputField: React.FC<InputProps> = ({
  value,
  type,
  onChange,
  placeholder,
  str,
}) => {
  return (
    <input
      className="border rounded-md w-full outline-none px-4 py-3 max-w-md text-base font-normal text-gray-400 focus:outline-none focus:border focus:border-violet-800"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      id={str}
      name={str}
      autoComplete={str}
      required
    ></input>
  );
};

export default InputField;
