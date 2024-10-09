import React from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  destination: string;
  label: string;
  variant?: "primary" | "secondary" | "danger" | "outline" | 'link' | 'light';
}
const LinkButton: React.FC<LinkButtonProps> = ({ label, variant = "primary", destination }) => {
  const styles: Record<string, string> = {
    primary: "bg-MidnightBlue text-white px-8 py-3 rounded-md text-sm",
    secondary: "border rounded-full px-4 py-1 text-sm hover:bg-BackgroundGray",
    danger: "",
    outline: "",
    light: 'border px-8 py-3 text-sm hover:bg-BackgroundGray rounded-md',
    link: 'text-gray hover:border-b pb-1',
  };

  return (
  <Link to={destination} className={`${styles[variant]}`}>
      {label}
    </Link>
  )
};

export default LinkButton;
