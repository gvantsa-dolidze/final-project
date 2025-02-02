interface RadioBtnProps {
  id: string;
  label: string;
  variant?: "blue";
  destination?: string;
  onClick?: () => void;
}
const RadioBtn: React.FC<RadioBtnProps> = ({
  variant = "blue",
  label,
  id,
  onClick,
}) => {
  const styles: Record<string, string> = {
    blue: "w-4 h-4",
  };
  return (
    <label
      htmlFor={id}
      className="flex gap-2 items-center border-b cursor-pointer hover:bg-BackgroundGray px-4 py-3"
    >
      <input
        type="radio"
        className={`${styles[variant]} cursor-pointer`}
        name="product-category"
        id={id}
        onClick={onClick}
      ></input>
      <span>{label}</span>
    </label>
  );
};

export default RadioBtn;
