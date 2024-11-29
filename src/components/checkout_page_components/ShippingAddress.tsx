import InputElement from "../elements/InputElement"
import PopOver2 from "../elements/PopOver2";


const ShippingAddress = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-start md:hidden block">Shipping Address</h3>
        <PopOver2 categories="My Account" />
      </div>
      <form className="space-y-5 mt-5">
        <InputElement text="Street Address" type="text" placeholder="" />
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
          <InputElement text="City" type="text" placeholder="" />
          <InputElement text="State" type="text" placeholder="" />

          <InputElement text="Zip Code" type="number" placeholder="" />
          <InputElement text="Country" type="text" placeholder="" />

          <InputElement text="Email" type="email" placeholder="" />
          <InputElement text="Full name" type="text" placeholder="" />
        </div>
      </form>
    </div>
  )
}

export default ShippingAddress