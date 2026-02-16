import React from "react";

function OrganizingCommittee() {
  return (
    <section id="orgcommittee" className="org-section">
      <div className="container">

        {/* Section Title */}
        <div
          className="section-title text-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <h2 className="org-title">Organising Committee</h2>
        </div>

        {/* Chief Patron */}
        <div className="org-cards-wrapper" style={{ gridTemplateColumns: "1fr" }}>
          <div className="org-card">
            <h4 className="org-role">Chief Patron</h4>
            <p>
              <span>Shri. L. Gopalakrishnan</span><br />
              Managing Trustee<br />
              PSG & Sons Charities Trust
            </p>
          </div>
        </div>

        {/* Patron */}
        <div
          className="org-cards-wrapper"
          style={{ gridTemplateColumns: "1fr", marginTop: "30px" }}
        >
          <div className="org-card">
            <h4 className="org-role">Patron</h4>
            <p>
              <span>Dr. K. Prakasan</span><br />
              Principal<br />
              PSG College of Technology
            </p>
          </div>
        </div>

        {/* Remaining Committees – 3 per row */}
        <div className="org-cards-wrapper" style={{ marginTop: "50px" }}>

          {/* Conveners */}
          <div className="org-card">
            <h4 className="org-role">Conveners</h4>
            <p><span>Dr P R Thyla</span><br />Dean-Research</p>
            <hr />
            <p><span>Dr J Krishnamoorthi</span><br />HoD, Metallurgical Engineering</p>
          </div>

          {/* Organising Secretaries */}
          <div className="org-card">
            <h4 className="org-role">Organising Secretaries</h4>
            <p><span>Dr B Vinoth Kumar</span><br />IT</p><hr />
            <p><span>Dr L Thulasimani</span><br />ECE</p><hr />
            <p><span>Dr M Bagyalakshmi</span><br />Mathematics</p><hr />
            <p><span>Dr D Dhanalakshmi</span><br />Applied Science</p><hr />
            <p><span>Dr M Kalayarasan</span><br />Mechanical</p><hr />
            <p><span>Mr V Venkatramanan</span><br />Biotechnology</p>
          </div>

          {/* Advisory Committee */}
          <div className="org-card">
            <h4 className="org-role">Advisory Committee</h4>
            <p><span>Prof. Nicola Morley</span><br />University of Sheffield</p><hr />
            <p><span>Dr Xiao-Zhi Gao</span><br />University of Eastern Finland</p><hr />
            <p><span>Dr M Eswaramoorthy</span><br />JNCASR</p><hr />
            <p><span>Dr TPD Rajan</span><br />CSIR</p><hr />
            <p><span>Dr N Laksmann</span><br />IIT Madras</p><hr />
            <p><span>Dr T Veerakumar</span><br />NIT Goa</p><hr />
            <p><span>Dr Badri Narayan Subudhi</span><br />IIT Jammu</p><hr />
            <p><span>Dr B Surendiran</span><br />NIT Puducherry</p>
          </div>

          {/* Industry Collaboration */}
          <div className="org-card">
            <h4 className="org-role">Industry Collaboration</h4>
            <p><span>Dr S Kanthalakshmi</span><br />PSG CSRC</p><hr />
            <p><span>Dr B Vinod</span><br />Robotics & Automation</p><hr />
            <p><span>Dr S Praveen Kumar</span><br />Civil Engineering</p><hr />
            <p><span>Dr Manu S Mohan</span><br />Metallurgical Engineering</p>
          </div>

          {/* Finance Committee */}
          <div className="org-card">
            <h4 className="org-role">Finance Committee</h4>
            <p><span>Dr S Saravanan</span><br />Dean – Autonomous</p><hr />
            <p><span>Dr K Suresh Kumar</span><br />PSG-STEP</p>
          </div>

          {/* Registration Committee */}
          <div className="org-card">
            <h4 className="org-role">Registration Committee</h4>
            <p><span>Dr P Kanakaraj</span><br />Fashion Technology</p><hr />
            <p><span>Dr V Senthil Kumaran</span><br />AM&CS</p><hr />
            <p><span>Dr D Maruthamani</span><br />Chemistry</p><hr />
            <p><span>Dr K Sathiya Priya</span><br />CSE</p><hr />
            <p><span>Dr S Deepthi</span><br />EEE</p><hr />
            <p><span>Dr J Palraj</span><br />Mathematics</p>
          </div>

          {/* Program Committee */}
          <div className="org-card">
            <h4 className="org-role">Program Committee</h4>
            <p><span>Dr G Menaka</span><br />English</p><hr />
            <p><span>Dr S C Murugavel</span><br />Applied Science</p><hr />
            <p><span>Dr R Vidhyapriya</span><br />Biomedical</p><hr />
            <p><span>Dr G Sudha Sadasivam</span><br />CSE</p><hr />
            <p><span>Dr D Vijayalakshmi</span><br />Fashion Design</p><hr />
            <p><span>Dr C Theivarasu</span><br />Chemistry</p><hr />
            <p><span>Dr Shina Sheen</span><br />AM&CS</p><hr />
            <p><span>Dr J Arunshankar</span><br />I&CE</p>
          </div>

          {/* Technical Committee */}
          <div className="org-card">
            <h4 className="org-role">Technical Committee</h4>
            <p><span>Dr J Kanagaraj</span><br />EEE</p><hr />
            <p><span>Dr V Krishnaveni</span><br />ECE</p><hr />
            <p><span>Dr M Ananthasubramanian</span><br />Biotech</p><hr />
            <p><span>Dr M Senthilkumar</span><br />Production</p><hr />
            <p><span>Dr C Porkodi</span><br />Mathematics</p><hr />
            <p><span>Dr K Umamaheswari</span><br />IT</p><hr />
            <p><span>Dr K Chandrasekaran</span><br />Fashion Tech</p><hr />
            <p><span>Dr S Neelakrishnan</span><br />Automobile</p>
          </div>

          {/* Publication Committee */}
          <div className="org-card">
            <h4 className="org-role">Publication Committee</h4>
            <p><span>Dr G R Karpagam</span><br />GRD Library</p><hr />
            <p><span>Dr R Kalpana</span><br />English</p><hr />
            <p><span>Dr K Vaideki</span><br />Autonomous</p><hr />
            <p><span>Dr K Anitha Kumari</span><br />IT</p><hr />
            <p><span>Dr P Kathirvel</span><br />Physics</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OrganizingCommittee;
