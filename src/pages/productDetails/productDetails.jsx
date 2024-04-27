import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { useCart } from "../../Hooks/useCart";
import { useParams } from "react-router-dom";
import { useNavigate } from "../../Hooks/useNavigate";
import ProductDetailCard from "../../Cards/ProductDetailCard/ProductDetailCard";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import Loading from "./../../Components/Skeleton/Skeleton";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isCart } = useCart();

  const getProductDetails = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await response.json();

      if (result) {
        setProductDetail(result ?? {});
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      <div className="product_details_header">
        <IoChevronBackCircleSharp onClick={() => navigate("/")} />

        <div
          className="product_detail_cart_badge_icon"
          onClick={() => navigate("/cart")}
        >
          <div id="product_detail_cart_badge">
            {isCart.length > 0 ? isCart.length : "0"}
          </div>
          <svg
            viewBox="0 0 37 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.44235 41.1402L7.34519 41.8839L7.34519 41.8839L7.44235 41.1402ZM16.3177 40.8592L16.4615 41.5953L16.3177 40.8592ZM19.9152 44.2995L20.6495 44.4521L20.6495 44.4521L19.9152 44.2995ZM18.3867 51.655L19.121 51.8076L19.121 51.8076L18.3867 51.655ZM6.08517 52.0503L6.80818 51.8509L6.80818 51.8509L6.08517 52.0503ZM4.08377 44.7942L4.80678 44.5948L4.80678 44.5948L4.08377 44.7942ZM7.34519 41.8839C10.5028 42.2965 13.2437 42.2238 16.4615 41.5953L16.1739 40.1231C13.117 40.7202 10.5388 40.7884 7.53951 40.3965L7.34519 41.8839ZM19.1808 44.1469L17.6524 51.5024L19.121 51.8076L20.6495 44.4521L19.1808 44.1469ZM15.7055 53.1357L8.85593 53.3558L8.90411 54.855L15.7537 54.6349L15.7055 53.1357ZM6.80818 51.8509L4.80678 44.5948L3.36077 44.9936L5.36217 52.2497L6.80818 51.8509ZM8.85593 53.3558C7.90569 53.3863 7.05983 52.7633 6.80818 51.8509L5.36217 52.2497C5.79853 53.8317 7.26333 54.9077 8.90411 54.855L8.85593 53.3558ZM17.6524 51.5024C17.4598 52.429 16.6557 53.1051 15.7055 53.1357L15.7537 54.6349C17.3944 54.5822 18.7871 53.4143 19.121 51.8076L17.6524 51.5024ZM16.4615 41.5953C18.0835 41.2784 19.4894 42.6621 19.1808 44.1469L20.6495 44.4521C21.2028 41.7894 18.717 39.6263 16.1739 40.1231L16.4615 41.5953ZM7.53951 40.3965C4.97133 40.061 2.63892 42.3765 3.36077 44.9936L4.80678 44.5948C4.40406 43.1347 5.71201 41.6705 7.34519 41.8839L7.53951 40.3965Z"
              fill="#1E222B"
            />
            <path
              d="M7.21496 43.9859C7.22827 44.3999 7.57466 44.7247 7.98866 44.7114C8.40266 44.6981 8.72749 44.3517 8.71419 43.9377L7.21496 43.9859ZM7.82544 39.6317L8.57505 39.6076L7.82544 39.6317ZM15.2162 43.8966C15.2295 44.3106 15.5759 44.6354 15.9899 44.6221C16.4039 44.6088 16.7288 44.2624 16.7154 43.8484L15.2162 43.8966ZM8.71419 43.9377L8.57505 39.6076L7.07582 39.6558L7.21496 43.9859L8.71419 43.9377ZM11.2353 36.7707L12.2348 36.7386L12.1866 35.2394L11.1871 35.2715L11.2353 36.7707ZM12.2348 36.7386C13.7528 36.6898 15.0229 37.8809 15.0717 39.3989L16.5709 39.3507C16.4955 37.0047 14.5326 35.164 12.1866 35.2394L12.2348 36.7386ZM8.57505 39.6076C8.52627 38.0896 9.71731 36.8195 11.2353 36.7707L11.1871 35.2715C8.84113 35.3469 7.00044 37.3098 7.07582 39.6558L8.57505 39.6076ZM15.0717 39.3989L15.2162 43.8966L16.7154 43.8484L16.5709 39.3507L15.0717 39.3989Z"
              fill="#1E222B"
            />
          </svg>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <ProductDetailCard productDetail={productDetail} />
      )}
    </>
  );
};

export default ProductDetails;
