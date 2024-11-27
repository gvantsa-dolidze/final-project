import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import CartElement from "../components/cart_page_components/CartElement";
import OrderSummary from "../components/cart_page_components/OrderSummary";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";
import { useAppSelector } from "../store/hooks";


// Define the type of cart item
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const [hasToken, setHasToken] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0); // State for total price
  const navigate = useNavigate();

  // Use the selector to get the cart from the Redux store
  const cart = useAppSelector((state) => state.cart.data || []); // Ensure the data is properly typed

  // Calculate total price
  const calculatedTotalPrice = cart.reduce((acc: number, cartItem: CartItem) => {
    return acc + (cartItem.price * cartItem.quantity); // Calculate total price
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

  // Set the total price in state
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
      <div className="flex m-auto max-w-1116 py-10 gap-20">
        <CartElement />
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </Layout>
  );
};

export default CartPage;
