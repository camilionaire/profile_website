/* did this with rfce?... I think... */
import React from "react";
import { Button } from "../button/Button";
import "../../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video id="openvideo" poster="videos/video-2.mp4" autoPlay loop muted>
        <source src="videos/video-2.mp4" type="video/mp4"/>
        </video> */}
      {/* <image src="images/universe.jpg" alt="looking out to space" /> */}
      <h1>Camilo Eli Schaser-Hughes</h1>
      <p>Available for hire for your tech needs!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
