import { Counter } from "../../store/app/Counter";
import Button from "../elements/Button";
import ImgElement from "../elements/ImgElement";
import ProductPrice from "../elements/ProductPrice";
import ProductTItle from "../product_page_components/ProductTItle";
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
          <ProductTItle title="Raw Black T-Shirt Lineup" />
          {/* <div className="flex gap-2 items-center">
            color: <div className="bg-green-700 w-3 h-3 rounded-full"></div> -
            Size: M
          </div> */}
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
