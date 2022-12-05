import React from "react";
import "./JobHunting.css";
import img2 from "../../images/IMG (3).png";
import rightarrow from "../../images/Right menu Arrow.png";
function JobHunting() {
  return (
    <div className="job-container">
      <div className="job-imgs">
        <div className="klo">
          {" "}
          <div className="job-img">
            <img className="ima2" src={img2} />
          </div>
        </div>
      </div>
      <div className="job-descs">
        {" "}
        <div className="blo">
          {" "}
          <div className="job-talent-tit-cont">
            <div className="job-talent-tit">Your Job Posting is on </div>
            <div className="job-talent-tit">Steroids</div>
          </div>
          <div className="job-talent-desc-cont">
            <div className="job-talent-desc-width">
              Gain brand authority and visibility with the help of the largest
              IT service ecosystem. Find customers who are looking for your
              solution right now
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
    </div>
  );
}

export default JobHunting;
