import React from "react";

import AdImage from "../assets/image1.jpeg";

import "./Services.css";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="flex-container">
          <div className="col-2">
            <img src={AdImage} alt="ad" className="ad-image" />
          </div>
          <div className="col-1">
            <a href="mailto:downanddirtycleaning1@yahoo.com">
              <button className="button">Contact for more details</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
