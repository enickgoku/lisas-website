import React from "react";

import "./Hero.css";
import { BsFacebook } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <p>Call to Schedule an Appointment</p>
        <p>1-352-600-4669</p>
        <br></br>
        <a href="mailto:downanddirtycleaning1@yahoo.com">
          <button className="button">Email for Pricing</button>
        </a>
        <br></br>
        <div className="fb-icon-container">
          Find us on Facebook!{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100089182671178&paipv=0&eav=Afao7abmmm5oYnzPaLYh4DSKAWujXBfLwWl4ITZH7zeIpZdclWKkgdJodk1mm2GSF74&_rdr"
            target="_blank"
            rel="noreferrer"
          >
            <div className="fb-icon">
              <BsFacebook color="white" size={"50px"} />
            </div>
          </a>
        </div>
        <br></br>
        <h3>Current Cities I Operate In</h3>
        <br></br>
        <p className="hero-paragraph">
          Hudson, Spring Hill, Weeki Wachee, Hernando Beach, Homosassa, Crystal
          River, Inverness, Dunnellon.{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;
