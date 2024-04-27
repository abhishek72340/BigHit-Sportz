import "./ProductDetailCard.css";
import PropTypes from "prop-types";
import { useCart } from "../../Hooks/useCart";
import { useNavigate } from "../../Hooks/useNavigate";
import Carousel from "../../Components/Carousel/Carousel";
const ProductDetailCard = ({ productDetail }) => {
  const { addToCart, isCart } = useCart();
  console.log("Product Detail:", productDetail);
  const navigate = useNavigate();
  const isItemInCart = () => {
    return isCart?.some((item) => item.id === productDetail?.id);
  };
  return (
    <>
      <div>
        {" "}
        <p className="product_details_header_text">
          <span>{productDetail?.brand}</span>
          <span>{productDetail?.category}</span>
        </p>
        <p className="star_rating">
          {productDetail?.rating &&
            [...Array(Math.floor(productDetail?.rating))].map(() => "⭐")}
        </p>
        <Carousel productDetail={productDetail} />
        <div className="price_discount_container">
          <div className="product_details_name_price">
            <span>${productDetail?.price}</span>
            <span>{productDetail?.title}</span>
          </div>
          <span className="discount_price">
            ${productDetail?.discountPercentage} OFF
          </span>
        </div>
        <div className="product-details-add_btn">
          <button
            onClick={() => addToCart(productDetail?.id)}
            disabled={isItemInCart()}
            style={{
              opacity: isItemInCart() ? "0.4" : "inherit",
              cursor: isItemInCart() ? "not-allowed" : "pointer",
            }}
          >
            Add To Cart
          </button>
          <button onClick={() => navigate("/cart")}>Buy Now</button>
        </div>
        <div className="product_details-description">
          <span className="details_heading">Details</span>
          <p className="products_detail_description">
            {productDetail?.description}
          </p>
        </div>
      </div>
    </>
  );
};

ProductDetailCard.propTypes = {
  productDetail: PropTypes.shape({
    brand: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
    title: PropTypes.string,
    discountPercentage: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductDetailCard;
