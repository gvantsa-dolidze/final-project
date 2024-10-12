import React from "react";
interface ButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "danger" | "outline" | 'link' | 'light' | 'gray';
  alt?: string;
  img?: string;
}
const Button: React.FC<ButtonProps> = ({ label, variant = "primary", alt ='logo', img }) => {
  const styles: Record<string, string> = {
    primary: "bg-MidnightBlue text-white px-8 py-3 rounded-md text-sm",
    secondary: "border rounded-full px-4 py-1 text-sm hover:bg-BackgroundGray",
    danger: "",
    outline: "",
    light: 'border px-8 py-3 text-sm hover:bg-BackgroundGray rounded-md',
    link: 'text-gray hover:text-gray-800 pb-1',
    gray: 'bg-BackgroundGray rounded-md',
  };

  return (
   <button className={`${styles[variant]}`}>
    {img && <img src={img} alt={alt} />}
    {label && <p>{label}</p>}
   </button>
  )
};

export default Button;
