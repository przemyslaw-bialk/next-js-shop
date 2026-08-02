import { ReactNode } from "react";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  variant?: "delete";
  className?: string;
  type: "button" | "submit";
};

const Button = ({
  onClick,
  children,
  variant,
  className,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={` px-3 py-1 rounded-2xl text-secondary ${className} ${
        variant === "delete" ? "bg-red-500" : "bg-primary"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
