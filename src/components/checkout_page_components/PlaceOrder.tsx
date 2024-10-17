import Button from "../elements/Button"
import ProductPrice from "../elements/ProductPrice"

const PlaceOrder = () => {
  return (
    <div className=" py-10 px-2  flex flex-col w-96 gap-5 ">
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
      <Button label="Place Order" />
    </div>
  </div>
  )
}

export default PlaceOrder