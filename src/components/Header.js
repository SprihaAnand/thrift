import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://p4.wallpaperbetter.com/wallpaper/658/800/994/simple-simple-background-minimalism-black-background-wallpaper-preview.jpg"
          alt=""
          className="header-logo"
        />
      </Link>
      <div class="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>
      <div className="header-nav">
        <div className="header-option"></div>
        <div className="header-option">
          <span className="header-option-line-one">Hello Guest</span>
          <span className="header-option-line-two">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-option-line-one">Returns</span>
          <span className="header-option-line-two">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-line-one">Your</span>
          <span className="header-option-line-two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-option-basket">
            <ShoppingBasketIcon />
            <span className="header-option-line-two">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
