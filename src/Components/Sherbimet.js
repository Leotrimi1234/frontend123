import { useState } from "react";
import { motion } from "framer-motion";

function Sherbimet() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { name: "Analizat Biokimike", image: "/asets/biochemistry.jpg", description: "Analizat biokimike ofrojnë informacion të rëndësishëm për funksionimin e organeve dhe sistemeve të trupit, duke përfshirë nivelet e enzimeve, elektroliteve, dhe substancave të tjera që ndihmojnë në diagnozën e sëmundjeve të ndryshme." },
    { name: "Analizat Hormonale", image: "/asets/hormones.jpg", description: "Analizat hormonale matin nivelet e hormoneve në trup, të cilat janë të rëndësishme për rregullimin e funksioneve trupore si metabolizmi, riprodhimi dhe rritja, dhe ndihmojnë në diagnostikimin e çrregullimeve hormonale." },
    { name: "Analizat Hematologjike", image: "/asets/blood.jpg", description: "Analizat hematologjike shqyrtojnë elementet e gjakut, duke përfshirë numrin dhe përqindjen e qelizave të gjakut, që ndihmojnë në identifikimin e sëmundjeve si anemia, leukimia dhe infeksionet." },
    { name: "Analizat Mikrobiologjike", image: "/asets/microbiology.avif", description: "Analizat mikrobiologjike përdoren për të identifikuar mikroorganizmat e dëmshëm, si bakteret, viruset dhe kërpudhat, që mund të shkaktojnë infeksione të ndryshme dhe ndihmojnë në përcaktimin e trajtimit të duhur." },
    { name: "Tumor Markeret", image: "/asets/cancer.jpg", description: "Testet për tumor markerët matin substancat që mund të shfaqen në gjak, urinën ose inde të tjera kur janë prezentë tumoret, dhe ndihmojnë në diagnostikimin dhe monitorimin e zhvillimit të kancerit." },
    { name: "Analizat e Hemostazës", image: "/asets/coagulation.jpg", description: "Analizat e hemostazës matin aftësinë e gjakut për të ndalur gjakderdhjen dhe formuar mpiksje, duke përfshirë testet për koagulimin e gjakut dhe analizat e faktorëve të mpiksjes." },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center gap-4 bg-slate-400 p-6">
      <h1 className="text-3xl font-bold text-center text-[#01475F] mb-8">
        Shërbimet Tona
      </h1>

      {/* Grid me animacion */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-10 rounded-xl shadow-md hover:shadow-lg transition text-center cursor-pointer"
            onClick={() => handleServiceClick(service)}
            initial={{ opacity: 0, y: 50 }}  // Fillon i fshehur dhe poshtë
            whileInView={{ opacity: 1, y: 0 }} // Shfaqet me animacion kur është në viewport
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }} // Lejon që animacioni të ndodhë sa herë rishfaqet
          >
            <img 
              src={service.image} 
              alt={service.name} 
              className="w-24 h-24 mx-auto hover:scale-125 mb-4 rounded-full object-cover transition-transform"
            />
            <h2 className="text-xl font-semibold text-[#01475F]">{service.name}</h2>
          </motion.div>
        ))}
      </div>

      {/* Modal për shërbimet */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div 
            className="bg-white p-6 rounded-xl w-96"
            initial={{ opacity: 0, scale: 0.8 }}  // Modal fillon i vogël dhe i errët
            animate={{ opacity: 1, scale: 1 }} // Zmadhohet dhe shfaqet
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-[#01475F] mb-4">{selectedService.name}</h2>
            <img
              src={selectedService.image}
              alt={selectedService.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <p className="text-lg text-gray-700">{selectedService.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 py-2 px-4 bg-[#01475F] text-white rounded-lg"
            >
              Mbylle
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Sherbimet;
