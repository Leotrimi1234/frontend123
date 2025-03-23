import React, { useState, useEffect } from "react";

function Oferta() {
  const [oferta, setOferta] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedFoto, setSelectedFoto] = useState(null);

  useEffect(() => {
    async function fetchOferta() {
      try {
        // Ndrysho këtë URL me URL-në e backend-it të deploy-uar në Render ose platformën tjetër
        const response = await fetch("https://backend123-zs0m.onrender.com/api/ofertas?populate=Foto");

        if (!response.ok) {
          throw new Error(`Gabim HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Të dhënat e marra nga API:", data);

        setOferta(data.data || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchOferta();
  }, []);

  const handleImageClick = (fotoUrl) => {
    setSelectedFoto(fotoUrl);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedFoto(null);
  };

  if (loading) return <p className="text-center text-lg">Duke u ngarkuar...</p>;
  if (error) return <p className="text-center text-red-500">Gabim: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-serif bg-slate-200 mt-8 rounded-full flex justify-center items-center text-center py-2">
        Ofertat për pacientët tanë
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {oferta.map((item) => {
          const pershkrimi = item.Pershkrimi || "Përshkrimi mungon";
          const fotoData = item.Foto?.[0]?.url;
          const fotoUrl = fotoData ? fotoData : null;

          return (
            <div 
              key={item.id} 
              className="text-center p-4 border border-gray-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105"
            >
              <h3 className="mb-4 font-semibold">{pershkrimi}</h3>
              {fotoUrl ? (
                <div className="relative">
                  <img 
                    src={fotoUrl} 
                    alt="Foto e ofertës" 
                    className="w-full h-auto rounded-lg cursor-pointer"
                    onClick={() => handleImageClick(fotoUrl)}
                  />
                </div>
              ) : (
                <p className="text-red-500">Nuk ka foto</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal për shfaqjen e fotos me rritje për mbulimin e ekranit */}
      {openModal && selectedFoto && (
        <div 
          className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <img 
              src={selectedFoto} 
              alt="Foto e madhe" 
              className="w-full h-full object-contain"
            />
            <span 
              className="absolute top-4 right-4 text-white font-bold bg-black p-1 rounded-full cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); // Kjo është për të parandaluar që të mbyllet modal kur klikoni "X"
                handleCloseModal();
              }}
            >
              X
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Oferta;
