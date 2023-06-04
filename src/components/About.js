import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        {/* add image here */}
        <div className="col-2">
          <h2>About Us</h2>
          <span className="line"></span>
          <p>Stuff Here</p>
          <p>Stuff Here</p>
          <button className="button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
