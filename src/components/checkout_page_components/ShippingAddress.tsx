import InputElement from "../elements/InputElement"

const ShippingAddress = () => {
  return (
    <div>
    
      
      <form className="space-y-5 mt-5">
        <InputElement text="Street Address" type="text" placeholder="" required />
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
          <InputElement text="City" type="text" placeholder="" required/>
          <InputElement text="State" type="text" placeholder="" required/>

          <InputElement text="Zip Code" type="number" placeholder="" required/>
          <InputElement text="Country" type="text" placeholder="" required/>

          <InputElement text="Email" type="email" placeholder="" required/>
          <InputElement text="Full name" type="text" placeholder="" required/>
        </div>
      </form>
    </div>
  )
}

export default ShippingAddress