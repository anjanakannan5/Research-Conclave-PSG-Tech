import React from "react";
import journalTemplate from "../assets/journal-template.docx";
import consentForm from "../assets/consent-form.docx";

const PaperSubmission = () => {
  return (
    <section className="org-section" id="paper-submission">
      <div className="paper-container" id="submission-guidelines">
        <h2 className="paper-title">Paper Submission</h2>
        
        {/* Publication Ethics */}
        <div className="ethics-card">
          <h3>Publication Ethics and Malpractice Statement</h3>

          <p className="ethics-intro">
            Research Conclave committee is committed to upholding the highest
            standards of publication ethics and takes all possible measures to
            prevent any publication malpractice. The editorial board, authors,
            reviewers, and publishers are expected to adhere to the following
            principles:
          </p>

          <div className="ethics-grid">
            <div className="ethics-item">
              <h4>1. Responsibilities of the Editorial Board</h4>
              <ul>
                <li>
                  <strong>Fair Evaluation:</strong> Manuscripts will be
                  evaluated solely on their intellectual content without regard
                  to race, gender, sexual orientation, religious belief, ethnic
                  origin, citizenship, or political philosophy of the authors.
                </li>
                <li>
                  <strong>Confidentiality:</strong> Editors and staff must not
                  disclose information about a submitted manuscript except to
                  authorized parties.
                </li>
                <li>
                  <strong>Conflict of Interest:</strong> Editors must not use
                  unpublished information in their own research without the
                  author's express written consent.
                </li>
                <li>
                  <strong>Handling Unethical Behavior:</strong> The editorial
                  team shall take reasonable responsive measures when ethical
                  complaints concern a submitted manuscript or published paper.
                </li>
              </ul>
            </div>

            <div className="ethics-item">
              <h4>2. Responsibilities of Authors</h4>
              <ul>
                <li>
                  <strong>Originality and Plagiarism:</strong> Authors must
                  submit original work and appropriately cite the work and words
                  of others.
                </li>
                <li>
                  <strong>Data Access and Retention:</strong> Authors may be
                  asked to provide raw data for editorial review and should
                  retain it for a reasonable time after publication.
                </li>
                <li>
                  <strong>
                    Multiple, Redundant, or Concurrent Publication:
                  </strong>{" "}
                  Authors should not submit the same manuscript to more than one
                  journal simultaneously.
                </li>
                <li>
                  <strong>Acknowledgment of Sources:</strong> Proper
                  acknowledgment of the work of others must always be given.
                </li>
                <li>
                  <strong>Authorship:</strong> Authorship should be limited to
                  those who significantly contributed to the study's conception,
                  design, execution, or interpretation.
                </li>
              </ul>
            </div>

            <div className="ethics-item">
              <h4>3. Responsibilities of Reviewers</h4>
              <ul>
                <li>
                  <strong>Editorial Decisions:</strong> Peer review assists
                  editors in making decisions and authors in improving their
                  papers.
                </li>
                <li>
                  <strong>Confidentiality:</strong> Manuscripts received for
                  review must be treated as confidential documents.
                </li>
                <li>
                  <strong>Objectivity:</strong> Reviews should be conducted
                  objectively, with clear observations and supporting arguments.
                </li>
                <li>
                  <strong>Acknowledgment of Sources:</strong> Reviewers should
                  identify relevant published work that has not been cited by
                  the authors.
                </li>
                <li>
                  <strong>Conflict of Interest:</strong> Reviewers should not
                  review manuscripts in which they have conflicts of interest.
                </li>
              </ul>
            </div>

            <div className="ethics-item">
              <h4>4. Publication Malpractice</h4>
              <p>
                Research Conclave committee does not tolerate plagiarism, data
                fabrication, or falsification. Any instance of misconduct will
                result in the rejection of the manuscript or retraction of a
                published article, and appropriate sanctions will be applied.
              </p>
            </div>
          </div>
        </div>
        
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
              <li>
                RC 2026 invites full length original research contributions from
                professionals from industries, R&amp;D organizations, academic
                institutions, government departments and research scholars from
                across the country.
              </li>
              <li>
                Full length original research contributions and review articles
                not exceeding six pages as per the IEEE double column format
                shall be submitted.
              </li>
              <li>
                The manuscript should contribute original research ideas,
                developmental ideas, analysis, findings, results, etc.
              </li>
              <li>
                The manuscript should not have been published in any
                journals/magazines or conference proceedings and not under
                review in any of them.
              </li>
              <li>
                The manuscript should contain the name of the corresponding
                author with e-mail id and affiliation of all authors.
              </li>
              <li>
                Soft copy of the full length manuscripts shall be submitted
                through manuscript submission portal.
              </li>
              <li>
                All submitted manuscripts will be sent for peer review and the
                corresponding author will be notified of the outcome.
              </li>
              <li>
                If revisions are suggested, the revised manuscript must be
                submitted within ten days.
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="paper-side">
            <div className="paper-card">
              <h4>Submission of a manuscript implies that</h4>
              <p>(1) The work has not been published before.</p>
              <p>(2) It is not under consideration elsewhere.</p>
              <p>
                (3) Publication is approved by all co-authors and institutions.
              </p>
            </div>

            <div className="paper-card">
              <h4>Manuscript Format</h4>

              <div className="paper-item">
                <span>Journal Template</span>
                <a href={journalTemplate} download>
                  Download
                </a>
              </div>

              <div className="paper-item">
                <span>Consent Form</span>
                <a href={consentForm} download>
                  Download
                </a>
              </div>
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
