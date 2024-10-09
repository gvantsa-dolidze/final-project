import "./App.css";
import Home from "./pages/Home";
import Header from "./components/header_components/Header";
import Footer from './components/footer_components/Footer';
import ProductPage from './pages/ProductPage';
import ListingPage from './pages/ListingPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AfterPaymentPage from './pages/AfterPaymentPage'
import Authentication from './pages/Authentication';
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
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
