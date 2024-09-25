import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "danger" | "outline";
}
const Button: React.FC<ButtonProps> = ({ label, variant = "primary" }) => {
  const styles: Record<string, string> = {
    primary: "bg-MidnightBlue text-white px-4 py-2 rounded-md text-sm",
    secondary: "",
    danger: "",
    outline: "",
  };

  return <button className={`${styles[variant]}`}>{label}</button>;
};

export default Button;
