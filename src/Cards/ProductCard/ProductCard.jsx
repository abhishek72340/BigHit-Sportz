import "./ProductCard.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useCart } from "../../Hooks/useCart";
import { useNavigate } from "../../Hooks/useNavigate";
const ProductCard = () => {
  const { products, search, addToCart, addToWishlist, isWishlist } = useCart();
  const navigate = useNavigate();
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
                <div className="fav_icon">
                  {isWishlist &&
                  isWishlist?.find((item) => item.id === product.id) ? (
                    <MdFavorite
                      onClick={() => navigate("/wishlist")}
                      style={{ cursor: "pointer", color: "#ff5555" }}
                    />
                  ) : (
                    <MdFavoriteBorder
                      className="add_fav_icon"
                      onClick={() => addToWishlist(product?.id)}
                    />
                  )}
                </div>
                <img
                  src={product?.thumbnail}
                  alt="product"
                  loading="lazy"
                  onClick={() => navigate(`/products/${product?.id}`)}
                />
                <div className="product_card_info">
                  <div>
                    <p className="product_price">${product?.price}</p>
                    <p className="product_title">{product?.title}</p>
                  </div>
                  <div className="icons_container">
                    {/* {isWishlist &&
                    isWishlist?.find((item) => item.id === product.id) ? (
                      <MdFavorite
                        onClick={() => navigate("/wishlist")}
                        style={{ cursor: "pointer", color: "#ff5555" }}
                      />
                    ) : (
                      <MdFavoriteBorder
                        className="add_fav_icon"
                        onClick={() => addToWishlist(product?.id)}
                      />
                    )} */}
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
