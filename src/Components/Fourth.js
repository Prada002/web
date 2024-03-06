import React from "react";
import "../Styles/fourth.scss";
import { FaFilter } from "react-icons/fa";

function fourth() {
  return (
    <>
      <div className="body">
        <div className="title">
          <p>Or subscribe to the newsletter</p>
        </div>

        <div className="head_list">
          <div className="text_li">
            <a className="text_list" href="">
              All Products
            </a>
            <a className="text_list" href="">
              T-shirt
            </a>
            <a className="text_list" href="">
              Hoodies
            </a>
            <a className="text_list" href="">
              Jackete
            </a>
          </div>
          <div>
            <button className="filter_button">
              <FaFilter />
              Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default fourth;
