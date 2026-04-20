function ImportantDates() {
  return (
    <section className="dates-section" id="important-dates">
      <div className="dates-container">

        <h2 className="dates-title">Important Dates</h2>

        <div className="timeline">
          <div className="timeline-item left">
            <span className="circle navy"></span>
            <div className="date-card navy-glow">
              <span className="date-badge navy">April 27, 2026</span>
              <h4>Full Paper Submission Deadline</h4>
              <p>Last date to submit your research paper</p>
            </div>
          </div>

          <div className="timeline-item right">
            <span className="circle yellow"></span>
            <div className="date-card yellow-glow">
              <span className="date-badge yellow">May 4, 2026</span>
              <h4>Acceptance Notification</h4>
              <p>Authors will be notified of acceptance</p>
            </div>
          </div>

          <div className="timeline-item left">
            <span className="circle pink"></span>
            <div className="date-card pink-glow">
              <span className="date-badge pink">May 9, 2026</span>
              <h4>Final Submission</h4>
              <p>Camera-ready paper submission deadline</p>
            </div>
          </div>

          <div className="timeline-item right">
            <span className="circle teal"></span>
            <div className="date-card teal-glow">
              <span className="date-badge teal">May 11, 2026</span>
              <h4>Last Date for Registration Fee Payment</h4>
              <p>Last date to complete registration</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ImportantDates;
