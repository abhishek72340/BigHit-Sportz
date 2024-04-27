import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { fetchProduct } from "./../Services/ProductService";
import { cartContext } from "./../Hooks/useCart";
export const CartProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isCart, setIsCart] = useState([]);
  const [isWishlist, setIsWishlist] = useState([]);
  const [search, setSearch] = useState("");

  const getProduct = async () => {
    setIsLoading(true);
    const res = await fetchProduct();
    setProducts(res);
    setIsLoading(false);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const addToCart = (id) => {
    const productToAddCart =
      products && products.find((product) => product.id === id);
    if (productToAddCart) {
      setIsCart((prevCart) => [...prevCart, productToAddCart]);
      toast.success("add to cart successfully");
    }
  };

  const addToWishlist = (id) => {
    const productToAddWishlist =
      products && products.find((product) => product.id === id);
    if (productToAddWishlist) {
      setIsWishlist((prevCart) => [...prevCart, productToAddWishlist]);
      toast.success("add to wishlist successfully");
    }
  };

  const removeWishlistProduct = (id) => {
    const removeFromWishlist =
      isWishlist && isWishlist.filter((product) => product.id !== id);
    setIsWishlist(removeFromWishlist);
    toast.success("product removed from wishlist successfully");
  };
  const removeCartProduct = (id) => {
    const removeFromCart =
      isCart && isCart.filter((product) => product.id !== id);
    setIsCart(removeFromCart);
    toast.success("product removed from cart successfully");
  };

  return (
    <cartContext.Provider
      value={{
        products,
        search,
        setSearch,
        addToCart,
        isCart,
        setIsCart,
        isLoading,
        removeCartProduct,
        addToWishlist,
        isWishlist,
        removeWishlistProduct,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
