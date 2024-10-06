import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  destination: string;
  label: string;
  variant?: "primary" | "secondary" | "danger" | "outline" | 'link';
}
const Button: React.FC<ButtonProps> = ({ label, variant = "primary", destination }) => {
  const styles: Record<string, string> = {
    primary: "bg-MidnightBlue text-white px-4 py-2 rounded-md text-sm",
    secondary: "border rounded-full px-4 py-1 text-sm",
    danger: "",
    outline: "",
    link: 'text-gray',
  };

  return (

  
  // <button className={`${styles[variant]}`}>{label}</button>;
  <Link to={destination} className={`${styles[variant]}`}>
      {label}
    </Link>
  )
};

export default Button;
