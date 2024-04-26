import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/productDetails";
import Cart from "./pages/cart/cart";
import NotFoundPage from "./pages/notFoundPage/notFoundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
