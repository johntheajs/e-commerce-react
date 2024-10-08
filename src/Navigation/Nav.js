import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext } from "react"; // Import useContext
import { CartContext } from "../context/cartContext"; // Import CartContext
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  const navigate = useNavigate();
  const { totalNoOfProducts } = useContext(CartContext); // Access totalNoOfProducts

  const loginNavigate = async (e) => {
    try {
      navigate("/"); // Redirect to login after successful signup
    } catch (err) {
      console.log(err);
    }
  };

  const cartNavigate = async (e) => {
    try {
      navigate("/cart"); // Redirect to login after successful signup
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="">
          <FiHeart className="nav-icons" />
        </a>
        <a onClick={cartNavigate}>
          <div className="cart-icon-container">
            <AiOutlineShoppingCart className="nav-icons" />
            {totalNoOfProducts > 0 && ( // Only show the badge if totalNoOfProducts is greater than 0
              <span className="cart-badge">{totalNoOfProducts}</span>
            )}
          </div>
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
        <a onClick={loginNavigate}>
          <IoIosLogOut className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
