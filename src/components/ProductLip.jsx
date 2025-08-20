import React, { useRef } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Product = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <div style={{ position: "relative" }}>

      {/* Products Row */}
      <div className='product-container' ref={scrollRef}>
       <div className="product-card">
        <div className="product-image">
            <img src="/lip1.jpg" alt="Mocha" className="main-img" />
            <img src="/lip-1.jpg" alt="Mocha Hover" className="hover-img" />
        </div>
            <h1>Mocha</h1>
            <h1>Price: $10.12</h1>
        </div>
        <div className='product-card'>
            <div className="product-image">
            <img src="/lip2.jpg" alt="Mocha" className="main-img" />
            <img src="/lip-2.jpg" alt="Mocha Hover" className="hover-img" />
        </div>
            <h1>Plush Berry</h1>
            <h1>Price: $9.2</h1>
        </div>
        <div className='product-card'>
            <div className="product-image">
            <img src="/lip3.jpg" alt="Pink" className="main-img" />
            <img src="/lip-3.webp" alt="Pink Hover" className="hover-img" />
        </div>
            <h1>Pink</h1>
            <h1>Price: $8.16</h1>
        </div>
        <div className='product-card'>
          <div className="product-image">
            <img src="/lip4.avif" alt="Cherry" className="main-img" />
            <img src="/lip-4.jpg" alt="Cherry Hover" className="hover-img" />
          </div>
          <h1>Cherry</h1>
          <h1>Price: $8.5</h1>
        </div>
        <div className='product-card'>
          <div className="product-image">
            <img src="/lip5.jpg" alt="Nude" className="main-img" />
            <img src="/lip-5.webp" alt="Nude Hover" className="hover-img" />
          </div>
          <h1>Nude</h1>
          <h1>Price: $12.12</h1>
        </div>
        <div className='product-card'>
            <div className="product-image">
              <img src="/lip6.jpeg" alt="Blush" className="main-img" />
              <img src="/lip-6.webp" alt="Blush Hover" className="hover-img" />
            </div>
          <h1>Blush</h1>
          <h1>Price: $9.2</h1>
        </div>
        <div className='product-card'>
          <div className="product-image">
            <img src="/lip7.png" alt="Light Pink" className="main-img" />
            <img src="/lip-7.jpg" alt="Light Pink Hover" className="hover-img" />
          </div>
          <h1>Light Pink</h1>
          <h1>Price: $5.7</h1>
        </div>
        <div className='product-card'>
          <div className="product-image">
            <img src="/lip8.jpg" alt="Lip Balm" className="main-img" />
            <img src="/lip-8.jpg" alt="Lip Balm Hover" className="hover-img" />
          </div>
          <h1>Light mocha</h1>
          <h1>Price: $11.5</h1>
        </div>
        <div className='product-card'>
          <div className="product-image">
            <img src="/lip9.jpg" alt="Lip Balm" className="main-img" />
            <img src="/lip-9.jpg" alt="Lip Balm Hover" className="hover-img" />
          </div>
          <h1>Blossom Red</h1>
          <h1>Price: $18.9</h1>
        </div>
      </div>

      {/* Left Scroll Button */}
      <button className="scroll-btn left" onClick={scrollLeft}>
        <ChevronLeftIcon style={{ fontSize: "40px" }} />
      </button>

      {/* Right Scroll Button */}
      <button className="scroll-btn right" onClick={scrollRight}>
        <ChevronRightIcon style={{ fontSize: "40px" }} />
      </button>
    </div>
  );
};

export default Product;
