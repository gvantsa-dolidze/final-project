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
    <div>
      {product && product.length > 0 ? (
        product.map((productData: any) => (
          <div
            key={productData.id}
            className={`${styles[variant]} flex flex-col`}
          >
            <div className="flex flex-col space-y-5">
              <div className="w-[264px] h-[312px] bg-BackgroundGray rounded-md flex justify-center">
                <img
                  src={productData.images}
                  alt={productData.title}
                />{" "}
              </div>
              <ProductTitle title={productData.title} />{" "}
              <div className="flex items-center gap-3">
                <LinkBtn
                  label="IN STOCK"
                  variant="secondary"
                  destination={`/product_page/${productData.id}`}
                />
                <ProductPrice price={productData.price} />{" "}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Card;
