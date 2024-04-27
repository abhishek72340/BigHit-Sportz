import "./Navbar.css";
import { useCart } from "../../Hooks/useCart";
import { useNavigate } from "./../../Hooks/useNavigate";
import { MdFavoriteBorder } from "react-icons/md";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#f9b023",
    color: "white",
  },
}));

const Navbar = () => {
  const { search, setSearch, isCart } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <img
          src="https://www.bighit.fans/assets/images/Group7263.png"
          alt="logo"
          width="80px"
          id="logo"
        />
        <input
          type="text"
          id="search_input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Products or store"
        />
        <div className="icon_container">
          <div className="cart-icon" onClick={() => navigate("/cart")}>
            <StyledBadge
              badgeContent={isCart.length > 0 ? isCart.length : "0"}
              color="primary"
            >
              <ShoppingCartIcon sx={{ color: "white" }} id="badge-cart" />
            </StyledBadge>
          </div>
          <MdFavoriteBorder id="favorite_icon" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
