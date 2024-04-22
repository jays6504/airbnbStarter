import React from "react";
import logo from "../../assets/logo/long-logo.png";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar-logo" />
      </Link>
      <div className="search-bar">
        <input className="search-bar-input"></input>
        <div className="search-bar-icon" onClick={search}>
          <SearchRoundedIcon />
        </div>
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
      <MobileSearchBar />
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;

var inputBlacklist = [";", ":", "<", ">", "{", "}", "[", "]", "(", ")", "!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "?", "/", "\\", "|", "~", "`", "'", "\"", ",", "."];

/**
 * @oaram {string} input - The input value from the search bar
 * This function is called when the search icon is clicked. It passes the input value to the api.
 * It also checks if the input value contains any blacklisted characters.
 */
function search() {
  var String = document.querySelector(".search-bar-input");
  console.log(String.value);
  inputBlacklist.forEach(element => {
    if (String.value.contains(element)) {
      alert("Invalid input");
    }
  });
}