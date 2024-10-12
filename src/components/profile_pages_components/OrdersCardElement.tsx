import Button from "../elements/Button";
import ImgElement from "../elements/ImgElement";

const OrdersCardElement = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-5">
        <ImgElement />
        <div className="text-start">
          <h3>Raw Black T-Shirt Lineup</h3>
          <p>Added on: 27 July 2023</p>
          <Button variant="link" label="Remove item"  />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div>$ 75.00</div>
        <Button variant="light" label="Add to cart"  />
      </div>
    </div>
  );
};

export default OrdersCardElement;
