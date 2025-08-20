import React from 'react'
import "./Home.css";
import backImage from "../assets/back.jpg";

function Home() {
  return (
    <div className="home-container" 
    style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="overlay"></div>
      <div className='home-content'>
        <div className='home-text' data-aos="fade-up">
          <p>NEW RELEASE</p>
          <h1 className='highlight-text'>Metallics</h1>
           <span className='highlight'>Shine ON!</span>
          <p>Shop for all Face and Beauty essentials</p>
          <p>Discover our latest arrivals and exclusive offers</p>
          <p>Experience the best in beauty and home products</p>
          
          <div className="btn-container">
            <button
              className="shop-btn"
              onClick={() =>
                document.getElementById("Products").scrollIntoView({ behavior: "smooth" })
              }
            >
              Shop Now
            </button>
          </div>
        </div>
         
      </div>
    </div>
  );
}

export default Home;