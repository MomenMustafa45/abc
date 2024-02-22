import logoLogin from "../../../_metronic/assets/icons/login-logo-pic.png";
import React from "react";
import "./circle-animation.css";
import imgAvatar01 from "../../../_metronic/assets/avatar/300-1.jpg";
import imgAvatar02 from "../../../_metronic/assets/avatar/300-3.jpg";
import imgAvatar03 from "../../../_metronic/assets/avatar/300-12.jpg";
import imgAvatar04 from "../../../_metronic/assets/avatar/300-4.jpg";

export const CircleAnimation = React.memo(() => {
  console.log("circle rendered");

  return (
    <>
      <div className="icon-container">
        <span className="turning-circle">
          <span className="ball-img">
            <img src={imgAvatar01} alt="" />
          </span>
        </span>
        <span className="turning-circle">
          <span className="ball-img">
            <img src={imgAvatar02} alt="" />
          </span>
        </span>
        <span className="turning-circle">
          <span className="ball-img">
            <img src={imgAvatar03} alt="" />
          </span>
          <span className="ball-img">
            <img src={imgAvatar04} alt="" />
          </span>
        </span>
        <span className="turning-circle"></span>
        <span className="stroke-circle"></span>
        <span className="stroke-circle"></span>
        <span className="stroke-circle"></span>
        <span className="stroke-circle"></span>

        {/* <Icon className="icon" /> */}
        <div className="logo-img-container">
          <img src={logoLogin} alt="this is logo" />
        </div>
      </div>
    </>
  );
});
