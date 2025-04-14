import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#hero" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#internships" onClick={closeMenu}>Internships</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "rotate-top" : ""}`}></div>
        <div className={`bar ${isOpen ? "fade" : ""}`}></div>
        <div className={`bar ${isOpen ? "rotate-bottom" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
