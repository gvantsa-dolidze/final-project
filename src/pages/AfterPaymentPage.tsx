import SuccessfulOrder from "../components/after_payment_page/SuccessfulOrder";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout"


const AfterPaymentPage = () => {
  return (
    <Layout>
      <div className="bg-[#D5E5D7] py-10">
        <Breadcrumb label='Successful Order' title='Successful Order'/>
      </div>
      <div className="max-w-1116 m-auto">
        <SuccessfulOrder />
      </div>
    </Layout>
  );
};

export default AfterPaymentPage;
