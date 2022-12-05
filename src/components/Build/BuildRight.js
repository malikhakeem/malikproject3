import React from "react";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import link from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";
import message from "../../images/Message.png";
import location from "../../images/Location.png";
import phone from "../../images/Calling.png";
import "./BuildRight.css";
function BuildRight() {
  return (
    <div className="buildRight-cont">
      <div className="buildRight-tit">Contact info:</div>

      <div className="infos">
        <div className="info">
          <div className="info-img">
            <img className="soca" src={location} />
          </div>
          <div className="info-text">
            4517 Washington Ave. Manchester, Kentucky 39495
          </div>
        </div>
        <div className="info">
          <div className="info-img">
            <img className="soca" src={phone} />
          </div>
          <div className="info-nums">
            <div className="info-num">(505) 555-0119</div>
            <div className="info-num">(505) 555-0120</div>
            <div className="info-num-spec">(505) 555-0125</div>
          </div>
        </div>

        <div className="info-specs">
          <div className="messgage-img">
            {" "}
            <img className="soca" src={message} />
          </div>
          <div className="messgage-text">consult@vacanxe.com</div>
        </div>

        <div className="medias">
          <div className="media-tit">Follow us:</div>

          <div className="media-flex">
            {" "}
            <div className="media">
              <img className="med" src={facebook} />
            </div>
            <div className="media">
              <img className="med" src={twitter} />
            </div>
            <div className="media">
              <img className="med" src={link} />
            </div>
            <div className="media">
              <img className="med" src={instagram} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildRight;
