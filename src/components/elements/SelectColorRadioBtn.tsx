interface SelectColorRadioBtnProps {
  variant?: "blue" | "yellow" | "red" | "pink" | "green";
}
const SelectColorRadioBtn: React.FC<SelectColorRadioBtnProps> = ({
  variant = "blue",
}) => {
  const styles: Record<string, string> = {
    blue: "appearance-none cursor-pointer w-5 h-5 bg-blue-500 rounded-full border-2 border-transparent checked:border-white checked:outline checked:outline-gray-500 hover:bg-blue-200",
    yellow:
      "appearance-none cursor-pointer w-5 h-5 bg-yellow-500 rounded-full border-2 border-transparent checked:border-white checked:outline checked:outline-gray-500 hover:bg-yellow-200",
    red: "appearance-none cursor-pointer w-5 h-5 bg-red-500 rounded-full border-2 border-transparent checked:border-white checked:outline checked:outline-gray-500 hover:bg-red-200",
    pink: "appearance-none cursor-pointer w-5 h-5 bg-pink-500 rounded-full border-2 border-transparent checked:border-white checked:outline checked:outline-gray-500 hover:bg-pink-200",
    green:
      "appearance-none cursor-pointer w-5 h-5 bg-green-500 rounded-full border-2 border-transparent checked:border-white checked:outline checked:outline-gray-500 hover:bg-green-200",
  };

  return (
    <label htmlFor="colorPiker">
      <input
        type="radio"
        className={`${styles[variant]}`}
        name="color_piker"
        id="colorPiker"
      ></input>
    </label>
  );
};

export default SelectColorRadioBtn;
