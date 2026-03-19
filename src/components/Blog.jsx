import { useEffect, useRef } from "react";
import aboutCollegeImg from "../assets/images/about/aboutCollege.jpg";
import aboutConclaveImg from "../assets/images/about/aboutConclave.jpg";

function Blog() {
  const headingRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!headingRef.current) return;

      const rect = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger when heading enters viewport
      if (rect.top < windowHeight * 0.75) {
        headingRef.current.classList.add("show");
        window.removeEventListener("scroll", onScroll); // run once
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // check immediately in case already visible

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="blog-section">
      <div className="container">

        <h2 ref={headingRef} className="blog-theme">
          THEME<br />Advancing Scientific Knowledge for Sustainable Societal Transformation through Interdisciplinary Research
        </h2>

        <div className="blog-content">

          <div className="blog-item" id="about-conference">
            <h3>About the College</h3>
            <img
              src={aboutCollegeImg}
              alt="PSG College of Technology"
              className="blog-image"
            />
            <p>
              PSG College of Technology (PSG CT), established in the year 1951 by PSG & Sons’ Charities, is an ISO 9001:2015 certified autonomous college affiliated to Anna University, Chennai. As the institution celebrates its Platinum Jubilee, marking 75 years of excellence in technical education, research and innovation, it continues to uphold a strong legacy of academic distinction and industry engagement. The college offers 21 undergraduate programs and 24 postgraduate programs, including Engineering & Technology, Computer Applications, Management Sciences, Basic and Advanced Sciences. PSG CT is equipped with several state-of-the-art Centres of Excellence that include TIFAC-Core in Product Design, Machine Tool Research Centre, Engineering Design Centre, Virtual Reality Centre, Tool and Die Centre, Centre for Nanotechnology, Centre for Robotics, Centre of Excellence in Artificial Intelligence and Software, Centre for Non-Linear Dynamics, Danfoss Centre of Excellence in Climate and Energy, and Centre of Excellence in Welding Engineering and Technology.
Under the banner of PSG Industrial Institute, in-campus manufacturing units for machine tools, pumps, and motors function, and entrepreneurs and start-ups are incubated along with industry, research institutes, alumni and entrepreneurs. PSG CT was ranked second among colleges/institutes (Govt. & Govt. Aided) technically by the ATAL Ranking of Institutions on Innovation Achievements (ARIIA), Ministry of Education, Government of India, in 2021 and best industry-linked institution by AICTE-CII in the year 2012. During the occasion of India assuming the G20 Presidency in December 1, 2022, PSG CT was identified as one among 75 educational institutions across India, with a special responsibility towards organizing special lectures, student exchange programmes, academic and cultural activities to spread awareness among the youth and the academic community in the G20 agenda.

            </p>
          </div>

          <div className="blog-item" id="about-institute">
            <h3>About the Conclave</h3>
            <img
              src={aboutConclaveImg}
              alt="Research Conclave"
              className="blog-image"
            />
            <p>
              The Research Conclave is organized to showcase innovative research aligned with its central theme across diverse scientific and professional fields. It serves as a common platform for researchers, academicians, industry experts and students to present their work and exchange ideas. The conclave focuses on converting fundamental research into practical technologies and solutions that benefit society. The key fields covered include biomaterial science and biotechnological applications; next-generation computing, intelligent automation and digital systems; core studies in physics and mathematics; modern electronics and smart system design; sustainable technologies; structural engineering along with advanced textile technologies.
Participants share their findings through oral presentations and focused technical discussions. The event highlights emerging research trends, advanced methods and impactful real-world applications across disciplines. It also encourages interdisciplinary collaboration and mentorship between young researchers and experienced professionals. Overall, the conclave fosters exchange of knowledge, enhances the quality of research and promotes innovation across these specialized fields.

            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Blog;
