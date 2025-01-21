import InputElement from "../elements/InputElement"

const ShippingAddress = () => {
  return (
    <div className="">
      <form className="space-y-5 mt-5">
        <InputElement text="Street Address" type="text" placeholder="Enter your address" required />
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
          <InputElement text="City" type="text" placeholder="Enter City" required/>
          <InputElement text="State" type="text" placeholder="Enter State" required/>

          <InputElement text="Zip Code" type="number" placeholder="Enter zip code" required/>
          <InputElement text="Country" type="text" placeholder="Enter Country" required/>

          <InputElement text="Email" type="email" placeholder="Enter Email" required/>
          <InputElement text="Full name" type="text" placeholder="Enter your full Name" required/>
        </div>
      </form>
    </div>
  )
}

export default ShippingAddress