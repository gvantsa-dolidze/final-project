import Button from "../elements/Button"

const PlaceOrder = () => {
  return (
    <div className=" py-10 px-2  flex flex-col w-96 gap-5 ">
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
      <Button label="Place Order" destination="/after_payment_page" />
    </div>
  </div>
  )
}

export default PlaceOrder