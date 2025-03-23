import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#01475F] text-white text-2xl p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Klikimi mbi logo bën reload faqen */}
        <Link to="/" onClick={() => window.location.reload()}>
          <img src="/LogoWhite.png" alt="Logo" className="w-44 h-auto cursor-pointer" />
        </Link>
        
        {/* Hamburger Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/news" className="hover:text-gray-300">News</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#01475F] text-center p-4 space-y-4">
          <li><Link to="/" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/news" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>News</Link></li>
          <li><Link to="/contact" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;


