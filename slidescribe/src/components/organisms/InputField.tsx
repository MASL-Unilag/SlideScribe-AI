type InputProps = {
	value: string;
	type: "email" | "password" | "text";
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
			className="border border-neutral-50 rounded-md w-full outline-none px-4 py-3 max-w-md text-base font-normal text-neutral-300 focus:outline-none focus:border focus:border-purple-400"
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
