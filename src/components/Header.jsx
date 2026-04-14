import { useEffect, useState } from "react";
import logoImage from "../assets/images/logos/logo.png";
import logo75 from "../assets/images/logos/logo75.png";
import brochure from "../assets/Brochure.pdf";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-top">
        <div className="header-top-inner">
          <div className="brand">
            <img
              src={logoImage}
              alt="PSG College of Technology"
              className="brand-logo"
            />
            <span className="brand-text">PSG College of Technology</span>
            <img
              src={logo75}
              alt="PSG College of Technology"
              className="brand-logo"
            />
          </div>
          <a
            href="https://manuscript.psgtech.ac.in/login"
            className="cta-button"
          >
            Submit Paper
          </a>
        </div>
      </div>
      {/* Bottom Navigation */}
      <div className="header-bottom">
        <nav className="main-nav">
          <a href="#home">Home</a>
          <div className="nav-item dropdown">
            <span className="nav-link">
              About <span className="caret">▾</span>
            </span>
            <div className="dropdown-menu">
              <a href="#about-conference">About Conference</a>
              <a href="#about-institute">About Institute</a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <span className="nav-link">
              For Authors <span className="caret">▾</span>
            </span>
            <div className="dropdown-menu">
              <a href="#call-for-papers">Call for Papers</a>
              <a href="#submission-guidelines">Submission Guidelines</a>
              <a href="#important-dates">Important Dates</a>
            </div>
          </div>
          {/* <a href="/Brochure.pdf" download="Brochure.pdf" type="application/pdf">Download Brochure</a> */}
          <a href={brochure} download="RC2025_Brochure.pdf">
            Download Brochure
          </a>
          <a href="#rc2025">RC2025</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      {/* Scrolling Announcement */}
      <div className="scopus-banner">
        <div className="scrolling-text">
          <a
            href="https://www.scopus.com/pages/publications/105033838834?origin=resultslist"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proceedings of RC2025 are now indexed in Scopus! Click here to view
            publication details.
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
