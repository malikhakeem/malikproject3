import React from "react";
import "./Footer2.css";
import rights from "../../images/© Finity 2019, All R.png";
import social from "../../images/Social.png";
function Footer2() {
  return (
    <div className="footer2">
      <div className="llo">
        <div className="footer2-rights">
          <img src={rights} />
        </div>
        <div className="footer2-socials">
          <img src={social} />
        </div>
      </div>
    </div>
  );
}

export default Footer2;
