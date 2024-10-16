import CartElement from "../components/cart_page_components/CartElement";
import OrderSummary from "../components/cart_page_components/OrderSummary";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout"

const CartPage = () => {
  return (
    <Layout>
      <div className="bg-BackgroundGray">
      <div className="max-w-1116 m-auto py-5">
          <Breadcrumb label="Search" title="" />
        </div>
      </div>
      <div className="flex m-auto max-w-1116 py-10 gap-20">
        <CartElement />
        <OrderSummary />
      </div>
    </Layout>
  );
};

export default CartPage;
