import React from "react";

const Registration = () => {
  return (
    <section className="org-section" id="registration">
      <div className="reg-container">

        <h2 className="reg-title">Registration</h2>

        <ul className="reg-points">
          <li>
            The registration fee for external participants and delegates to attend/present papers (Inclusive of GST).
          </li>
          <li>
            A bonafide certificate is needed for external participants.
          </li>
          <li>
            No registration fee for UG/PG/PhD Scholars from PSG College of Technology, Coimbatore.
          </li>
        </ul>

        {/* Registration Fee Card */}
        <div className="reg-card">
          <div className="reg-card-header">Registration</div>

          <div className="reg-row">
            <span>Students (UG/PG)</span>
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
          Payment of registration fee for Research Conclave 2025 can be made through online mode.
        </p>

        {/* Payment Details */}
        <div className="reg-card">
          <div className="reg-card-header">Payment Details</div>

          <div className="payment-details">
            <p><strong>Payment Type:</strong> Internet Banking</p>
            <p><strong>Account Number:</strong> 1481267367</p>
            <p><strong>Account Holder:</strong> PSG Center for Non Formal and Continuing Education (PSG CNCE)</p>
            <p><strong>Bank Name:</strong> Central Bank of India</p>
            <p><strong>Branch Name:</strong> Peelamedu</p>
            <p><strong>IFSC Code:</strong> CBIN0280913</p>
          </div>
        </div>

        <button className="submit-btn">Submit Paper</button>

      </div>
    </section>
  );
};

export default Registration;
