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
            <img src="/fond1.jpg" alt="Mocha" className="main-img" />
            <img src="/fond-1.jpg" alt="Mocha Hover" className="hover-img" />
        </div>
            <h1>Shade-001</h1>
            <h1>Price: $10.12</h1>
        </div>
        <div className='product-card'>
            <div className="product-image">
            <img src="/fond2.jpg" alt="Mocha" className="main-img" />
            <img src="/fond-2.jpeg" alt="Mocha Hover" className="hover-img" />
        </div>
            <h1>Shade-057</h1>
            <h1>Price: $9.2</h1>
        </div>
        <div className='product-card'>
            <div className="product-image">
            <img src="/fond-3.jpg" alt="Pink" className="main-img" />
            <img src="/fond3.webp" alt="Pink Hover" className="hover-img" />
        </div>
            <h1>Shade-075</h1>
            <h1>Price: $8.16</h1>
        </div>
        <div className='product-card'>
          <div className="product-image">
            <img src="/fond4.jpeg" alt="Cherry" className="main-img" />
            <img src="/fond-4.avif" alt="Cherry Hover" className="hover-img" />
          </div>
          <h1>Shade-045</h1>
          <h1>Price: $8.5</h1>
        </div>
        <div className='product-card'>
          <div className="product-image">
            <img src="/fond5.webp" alt="Nude" className="main-img" />
            <img src="/fond-5.jpg" alt="Nude Hover" className="hover-img" />
          </div>
          <h1>Shade-021</h1>
          <h1>Price: $12.12</h1>
        </div>
        <div className='product-card'>
            <div className="product-image">
              <img src="/fond-6.avif" alt="Blush" className="main-img" />
              <img src="/fond6.webp" alt="Blush Hover" className="hover-img" />
            </div>
          <h1>Shade-032</h1>
          <h1>Price: $9.2</h1>
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
