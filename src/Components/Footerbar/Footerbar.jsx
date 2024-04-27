import "./Footerbar.css";
import { useNavigate } from "../../Hooks/useNavigate";
import { CiHome } from "react-icons/ci";
import { TbCategory } from "react-icons/tb";
import { MdFavoriteBorder } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";

const Footerbar = () => {
  const navigate = useNavigate();

  return (
    <div id="footerbar">
      <div className="footerbar_container">
        <div className="footer_bar_container" onClick={() => navigate("/")}>
          <CiHome />
          <span>Home</span>
        </div>
        <div className="footer_bar_container">
          <TbCategory />
          <span>Categories </span>
        </div>
        <div
          className="footer_bar_container"
          onClick={() => navigate("/wishlist")}
        >
          <MdFavoriteBorder />
          <span>Favourite </span>
        </div>
        <div className="footer_bar_container">
          <MdMoreVert />
          <span>More </span>
        </div>
      </div>
    </div>
  );
};

export default Footerbar;
