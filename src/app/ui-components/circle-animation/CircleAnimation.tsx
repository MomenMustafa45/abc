import logoLogin from "../../../_metronic/assets/icons/login-logo-pic.png";
import React from "react";
import "./circle-animation.css";

export const CircleAnimation = React.memo(() => {
  console.log("circle rendered");

  return (
    <>
      <div className="icon-container">
        <span className="turning-circle"></span>
        <span className="turning-circle"></span>
        <span className="turning-circle">
          <p className="ball"></p>
          <p className="ball"></p>
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
