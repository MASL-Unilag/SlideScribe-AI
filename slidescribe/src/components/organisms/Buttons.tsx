import React from "react";

type CustomButtonType = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  type: CustomButtonType;
  children: React.ReactNode;
  onClick?: () => void;
  styleHolder?: string;
};

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  styleHolder,
}) => {
  const buttonClasses = `px-3 py-2 rounded text-sm font-medium cursor-pointer w-full ${
    type === "primary"
      ? "bg-purple-300 border-solid border border-purple-400 text-neutral-0 hover:bg-purple-500"
      : type === "secondary"
      ? "bg-purple-50 border-solid border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-neutral-0"
      : "bg-neutral-0 border-solid border-neutral-0 text-purple-400 hover:bg-purple-50 hover:border-purple-50"
  }  
  ${styleHolder}`;

  return (
    <div>
      <button className={buttonClasses} type="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
