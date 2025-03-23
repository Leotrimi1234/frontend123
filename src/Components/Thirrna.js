import React, { useState } from 'react';

function Thirrna() {
  const [emri, setEmri] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const data = {
      data: {  // Strapi 4 kërkon që të dhënat të jenë brenda "data"
        Emri: emri,       // Përdor shkronja të mëdha, si në Strapi
        Email: email,     // Përdor shkronja të mëdha, si në Strapi
        Description: description, // Përdor shkronja të mëdha, si në Strapi
      },
    };

    try {
      const response = await fetch('https://backend123-zs0m.onrender.com/api/calls', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Gabim:', result);
        setMessage(`Gabim: ${result.error?.message || 'Diçka shkoi keq!'}`);
      } else {
        setMessage('Formulari u dërgua me sukses!');
        setEmri('');
        setEmail('');
        setDescription('');
      }
    } catch (error) {
      console.error('Gabim gjatë dërgimit:', error);
      setMessage('Gabim gjatë dërgimit të formularit.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-slate-200 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Na kontaktoni</h2>
      
      {message && (
        <p className={`text-center mb-4 ${message.includes('Gabim') ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="emri" className="block text-gray-700 font-medium">Emri:</label>
          <input
            type="text"
            id="emri"
            value={emri}
            onChange={(e) => setEmri(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700 font-medium">Përshkrimi:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? 'Duke dërguar...' : 'Dërgo'}
        </button>
      </form>
    </div>
  );
}

export default Thirrna;
