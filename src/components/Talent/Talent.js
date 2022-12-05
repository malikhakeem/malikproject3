import React from "react";
import "./Talent.css";
import img1 from "../../images/IMG.png";
import rightarrow from "../../images/Right menu Arrow.png";
function Talent() {
  return (
    <div className="talent-container">
      <div className="left-descs">
        <div className="lmk">
          {" "}
          <div className="left-talent-tit-cont">
            <div className="left-talent-tit">Get The best version of</div>
            <div className="left-talent-tit"> young talents</div>
          </div>
          <div className="left-talent-desc-cont">
            <div className="left-talent-desc-width">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              expedita iusto officia, quasi aliquam odio nihil totam iure modi.
            </div>
          </div>
          <div className="sign-ups-cont">
            <div className="sign-ups">
              {" "}
              <a href="#">Signup now</a>
            </div>
            <div className="right-arrow">
              <img className="arrow" src={rightarrow} />
            </div>
          </div>
        </div>
      </div>

      <div className="right-imgs">
        <div className="wq">
          {" "}
          <div className="sign-ups-cont">
            <div className="sign-ups">
              {" "}
              <a href="#">Signup now</a>
            </div>
            <div className="right-arrow">
              <img className="arrow" src={rightarrow} />
            </div>
          </div>
          <div className="right-img">
            <img className="ima1" src={img1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talent;
