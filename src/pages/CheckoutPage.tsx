import ShippingAddress from "../components/checkout_page_components/ShippingAddress";
import YourOrder from "../components/checkout_page_components/YourOrder";
import Breadcrumb from "../components/elements/Breadcrumb";

const CheckoutPage = () => {
  return (
    <div>
      <div className="bg-BackgroundGray py-10">
        <Breadcrumb />
      </div>
      <div className="flex justify-between py-10 max-w-1116 m-auto">
        <ShippingAddress />
        <YourOrder />
      </div>
    </div>
  );
};

export default CheckoutPage;
