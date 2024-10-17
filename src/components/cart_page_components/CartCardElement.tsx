import { Counter } from "../../store/app/Counter";
import Button from "../elements/Button";
import ImgElement from "../elements/ImgElement";
import ProductPrice from "../elements/ProductPrice";
import ProductTItle from "../product_page_components/Title";
import ColorSizeDisplay from "./ColorSizeDisplay";

interface CartCardElementProps {
  itemId: string; // Adjust type as necessary (string or number)
}
const CartCardElement: React.FC<CartCardElementProps> = ({ itemId }) => {
  return (
    <div className="flex items-center justify-between mt-5">
      <div className="flex gap-5">
        <ImgElement />
        <div className="text-start">
          <ProductTItle />
          <ColorSizeDisplay />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <ProductPrice />
        <Counter itemId={itemId} />
        <Button variant="gray" img="/img/icons/x.png" />
      </div>
    </div>
  );
};

export default CartCardElement;
