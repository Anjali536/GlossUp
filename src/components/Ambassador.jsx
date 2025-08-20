import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ambImage1 from "../assets/amb1.jpg";
import ambImage4 from "../assets/amb4.webp";
import ambImage5 from "../assets/amb5.png";

const Ambassador = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh(); // refresh to catch images/cards
  }, []);

  return (
    <div className="ambassador-container" id="Ambassador">
      <h2 className="ambassador-title" data-aos="fade-up">
        Meet Our <span className="highlight">Ambassadors</span>
      </h2>

      <div className="ambassador-grid">
        <div className="ambassador-card" data-aos="fade-right" data-aos-delay="100">
          <img src={ambImage1} alt="Ambassador 1" />
          <h3>Jennie K.</h3>
          <p>Beauty Influencer & Skin Care Advocate</p>
          <p>
            Jennie is a leading voice in the beauty industry, recognized for her
            expertise in skincare and natural beauty routines. She has inspired
            millions to embrace their individuality by promoting routines that
            focus on self-love, confidence, and sustainability. Her dedication to
            transparency and authenticity makes her a perfect fit for GlossUp.
          </p>
        </div>

        <div className="ambassador-card" data-aos="fade-up" data-aos-delay="300">
          <img src={ambImage4} alt="Ambassador 4" />
          <h3>Lisa M.</h3>
          <p>Makeup Artist & Creative Director</p>
          <p>
            Lisa is known for her bold and artistic makeup creations that push
            boundaries and celebrate diversity. With years of experience as a
            professional makeup artist, she's passionate about showing that makeup
            is not just about looking good, but about telling a story and sparking
            creativity. Her innovative artistry brings life to the GlossUp vision.
          </p>
        </div>

        <div className="ambassador-card" data-aos="fade-left" data-aos-delay="500">
          <img src={ambImage5} alt="Ambassador 5" />
          <h3>Kylie K. Jenner</h3>
          <p>Fashion Model & Wellness Enthusiast</p>
          <p>
            Kylie is a global icon in fashion and wellness, admired for her ability
            to balance glamour with authenticity. She advocates for inclusive
            beauty and believes in empowering individuals to feel comfortable in
            their own skin. Her journey embodies our mission of blending style,
            wellness, and confidence for everyone, everywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ambassador;
