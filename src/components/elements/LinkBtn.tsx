import React from "react";
import { NavLink } from "react-router-dom";

interface LinkButtonProps {
  destination: string;
  label: string;
  variant?: "primary" | "secondary" | "danger" | "outline" | 'link' | 'light' | 'sidebar';
}
const LinkButton: React.FC<LinkButtonProps> = ({ label, variant = "primary", destination }) => {
  const styles: Record<string, string> = {
    primary: "bg-MidnightBlue text-white px-8 py-3 rounded-md text-sm",
    secondary: "border rounded-full px-4 py-1 text-sm hover:bg-BackgroundGray",
    sidebar: "p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md",
    outline: "",
    light: 'border px-8 py-3 text-sm hover:bg-BackgroundGray rounded-md',
    link: 'text-gray hover:border-b pb-1',
  };

  return (
  <NavLink to={destination} className={`${styles[variant]}`}>
      {label}
    </NavLink>
  )
};

export default LinkButton;
