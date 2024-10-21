import ColorPiker from "../elements/ColorPiker";
import RangeSlider from "../elements/RangeSlider";
import SizePiker from "../elements/SizePiker";
import Categories from "./Categories";

const SideBar = () => {
  return (
    <div className="border rounded-md p-2 pt-6 space-y-5 h-[700px]  hidden sm:block">
      <Categories />
      <div className="space-y-3 text-start">
        <h3>Color</h3>
        <ColorPiker />
      </div>
      <div className="space-y-3 text-start">
      <h3>Size</h3>
        <SizePiker />
      </div>
      <div>
        <RangeSlider />
      </div>
    </div>
  );
};

export default SideBar;
