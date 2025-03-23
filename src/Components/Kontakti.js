import React from 'react';

function InfoLaboratori() {
  return (
    <div className="mt-6 bg-gray-100 text-2xl h-[400px] p-4 flex flex-col justify-center items-center  rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800">Informacioni i Laboratorit</h3>
      <p className="mt-2 text-gray-700">📞 <strong>Numri i Telefonit:</strong> +383 45 550 391</p>
      <p className="text-gray-700">🏢 <strong>Adresa:</strong> Rruga Motrat Qiriazi, Ulpiane, Prishtine</p>
      <p className="text-gray-700">⏰ <strong>Orari i Punës:</strong> E Hënë - E Premte: 07:00 - 19:00</p>
    </div>
  );
}

export default InfoLaboratori;
