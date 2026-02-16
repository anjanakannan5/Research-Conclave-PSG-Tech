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
          Advancing Societally Relevant Applications of Knowledge through Scientific Research
        </h2>

        <div className="blog-content">

          <div className="blog-item">
            <h3>About the College</h3>
            <img
              src={aboutCollegeImg}
              alt="PSG College of Technology"
              className="blog-image"
            />
            <p>
              PSG College of Technology (PSG Tech), established in the year 1951 by PSG & Sons’ Charities, is an ISO 9001 - 2015 certified autonomous college affiliated to Anna University, Chennai. The college offers 21 undergraduate programmes and 24 postgraduate programmes including engineering & technology, computer applications, management sciences, basic and advance sciences. PSG Tech is equipped with several state-of-the-art centers of Excellence that include TIFAC-Core in Product Design, Machine Tool Research Centre, Engineering Design Centre, Virtual Reality Centre, Tool and Die Centre, Centre for Nano-technology, Centre for Robotics, Centre of Excellence in Artificial Intelligence and Software, Centre for NonLinear Dynamics, Danfoss Centre of Excellence in Climate and Energy, Centre of Excellence in Welding Engineering and Technology. Under the banner of PSG Industrial Institute, there are in-campus manufacturing units of machine tools, pumps, motors and offcampus foundry units. Furthermore, PSG Tech has established a very good network with industry, research institutes, alumni and entrepreneurs. PSG Tech was ranked second under Colleges/Institutes (Govt. & Govt. Aided) (Technical) by ATAL Ranking of Institutions on Innovation Achievements (ARIIA), Ministry of Education, Government of India in the year 2021 and the best industry linked institution by AICTE-CII in the year 2012. During the occasion of India assuming the G20 Presidency on December 1, 2022, PSG Tech was identified as one among the 75 educational institutions across India, with special responsibilities towards organizing special lectures, student exchange programmes, academic and cultural activities to spread awareness among the youth and the academic community on the G20 agenda.
            </p>
          </div>

          <div className="blog-item">
            <h3>About the Conclave</h3>
            <img
              src={aboutConclaveImg}
              alt="Research Conclave"
              className="blog-image"
            />
            <p>
              Advancements in science and technology are essential for driving research development toward higher goals. Achieving these goals requires a multidisciplinary approach - a fusion of knowledge and insights from various disciplines and perspectives, all working toward the common objective of achieving a balance between scientific discoveries and technological applications. The program showcases cutting-edge scientific innovations across multiple fields, including academic research and industrial applications, with a particular focus on material development in a global context. This Research Conclave has been conceptualised to bring together leading researchers, renowned experts from various science and engineering fields, industry pioneers, and thought leaders. The primary aim of the conclave is to foster interaction and collaboration among researchers and professionals. The unique properties of materials are explored through expert discussions and wellestablished methodologies. We have made concerted efforts to unite diverse research groups from various engineering disciplines to develop novel material perspectives, design solutions for innovative applications, advance product technologies and device manufacturing. The impact of this field continues to influence many related disciplines. This year’s conclave will focus on critical areas such as Robotics and Automation, Additive Manufacturing Machine Learning, Logistics & Supply Chain Automation, Quantum & Neuromorphic Computing, 5G/6G and Mobile Networks, Analog & Digital Electronics, Bio-materials and many more. Given the scope of these topics, the conclave will undoubtedly provide a dynamic platform for interdisciplinary discussions amongst the experts and the delegates alike.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Blog;
