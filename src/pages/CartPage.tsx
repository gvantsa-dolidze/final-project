import CartElement from "../components/cart_page_components/CartElement";
import OrderSummary from "../components/cart_page_components/OrderSummary";
import Breadcrumb from "../components/elements/Breadcrumb";

const CartPage = () => {
  return (
    <div>
      <div className="bg-BackgroundGray py-5">
        <Breadcrumb />
      </div>
      <div className="flex justify-between m-auto max-w-1116 py-10">
        <CartElement />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;
