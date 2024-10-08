interface RangeFieldProps {
  variant?: "range";
  text: string;
  type: React.HTMLInputTypeAttribute;
}
const RangeField: React.FC<RangeFieldProps> = ({ variant = "range", type, text }) => {
  const styles: Record<string, string> = {
       range: "w-full",
  };

  return (
    <div className="flex flex-col text-start gap-3">
      <label htmlFor={`range-${[variant]}`}>{text}</label>
      <input
        type={type}
        className={`${styles[variant]}`}
        id={`range-${[variant]}`}
        name="vol"
        min="0"
        max="3000"
      />
    </div>
  );
};

export default RangeField;
