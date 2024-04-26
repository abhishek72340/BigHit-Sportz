import "./Home.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import Navbar from "./../../Components/Navbar/Navbar";
import { useCart } from "../../Hooks/useCart";
const Home = () => {
  const { products, search } = useCart();
  const filterProduct =
    products &&
    products?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <>
      <Navbar />
      <div className="products_container">
        {filterProduct &&
          filterProduct?.slice(0, 20)?.map((product) => {
            return (
              <div key={product?.id} className="product_img_container">
                <img src={product?.thumbnail} alt="product" />
                <div className="product_card_info">
                  <div>
                    <p className="product_price">${product?.price}</p>
                    <p className="product_title">{product?.title}</p>
                  </div>
                  <div className="icons_container">
                    <MdFavoriteBorder className="add_fav_icon" />
                    <AiFillPlusCircle className="add_cart_btn" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
