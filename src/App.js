import "./App.css";
import Home from "./pages/Home";
import Header from "./components/header_components/Header";
import Footer from './components/footer_components/Footer';
import ProductPage from './pages/ProductPage';
import ListingPage from './pages/ListingPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AfterPaymentPage from './pages/AfterPaymentPage'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ProfilePage from './pages/ProfilePage';
import Orders from './components/profile_pages_components/Orders';
import WishList from './components/profile_pages_components/WishList';
import Address from './components/profile_pages_components/Address';
import AccountDetail from './components/profile_pages_components/AccountDetail';
import Password from './components/profile_pages_components/Password';
import Logout from './components/profile_pages_components/Logout';


import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product_page" element={<ProductPage />} />
        <Route path="/listing_page" element={<ListingPage />} />
        <Route path="/cart_page" element={<CartPage />} />
        <Route path="/checkout_page" element={<CheckoutPage />} />
        <Route path="/after_payment_page" element={<AfterPaymentPage />} />
        <Route path="/login_page" element={<LoginPage />} />
        <Route path="/sign_up_page" element={<SignUpPage />} />
        <Route path="/forgot_password_page" element={<ForgotPassword />} />
        <Route path="/reset_password_page" element={<ResetPassword />} />

          {/* profile Page routing */}
         <Route path="/profile_page" element={<ProfilePage />} >
           <Route path="orders" element={<Orders />} />
           <Route path="wishlists" element={<WishList />} />
           <Route path="address" element={<Address />} />
           <Route path="password" element={<Password />} />
           <Route path="account_detail" element={<AccountDetail />} />
           <Route path="logout" element={<Logout />} />
         </Route>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
