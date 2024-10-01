import { NavLink } from "react-router-dom";
import Button from "../elements/Button";
// import SelectColorRadioBtn from "../elements/SelectColorRadioBtn";
import ColorPiker from "../elements/ColorPiker";
import SelectSizeRadioBtn from "../elements/SelectSizeRadioBtn";
const DetailCustomizer = () => {
  return (
    <div className="space-y-2">
      <div className="flex">
        <h2>Raw Black T-Shirt Lineup</h2>
        <button>
          <img src="/img/icons/Share.png" alt="share" />
        </button>
      </div>
      <div className="flex">
        <NavLink to="" className="flex">
          <img src="/img/icons/Star.png" alt="star" />
          <span>4.2 — 54 Reviews</span>
        </NavLink>
        <Button label="IN STOCK" variant="secondary" />
      </div>
      <div>$0000</div>
      <div>
        <h2>Available Colors</h2>
      <ColorPiker />
      </div>
      <div>
        <h2>SELECT SIZE</h2>
        <div className="space-x-2 flex">
          <SelectSizeRadioBtn variant="s" />
          <SelectSizeRadioBtn variant="m" />
          <SelectSizeRadioBtn variant="l" />
          <SelectSizeRadioBtn variant="xl" />
          <SelectSizeRadioBtn variant="xxl" />
        </div>
      </div>
      <div>
        <h2>Quantity</h2>
      </div>
      <div className="flex" >
        <Button label='Add to cart'/> likebtn
      </div>
    </div>
  );
};

export default DetailCustomizer;
