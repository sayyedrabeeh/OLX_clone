import React, { useContext } from "react";
import "./Navbar.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { Link } from "react-router-dom";
import { MyContext }  from "../../context/MyContext";
import { logout } from "../../firebase";

const Navbar = () => {
  const { logState } = useContext(MyContext);



  const handleAuthClick = () => {
    if (user) {
      logout();
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    } else {
      navigate("/");
    }
  };
  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to={"/"}>
            <OlxLogo />
          </Link>
        </div>
        <div className="placeSearch">
          <Search />
          <input type="text" placeholder="Search location..." />
          <Arrow />
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find cars, mobile phones and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span>ENGLISH</span>
          <Arrow />
        </div>
        <div className="loginPage">
          <span
            onClick={() => {
              logout();
            }}
          >
            {logState ? logState : "Login"}
          </span>
          <hr />
        </div>

        <Link to={"/addproduct"} className="sellMenu">
          
          <div className="sellMenuContent">
            <SellButtonPlus />
            <span>SELL</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
