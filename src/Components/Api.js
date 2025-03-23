import { useEffect, useState } from "react";

function Api() {
  const [sherbimet, setSherbimet] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/sherbimets")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setSherbimet(data.data);
        }
      })
      .catch((error) => console.error("Gabim gjatë marrjes së të dhënave:", error));
  }, []);

  return (
    <div className="bg-red-300 flex flex-col justify-start items-center h-[600px]">
      <h1 className="mt-6"> Lista e Shërbimeve</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Emri</th>
            <th>Çmimi (€)</th>
          </tr>
        </thead>
        <tbody>
          {sherbimet.map((sherbim) => (
            <tr key={sherbim.id +1}>
              <td>{sherbim.id}</td>
              <td>{sherbim.Emri ? sherbim.Emri : "Pa Emër"}</td>
              <td>{sherbim.Cmimi ? sherbim.Cmimi : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Api;

