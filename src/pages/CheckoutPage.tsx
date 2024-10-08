import Breadcrumb from "../components/elements/Breadcrumb";
import InputElement from "../components/elements/InputElement";

const CheckoutPage = () => {
  return (
    <div>
      <div className="bg-BackgroundGray py-10">
        <Breadcrumb />
      </div>
      <div className="flex justify-between py-10 max-w-1116 m-auto">
        <div>
          <h3 className="text-start">Shipping Address</h3>
          <form className="space-y-5 mt-5">
            <InputElement text="Street Address" type="text" placeholder="" />
            <div className="grid gap-x-6 gap-y-10 md:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
              <InputElement text="City" type="text" placeholder=""/>
              <InputElement text="State" type="text" placeholder=""/>

              <InputElement text="Zip Code" type="number" placeholder=""/>
              <InputElement text="Country" type="text" placeholder=""/>

              <InputElement text="Email" type="email" placeholder=""/>
              <InputElement text="Full name"  type="text" placeholder=""/>
            </div>
          </form>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default CheckoutPage;
