import React from "react";

interface CardProps {
  variant?: "primary" | "secondary" | "danger" | "outline";
}
const Card: React.FC<CardProps> = ({ variant = "primary" }) => {
  const styles: Record<string, string> = {
    primary: "w-[264px] h-[434px] bg-[gray]",
    secondary: "",
    danger: "",
    outline: "",
  };

  return <div className={`${styles[variant]}`}></div>;
};

export default Card;