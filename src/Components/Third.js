import React from "react";
import "../Styles/Second.scss";
import main from "../Assets/18.svg";
import brand1 from "../Assets/card_1.svg";
import brand2 from "../Assets/card_2.svg";
import brand3 from "../Assets/card_3.svg";
import brand4 from "../Assets/card_4.svg";
import text from "../Assets/text.svg";

function Third() {
  const brand_img = [
    <img className="img_size" src={brand1} alt="branding" />,
    <img className="img_size" src={brand2} alt="branding" />,
    <img className="img_size" src={brand3} alt="branding" />,
    <img className="img_size" src={brand4} alt="branding" />,
  ];
  return (
    <div className="cards">
      <div className="addvertisement">
        <div className="left">
          <img className="left1" src={text} alt="" />
          {/* <p className="text_1"> EXPLORE NEW AND POPULAR STYLES</p> */}

          <div>
            <img className="left2" src={main} alt="main " />
          </div>
        </div>

        <div className="card">
          {brand_img.map((add, index) => (
            <div key={index}>
              <span>{add}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Third;
