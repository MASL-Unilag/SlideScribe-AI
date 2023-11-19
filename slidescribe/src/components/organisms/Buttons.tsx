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
  const buttonClasses = `px-3 py-2 rounded text-sm font-medium text-white cursor-pointer ${
    type === "primary"
      ? "bg-indigo-500 border-solid border border-indigo-500"
      : type === "secondary"
      ? "bg-indigo-200 border-solid border border-indigo-800 text-indigo-800"
      : "bg-white border-solid border border-white text-indigo-800"
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
