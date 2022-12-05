import React from "react";
import "./Recruitment.css";
import img3 from "../../images/IMG (2).png";
import rightarrow from "../../images/Right menu Arrow.png";
function Recruitment() {
  return (
    <div className="recruit-container">
      <div className="recruit-descs">
        <div className="lmk">
          {" "}
          <div className="recruit-talent-tit-cont">
            <div className="recruit-talent-tit">Its's like having your</div>
            <div className="recruit-talent-tit">Recruitment on autopilot</div>
          </div>
          <div className="recruit-talent-desc-cont">
            <div className="recruit-talent-desc-width">
              Share collaterals and documents that are automatically branded.
              Leverage a rich partner network that sells your solution exactly
              the way your best salesman would.
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

      <div className="recruit-imgs">
        <div className="recruit-img">
          <img className="images" src={img3} />
        </div>
      </div>
    </div>
  );
}

export default Recruitment;
