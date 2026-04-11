import React from "react";

const PaperSubmission = () => {
  return (
    <section className="org-section" id="paper-submission">
      <div className="paper-container" id="submission-guidelines">

        <h2 className="paper-title">Paper Submission</h2>

        <div className="paper-btn-wrapper">
          <a href="https://manuscript.psgtech.ac.in/login">
            <button className="paper-submit-btn">Submit Paper</button>
          </a>
        </div>

        <div className="paper-grid">

          {/* Left Main Card */}
          <div className="paper-card paper-card-primary">
            <h3>Manuscript Submission Guidelines</h3>
            <ul>
              <li>RC 2026 invites full length original research contributions from professionals from industries, R&amp;D organizations, academic institutions, government departments and research scholars from across the country.</li>
              <li>Full length original research contributions and review articles not exceeding six pages as per the IEEE double column format shall be submitted.</li>
              <li>The manuscript should contribute original research ideas, developmental ideas, analysis, findings, results, etc.</li>
              <li>The manuscript should not have been published in any journals/magazines or conference proceedings and not under review in any of them.</li>
              <li>The manuscript should contain the name of the corresponding author with e-mail id and affiliation of all authors.</li>
              <li>Soft copy of the full length manuscripts shall be submitted through manuscript submission portal.</li>
              <li>All submitted manuscripts will be sent for peer review and the corresponding author will be notified of the outcome.</li>
              <li>If revisions are suggested, the revised manuscript must be submitted within ten days.</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="paper-side">

            <div className="paper-card">
              <h4>Submission of a manuscript implies that</h4>
              <p>(1) The work has not been published before.</p>
              <p>(2) It is not under consideration elsewhere.</p>
              <p>(3) Publication is approved by all co-authors and institutions.</p>
            </div>

            <div className="paper-card">
              <h4>Manuscript Format</h4>
              <p>IEEE double column format</p>
            </div>

            <div className="paper-card">
              <h4>Language</h4>
              <ul>
                <li>The official language is English</li>
                <li>Correct grammar and syntax must be used</li>
                <li>American English standards are preferred</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PaperSubmission;
