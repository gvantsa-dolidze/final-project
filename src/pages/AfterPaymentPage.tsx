import SuccessfulOrder from "../components/after_payment_page/SuccessfulOrder";
import Breadcrumb from "../components/elements/Breadcrumb";

const AfterPaymentPage = () => {
  return (
    <div>
      <div className="bg-[#D5E5D7] py-10">
        <Breadcrumb label='Successful Order' title='Successful Order'/>
      </div>
      <div className="max-w-1116 m-auto">
        <SuccessfulOrder />
      </div>
    </div>
  );
};

export default AfterPaymentPage;
