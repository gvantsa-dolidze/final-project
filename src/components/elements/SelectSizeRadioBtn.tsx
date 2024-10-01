interface SelectSizeRadioBtnProps {
  variant?: "s" | "m" | "l" | "xl" | "xxl";
}
const SelectSizeRadioBtn: React.FC<SelectSizeRadioBtnProps> = ({
  variant = "s",
}) => {
  const styles: Record<string, string> = {
    s: "appearance-none border w-10 h-10 rounded cursor-pointer checked:border-[black]",
    m: "appearance-none border w-10 h-10 rounded cursor-pointer checked:border-[black]",
    l: "appearance-none border w-10 h-10 rounded cursor-pointer checked:border-[black]",
    xl: "appearance-none border w-10 h-10 rounded cursor-pointer checked:border-[black]",
    xxl: "appearance-none border w-10 h-10 rounded cursor-pointer checked:border-[black]",
  };

  return (
    <label
      htmlFor={`colorPiker-${variant}`}
      className="relative flex items-center justify-center"
    >
      <input
        type="radio"
        className={`${styles[variant]}`}
        name="color_piker"
        id={`colorPiker-${variant}`}
        value={variant}
      ></input>
      <span className="absolute cursor-pointer text-sm">{variant}</span>
    </label>
  );
};

export default SelectSizeRadioBtn;
