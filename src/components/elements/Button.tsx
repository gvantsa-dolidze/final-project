import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  destination: string;
  label: string;
  variant?: "primary" | "secondary" | "danger" | "outline" | 'link' | 'light';
}
const Button: React.FC<ButtonProps> = ({ label, variant = "primary", destination }) => {
  const styles: Record<string, string> = {
    primary: "bg-MidnightBlue text-white px-8 py-3 rounded-md text-sm",
    secondary: "border rounded-full px-4 py-1 text-sm hover:bg-BackgroundGray",
    danger: "",
    outline: "",
    light: 'border px-8 py-3 text-sm hover:bg-BackgroundGray rounded-md',
    link: 'text-gray hover:text-gray-800 pb-1',
  };

  return (
  // <button className={`${styles[variant]}`}>{label}</button>;
  <Link to={destination} className={`${styles[variant]}`}>
      {label}
    </Link>
  )
};

export default Button;
