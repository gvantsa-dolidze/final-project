import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage'
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
