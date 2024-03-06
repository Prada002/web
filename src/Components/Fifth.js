import React from "react";
import "../Styles/Fifth.scss";
import card1 from "../Assets/card1.svg";
import card2 from "../Assets/card2.svg";
import card3 from "../Assets/card3.svg";
import card4 from "../Assets/card4.svg";
import card5 from "../Assets/card5.svg";
import card6 from "../Assets/card6.svg";
import card7 from "../Assets/card7.svg";
import card8 from "../Assets/card8.svg";
import banner from "../Assets/background.svg";
import zara from "../Assets/zara1.svg";
import zara1 from "../Assets/zaralogo.svg";

function Fifth() {
  return (
    <>
      <div className="fifth">
        <div className="whole-body">
          <div className="shop_cards">
            <div className="card1">
              <img src={card1} />
              <p>Adicolor Classic Joggers</p>
              <p>Dress</p>
              <p>$63.85</p>
            </div>
            <div className="card2">
              <img src={card2} />
              <p>Nike Sportswear Futura Luxe</p>
              <p>Bag</p>
              <p>$130</p>
            </div>
            <div className="card3">
              <img src={card3} />
              <p>Geometric Print Scarf</p>
              <p>Scarf</p>
              <p>$53</p>
            </div>
            <div className="card4">
              <img src={card4} />
              <p>Yellow Reserved Hoodie</p>
              <p>Dress</p>
              <p>$364.00</p>
              <p>$155</p>
            </div>
            <div className="card5">
              <img src={card5} />
              <p>Basic Dress Green</p>
              <p>Dress</p>
              <p>$236.00</p>
            </div>
            <div className="card6">
              <img src={card6} />
              <p>Nike Air Zoom pegasus</p>
              <p>Shoe</p>
              <p>$220.00</p>
              <p>$198</p>
            </div>
            <div className="card7">
              <img src={card7} />
              <p>Nike Repel Miler</p>
              <p>Dress</p>
              <p>$120.00</p>
            </div>
            <div className="card8">
              <img src={card8} />
              <p>Nike Sportswear Futura Luxe</p>
              <p>Glasses</p>
              <p>$160.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="brand1">
        {/* <div className="banner">
          {/* <img className="za" src={banner} /> */}
        {/* <div>
            
          </div>
          <div className="Content11">
            */}
        <img className="zara" src={zara} />

        <div className="bg_content">
          <img className="zara1" src={zara1} />
          <p>
            Lustrous Yet Understand.The New Evening wear Collection Exclusively
            Offered At The Respened Giorgio Armani Boutique in Los Angles
          </p>
          <button>See Collection</button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Fifth;
