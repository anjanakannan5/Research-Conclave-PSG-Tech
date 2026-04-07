import React from "react";
import logoImage from "../assets/images/logos/logo.png";

const Footer = () => {
  // Stable Search-based URL for PSG Tech Coimbatore
  const psgMapUrl = "https://maps.google.com/maps?q=PSG%20College%20of%20Technology%2C%20Peelamedu%2C%20Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <footer className="footer" id="contact" style={{ backgroundColor: "#000", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      {/* 1. TOP SECTION (Logo, Address, Map) */}
      <div 
        className="footer-top" 
        style={{ 
          display: "flex", 
          flexDirection: "row",
          justifyContent: "space-around", 
          alignItems: "center", 
          padding: "40px 20px",
          flexWrap: "wrap",
          gap: "30px"
        }}
      >
        {/* Left: Logo */}
        <div style={{ flex: "1 1 200px", textAlign: "center" }}>
          <img 
            src={logoImage} 
            alt="PSG Tech Logo" 
            style={{ maxWidth: "120px", height: "auto" }} 
          />
        </div>

        {/* Center: Address */}
        <div style={{ flex: "1 1 350px", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "10px", color: "#fff" }}>Address</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#ccc" }}>
            The Organizing Secretary, Research Conclave 2026, <br />
            PSG College of Technology, Peelamedu, <br />
            Coimbatore - 641004 Tamilnadu, India
          </p>

          <h3 style={{ marginTop: "15px", fontSize: "1rem" }}>Phone</h3>
          <p style={{ color: "#ccc", fontSize: "14px" }}>0422 2572177, 4344777</p>

          <h3 style={{ marginTop: "15px", fontSize: "1rem" }}>e-mail</h3>
          <p style={{ color: "#ccc", fontSize: "14px" }}>res.conclave@psgtech.ac.in</p>
        </div>

        {/* Right: Map Section */}
        <div style={{ flex: "1 1 300px" }}>
          <iframe
            title="PSG Tech Location"
            src={psgMapUrl}
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* 2. BOTTOM BAR (Copyright Center, Counter Right) */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          {/* Spacer for centering */}
          <div className="bottom-spacer" style={{ flex: 1 }}></div>

          {/* Copyright Text */}
          <p className="copyright-text">
            Copyright 2026 e-Campus Coordinator, PSG Tech
          </p>

          {/* Visitor Counter */}
          <div className="counter-container">
            <a href="https://www.hitwebcounter.com/" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://hitwebcounter.com/counter/counter.php?page=21484047&style=0006&nbdigits=6&type=ip&initCount=0" 
                alt="Visitor Counter" 
                style={{ border: 0, height: "25px", display: "block" }} 
              />
            </a>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        .footer-bottom-bar {
          background-color: #004d26; 
          padding: 12px 30px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
        }
        .copyright-text {
          margin: 0;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          text-align: center;
          flex: 2; /* Takes more space to stay centered */
        }
        .counter-container {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
        @media (max-width: 768px) {
          .footer-bottom-inner {
            flex-direction: column;
            gap: 10px;
          }
          .bottom-spacer { display: none; }
          .counter-container {
            justify-content: center;
          }
          .footer-top {
            flex-direction: column !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;