import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./Components/Skeleton/Skeleton";
import Home from "./Pages/Home/Home";
const ProductDetails = lazy(() =>
  import("./Pages/ProductDetails/ProductDetails")
);
const Cart = lazy(() => import("./Pages/Cart/Cart"));
const Wishlist = lazy(() => import("./Pages/Wishlist/Wishlist"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"));
const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
