import React from "react";
import "../Styles/Style.scss";
import { FaShoppingBag } from "react-icons/fa";

import brand from "../Assets/img.svg";
import Flower from "../Assets/Frame.svg";
import Flower1 from "../Assets/Frame1.svg";
function First() {
  return (
    <>
      <div className="main">
        <div className="content">
          <div className="left_content">
            <p className="title_name">Collections</p>
            <div className="para">
              <p className="description">
                You Can Explore Ans Shops many Different
              </p>
              <p className="description">Collection From Various Brands Here</p>
            </div>
            <button className="button">
              <FaShoppingBag />
              Shop Now
            </button>
          </div>
          <img className="flower" src={Flower} alt="flower" />
          <div className="img_1">
            <div className="img">
              <img className="imgm" src={brand} alt="brand" />
              <div className="flower0">
                <img className="flower1" src={Flower1} alt="flower" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default First;
