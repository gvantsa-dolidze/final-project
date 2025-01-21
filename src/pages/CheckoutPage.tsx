import ShippingAddress from "../components/checkout_page_components/ShippingAddress";
import YourOrder from "../components/checkout_page_components/YourOrder";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";
import Address from "../components/profile_pages_components/Address";

const CheckoutPage = () => {
  return (
    <Layout>
      <div className="bg-BackgroundGray">
        <div className="max-w-1116 m-auto py-5">
          <Breadcrumb
            title="Checkout"
            label="Ecommerce"
            secondaryLabel="Checkout"
            destination="/"
            secondaryDestination="/checkout_page"
          />
        </div>
      </div>
      <div className="py-10 px-2 max-w-1116 m-auto">
        {/* <div> */}
          {/* <h3 className="text-start">Shipping Addressss</h3> */}
          {/* <ShippingAddress /> */}
          {/* <Address  /> */}
        {/* </div> */}
        <YourOrder />
      </div>
    </Layout>
  );
};

export default CheckoutPage;
