import Navbar from "./../../Components/Navbar/Navbar";
import ProductCard from "./../../Cards/ProductCard";
import Loading from "./../../Components/Skeleton/Skeleton";
import { useCart } from "../../Hooks/useCart";
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
