import React from "react";
import HomeOne from "../assets/image2.jpeg";
import HomeTwo from "../assets/image3.jpeg";
import HomeThree from "../assets/image4.jpeg";
import HomeFour from "../assets/image5.jpeg";
import HomeFive from "../assets/image6.jpeg";
import HomeSix from "../assets/image7.jpeg";
import HomeSeven from "../assets/image8.jpeg";
import HomeEight from "../assets/image9.jpeg";

import "./About.css";

const About = () => {
  const pictures = [
    HomeOne,
    HomeTwo,
    HomeThree,
    HomeFour,
    HomeFive,
    HomeSix,
    HomeSeven,
    HomeEight,
  ];

  return (
    <div className="about" id="about">
      <div className="container">
        <div className="col-2">
          <h2>Where I've Been</h2>
          <span className="line"></span>
          <br></br>
          <div className="about-content">
            {pictures.map((picture) => (
              <img src={picture} alt="home" className="home-image" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
