import React from "react";
import "../Styles/Second.scss";
import img1 from "../Assets/1.svg";
import img2 from "../Assets/2.svg";
import img3 from "../Assets/3.svg";
import img4 from "../Assets/4.svg";
import img5 from "../Assets/5.svg";


function Second() {
  const brand_logo = [
    <img src={img1} alt="branding" />,
    <img src={img2} alt="branding" />,
    <img src={img3} alt="branding" />,
    <img src={img4} alt="branding" />,
    <img src={img5} alt="branding" />,
  ];
  
 
  return (
    <>
      <div className="branding">
        <div className="brand_img">
          {brand_logo.map((image) => (
            <div key={image}>{image}</div>
          ))}
        </div>
      </div>
      </>
  );
      }


export default Second;
