import ProductTitle from "../product_page_components/Title";
import LinkBtn from "./LinkBtn";
import ProductPrice from "./ProductPrice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProducts } from "../../store/app/ProductSlice";
import { useEffect } from "react";

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

  const dispatch = useAppDispatch();

  const product = useAppSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(product);

  return (
    <div className={`${styles[variant]} flex flex-col `}>
      <div className="w-[264px] h-[312px] bg-BackgroundGray rounded-md flex justify-center">
        <img src="/img/cover.png" alt="product" />
      </div>
      <ProductTitle />
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
