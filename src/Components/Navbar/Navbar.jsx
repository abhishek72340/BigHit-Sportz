import "./Navbar.css";
import { useCart } from "../../Hooks/useCart";
import { useNavigate } from "./../../Hooks/useNavigate";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const { search, setSearch, isCart, isWishlist } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <h2>Hello 👋</h2>
        <div id="search_input">
          <CiSearch id="search_icon" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Products or store"
          />
        </div>

        <div className="icon_container">
          <div className="cart_badge_icon" onClick={() => navigate("/cart")}>
            <div id="cart_badge">{isCart.length > 0 ? isCart.length : "0"}</div>
            <img src="/bag.png" alt="cart" />
          </div>
          <div className="fav_badge_icon">
            <div id="fav_badge">
              {isWishlist.length > 0 ? isWishlist.length : "0"}
            </div>
            <MdFavoriteBorder
              id="favorite_icon"
              onClick={() => navigate("/wishlist")}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
