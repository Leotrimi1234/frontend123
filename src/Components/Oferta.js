import React, { useState, useEffect } from "react";

function Oferta() {
  const [ofertat, setOfertat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOfertat() {
      try {
        const response = await fetch("https://backend123-zs0m.onrender.com/api/ofertas?populate=Foto"); // Mund të ndryshohet URL-ja këtu

        if (!response.ok) {
          throw new Error(`Gabim HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Të dhënat e marra nga API:", data);

        setOfertat(data.data || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchOfertat();
  }, []);

  if (loading) return <p className="text-center text-lg">Duke u ngarkuar...</p>;
  if (error) return <p className="text-center text-red-500">Gabim: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-serif bg-slate-200 mt-8 rounded-full flex justify-center items-center text-center py-2">
        Ofertat
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {ofertat.map((oferta) => {
          const pershkrimi = oferta.Pershkrimi || "Përshkrimi mungon";
          
          // Përdorim fotoUrl nga `Foto.url`
          const fotoUrl = oferta.Foto?.url;

          return (
            <div 
              key={oferta.id} 
              className="text-center p-4 border border-gray-300 rounded-lg shadow-lg bg-white"
            >
              <h3 className="mb-4 font-semibold">{pershkrimi}</h3>
              {fotoUrl ? (
                <img 
                  src={fotoUrl} 
                  alt="Foto e ofertes" 
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <p className="text-red-500">Nuk ka foto</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Oferta;
