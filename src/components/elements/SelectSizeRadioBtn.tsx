interface SelectSizeRadioBtnProps {
  variant?: "s" | "m" | "l" | "xl" | "xxl";
}
const SelectSizeRadioBtn: React.FC<SelectSizeRadioBtnProps> = ({
  variant = "s",
}) => {
  const styles: Record<string, string> = {
    s: "appearance-none border w-10 h-10 rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray",
    m: "appearance-none border w-10 h-10 rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray",
    l: "appearance-none border w-10 h-10 rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray",
    xl: "appearance-none border w-10 h-10 rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray",
    xxl: "appearance-none border w-10 h-10 rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray",
  };

  return (
    <label
      htmlFor={`colorPiker-${variant}`}
      className="relative flex items-center justify-center"
    >
      <input
        type="radio"
        className={`${styles[variant]}`}
        name="size-piker"
        id={`colorPiker-${variant}`}
        value={variant}
      ></input>
      <span className="absolute cursor-pointer text-sm">{variant}</span>
    </label>
  );
};

export default SelectSizeRadioBtn;
