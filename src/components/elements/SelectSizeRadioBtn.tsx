interface SelectSizeRadioBtnProps {
  variant?: "s" | "m" | "l" | "xl" | "xxl";
}
const SelectSizeRadioBtn: React.FC<SelectSizeRadioBtnProps> = ({
  variant = "s",
}) => {
  const styles: Record<string, string> = {
  };

  return (
    <div className="flex items-center justify-center w-10 h-10 border rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray">
      <label
        htmlFor={`colorPiker-${variant}`}
        className="cursor-pointer"
      >{variant}</label>
      <input
        type="radio"
        className={`${styles[variant]} appearance-none`}
        name="size-piker"
        id={`colorPiker-${variant}`}
        value={variant}
      ></input>
    </div>
  );
};

export default SelectSizeRadioBtn;
