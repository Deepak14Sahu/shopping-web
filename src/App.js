import { Route, Routes } from "react-router-dom";
import CarouselWeb from "./Components/Carousels";
import NavBar from "./Components/NavBar";
import Product from "./Components/Product";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import ProductPage from "./Components/ProductPage";
import products from "./data";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CarouselWeb />} />
        <Route path="/products" element={<Product products={products} />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
