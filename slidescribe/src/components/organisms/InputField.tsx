type InputProps = {
  value: string;
  type: "email" | "password";
  onChange: () => void;
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
