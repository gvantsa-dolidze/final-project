import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import ListingPage from './pages/ListingPage';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product_page" element={<ProductPage />} />
        <Route path="/listing_page" element={<ListingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
