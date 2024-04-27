import "./ProductCard.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { useCart } from "../Hooks/useCart";
const ProductCard = () => {
  const { products, search, addToCart } = useCart();
  const filterProduct =
    products &&
    products?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <>
      <div className="products_container">
        {filterProduct &&
          filterProduct?.slice(0, 20)?.map((product) => {
            return (
              <div key={product?.id} className="product_img_container">
                <img src={product?.thumbnail} alt="product" loading="lazy" />
                <div className="product_card_info">
                  <div>
                    <p className="product_price">${product?.price}</p>
                    <p className="product_title">{product?.title}</p>
                  </div>
                  <div className="icons_container">
                    <MdFavoriteBorder className="add_fav_icon" />
                    <AiFillPlusCircle
                      className="add_cart_btn"
                      onClick={() => addToCart(product?.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProductCard;
