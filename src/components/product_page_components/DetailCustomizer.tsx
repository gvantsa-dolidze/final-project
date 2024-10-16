import { NavLink } from "react-router-dom";
import Button from "../elements/Button";
import ColorPiker from "../elements/ColorPiker";
import SizePiker from "../elements/SizePiker";
import { Counter } from "../../store/app/Counter";

const DetailCustomizer = () => {
  return (
    <div className="space-y-10 w-[438px]">
      <div className="flex justify-between">
        <h2>Raw Black T-Shirt Lineup</h2>
        <button>
          <img src="/img/icons/Share.png" alt="share" />
        </button>
      </div>
      <div className="flex gap-5">
        <NavLink to="" className="flex  items-center bg-[#F6F6F6] rounded-full px-3">
          <img src="/img/icons/Star.png" alt="star" className="w-5 h-5"/>
          <span className="text-sm">4.2 — 54 Reviews</span>
        </NavLink>
        <Button label="IN STOCK" variant="secondary" />
      </div>
      <div className="text-start">$0000</div>
      <div className="flex flex-col items-start">
        <h2>Available Colors</h2>
        <ColorPiker />
      </div>
      <div>
        <h2 className="text-start">SELECT SIZE</h2>
        <SizePiker />
      </div>
      <div className="space-y-2">
        <h2 className="text-start">Quantity</h2>
        <Counter />
      </div>
      <div className="flex gap-5 items-center">
        <Button label="Add to cart" /> 
        <button className="border-2 border-[#F6F6F6] p-1 rounded-md"><img src="/img/icons/Heart.png" alt="heart_img" /></button>
      </div>
      <div className="text-start">— Free shipping on orders $100+</div>
    </div>
  );
};

export default DetailCustomizer;
