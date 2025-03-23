import { useState } from "react";

const Terminet = () => {
  const [formData, setFormData] = useState({
    name: "",
    emal: "", // Përdorim 'emal' si fushë në vend të 'email'
    phone: "",
    appointment_date: "",
  });

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    try {
      // Dërgojmë kërkesën 'POST' tek Strapi API
      const response = await fetch("https://backend123-zs0m.onrender.com/api/terminets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            emal: formData.emal, // Përdorim 'emal' në vend të 'email'
            phone: formData.phone,
            appointment_date: formData.appointment_date, 
          },
        }),
      });

      const result = await response.json();
      console.log(result); // Konsoloni rezultatin për të parë çfarë kthehet

      if (response.ok) {
        setSuccess("Termini u regjistrua me sukses!");
        setFormData({ name: "", emal: "", phone: "", appointment_date: "" });
      } else {
        setError(result.error?.message || "Diçka shkoi keq.");
      }
    } catch (err) {
      setError("Gabim në lidhje me serverin.");
    }
  };

  return (
    <div id="terminet-section" className="bg-[#01475F] flex justify-center items-center h-[600px]">
      <div className="max-w-md mx-auto p-6 bg-slate-200 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Rezervo një Termin</h2>

        {success && <p className="text-green-600">{success}</p>}
        {error && <p className="text-red-600">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Emri"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="emal" // Përdorim 'emal' këtu
            placeholder="Email"
            value={formData.emal}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Numri i telefonit"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="datetime-local"
            name="appointment_date"
            value={formData.appointment_date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Dërgo
          </button>
        </form>
      </div>
    </div>
  );
};

export default Terminet;
