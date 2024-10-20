import Button from "../elements/Button";
import LinkBtn from "../elements/LinkBtn";
import ProductPrice from "../elements/ProductPrice";

const OrderSummary = () => {
  return (
    <div className="border rounded-md py-10 px-2  flex flex-col w-96 gap-5">
      <h3 className="text-start">Order Summery</h3>

      <div className="border-b space-y-5 py-5">
        <div className="flex justify-between">
          <p>Subtotal</p> <ProductPrice />
        </div>
        <div className="flex justify-between">
          <p>Shipping</p> <p>Free</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p> <ProductPrice />
        </div>
      </div>
      <div className="flex justify-between">
        <p>Total</p> <ProductPrice />
      </div>
      <div className="flex flex-col gap-7">
        <Button label="Checkout" />
        <LinkBtn
          label="Continue Shopping"
          variant="link"
          destination="/listing_page"
        />
      </div>
    </div>
  );
};

export default OrderSummary;
