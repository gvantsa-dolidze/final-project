interface ButtonProps {
  label?: string;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "outline"
    | "link"
    | "light"
    | "gray";
  alt?: string;
  img?: string;
  reverse?: boolean;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  alt = "logo",
  img,
  reverse = false,
  className = "",
}) => {
  const styles: Record<string, string> = {
    primary: "bg-MidnightBlue text-white px-8 py-3 rounded-md text-sm",
    secondary: "flex items-center justify-center border rounded-full px-3 py-1 text-sm hover:bg-BackgroundGray",
    danger: "",
    outline: "",
    light: "flex items-center justify-center gap-2 border px-8 py-3 text-sm hover:bg-BackgroundGray rounded-md ",
    link: "text-gray hover:text-gray-800 pb-1",
    gray: "bg-BackgroundGray rounded-md",
  };

  return (
    <button className={`${styles[variant]} ${className}`}>
      {!reverse && img && <img src={img} alt={alt} />}
      {label && <p>{label}</p>}
      {reverse && img && <img src={img} alt={alt} className="ml-2" />}
    </button>
  );
};

export default Button;
