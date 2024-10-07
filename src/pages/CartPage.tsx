import CartElement from "../components/cart_page_components/CartElement";
import Breadcrumb from "../components/elements/Breadcrumb";
import Button from "../components/elements/Button";

const CartPage = () => {
  return (
    <div>
      <div className="bg-BackgroundGray py-5">
        <Breadcrumb />
      </div>
      <div className="flex justify-between m-auto max-w-1116 py-10">
        
        <CartElement />

        {/* Order Summary */}
        <div className="border rounded-md py-10 px-2  flex flex-col w-96 gap-5">
          <h3 className="text-start">Order Summery</h3>

          <div className="border-b space-y-5 py-5">
            <div className="flex justify-between">
              <p>Subtotal</p> <p>$ 90.00</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p> <p>Free</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p> <p>$ 3.00</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p>Total</p> <p>$ 100.00</p>
          </div>
          <div className="flex flex-col gap-7">
            <Button label="Checkout" destination="/checkout_page" />
            <Button
              label="Continue Shopping"
              destination="/listing_page"
              variant="link"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
