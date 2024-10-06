import Button from "./Button";
interface CardProps {
  variant?: "primary" | "secondary" | "danger" | "outline";
}
const Card: React.FC<CardProps> = ({ variant = "primary" }) => {
  const styles: Record<string, string> = {
    primary: "w-[264px] h-[434px] text-start space-y-5",
    secondary: "",
    danger: "",
    outline: "",
  };

  return (
    <div className={`${styles[variant]} flex flex-col `}>
      <img
        src=""
        alt="product"
        className="w-[264px] h-[312px] bg-BackgroundGray"
      />
      <h2>text text text</h2>
      <div className="flex items-center gap-3">
        <Button label="IN STOCK" variant = "secondary"/>
        <p>$000</p>
      </div>
    </div>
  );
};

export default Card;
