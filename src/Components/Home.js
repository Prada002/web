import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Account from "../Assets/Acc_icon.svg";
import Shop from "../Assets/shop_icon.svg";
import "../Styles/home.scss";
import logo from "../Assets/logo_1.svg";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const items = [
    "Jewelry & Accessories",
    "Clothing & Shoes",
    "Home & Living",
    "Wedding & Party",
    "Toys & Entertainment",
    "Art & Collectible",
    "Craft Supplies & Tools",
  ];

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="head">
        <div className="header">
          <div className="Search">
            <FaSearch />
          </div>
          <div className="title">
            <img className="logo1" src={logo} alt="logo" />
            <p> CORAL</p>
            <img className="logo1" src={logo} alt="logo" />
          </div>
          <div className="buttons">
            <img className="buttons1" src={Account} alt="Account" />
            <p className="buttons1"> Account</p>
            <img className="buttons1" src={Shop} alt="Shop" />
            <p className="buttons1"> Shopping</p>
          </div>
        </div>
        <div className="menu_icon">
          <a className="menu" href="" onClick={handleMenuClick}>
            <IoMdMenu />
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="list">
          <div className="itemss">
            {items.map((item, index) => (
              <div key={index}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
