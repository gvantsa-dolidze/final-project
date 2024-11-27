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

  // Check if the token exists on component mount
  useEffect(() => {
    const token = Cookies.get("AccessToken");
    console.log("Token found:", token); // Debugging log to check the token

    if (token) {
      setHasToken(true);  // If token exists, set hasToken to true
    } else {
      // If no token exists, redirect to login page
      navigate("/login");
    }
  }, [navigate]);

  // If the token exists, render the Cart page, otherwise it will redirect
  if (!hasToken) {
    return null;  // Prevent rendering CartPage content if there's no token (because we already redirected to login)
  }

  // Render the Cart page if the token exists
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
