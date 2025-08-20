import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import VibrantBlock from "./components/vibrant-block.jsx";
import Ambassador from "./components/Ambassador.jsx";
import Footer from "./components/footer.jsx";
import ProductLip from "./components/ProductLip.jsx";
import ProductFond from "./components/ProductFond.jsx";

function App() {
  useEffect(() => {
        AOS.init({
          duration: 1200,
          easing: "ease-in-out",
          once: false,   // ❌ not once → ✅ animate every scroll
          mirror: false,  // optional: animate when scrolling up too
        });

  }, []);

  return (
    <div className="App">
      {/* Header/Nav */}
      <div className="header-wrapper">
      <header className="header-container">
        <h1 className="header-title" data-aos="fade-right">
          GlossUp
        </h1>
        <nav className="nav" data-aos="fade-left">
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Products">Products</a></li>
            <li><a href="#About">About</a></li>
          </ul>
        </nav>
      </header>
      </div>
      {/* Sections */}
      <section id="Home" data-aos="fade-up">
        <Home />
      </section>

      <section id="Products" data-aos="fade-up">
        <h2 className="product-section">Lip 
          <span className="highlighted-word"> Loves</span></h2>
        <ProductLip />
        <h2 className="product-section">Skin
          <span className="highlighted-word"> Shades</span>
          </h2>
        <ProductFond />
      </section>
      <section id="VibrantLips" >
        <div className="vibrant-container">
          <div className="vibrant-block-main">
            <p>HOT & SPICY</p>
            <h1>Most 
              <span className="highlighted-word"> Vibrant  </span> 
              </h1>
              <h1>Eyes in Town</h1>
              <p>Store for all eyes products</p>
              <p>Discover our exclusive range of vibrant eye colors that make a statement.</p>
              <p>All new arrivals just for you!</p>
              <div className='btn-container2'>
                <button className='shop-btn2'>Shop Eyes</button>
            </div>
          </div>
            <VibrantBlock />
        </div>
      </section>
      <section id="VibrantLips" className="Discover-container">
      <h2 className="product-section">Discover
        <span className="highlighted-word"> More</span></h2>
      <div className="name-grid">
        <div className="img-overlay-container">
          <img src="/eyes.jpg" alt="Ambassador 3" />
          <div className="text-overlay">
              <span className="text-half-below">Eyes</span>
            </div>
          </div>
          <div className="img-overlay-container">
            <img src="/lips.jpg" alt="Ambassador 4" />
            <div className="text-overlay">
              <span className="text-half-below">Lips</span>
            </div>
          </div>
          <div className="img-overlay-container">
            <img src="/face.jpeg" alt="Ambassador 5" />
            <div className="text-overlay">
              <span className="text-half-below">Face</span>
            </div>
          </div>
        </div>
        </section>

      <section id="About" >
        <About />
        <Ambassador />
        <Footer />
      </section>

      
    </div>
  );
}

export default App;
