import CartElement from "../components/cart_page_components/CartElement";
import OrderSummary from "../components/cart_page_components/OrderSummary";
import Breadcrumb from "../components/elements/Breadcrumb";

const CartPage = () => {
  return (
    <div>
      <div className="bg-BackgroundGray py-5">
        <Breadcrumb label='Cart'/>
      </div>
      <div className="flex m-auto max-w-1116 py-10 gap-20">
        <CartElement />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;
