import React from "react";
import "./BuildLeft.css";
function BuildLeft() {
  return (
    <div className="buildLeft-cont">
      <div className="buildLeftTitle">
        <span className="buildspec">Build</span> Your Dream Team
      </div>

      <div className="buildLeft-desc">
        Start your team development with a free consultation. Fill out the form
        and a Vacanxe representative will contact you.
      </div>

      <div className="buildLeftForm">
        <div className="name-form">
          <div className="name">Your name</div>
          <div className="name-input">
            <input
              className="inputs"
              type="text"
              placeholder="Enter your name"
            />
          </div>
        </div>

        <div className="email-form">
          <div className="name">Your email</div>
          <div className="email-input">
            <input
              className="inputs"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="num-form">
          <div className="name">Your Phone Number</div>
          <div className="num-input">
            <input
              className="inputs"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <div className="comp-form">
          <div className="name">Your Company Name</div>
          <div className="comp-input">
            <input
              className="inputs"
              type="text"
              placeholder="Enter your Company Name"
            />
          </div>
        </div>

        <div className="message">
          <div className="name">Message</div>
          <textarea
            className="message-area"
            placeholder="Type here..."
          ></textarea>
        </div>

        <div className="buildLeft-btn-cont">
          <button className="buildLeft-btn">Consult with us</button>
        </div>
      </div>
    </div>
  );
}

export default BuildLeft;
