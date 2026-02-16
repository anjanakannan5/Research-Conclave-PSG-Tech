import React from "react";

const Gallery = () => {
  const topImages = [
    "../assets/images/gallery/1.jpg",
    "../assets/images/gallery/2.jpg",
    "../assets/images/gallery/3.jpg",
    "../assets/images/gallery/4.jpg",
    "../assets/images/gallery/5.jpg",
    "../assets/images/gallery/6.jpg",
    "../assets/images/gallery/7.jpg",
    "../assets/images/gallery/8.jpg",
    "../assets/images/gallery/9.jpg",
    "../assets/images/gallery/10.jpg",
  ];

  const bottomImages = [
    "../assets/images/gallery/11.jpg",
    "../assets/images/gallery/12.jpg",
    "../assets/images/gallery/13.jpg",
    "../assets/images/gallery/14.jpg",
    "../assets/images/gallery/15.jpg",
    "../assets/images/gallery/16.jpg",
    "../assets/images/gallery/17.jpg",
    "../assets/images/gallery/18.jpg",
    "../assets/images/gallery/19.jpg",
    "../assets/images/gallery/20.jpg",
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