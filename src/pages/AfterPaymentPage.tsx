import SuccessfulOrder from "../components/after_payment_page/SuccessfulOrder";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";

const AfterPaymentPage = () => {
  return (
    <Layout>
      <div className="bg-[#D5E5D7]">
        <div className="max-w-1116 m-auto py-5">
          <Breadcrumb
            title="Successful Order"
            label="Ecommerce"
            secondaryLabel="Successful Order"
            destination="/"
            secondaryDestination="/after_payment_page"
          />
        </div>
      </div>
      <div className="max-w-1116 m-auto">
        <SuccessfulOrder />
      </div>
    </Layout>
  );
};

export default AfterPaymentPage;
