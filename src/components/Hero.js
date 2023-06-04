import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <p>Call Me to Schedule an Appointment</p>
        <p>1-989-590-2384</p>
        <a href="mailto:downanddirtycleaning1@yahoo.com">
          <button className="button">Email for Pricing</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
