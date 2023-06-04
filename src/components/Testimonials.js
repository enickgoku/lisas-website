import React from "react";

import { BsPersonCircle, BsFacebook } from "react-icons/bs";

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
            <p>Barry G. Gustafson</p>
            <p>
              <span>"Her attention to detail is amazing."</span>
            </p>
            <p>
              I just met Lisa & her attention to detail is amazing! The best
              customer service ever has convinced me to use her cleaning
              business…. Update to follow my meeting up with her was not her
              cleaning business. Thank you Lisa.
            </p>
            <a
              href="https://m.facebook.com/profile.php?id=100089182671178&_rdr#_=_"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          </div>
          <div className="card">
            <BsPersonCircle />
            <p>Shauna Marie Hollingshead</p>
            <p>
              <span>"Lisa is absolutely phenomenal!"</span>
            </p>
            <p>
              Lisa is absolutely phenomenal! She listens to all of your concerns
              and over achieves to get it done! She exceeded my expectations and
              I’m so happy to have found her! She worked really hard on cleaning
              the little details of my house that I normally don’t get done with
              regular cleaning. As a mom of two and a business owner it’s hard
              to maintain everything so I’m definitely grateful for her being
              such an amazing person and an awesome cleaner! Not to mention, I
              trust her 100% in my home! That is so important to me! I 10 out of
              10 recommend hiring her, you will not regret it.
            </p>
            <a
              href="https://m.facebook.com/profile.php?id=100089182671178&_rdr#_=_"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          </div>
          <div className="card">
            <BsPersonCircle />
            <p>Tiela Kemp</p>
            <p>
              <span>"Very trustworthy, professional and realiable."</span>
            </p>
            <p>
              Lisa is an amazing human, very trustworthy, professional and
              RELIABLE. I hired her to clean my business and she does a
              FANTASTIC job! Very detail oriented and uses great products. My
              place was left spotless and smelling great. I highly recommend her
              for all your cleaning needs, you won't be disappointed!
            </p>
            <a
              href="https://m.facebook.com/profile.php?id=100089182671178&_rdr#_=_"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
