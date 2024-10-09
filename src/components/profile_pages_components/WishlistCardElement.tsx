import Button from "../elements/Button";
import ImgElement from "../elements/ImgElement";
const WishlistCardElement = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-5">
        <ImgElement />
        <div className="text-start">
          <h3>Raw Black T-Shirt Lineup</h3>
          <p>Added on: 27 July 2023</p>
          <p>$ 70.00</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <Button variant="link" label="Remove item" destination="/" />
        <Button variant="light" label="Add to cart" destination="/" />
      </div>
    </div>
  );
};

export default WishlistCardElement;
