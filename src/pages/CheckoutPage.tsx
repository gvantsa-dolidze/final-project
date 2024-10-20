import ShippingAddress from "../components/checkout_page_components/ShippingAddress";
import YourOrder from "../components/checkout_page_components/YourOrder";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";

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
      <div className="flex justify-between py-10 max-w-1116 m-auto">
        <ShippingAddress />
        <YourOrder />
      </div>
    </Layout>
  );
};

export default CheckoutPage;
