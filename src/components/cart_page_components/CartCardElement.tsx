import { Counter } from "../../store/app/Counter";
import Button from "../elements/Button";
import ImgElement from "../elements/ImgElement";

const CartCardElement = () => {
  return (
    <div className="flex items-center justify-between mt-5">
      <div className="flex gap-5">
        <ImgElement />
        <div className="text-start">
          <h3>Raw Black T-Shirt Lineup</h3>
          <div className="flex gap-2 items-center">
            color: <div className="bg-green-700 w-3 h-3 rounded-full"></div> -
            Size: M
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div>$75.00</div>
        <Counter />
        <Button variant="gray" img="/img/icons/x.png" />
      </div>
    </div>
  );
};

export default CartCardElement;
