import React from "react";
import collegeImg from "../assets/images/college.jpg";

function MainSlider() {
  return (
    <section className="hero">

      {/* Animated Background Shapes */}
      <div className="hero-bg">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
      </div>

      <div className="hero-inner">

        {/* Hero Image with Gradient Border */}
        <div className="hero-image-wrapper">
          <div className="hero-image-border"></div>
          <div className="hero-image">
            <img src={collegeImg} alt="PSG College of Technology" />
          </div>
        </div>

        {/* Hero Text */}
        <div className="hero-content">
          <div className="hero-year">2026</div>

          <h1 className="hero-title">
            <span className="research">Research</span>{" "}
            <span className="conclave">Conclave</span>
          </h1>

          <p className="hero-meta">
            May 15–16, 2026 <br />
            <span>Coimbatore, India</span>
          </p>

          <a href="#submit" className="hero-btn">
            Submit Paper
          </a>
        </div>

      </div>
    </section>
  );
}

export default MainSlider;
