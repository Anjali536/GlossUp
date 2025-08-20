import { useEffect, useState } from "react";
import actImage from "../assets/amb2.jpg"; // correct import

function VibrantBlock() {
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffsetX(scrollY * 0.2); // adjust speed here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="vibrant-block">
      <img
        src={actImage}   // ✅ use imported image here
        alt="Vibrant Lip 2"
        style={{
            transform: `translateX(${offsetX}px)`,
          transition: "transform 0.1s linear",
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}

export default VibrantBlock;
