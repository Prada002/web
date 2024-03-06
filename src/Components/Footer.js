import React from "react";
import "../Styles/footer.scss";
import logo from "../Assets/logo_1.svg";
import Cards_logo from "../Assets/icons_payment.svg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="one">
          <ul>
            <li className="coral">
              <img src={logo} alt="" />
              Coral
              <img src={logo} alt="" />
            </li>
            <li>
              <p className="foot">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                dolorem, suscipit qui officiis, tempora impedit ad asperiores
                esse obcaecati.
              </p>
            </li>
            <li>
              <span className="socialicon">
                <FaFacebookF />
                <FaXTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </span>
            </li>
          </ul>
        </div>
        <div className="two">
          <ul>
            <h3> CATALOG </h3>
            <li>Neckalaces</li>
            <li>Hoodies</li>
            <li>Jewelry Box</li>
            <li> T-shir</li>
            <li>Jacket</li>
          </ul>
        </div>
        <div className="three">
          <ul>
            <h3>ABOUT US</h3>

            <li>Our Producers</li>
            <li>Sitemap</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="four">
          <ul>
            <h3>CUSTOMER SERVICES</h3>

            <li>Contact Us</li>
            <li>Track Your Order</li>
            <li>Product Care & Repair</li>
            <li>Book An Oppointment</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
      </div>
      <div className="bottom_bar">
        <p>© 2022 Coral , Inc.</p>
        <img src={Cards_logo} />
        <button className="top">
          
          Scroll To Top
          <AiOutlineArrowUp />
        </button>
      </div>
    </>
  );
}

export default Footer;
