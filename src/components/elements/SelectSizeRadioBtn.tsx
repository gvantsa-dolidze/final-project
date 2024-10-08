interface SelectSizeRadioBtnProps {
  variant?: "s" | "m" | "l" | "xl" | "xxl";
}
const SelectSizeRadioBtn: React.FC<SelectSizeRadioBtnProps> = ({
  variant = "s",
}) => {
  const styles: Record<string, string> = {
    // s: 'appearance-none w-10 h-10 border rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray',
    // m: 'appearance-none w-10 h-10 border rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray',
    // l: 'appearance-none w-10 h-10 border rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray',
    // xl: 'appearance-none w-10 h-10 border rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray',
    // xxl: 'appearance-none w-10 h-10 border rounded cursor-pointer checked:border-[black] hover:bg-BackgroundGray',
  };

  return (
    <div className="">
      <label htmlFor={`colorPiker-${variant}`} className="cursor-pointer flex items-center justify-center ">
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
