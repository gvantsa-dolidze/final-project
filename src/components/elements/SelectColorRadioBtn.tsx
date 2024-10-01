interface SelectColorRadioBtnProps {
  variant?: "blue" | "yellow" | "red" | "pink" | "green";
}
const SelectColorRadioBtn: React.FC<SelectColorRadioBtnProps> = ({
  variant = "blue",
}) => {
  const styles: Record<string, string> = {
    blue: "appearance-none cursor-pointer w-4 h-4 bg-blue-500 rounded-full border-2 border-transparent checked:border-white checked:outline checked:outline-gray-500",
    yellow:
      "appearance-none cursor-pointer w-4 h-4 bg-yellow-500 rounded-full border-2 border-transparent checked:border-white checked:outline checked:outline-gray-500",
    red: "appearance-none cursor-pointer w-4 h-4 bg-red-500 rounded-full border-2 border-transparent checked:border-white checked:outline checked:outline-gray-500",
    pink: "appearance-none cursor-pointer w-4 h-4 bg-pink-500 rounded-full border-2 border-transparent checked:border-white checked:outline checked:outline-gray-500",
    green:
      "appearance-none cursor-pointer w-4 h-4 bg-green-500 rounded-full border-2 border-transparent checked:border-white checked:outline checked:outline-gray-500",
  };

  return (
    <label htmlFor="colorPiker">
        <input
      type="radio"
      className={`${styles[variant]}`}
      name="color_piker"
      id='colorPiker'
    ></input> 
    </label>
   
  );
};

export default SelectColorRadioBtn;
