interface InputElementProps {
  variant?: "form";
  text: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
}
const InputElement: React.FC<InputElementProps> = ({ variant = "form", text, type, placeholder }) => {
  const styles: Record<string, string> = {
    form: "outline-none border py-2 px-3 rounded-md text-sm box-border",
  };

  return (
    <div className="flex flex-col text-start">
      <label htmlFor={`form-${variant}`}>{text}</label>
      <input
        type={type}
        className={`${styles[variant]}`}
        name="name"
        id={`form-${variant}`}
        //   value={}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default InputElement;
