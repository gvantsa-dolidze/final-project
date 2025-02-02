interface ButtonProps {
  label?: string;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "outline"
    | "link"
    | "light"
    | "gray"
    | "borderPngBtn"
  alt?: string;
  img?: string;
  reverse?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  alt = "logo",
  img,
  reverse = false,
  className = "",
  onClick,
  type = "button",
}) => {
  const styles: Record<string, string> = {
    primary: "bg-MidnightBlue text-white px-8 py-3 rounded-md text-sm hover:bg-slate-800",
    secondary: "flex items-center justify-center border rounded-full px-3 py-1 text-sm hover:bg-BackgroundGray",
    danger: "",
    outline: "",
    light: "flex items-center justify-center gap-2 border px-8 py-3 text-sm hover:bg-BackgroundGray rounded-md ",
    link: "text-gray hover:text-gray-800",
    gray: "bg-BackgroundGray rounded-md ",
    borderPngBtn: "flex items-center justify-center gap-2 border px-2 py-2 text-sm hover:bg-BackgroundGray rounded-md ",
  };

  return (
    <button className={`${styles[variant]} ${className}`} onClick={onClick} type={type}>
      {!reverse && img && <img src={img} alt={alt} />}
      {label && <p>{label}</p>}
      {reverse && img && <img src={img} alt={alt} className="ml-2" />}
    </button>
  );
};

export default Button;
