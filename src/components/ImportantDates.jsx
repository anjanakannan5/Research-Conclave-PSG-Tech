function ImportantDates() {
  return (
    <section className="dates-section">
      <div className="dates-container">

        <h2 className="dates-title">Important Dates</h2>

        <div className="timeline">
          <div className="timeline-item left">
            <span className="circle navy"></span>
            <div className="date-card navy-glow">
              <span className="date-badge navy">April 15, 2025</span>
              <h4>Paper Submission</h4>
              <p>Last date to submit your research paper</p>
            </div>
          </div>

          <div className="timeline-item right">
            <span className="circle yellow"></span>
            <div className="date-card yellow-glow">
              <span className="date-badge yellow">April 23, 2025</span>
              <h4>Acceptance Notification</h4>
              <p>Authors will be notified of acceptance</p>
            </div>
          </div>

          <div className="timeline-item left">
            <span className="circle pink"></span>
            <div className="date-card pink-glow">
              <span className="date-badge pink">May 2, 2025</span>
              <h4>Final Submission</h4>
              <p>Camera-ready paper submission deadline</p>
            </div>
          </div>

          <div className="timeline-item right">
            <span className="circle teal"></span>
            <div className="date-card teal-glow">
              <span className="date-badge teal">May 2, 2025</span>
              <h4>Registration Deadline</h4>
              <p>Last date to complete registration</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ImportantDates;
