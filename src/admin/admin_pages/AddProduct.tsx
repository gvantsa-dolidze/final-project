import Button from "../../components/elements/Button";
import ColorPiker from "../../components/elements/ColorPiker";
import InputElement from "../../components/elements/InputElement";
import SizePiker from "../../components/elements/SizePiker";

const AddProduct = () => {
  return (
    <div className="bg-white rounded-md border">
      <div className="text-start p-7 border-b">Add Product</div>
      <form action="">
        <div className="flex gap-10 p-10">
          <div className="w-72 space-y-3">
            <InputElement type="text" text="Title" />
            <InputElement type="text" text="Category" />
            <InputElement type="number" text="Price" />
            <InputElement type="text" text="Slug" />
            <InputElement type="text" text="SKU" />
            <textarea className="outline-none border rounded-md w-72 h-32" />
          </div>
          <div className="w-72 space-y-5">
            <InputElement type="text" text="Stock status" />
            <InputElement type="text" text="Available quantity" />
            <div>
              <h3 className="text-start text-gray-700">Image</h3>
              <InputElement
              type="file"
              text="Choose product images"
              variant="hidden"
              img="/img/icons/Upload.png"
            />
            </div>
            
            <div>
              <h3 className="text-start">Colors</h3>
              <ColorPiker />
            </div>
            <div>
              <h3 className="text-start">Size</h3>
              <SizePiker />
            </div>
          </div>
        </div>
        <div className="flex justify-start pl-10 pb-5">
          <Button label="Save Product" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
