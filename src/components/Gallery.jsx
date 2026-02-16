import React from "react";

const Gallery = () => {
  // Replace these with your actual image paths
  const topImages = [
    "src/assets/images/gallery/1.jpg",
    "src/assets/images/gallery/2.jpg",
    "src/assets/images/gallery/3.jpg",
    "src/assets/images/gallery/4.jpg",
    "src/assets/images/gallery/5.jpg",
    "src/assets/images/gallery/6.jpg",
    "src/assets/images/gallery/7.jpg",
    "src/assets/images/gallery/8.jpg",
    "src/assets/images/gallery/9.jpg",
    "src/assets/images/gallery/10.jpg",
  ];

  const bottomImages = [
    "src/assets/images/gallery/11.jpg",
    "src/assets/images/gallery/12.jpg",
    "src/assets/images/gallery/13.jpg",
    "src/assets/images/gallery/14.jpg",
    "src/assets/images/gallery/15.jpg",
    "src/assets/images/gallery/16.jpg",
    "src/assets/images/gallery/17.jpg",
    "src/assets/images/gallery/18.jpg",
    "src/assets/images/gallery/19.jpg",
    "src/assets/images/gallery/20.jpg",
  ];

  return (
    <section className="org-section" id="gallery">
      <div className="gallery-container">

        <h2 className="gallery-title">Gallery</h2>

        {/* Top Scroll */}
        <div className="gallery-row scroll-left">
          <div className="gallery-track">
            {[...topImages, ...topImages].map((img, index) => (
              <div className="gallery-card" key={index}>
                <img src={img} alt="Gallery" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Scroll */}
        <div className="gallery-row scroll-right">
          <div className="gallery-track">
            {[...bottomImages, ...bottomImages].map((img, index) => (
              <div className="gallery-card" key={index}>
                <img src={img} alt="Gallery" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
