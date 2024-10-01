import { NavLink } from "react-router-dom";
import Button from "../elements/Button";
import ColorPiker from "../elements/ColorPiker";
import SizePiker from "../elements/SizePiker";

const DetailCustomizer = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-between">
        <h2>Raw Black T-Shirt Lineup</h2>
        <button>
          <img src="/img/icons/Share.png" alt="share" />
        </button>
      </div>
      <div className="flex justify-between">
        <NavLink to="" className="flex ">
          <img src="/img/icons/Star.png" alt="star" />
          4.2 — 54 Reviews
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
      <div>
        <h2 className="text-start">Quantity</h2>
      </div>
      <div className="flex justify-between items-center">
        <Button label="Add to cart" /> likebtn
      </div>
      <div>— Free shipping on orders $100+</div>
    </div>
  );
};

export default DetailCustomizer;
