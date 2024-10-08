import Button from "../elements/Button"
const YourOrder = () => {
  return (
    <div className="border-l-2 pl-20">
          <h3 className="text-start">Your Order</h3>
          <div className="flex  items-center gap-5 mt-5">
            <div className="flex gap-5">
              <img
                src="/img/cover.png"
                alt="product"
                className="w-16 h-16 p-3 bg-BackgroundGray rounded-full"
              />

              <img
                src="/img/cover1.png"
                alt="product"
                className="w-16 h-16 p-3 bg-BackgroundGray rounded-full"
              />

              <img
                src="/img/cover2.png"
                alt="product"
                className="w-16 h-16 p-3 bg-BackgroundGray rounded-full"
              />
            </div>

            <Button label="Edit Card" destination="/cart_page" />
          </div>
          
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
              <Button label="Place Order" destination="/checkout_page" />
            </div>
          </div>
        </div>
  )
}

export default YourOrder