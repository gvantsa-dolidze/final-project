import Button from "../elements/Button"
import LinkBtn from "../elements/LinkBtn";
import ProductPrice from "../elements/ProductPrice"
import Title from "../product_page_components/Title"
import { useNavigate } from "react-router";

interface PlaceOrderProps {
  totalPrice: number;
}

const PlaceOrder: React.FC<PlaceOrderProps> = ({ totalPrice }) => {
  const navigate = useNavigate();
  const PlaceOrder = () => {
    navigate('/after_payment_page')
  }

  const formatPrice = (price: number) => {
    return price.toFixed(2); 
  };
  return (
    <div className=" py-10 px-2  flex flex-col gap-5">
    <div className="border-b space-y-5 py-5">
      <div className="flex justify-between">
      <Title title='Subtotal' /> <ProductPrice price={parseFloat(formatPrice(totalPrice))}/>
      </div>
      <div className="flex justify-between">
      <Title title='Shipping' /> <p>Free</p>
      </div>
      <div className="flex justify-between">
      <Title title='Tax' /> <ProductPrice price={parseFloat(formatPrice(totalPrice * 0.001))}/>
      </div>
    </div>
    <div className="flex justify-between">
    <Title title='Total' /> <ProductPrice price={parseFloat(formatPrice(totalPrice * 1.001))}/>
    </div>
    <div className="flex flex-col gap-7">
      <Button label="Place Order" onClick={PlaceOrder}/>
      <LinkBtn label="Edit shipping address" destination="/profile_page/address" variant="link"/>
    </div>
  </div>
  )
}

export default PlaceOrder