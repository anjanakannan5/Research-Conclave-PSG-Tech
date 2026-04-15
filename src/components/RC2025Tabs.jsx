import React from "react";
import brochure from "../assets/Brochure2025.pdf";
import proceedings from "../assets/Proceedings-book1.pdf";
import chapterDetails from "../assets/Proceedings-book2.pdf";
import report from "../assets/RC2025_report.pdf"

const RC2025 = () => {
  return (
    <section className="org-section" id="rc2025">
    <div className="rc-container">
      <h2 className="rc-title">RC2025</h2>

      <div className="rc-list">

        {/* Proceedings Book */}
        <div className="rc-item">
          <span>Proceedings Book</span>
          <a href={proceedings} target="_blank" rel="noreferrer">Download</a>
        </div>

        {/* Proceedings + Chapter Details */}
        <div className="rc-item">
          <span>Proceedings Book (Chapter Details with Author & DOI)</span>
          <a href={chapterDetails} target="_blank" rel="noreferrer">Download</a>
        </div>

        {/* Publication Link */}
        <div className="rc-item">
          <span>Publication Link</span>
          <a
            href="https://www.routledge.com/Advancing-Societally-Relevant-Applications-of-Knowledge-through-Scientific-Research/Krishnamoorthi-Kumar-Thulasimani-Dhanalakshmi/p/book/9781041270126"
            target="_blank"
            rel="noreferrer"
          >
            View
          </a>
        </div>

        {/* Report */}
         <div className="rc-item">
          <span>RC2025 Report</span>
          <a href={report} target="_blank" rel="noreferrer">Download</a>
        </div>

        {/* Brochure */}
        <div className="rc-item">
          <span>RC2025 Brochure</span>
          <a href={brochure} target="_blank" rel="noreferrer">Download</a>
        </div>

      </div>
    </div>
    </section>
  );
};

export default RC2025;