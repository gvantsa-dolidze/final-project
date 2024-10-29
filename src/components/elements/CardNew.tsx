import ProductTitle from "../product_page_components/Title";
import LinkBtn from "./LinkBtn";
import ProductPrice from "./ProductPrice";

interface CardProps {
  variant?: "primary" | "secondary" | "danger" | "outline";
  image: string;
  title: string;
  id: number;
  price: number;
}

export const CardNew: React.FC<CardProps> = ({ variant = "primary", image, title, id, price }) => {
  const styles: Record<string, string> = {
    primary: "w-[264px] h-[434px] text-start space-y-5",
    secondary: "",
    danger: "",
    outline: "",
  };

  return (
    
        <div className={`${styles[variant]} flex flex-col`}>
          <div className="flex flex-col space-y-5">
            <div className="w-[264px] h-[312px] bg-BackgroundGray rounded-md flex justify-center">
              <img src={image} alt={title} />
            </div>
            <ProductTitle title={title} />
            <div className="flex items-center gap-3">
              <LinkBtn
                label="IN STOCK"
                variant="secondary"
                destination={`/product_page/${id}`}
              />
              <ProductPrice price={price} />
            </div>
          </div>
        </div>
     
  );
};
