import React from "react";
import "./Absolutes.css";
import inner from "../../images/logo 2.png";
import outer from "../../images/Oval Copy.png";
function Absolutes() {
  return (
    <div className="absolute-container">
      <div className="pop">
        <div className="absolutes">
          <div className="inab">
            <img className="in" src={inner} />
          </div>
          <div className="outab">
            <img className="out" src={outer} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Absolutes;
