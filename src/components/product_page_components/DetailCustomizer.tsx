import Button from "../elements/Button";
import ColorPiker from "../elements/ColorPiker";
import SizePiker from "../elements/SizePiker";
import { Counter } from "../../store/app/Counter";
import LinkBtn from "../elements/LinkBtn";
import ProductTItle from "./ProductTItle";
import ProductPrice from "../elements/ProductPrice";

const DetailCustomizer = () => {
  return (
    <div className="space-y-10 w-[438px]">
      <ProductTItle />
      <div className="flex gap-5">
        <LinkBtn
          destination="details_content"
          variant="secondary"
          img="/img/icons/Star.png"
          label="4.2 — 54 Reviews"
          className="flex items-center"
        />
        <Button label="IN STOCK" variant="secondary" />
      </div>
      <ProductPrice />
      <div className="flex flex-col items-start">
        <h3>Available Colors</h3>
        <ColorPiker />
      </div>
      <div>
        <h3 className="text-start">SELECT SIZE</h3>
        <SizePiker />
      </div>
      <div className="space-y-2">
        <h2 className="text-start">Quantity</h2>
        <Counter itemId="yourItemId" />
      </div>
      <div className="flex gap-5 items-center">
        <Button label="Add to cart" />
        <Button
          img="/img/icons/Heart.png"
          variant="borderPngBtn"
          className=""
        />
      </div>
      <div className="text-start">— Free shipping on orders $100+</div>
    </div>
  );
};

export default DetailCustomizer;
