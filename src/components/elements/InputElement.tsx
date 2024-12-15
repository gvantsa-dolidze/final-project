interface InputElementProps {
  id?: string;
  variant?: "form" | "noBorder" | "hidden";
  text?: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  img?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autocomplete?: any;
  value?: any;
}

const InputElement: React.FC<InputElementProps> = ({
  id,
  variant = "form",
  text = "",
  type,
  placeholder = "",
  img = "",
  onChange,
  autocomplete,
  value,
}) => {
  const styles: Record<string, string> = {
    form: "outline-none border py-2 px-3 rounded-md text-sm box-border",
    noBorder: "outline-none text-sm box-border",
    hidden:
      "hidden cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition",
  };

  const labelStyles: Record<string, string> = {
    form: "text-gray-700 mb-1",
    noBorder: "text-gray-700",
    hidden:
      "text-gray-500 mb-1 cursor-pointer border py-2 px-3 rounded-md text-sm box-border flex items-center gap-2",
  };

 
  return (
    <div className="flex flex-col text-start">
      <label htmlFor={id} className={labelStyles[variant]}>
        {img && <img src={img} alt="Input icon" className="w-5 h-5" />}
        {text}
      </label>

      <input
        type={type}
        className={`${styles[variant]}`}
        name="name"
        id={id || `form-${variant}`}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autocomplete}
        value={value}
      />
    </div>
  );
};

export default InputElement;
