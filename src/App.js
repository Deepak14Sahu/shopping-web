import { Route, Routes } from "react-router-dom";
import CarouselWeb from "./Components/Carousels";
import NavBar from "./Components/NavBar";
import Product from "./Components/Product";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import ProductPage from "./Components/ProductPage";
import { products } from "./data";
import LoginPage from "./Components/LoginPage";
import {
  ProtectedRoute,
  ProtectedLoginRoute,
} from "./Components/ProtectedRoute";
import ProfilePage from "./Components/ProfilePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CarouselWeb />} />
        <Route
          path="/login"
          element={
            <ProtectedLoginRoute>
              <LoginPage />
            </ProtectedLoginRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Product products={products} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/:productId"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
