import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

  const [newBtnName,setnewBtnName] = useState("Login")

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-bar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/cart">Cart</a></li>
          <button
            className="login-btn"
            onClick={() => {
              newBtnName === "Login" 
              ? setnewBtnName("Logout")  
              : setnewBtnName("Login");
            }}
          >
            
            {newBtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
