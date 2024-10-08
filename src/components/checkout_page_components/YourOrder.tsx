import Button from "../elements/Button"
import PlaceOrder from "./PlaceOrder"
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
          
          <PlaceOrder />
        </div>
  )
}

export default YourOrder