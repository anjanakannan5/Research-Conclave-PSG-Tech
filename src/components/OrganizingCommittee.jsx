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
            <p><span>Dr J Krishnamoorthi</span><br />Associate Dean - Research</p>
          </div>

          {/* Organising Secretaries */}
          <div className="org-card">
            <h4 className="org-role">Organising Secretaries</h4>
            <p><span>Dr B Vinoth Kumar</span><br />Professor, Dept. of Information Technology</p><hr />
            <p><span>Dr M Bagyalakshmi</span><br />Assistant Professor (SI Gr), Dept. of Mathematics</p><hr />
            <p><span>Dr P Sivakumar</span><br />Assistant Professor (SI Gr), Dept. of Electrical & Electronics Engg.</p><hr />
            <p><span>Dr D Dhanalakshmi</span><br />Assistant Professor (SI Gr), Dept. of Applied Science</p><hr />
            <p><span>Dr M Kalayarasan</span><br />Assistant Professor (SI Gr), Dept. of Mechanical Engg.</p><hr />
            <p><span>Dr R Mohanraj</span><br />Assistant Professor (Sr Gr), Dept. of Production Engg.</p>
          </div>

          {/* Advisory Committee */}
          <div className="org-card">
            <h4 className="org-role">Advisory Committee</h4>
            <p><span>Dr V Ramasamy</span><br />Dean - Academic</p><hr />
            <p><span>Dr R Nadarajan</span><br />Dean - Placement & Training</p><hr />
            <p><span>Dr V Srividya</span><br />Director - PSG Institute of Management</p><hr />
            <p><span>Dr A Chitra</span><br />Director - Internal Quality Assurance Cell</p><hr />
            <p><span>Dr G Thilagavathi</span><br />Dean - Intellectual Property Rights</p><hr />
            <p><span>Dr B Sridevi</span><br />Vice Principal (Women Welfare)</p><hr />
            <p><span>Mr R Manoharan</span><br />VP & Head - Materials, Roots Industries India Pvt Ltd, Coimbatore</p><hr />
            <p><span>Mr V Nanthagopal</span><br />MD, Accura Weldrods Kovai Pvt Ltd, Coimbatore</p><hr />
            <p><span>Dr S Manjini</span><br />VP (TS and R&D), JSW Steel Limited, Salem</p><hr />
            <p><span>Mr Sreenivas Naidu</span><br />ED & Plant Head, ZF Wind Power Coimbatore Pvt Ltd, Coimbatore</p><hr />
            <p><span>Mr Aniruth Narayanan</span><br />CEO & Co-Founder, BNC Motors, Coimbatore</p><hr />
            <p><span>Dr Redouane Zitouné</span><br />Professor, Institut Clément Ader, Université de Toulouse, France</p><hr />
            <p><span>Dr Georgios Konstantinou</span><br />Associate Professor, School of Electrical Engineering and Telecommunications, UNSW, Australia</p><hr />
            <p><span>Prof. Pablo Moscato</span><br />School of Computer and Information Sciences<br />The University of Newcastle, Australia</p><hr />
          </div>

          {/* Industry Collaboration */}
          <div className="org-card">
            <h4 className="org-role">Industry Collaboration</h4>
            <p><span>Dr B Vinod</span><br />HoD (i/c), Dept. of Robotics & Automation Engg.</p><hr />
            <p><span>Dr S Praveen Kumar</span><br />Executive Director, PSG-STEP</p><hr />
          </div>

          {/* Finance Committee */}
          <div className="org-card">
            <h4 className="org-role">Finance Committee</h4>
            <p><span>Dr S Saravanan</span><br />Dean - Autonomous Functioning</p><hr />
            <p><span>Dr S Kanthalakshmi</span><br />Associate Dean - CNCE, CSRC, CIRD</p>
          </div>

          {/* Registration Committee */}
          <div className="org-card">
            <h4 className="org-role">Registration Committee</h4>
            <p><span>Dr V Senthil Kumaran</span><br />Associate Professor, Dept. of Applied Mathematics & Computational Sciences</p><hr />
            <p><span>Dr K Sathiyapriya</span><br />Associate Professor, Dept. of Computer Science & Engg.</p><hr />
            <p><span>Dr P Kanakaraj</span><br />Assistant Professor (SI Gr), Dept. of Fashion Technology</p><hr />
            <p><span>Dr D Maruthamani</span><br />Assistant Professor (SI Gr), Dept. of Chemistry</p><hr />
            <p><span>Dr S Deepthi</span><br />Assistant Professor (Sr Gr), Dept. of Electrical & Electronics Engg.</p><hr />
            <p><span>Dr J Parlaj</span><br />Assistant Professor (Sr Gr), Dept. of Mathematics</p><hr />
            <p><span>Dr Deepak Kumar Satapathy</span><br />Assistant Professor, Dept. of Metallurgical Engg.</p><hr />            
          </div>

          {/* Program Committee */}
          <div className="org-card">
            <h4 className="org-role">Program Committee</h4>
            <p><span>Dr G Menaka</span><br />HoD, Dept. of English</p><hr />
            <p><span>Dr S C Murugavel</span><br />HoD, Dept. of Applied Science</p><hr />
            <p><span>Dr R Amuda</span><br />HoD, Dept. of Physics</p><hr />
            <p><span>Dr C Porkodi</span><br />HoD, Dept. of Mathematics</p><hr />
            <p><span>Dr D Vijayalakshmi</span><br />HoD, Dept. of Apparel & Fashion Design</p><hr />
            <p><span>Dr C Theivarasu</span><br />HoD, Dept. of Chemistry</p><hr />
            <p><span>Dr Shina Sheen</span><br />HoD, Dept. of Applied Mathematics & Computational Sciences</p><hr />
            <p><span>Dr G Sai Sundara Krishnan</span><br />Professor, Dept. of Applied Mathematics & Computational Sciences</p><hr />
            <p><span>Dr R Sujatha</span><br />Professor, PSG Institute of Management</p><hr />
            <p><span>Dr M Kalpana</span><br />Associate Professor, Dept. of Humanities</p><hr />
            <p><span>Dr Mariyam Adnan</span><br />Associate Professor, Dept. of Apparel & Fashion Design</p><hr />
            <p><span>Dr D Saravanabharathi</span><br />Associate Professor, Dept. of Chemistry</p><hr />
            <p><span>Dr J Prabhavathi</span><br />Assistant Professor, Dept. of English</p><hr />
          </div>

          {/* Technical Committee */}
          <div className="org-card">
            <h4 className="org-role">Technical Committee</h4>
            <p><span>Dr V Krishnaveni</span><br />HoD, Dept. of Electronics & Communication Engg.</p><hr />
            <p><span>Prof C G Sivakumar</span><br />HoD, Dept. of Civil Engg.</p><hr />
            <p><span>Dr R Vidhyapriya</span><br />HoD, Dept. of Biomedical Engg.</p><hr />
            <p><span>Dr G Sudha Sadasivam</span><br />HoD, Dept. of Computer Science & Engg.</p><hr />
            <p><span>Dr M Ananthasubramanian</span><br />HoD, Dept. of Biotechnology</p><hr />
            <p><span>Dr M Senthilkumar</span><br />HoD, Dept. of Production Engg.</p><hr />
            <p><span>Dr K Kannan</span><br />HoD (i/c), Dept. of Mechanical Engg.</p><hr />
            <p><span>Dr K Umamaheswari</span><br />HoD, Dept. of Information Technology</p><hr />
            <p><span>Dr A Natarajan</span><br />HoD (i/c), Dept. of Electrical & Electronics Engg.</p><hr />
            <p><span>Dr K Chandrasekaran</span><br />HoD (i/c), Dept. of Fashion Technology</p><hr />
            <p><span>Dr S Neelakrishnan</span><br />HoD, Dept. of Automobile Engg.</p><hr />
            <p><span>Dr J Arunshankar</span><br />HoD, Dept. of Instrumentation & Control Systems</p><hr />
            <p><span>Dr J Anburaj</span><br />Associate Professor, Dept. of Metallurgical Engg.</p><hr />
            <p><span>Dr R Latha</span><br />Associate Professor, Dept. of Electrical & Electronics Engg.</p><hr />
            <p><span>Dr S P Leokumar</span><br />Associate Professor, Dept. of Production Engg.</p><hr />
            <p><span>Dr C Ramya</span><br />Associate Professor, Dept. of Electronics & Communication Engg.</p><hr />
            <p><span>Dr S Viju</span><br />Associate Professor, Dept. of Textile Technology</p><hr />
            <p><span>Dr K G Saranya</span><br />Associate Professor, Dept. of Computer Science & Engg.</p><hr />
            <p><span>Dr D Jayaprasanth</span><br />Associate Professor, Dept. of Instrumentation & Control Systems</p><hr />
            <p><span>Dr N Ilayaraja</span><br />Assistant Professor, Dept. of Computer Applications</p><hr />
            <p><span>Dr P Govindaraj</span><br />Assistant Professor (SI Gr), Dept. of Mechanical Engg.</p><hr />
            <p><span>Dr M Sangeetha</span><br />Assistant Professor (SI Gr), Dept. of Biomedical Engg.</p><hr />
            <p><span>Dr M P Anbarasi</span><br />Assistant Professor (Sr Gr), Robotics & Automation Engg.</p><hr />
          </div>

          {/* Publication Committee */}
          <div className="org-card">
            <h4 className="org-role">Publication Committee</h4>
            <p><span>Dr G R Karpagam</span><br />Professor In-charge, Dr GRD Memorial Library</p><hr />
            <p><span>Dr K Vaideki</span><br />Associate Dean - Autonomous Functioning</p><hr />
            <p><span>Dr P Karthikeyan</span><br />Professor, Dept. of Automobile Engg.</p><hr />
            <p><span>Dr D Indumathi</span><br />Associate Professor, Dept. of Computer Science & Engg.</p><hr />
            <p><span>Dr S Praveen Kumar</span><br />Associate Professor, Dept. of Civil Engg.</p><hr />
            <p><span>Mr N Saritakumar</span><br />Assistant Professor (SI Gr), Dept. of Electronics & Communication Engg.</p><hr />
            <p><span>Dr A Sarah Helen Sathya</span><br />Assistant Professor (Sr Gr), Dept. of English</p><hr />
            <p><span>Dr P Kathirvel</span><br />Assistant Professor, Dept. of Physics</p><hr />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrganizingCommittee;
