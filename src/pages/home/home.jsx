import Navbar from "./../../Components/Navbar/Navbar";
import Loading from "./../../Components/Skeleton/Skeleton";
import { useCart } from "../../Hooks/useCart";
import ProductCard from "./../../Cards/ProductCard/ProductCard";
import Footerbar from "./../../Components/Footerbar/Footerbar";
const Home = () => {
  const { isLoading } = useCart();
  return (
    <>
      <Navbar />
      {isLoading ? <Loading /> : <ProductCard />}
      <Footerbar />
    </>
  );
};

export default Home;
