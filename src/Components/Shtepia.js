import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/asets/foto1.jpg",
  "/asets/foto2.jpg",
  "/asets/foto3.avif",
];

function Shtepia() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Ndryshon çdo 8 sekonda

    return () => clearInterval(interval);
  }, []);

  const scrollToTerminet = () => {
    const terminetSection = document.getElementById("terminet-section");
    if (terminetSection) {
      terminetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imazhi në background që ndryshon me animacion parallax */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 1.1 }} // Zoom efekt në fillim
        animate={{ opacity: 1, scale: 1 }} // Animacion për të ardhur në formën e plotë
        exit={{ opacity: 0, scale: 1.1 }} // Kur largohet, zoom out
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />

      {/* Overlay me gradient për të bërë tekstin më të dukshëm */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col text-white items-center justify-center p-6">
        <h1 className="text-white mb-6 text-5xl md:text-7xl font-extrabold text-center tracking-tight drop-shadow-2xl">
          Mirësevini në Alfa Lab
        </h1>
        <p className="bg-black bg-opacity-50 p-6 rounded-xl font-serif text-lg md:text-xl mb-6 shadow-xl w-[90%] md:w-[700px] text-center leading-relaxed">
          Alfa Lab është një laborator modern i biokimisë dhe mikrobiologjisë, i specializuar në analiza të sakta dhe të shpejta për diagnozën dhe monitorimin e shëndetit. Ofron një gamë të gjerë testesh laboratorike, duke përfshirë analizat biokimike, hormonale, hematologjike dhe mikrobiologjike, me teknologji të avancuar dhe staf profesional. Ne garantojmë cilësi, saktësi dhe besueshmëri në çdo shërbim që ofrojmë.
        </p>
        <button 
          className="bg-[#01475F] hover:bg-white hover:text-[#01475F] text-white font-bold py-4 px-6 rounded-full shadow-lg transition duration-300"
          onClick={scrollToTerminet}
        >
          Cakto një terminë
        </button>
      </div>
    </div>
  );
}

export default Shtepia;
