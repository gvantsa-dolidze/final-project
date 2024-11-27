import Button from "../elements/Button"
import ProductPrice from "../elements/ProductPrice"
import Title from "../product_page_components/Title"
import { useNavigate } from "react-router";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const PlaceOrder = () => {
    navigate('/after_payment_page')
  }
  return (
    <div className=" py-10 px-2  flex flex-col w-96 gap-5 ">
    <div className="border-b space-y-5 py-5">
      <div className="flex justify-between">
      <Title title='Subtotal' /> <ProductPrice />
      </div>
      <div className="flex justify-between">
      <Title title='Shipping' /> <p>Free</p>
      </div>
      <div className="flex justify-between">
      <Title title='Tax' /> <ProductPrice />
      </div>
    </div>
    <div className="flex justify-between">
    <Title title='Total' /> <ProductPrice />
    </div>
    <div className="flex flex-col gap-7">
      <Button label="Place Order" onClick={PlaceOrder}/>
    </div>
  </div>
  )
}

export default PlaceOrder