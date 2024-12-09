import React, { useEffect } from "react";
import "../styles/hero.scss";

// Import images
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

const Hero = () => {
  useEffect(() => {
    // No additional functionality needed; animation handled in CSS.
  }, []);

  return (
    <section className="hero">
      {/* Left Side: Images */}
      <div className="image-container">
        <div className="image-column column-one">
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
          <img src={image4} alt="Image 4" />
        </div>
        <div className="image-column column-two">
          <img src={image5} alt="Image 5" />
          <img src={image6} alt="Image 6" />
          <img src={image7} alt="Image 7" />
          <img src={image8} alt="Image 8" />
        </div>
      </div>

      {/* Right Side: "Book an appointment" Text */}
      <div className="hero-text">
        <h1>Book an appointment with lifestyle medicine experts</h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Condition, procedure, specialty..." />
        <input type="text" placeholder="City, state, or zipcode" />
        <button>Find now</button>
      </div>
    </section>
  );
};

export default Hero;
