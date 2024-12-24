import { NavLink } from "react-router-dom";

interface LinkBtnProps {
  destination: string;
  label?: string;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "outline"
    | "link"
    | "light"
    | "sidebar"
    | "gray";
  alt?: string;
  img?: string;
  reverse?: boolean;
  className?: string;
  id?: any;
  onClick?: () => void;
  truncateLength?: number; // New property
}

const LinkBtn: React.FC<LinkBtnProps> = ({
  label,
  variant = "primary",
  destination = "",
  alt = "logo",
  img,
  reverse = false,
  className = "",
  id = '',
  onClick,
  truncateLength = 30, // Default length set to 30 if not provided
}) => {
  // Function to truncate the label to a specified length
  const truncateLabel = (label: string | undefined, truncateLength: number = 30) => {
    if (label && label.length > truncateLength) {
      return label.slice(0, truncateLength) + "...";
    }
    return label;
  };

  const styles: Record<string, string> = {
    primary:
      "flex items-center justify-center bg-MidnightBlue text-white px-8 py-3 rounded-md text-sm hover:bg-slate-800",
    secondary: "border rounded-full px-4 py-1 text-sm hover:bg-BackgroundGray",
    sidebar:
      "p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md",
    outline: "",
    light: "border px-8 py-3 text-sm hover:bg-BackgroundGray rounded-md",
    link: " flex justify-start text-gray hover:text-gray-800",
    gray: "bg-BackgroundGray rounded-md px-4 py-1",
  };

  return (
    <NavLink to={destination} id={id} className={`${styles[variant]} ${className}`} onClick={onClick}>
      {!reverse && img && <img src={img} alt={alt} />}
      {label && <p>{truncateLabel(label, truncateLength)}</p>} {/* Use truncateLength here */}
      {reverse && img && <img src={img} alt={alt} className="ml-2" />}
    </NavLink>
  );
};

export default LinkBtn;

