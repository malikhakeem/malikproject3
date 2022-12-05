import React from "react";

import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="main-footer">
        <div className="leftFooter">
          <div className="ty">
            <div className="leftFooter-text">
              Your ulitmate email solution to grow business and engaging with
              future customers and clients.
            </div>

            <div className="leftFooter-btn">
              <button className="lftbtn">Ask Question</button>
            </div>
          </div>
        </div>

        <div className="rightFooter">
          <div className="right1">
            <div className="righttit">Community</div>
            <div className="right1-links">
              <div className="right1-link">For Talents</div>
              <div className="right1-link">For Companies</div>
              <div className="right1-link">Facebook Group</div>
              <div className="right1-link">FAQ</div>
            </div>
          </div>
          <div className="right2">
            <div className="righttit">About us</div>
            <div className="right1-links">
              <div className="right1-link">Meet the Team</div>
              <div className="right1-link">Our Story</div>
              <div className="right1-link">Career</div>
            </div>
          </div>
          <div className="right3">
            <div className="right3tit">Contacts</div>
            <div className="right3-links">
              <div className="right3-link">
                Feel free to get in touch with us via phone or send us a
                message.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
