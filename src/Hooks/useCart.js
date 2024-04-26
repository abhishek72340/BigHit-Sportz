import { useContext, createContext } from "react";
const cartContext = createContext();

const useCart = () => useContext(cartContext);
export { useCart, cartContext };
