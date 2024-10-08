import ShippingAddress from "../components/checkout_page_components/ShippingAddress";
import Breadcrumb from "../components/elements/Breadcrumb";
// import InputElement from "../components/elements/InputElement";

const CheckoutPage = () => {
  return (
    <div>
      <div className="bg-BackgroundGray py-10">
        <Breadcrumb />
      </div>
      <div className="flex justify-between py-10 max-w-1116 m-auto">
        <ShippingAddress />

        <div></div>
      </div>
    </div>
  );
};

export default CheckoutPage;
