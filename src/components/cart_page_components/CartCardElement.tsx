import { Counter } from "../../store/app/Counter";
import Button from "../elements/Button";
import ImgElement from "../elements/ImgElement";
import ProductPrice from "../elements/ProductPrice";
import ProductTItle from "../product_page_components/Title";
import ColorSizeDisplay from "./ColorSizeDisplay";

interface CartCardElementProps {
  id?: any; // Adjust type as necessary (string or number)
  image?: string;
  title?: string;
  price?: number;
  quantity?: number;
  
}
const CartCardElement: React.FC<CartCardElementProps> = ({ id, title, price, image, quantity }) => {
  return (
    <div className="flex items-center justify-between mt-5">
      <div className="flex gap-5">
        <ImgElement image={image}/>
        <div className="text-start">
          <ProductTItle title={title}/>
          {/* <ColorSizeDisplay /> */}
          <p><span>quantity - </span>{quantity}</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <ProductPrice price={price}/>
        <Counter id={id} />
        <Button variant="gray" img="/img/icons/x.png" />
      </div>
    </div>
  );
};

export default CartCardElement;
