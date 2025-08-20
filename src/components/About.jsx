import { useEffect, useState } from "react";
import ambImage from "../assets/amb3.jpg"; // import works fine

function AboutSection() {
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffsetX(scrollY * 0.2); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="about-container"
      style={{
        backgroundImage: `url(${ambImage})`, // now uses imported value
        backgroundSize: "cover",
        backgroundPosition: `${50 + offsetX}% center`,
        height: "160vh",
      }}
    >
      <div className="overlay"></div>
      <div className="about-content">
        <div className="about-text" data-aos="fade-up">
          
          <div className="about-flex">
        <div className="main-heading">
            <p>WE BELIEVE</p>
            <h1 className="highlight-text">
            Your <span className="highlight"> Skin </span>
            </h1>
            <h1 className="highlight-text"> Comes First</h1>
        </div>
        <div className="about-right">
          <p className="side-paragraph">
            At GlossUp, we believe that makeup is more than just a product - it's an
            expression of who you are. Our journey began with a simple vision: to
            create beauty essentials that celebrate individuality, nurture the skin,
            and inspire confidence in every person. We carefully design and craft each
            formula to be gentle, effective, and inclusive, because beauty has no 
            boundaries. Whether you're getting ready for a busy day at work, a night 
            out with friends, or a quiet moment of self-care, our products are made 
            to complement your lifestyle and enhance your natural radiance. GlossUp 
            isn't just about looking good- it's about feeling good, inside and out. 
            Together, let's embrace a world where self-love, creativity, and 
            confidence come first.
        </p>
        <button 
          className="shop-btn3"
          onClick={() => document.getElementById("join-us").scrollIntoView({ behavior: "smooth" })}
        >
          Join GlossUp
        </button>

        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
