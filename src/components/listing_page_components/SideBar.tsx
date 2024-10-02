import ColorPiker from "../elements/ColorPiker";
import SizePiker from "../elements/SizePiker";
import Categories from "./Categories";

const SideBar = () => {
  return (
    <div className="border rounded-md p-2 space-y-5">
      <Categories />
      <div className="space-y-3 text-start">
        <h3>Color</h3>
        <ColorPiker />
      </div>
      <div className="space-y-3 text-start">
      <h3>Size</h3>
        <SizePiker />
      </div>
    </div>
  );
};

export default SideBar;
