import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#01475F] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Sektori për Info */}
        <div>
          <h2 className="text-xl font-bold">Alfa Lab</h2>
          <p className="mt-2 text-gray-300">Laboratori juaj i besuar për analiza të sakta dhe të sigurta.</p>
        </div>

        {/* Sektori për Navigim */}
        <div>
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link to="/news" className="hover:text-gray-300">News</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Sektori për Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Na Ndiqni</h3>
          <div className="mt-2 flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com/LaboratoriAlfaLab" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Facebook />
            </a>
            <a href="https://instagram.com/laboratori_alfalab" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Instagram />
            </a>
           
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Alfa Lab. Të gjitha të drejtat të rezervuara.
      </div>
    </footer>
  );
}

export default Footer;
