import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import CartElement from "../components/cart_page_components/CartElement";
import OrderSummary from "../components/cart_page_components/OrderSummary";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";
import { useAppSelector } from "../store/hooks";


interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const [hasToken, setHasToken] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const navigate = useNavigate();

  const cart = useAppSelector((state) => state.cart.data || []);

  const calculatedTotalPrice = cart.reduce((acc: number, cartItem: CartItem) => {
    return acc + (cartItem.price * cartItem.quantity);
  }, 0);

  useEffect(() => {
    const token = Cookies.get("AccessToken");
    console.log("Token found:", token);

    if (token) {
      setHasToken(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    setTotalPrice(calculatedTotalPrice);
  }, [calculatedTotalPrice]);

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
      <div className="flex flex-col md:flex-row m-auto max-w-1116 py-10 gap-20">
        <CartElement />
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </Layout>
  );
};

export default CartPage;
