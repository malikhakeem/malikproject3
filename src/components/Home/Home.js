import React from "react";
import "./Home.css";
import Homehero from "../../images/Partner hero image right.svg";
function Home() {
  return (
    <div className="home-container">
      <div className="homeFlex">
        <div className="home-img-cont">
          <img className="home-img" src={Homehero} />
        </div>
        <div className="home">
          <div className="home-title-cont">
            <div className="home-tit">
              Find the right <span className="home-spec"> talent </span>to fuel
              your business growth
            </div>
          </div>

          <div className="home-desc-cont">
            <div className="home-desc">
              Join a vibrant community of MSPs to forge long-lasting
              relationships with partners that help you create excellent
              customer experiences
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
