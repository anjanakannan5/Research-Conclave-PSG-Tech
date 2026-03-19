import React from "react";
import logoImage from "../assets/images/logos/logo.png";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      {/* Top footer content */}
      <div className="footer-top">
        {/* Left: Logo */}
        <div className="footer-logo">
          <img
            src={logoImage}
            alt="PSG Tech Logo"
          />
        </div>

        {/* Center: Address details */}
        <div className="footer-address">
          <h3>Address</h3>
          <p>
            The Organizing Secretary, Research Conclave 2026, PSG College of
            Technology, Peelamedu, Coimbatore - 641004 Tamilnadu, India
          </p>

          <h3>Phone</h3>
          <p>0422 2572177, 4344777</p>

          <h3>e-mail</h3>
          <p>res.conclave@psgtech.ac.in</p>
        </div>

        {/* Right: Google Map */}
        <div className="footer-map">
          <iframe
            title="PSG Tech Location"
            src="https://www.google.com/maps?q=PSG%20College%20of%20Technology&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="footer-bottom">
        <p>Copyright 2026 e-Campus Coordinator, PSG Tech</p>
      </div>
    </footer>
  );
};

export default Footer;
