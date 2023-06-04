import React from "react";

import { BsPersonCircle } from "react-icons/bs";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <BsPersonCircle />
            <p>Stuff</p>
            <p>
              <span>Stuff again</span>
            </p>
            <p>More Stuff</p>
          </div>
          <div className="card">
            <BsPersonCircle />
            <p>Stuff</p>
            <p>
              <span>Stuff again</span>
            </p>
            <p>More Stuff</p>
          </div>
          <div className="card">
            <BsPersonCircle />
            <p>Stuff</p>
            <p>
              <span>Stuff again</span>
            </p>
            <p>More Stuff</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
