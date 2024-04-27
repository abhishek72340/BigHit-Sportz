import "./Cart.css";
import { useState } from "react";
import { useCart } from "../../Hooks/useCart";
import Checkout from "../../Components/Checkout/Checkout";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [productQuantities, setProductQuantities] = useState({});
  const { isCart, removeCartProduct } = useCart();
  const navigate = useNavigate();

  const handleIncreaseQuantity = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (productId) => {
    if (productQuantities[productId] > 1) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    isCart.forEach((product) => {
      const productId = product.id;
      const quantity = productQuantities[productId] || 1;
      subtotal += product.price * quantity;
    });
    return subtotal;
  };

  return (
    <>
      <div className="cart_header">
        <IoChevronBackCircleSharp
          className="back_btn"
          onClick={() => navigate("/")}
        />
        <span>Shopping Cart ({isCart?.length})</span>
      </div>

      <div>
        {isCart &&
          isCart?.map((product) => {
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
                    <div className="counter">
                      <button
                        className="decrease_btn"
                        onClick={() => handleDecreaseQuantity(product?.id)}
                        disabled={quantity === 1}
                        style={{
                          cursor: quantity === 1 ? "not-allowed" : "pointer",
                        }}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="increase_btn"
                        onClick={() => handleIncreaseQuantity(product?.id)}
                      >
                        +
                      </button>
                    </div>
                    <MdDelete
                      className="delete_icon"
                      onClick={() => removeCartProduct(product?.id)}
                    />
                  </div>
                </div>
                <hr style={{ width: "90%", margin: "auto", opacity: "0.4" }} />
              </div>
            );
          })}

        {isCart.length > 0 && (
          <Checkout calculateSubtotal={calculateSubtotal()} />
        )}
      </div>
    </>
  );
};

export default Cart;
