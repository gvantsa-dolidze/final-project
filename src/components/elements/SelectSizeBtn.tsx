interface SelectSizeRadioBtnProps {
  variant?: "s" | "m" | "l" | "xl" | "xxl";
  type?: string;
}
const SelectSizeRadioBtn: React.FC<SelectSizeRadioBtnProps> = ({
  variant = "s",
  type = 'checkbox'
}) => {
  const styles: Record<string, string> = {
  };

  return (
    <div className="relative flex items-center justify-center">
      <label htmlFor={`sizePiker-${variant}`} className="absolute cursor-pointer text-sm">
        {variant}
      </label>
      <input
        type={type}
        className={`${styles[variant]} appearance-none w-10 h-10 border rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray`}
        name={`size-piker-${variant}`} 
        id={`sizePiker-${variant}`} 
        value={variant}
      />
    </div>
  );
};

export default SelectSizeRadioBtn;
