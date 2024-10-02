interface CheckBtnProps {
  id: string;
  label: string;
  variant?: "blue";
}
const CheckBtn: React.FC<CheckBtnProps> = ({ variant = "blue", label, id}) => {
  const styles: Record<string, string> = {
    blue: "w-4 h-4",
  };

  return (
    <label htmlFor={id} className="flex gap-2 items-center">
      <input
        type="checkbox"
        className={`${styles[variant]}`}
        name="product-category"
        id={id}
      ></input>
      <span>{label}</span>
    </label>
  );
};

export default CheckBtn;
