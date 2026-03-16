import React from "react";
import img1 from "../assets/images/gallery/1.jpg";
import img2 from "../assets/images/gallery/2.jpg";
import img3 from "../assets/images/gallery/3.jpg";
import img4 from "../assets/images/gallery/4.jpg";
import img5 from "../assets/images/gallery/5.jpg";
import img6 from "../assets/images/gallery/6.jpg";
import img7 from "../assets/images/gallery/7.jpg";
import img8 from "../assets/images/gallery/8.jpg";
import img9 from "../assets/images/gallery/9.jpg";
import img10 from "../assets/images/gallery/10.jpg";

import img11 from "../assets/images/gallery/11.jpg";
import img12 from "../assets/images/gallery/12.jpg";
import img13 from "../assets/images/gallery/13.jpg";
import img14 from "../assets/images/gallery/14.jpg";
import img15 from "../assets/images/gallery/15.jpg";
import img16 from "../assets/images/gallery/16.jpg";
import img17 from "../assets/images/gallery/17.jpg";
import img18 from "../assets/images/gallery/18.jpg";
import img19 from "../assets/images/gallery/19.jpg";
import img20 from "../assets/images/gallery/20.jpg";

const Gallery = () => {
  const topImages = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10
];

const bottomImages = [
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20
];

  return (
    <section className="org-section" id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>

        {/* Top Scroll */}
        <div className="gallery-row scroll-left">
          <div className="gallery-track">
            {/* Doubling the array for seamless infinite scroll animation */}
            {[...topImages, ...topImages].map((img, index) => (
              <div className="gallery-card" key={`top-${index}`}>
                <img src={img} alt={`Gallery Top ${index}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Scroll */}
        <div className="gallery-row scroll-right">
          <div className="gallery-track">
            {[...bottomImages, ...bottomImages].map((img, index) => (
              <div className="gallery-card" key={`bottom-${index}`}>
                <img src={img} alt={`Gallery Bottom ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;