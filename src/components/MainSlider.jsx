import React from "react";
import collegeImg from "../assets/images/college.jpg";

function MainSlider() {
  return (
    <section className="hero" id="home">
      {/* Animated Background Shapes */}
      <div className="hero-bg">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
      </div>

      <div className="hero-inner">

        {/* Hero Image */}
        <div className="hero-image-wrapper">
          <div className="hero-image-border"></div>
          <div className="hero-image">
            <img src={collegeImg} alt="PSG College of Technology" />
          </div>
        </div>

        {/* Hero Text */}
        <div className="hero-content">

          {/* Year + Title wrapper */}
          <div className="hero-title-wrapper">

            <div className="hero-year-vertical">
              <span>2</span>
              <span>0</span>
              <span>2</span>
              <span>6</span>
            </div>

            <h1 className="hero-title">
              <span className="research">Research</span>
              <span className="conclave">Conclave</span>
            </h1>

          </div>

          <p className="hero-meta">
            May 14–15, 2026 <br />
            <span>Coimbatore, India</span>
          </p>

          <a href="https://manuscript.psgtech.ac.in/login" className="hero-btn">
            Submit Paper
          </a>

        </div>
      </div>
    </section>
  );
}

export default MainSlider;