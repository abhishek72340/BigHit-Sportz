import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchProduct } from "./../Services/ProductService";
import { cartContext } from "./../Hooks/useCart";
export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const getProduct = async () => {
    const res = await fetchProduct();
    setProducts(res);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <cartContext.Provider value={{ products, search, setSearch }}>
      {children}
    </cartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
