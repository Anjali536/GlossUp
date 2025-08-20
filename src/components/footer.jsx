import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Join Us Form */}
      <div className="join-us" id="join-us" data-aos="fade-up">
        <h2>Join <span className="highlight">GlossUp</span></h2>
        <p>
            Be the first to know about new launches, exclusive offers, and beauty
            tips from our experts. Let's glow together ✨
        </p>

        <form className="join-form">
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="join-btn">Join Us</button>
        </form>
      </div>

      {/* Footer Description */}
      <div className="footer-bottom">
        <p>
          GlossUp is more than makeup — it’s a movement. Our mission is to
          celebrate individuality, nurture the skin, and inspire confidence in
          every person. Beauty without boundaries 🌸
        </p>
        <p className="copy">© {new Date().getFullYear()} GlossUp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
