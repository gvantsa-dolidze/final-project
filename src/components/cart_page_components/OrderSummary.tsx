import Button from "../elements/Button";
import LinkBtn from "../elements/LinkBtn";
import ProductPrice from "../elements/ProductPrice";
import { useNavigate } from "react-router";

interface OrderSummaryProps {
  totalPrice: number; // Prop for total price
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ totalPrice }) => {
  const navigate = useNavigate();

  const Checkout = () => {
    navigate('/checkout_page');
  }

  // Format total price to 2 decimal places
  const formatPrice = (price: number) => {
    return price.toFixed(2); // Ensure 2 decimal places
  };

  return (
    <div className="border rounded-md py-10 px-2 flex flex-col w-96 gap-5 h-[450px]">
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
          <ProductPrice price={parseFloat(formatPrice(totalPrice * 0.001))} /> {/* Example Tax Calculation */}
        </div>
      </div>
      <div className="flex justify-between">
        <p>Total</p> 
        <ProductPrice price={parseFloat(formatPrice(totalPrice * 1.001))} /> {/* Example Total with tax */}
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
