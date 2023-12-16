import React from "react";

type CustomButtonVariant = "primary" | "secondary" | "tertiary";
type CustomButtonType = "button" | "submit" | "reset" | undefined;

type ButtonProps = {
	variant: CustomButtonVariant;
	children: React.ReactNode;
	onClick?: () => void;
	styleHolder?: string;
	type?: CustomButtonType;
	disabled?: boolean | undefined;
};

const Button: React.FC<ButtonProps> = ({
	variant,
	type,
	children,
	onClick,
	styleHolder,
	disabled,
}) => {
	const buttonClasses = `px-3 py-2 rounded text-sm font-medium cursor-pointer w-full ${
		variant === "primary"
			? "bg-purple-300 border-solid border border-purple-400 text-neutral-0 hover:bg-purple-500"
			: variant === "secondary"
			? "bg-purple-50 border-solid border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-neutral-0"
			: "bg-neutral-0 border-solid border-neutral-0 text-purple-400 hover:bg-purple-50 hover:border-purple-50"
	}  
  ${styleHolder}`;

	return (
		<div>
			<button
				className={buttonClasses}
				type={type}
				onClick={onClick}
				disabled={disabled}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
