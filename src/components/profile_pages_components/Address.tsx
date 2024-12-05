import ShippingAddress from "../checkout_page_components/ShippingAddress"
import Button from "../elements/Button"
import PopOver2 from "../elements/PopOver2"


const Address = () => {
  return (
    <div className="flex justify-start px-5">
      <div className="md:w-96 w-full">
         <div className="flex justify-between">
        <h3 className="text-start">Shipping Address</h3>
        <PopOver2 categories="My Account" className="md:hidden block"/>
      </div>
        <ShippingAddress />
        <div className="flex mt-5">
         <Button label='Save Changes' />   
        </div>
        
      </div>
        
        
    </div>
  )
}

export default Address