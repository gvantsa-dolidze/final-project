import Button from "../elements/Button";
import LinkBtn from "../elements/LinkBtn";
import ProductPrice from "../elements/ProductPrice";
import { useNavigate } from "react-router";

interface OrderSummaryProps {
  totalPrice: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ totalPrice }) => {
  const navigate = useNavigate();

  const Checkout = () => {
    navigate('/checkout_page');
  }

  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  return (
    <div className="border rounded-md py-10 px-2 flex flex-col gap-5 h-[450px] w-4/6">
      <h3 className="text-start">Order Summary</h3>

      <div className="border-b space-y-5 py-5">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <ProductPrice price={parseFloat(formatPrice(totalPrice))} />
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <ProductPrice price={parseFloat(formatPrice(totalPrice * 0.001))} />
        </div>
      </div>
      <div className="flex justify-between">
        <p>Total</p>
        <ProductPrice price={parseFloat(formatPrice(totalPrice * 1.001))} />
      </div>
      <div className="flex flex-col gap-7">
        <Button label="Checkout" onClick={Checkout} />
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
