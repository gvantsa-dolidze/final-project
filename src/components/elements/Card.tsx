import ProductTItle from "../product_page_components/TItle";
import LinkBtn from "./LinkBtn";
import ProductPrice from "./ProductPrice";

interface CardProps {
  variant?: "primary" | "secondary" | "danger" | "outline";
  id?: string;
}
const Card: React.FC<CardProps> = ({ variant = "primary", id = "" }) => {
  const styles: Record<string, string> = {
    primary: "w-[264px] h-[434px] text-start space-y-5",
    secondary: "",
    danger: "",
    outline: "",
  };

  return (
    <div className={`${styles[variant]} flex flex-col `}>
      <div className="w-[264px] h-[312px] bg-BackgroundGray rounded-md flex justify-center">
        <img src="/img/cover.png" alt="product" />
      </div>
      <ProductTItle/> 
      <div className="flex items-center gap-3">
        <LinkBtn
          label="IN STOCK"
          variant="secondary"
          destination={`/product_page/${id}`}
        />
        <ProductPrice />{" "}
      </div>
    </div>
  );
};

export default Card;
