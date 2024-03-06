import React from "react";
import "../Styles/Sevan.scss";
import cardp1 from "../Assets/cardp1.svg";
import cardp2 from "../Assets/cardp2.svg";
import cardp3 from "../Assets/cardp3.svg";
import cardp4 from "../Assets/cardp4.svg";
import cardp5 from "../Assets/cardp5.svg";
import cardp6 from "../Assets/cardp6.svg";
function Sevan() {
  return (
    <div className="body7">
      <div className="txt77">
        <p> Follow Products And Discounts On Instagram</p>
      </div>
      <div className="card_post">
        <img src={cardp1} />
        <img src={cardp2} />
        <img src={cardp3} />
        <img src={cardp4} />
        <img src={cardp5} />
        <img src={cardp6} />
      </div>
      <div className="input">
        <div className="txt77 ">
          <p>Or Subscribe To The Newsletter</p>
        </div>
        <div className="input1">
          <input type="text" placeholder="Email Address"></input>
          <button> SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Sevan;
