interface SelectSizeRadioBtnProps {
  variant?: "s" | "m" | "l" | "xl" | "xxl";
}
const SelectSizeRadioBtn: React.FC<SelectSizeRadioBtnProps> = ({
  variant = "s",
}) => {
  const styles: Record<string, string> = {
  };

  return (
    <div className="relative flex items-center justify-center">
      <label htmlFor={`colorPiker-${variant}`} className="absolute cursor-pointer text-sm">
        {variant}
      </label>
      <input
        type="radio"
        className={`${styles[variant]} appearance-none w-10 h-10 border rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray`}
        name="size-piker"
        id={`colorPiker-${variant}`}
        value={variant}
      />
    </div>
  );
};

export default SelectSizeRadioBtn;
