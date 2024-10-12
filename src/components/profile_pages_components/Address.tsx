import ShippingAddress from "../checkout_page_components/ShippingAddress"
import Button from "../elements/Button"

const Address = () => {
  return (
    <div className="flex justify-start pl-10">
      <div className="w-96">
        <ShippingAddress />
        <div className="flex mt-5">
         <Button label='Save Changes' />   
        </div>
        
      </div>
        
        
    </div>
  )
}

export default Address