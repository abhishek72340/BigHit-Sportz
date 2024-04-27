import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { useCart } from "../../Hooks/useCart";
import { useParams } from "react-router-dom";
import { useNavigate } from "../../Hooks/useNavigate";
import ProductDetailCard from "../../Cards/ProductDetailCard/ProductDetailCard";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Loading from "./../../Components/Skeleton/Skeleton";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#f9b023",
    color: "white",
  },
}));

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
        <StyledBadge
          badgeContent={isCart.length > 0 ? isCart.length : "0"}
          color="primary"
        >
          <ShoppingCartIcon sx={{ color: "black" }} />
        </StyledBadge>
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
