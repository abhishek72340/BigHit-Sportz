import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { fetchProduct } from "./../Services/ProductService";
import { cartContext } from "./../Hooks/useCart";
export const CartProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isCart, setIsCart] = useState([]);
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
    const productToAdd =
      products && products.find((product) => product.id === id);
    if (productToAdd) {
      setIsCart((prevCart) => [...prevCart, productToAdd]);
      toast.success("add to cart successfully");
    }
  };

  const removeProduct = (id) => {
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
        removeProduct,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
