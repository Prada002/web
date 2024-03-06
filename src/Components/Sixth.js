import React from "react";
import "../Styles/Sixth.scss";
import { FaFilter } from "react-icons/fa";
import card2 from "../Assets/card2.svg";
import card4 from "../Assets/card4.svg";
import card5 from "../Assets/card5.svg";
import card6 from "../Assets/card6.svg";

function sixth() {
  return (
    <>
      <div className="body22">
        <div className="title1">
          <p>Best Sellers</p>
        </div>

        <div className="head_list1">
          <div className="text_li1">
            <a className="text_list1" href="">
              All Products
            </a>
            <a className="text_list1" href="">
              T-shirt
            </a>
            <a className="text_list1" href="">
              Hoodies
            </a>
            <a className="text_list1" href="">
              Jackete
            </a>
          </div>
          <div>
            <button className="filter_button1">
              <FaFilter />
              Show all
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="cards--2">
          <div className="card5_">
            <img src={card5} />
            <p>Basic Dress Green</p>
            <div className="para_0">
              <p>Dress</p>
              <p>$236.00</p>
            </div>
          </div>
          <div className="card2_">
            <img src={card2} />
            <p>Nike Sportswear Futura Luxe</p>
            <div className="para_0">
              <p>Bag</p>
              <p>$130</p>
            </div>
          </div>
          <div className="card4_">
            <img src={card4} />
            <p>Yellow Reserved Hoodie</p>
            <div className="para_0">
              <p>Dress</p>
              <p>$364.00</p>
              <p>$155</p>
            </div>
          </div>
          <div className="card6_">
            <img src={card6} />
            <p>Nike Air Zoom pegasus</p>
            <div className="para_0">
              <p>Shoe</p>
              <p>$220.00</p>
              <p>$198</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default sixth;
