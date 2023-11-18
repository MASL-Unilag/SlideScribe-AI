import React from "react";

type ButtonProps = {
  type: "button" | "submit" | "reset";
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
  const buttonClasses = `px-4 py-2 rounded text-white ${
    type === "button"
      ? "bg-blue-500"
      : type === "submit"
      ? "bg-green-500"
      : "bg-red-500"
  }  

  ${styleHolder}`;

  return (
    <div>
      <button className={buttonClasses} type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
