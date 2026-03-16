import React from "react";

const Registration = () => {
  return (
    <section className="org-section" id="registration">
      <div className="reg-container">

        <h2 className="reg-title">Registration</h2>

        <ul className="reg-points">
          <li>The registration fee for external participants and delegates to attend/present papers (Inclusive of GST).</li>
          <li>A bonafide certificate is needed for external participants.</li>
          <li>No registration fee for UG/PG/PhD Scholars from PSG College of Technology, Coimbatore.</li>
        </ul>

        {/* Registration Fee Card */}
        <div className="reg-card">
          <div className="reg-card-header">Registration</div>

          <div className="reg-row">
            <span>UG Students</span>
            <span className="reg-amount">500 INR</span>
          </div>

          <div className="reg-row">
            <span>PG Students</span>
            <span className="reg-amount">750 INR</span>
          </div>

          <div className="reg-row">
            <span>Faculty Members / Research Scholars</span>
            <span className="reg-amount">1000 INR</span>
          </div>

          <div className="reg-row">
            <span>Industry Participants</span>
            <span className="reg-amount">1500 INR</span>
          </div>
        </div>

        <p className="reg-note">
          Payment of registration fee for Research Conclave 2026 can be made through online mode.
        </p>

        {/* Payment Details */}
        <div className="reg-card">
          <div className="reg-card-header">Payment Details</div>

          {/* <div className="payment-details">
            <p><strong>Payment Type:</strong> Internet Banking</p>
            <p><strong>Account Number:</strong> 1481267367</p>
            <p><strong>Account Holder:</strong> PSG Center for Non Formal and Continuing Education (PSG CNCE)</p>
            <p><strong>Bank Name:</strong> Central Bank of India</p>
            <p><strong>Branch Name:</strong> Peelamedu</p>
            <p><strong>IFSC Code:</strong> CBIN0280913</p>
          </div> */}
          <div className="payment-details">
            <a href="https://events.psginstitutions.in/EMS/register/C9EB4FA9109" target="_blank" rel="noopener noreferrer">
              <button className="submit-btn">Payment Link</button>
            </a>
            <p><br />Pay Registration Fee through the Link above</p>
          </div>
        </div>
        <a href="https://manuscript.psgtech.ac.in/login" target="_blank" rel="noopener noreferrer">
          <button className="submit-btn">Submit Paper</button>
        </a>

      </div>
    </section>
  );
};

export default Registration;
