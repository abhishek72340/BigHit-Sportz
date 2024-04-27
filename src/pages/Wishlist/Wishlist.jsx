import "../../Pages/Cart/Cart.css";
import { useState } from "react";
import { useCart } from "../../Hooks/useCart";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Wishlist = () => {
  const [productQuantities] = useState({});
  const { isWishlist, removeWishlistProduct } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <div className="cart_header">
        <IoChevronBackCircleSharp
          className="back_btn"
          onClick={() => navigate("/")}
        />
        <span>Wishlist ({isWishlist?.length})</span>
      </div>

      <div>
        {isWishlist &&
          isWishlist?.map((product) => {
            const productId = product?.id;
            const quantity = productQuantities[productId] || 1;
            return (
              <div key={product?.id}>
                <div className="cart_product_detail_container">
                  <div className="cart_product_img_name_container">
                    <img
                      src={product?.thumbnail}
                      alt="cart-img"
                      loading="lazy"
                      onClick={() => navigate(`/products/${product?.id}`)}
                    />
                    <div className="cart_product_info">
                      <span>{product?.title}</span>
                      <span>${product?.price * quantity}</span>
                    </div>
                  </div>
                  <div className="cart_product_icon">
                    <MdDelete
                      className="delete_icon"
                      onClick={() => removeWishlistProduct(product?.id)}
                    />
                  </div>
                </div>
                <hr style={{ width: "90%", margin: "auto", opacity: "0.4" }} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Wishlist;
