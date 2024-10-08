import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Featured from './components/homepage_components/Featured';
import Latest from './components/homepage_components/Latest';
import Header from "./components/header_components/Header";
import Footer from './components/footer_components/Footer';
import ProductPage from './pages/ProductPage';
import DetailsContent from "./components/product_page_components/DetailsContent";
import ReviewsContent from "./components/product_page_components/ReviewsContent";
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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* homepage routing */}
        <Route path="/" element={<Home />}>
          <Route index element={ <Featured /> } />
          <Route path="featured" element={<Featured />} />
          <Route path="latest" element={<Latest />} />
        </Route>

       {/* productpage routing */}
        <Route path="/product_page" element={<ProductPage />} >
           <Route index element={ <DetailsContent /> } />
           <Route path="details_content" element={<DetailsContent />} />
           <Route path="reviews_content" element={<ReviewsContent />} />
        </Route>

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
           <Route index element={ <Orders /> } />
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
