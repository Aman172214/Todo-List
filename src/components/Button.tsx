import React from "react";
import "./Button.css";

interface ButtonProps {
  variant: "big" | "small";
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  const buttonClassName = `button ${variant}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
