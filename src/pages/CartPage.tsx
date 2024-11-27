import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import CartElement from "../components/cart_page_components/CartElement";
import OrderSummary from "../components/cart_page_components/OrderSummary";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";

const CartPage: React.FC = () => {
  const [hasToken, setHasToken] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("AccessToken");
    console.log("Token found:", token);

    if (token) {
      setHasToken(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!hasToken) {
    return null;
  }
  return (
    <Layout>
      <div className="bg-BackgroundGray">
        <div className="max-w-1116 m-auto py-5">
          <Breadcrumb
            title="Cart"
            label="Ecommerce"
            secondaryLabel="cart"
            destination="/"
            secondaryDestination="/cart_page"
          />
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
