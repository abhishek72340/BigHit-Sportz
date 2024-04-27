import Navbar from "./../../Components/Navbar/Navbar";
import Loading from "./../../Components/Skeleton/Skeleton";
import { useCart } from "../../Hooks/useCart";
import ProductCard from "./../../Cards/ProductCard/ProductCard";
const Home = () => {
  const { isLoading } = useCart();
  return (
    <>
      <Navbar />
      {isLoading ? <Loading /> : <ProductCard />}
    </>
  );
};

export default Home;
