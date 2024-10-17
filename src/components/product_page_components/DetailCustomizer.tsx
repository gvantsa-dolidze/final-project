import Button from "../elements/Button";
import ColorPiker from "../elements/ColorPiker";
import SizePiker from "../elements/SizePiker";
import { Counter } from "../../store/app/Counter";
import LinkBtn from "../elements/LinkBtn";
import Title from "./Title";
import ProductPrice from "../elements/ProductPrice";

const DetailCustomizer = () => {
  return (
    <div className="space-y-10 w-[438px]">
      <div className="flex justify-between">
        <Title variant="title24" />
        <Button img="/img/icons/Share.png" variant="link" />
      </div>

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
        <Title variant="title12" title="Available Colors" className="pb-2" />
        <ColorPiker />
      </div>
      <div>
        <Title
          variant="title12"
          title="SELECT SIZE"
          className="text-start pb-2"
        />

        <SizePiker />
      </div>
      <div className="space-y-2">
        <Title variant="title12" title="Quantity" className="text-start pb-2" />
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
      <Title
        variant="title12"
        title="— Free shipping on orders $100+"
        className="text-start pb-2"
      />
    </div>
  );
};

export default DetailCustomizer;
