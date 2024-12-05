import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Switch from "@mui/material/Switch";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageToggle = () => {
    setSelectedLanguage((prev) => (prev === "EN" ? "DK" : "EN"));
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogin = () => {
    alert("open login page.")
  }

  return (
    <nav className="w-full fixed top-0 left-0 bg-black bg-opacity-70 text-white z-50 px-4 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-semibold">
        INDOTRAVI
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex space-x-6">
        <li>
          <Link to="/about" className="hover:text-yellow-500">About</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-yellow-500">Services</Link>
        </li>
        <li>
          <Link to="/tour" className="hover:text-yellow-500">Tour</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
        </li>
      </ul>


      {/* Language Toggle and Login Button */}
      <div className="flex items-center space-x-4">
        {/* Language Toggle */}
        <div className="hidden lg:flex items-center space-x-2">
          <span>{selectedLanguage}</span>
          <Switch
            onChange={handleLanguageToggle}
            checked={selectedLanguage === "DK"}
            color="default"
          />
        </div>

        {/* Login Button */}
        <button onClick={handleLogin} className="bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition duration-300 hidden lg:block">
          Login
        </button>
      </div>

      {/* Mobile Language and Login */}
      <div className="lg:hidden flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span>{selectedLanguage}</span>
          <Switch
            onChange={handleLanguageToggle}
            checked={selectedLanguage === "DK"}
            color="default"
          />
        </div>
        <button className="bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition duration-300">
          Login
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-2xl"
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 right-4 bg-black bg-opacity-80 text-white p-4 space-y-4 lg:hidden rounded-lg">
          <li>
            <Link to="/about" className="hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/tour" className="hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>
              Tour
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}

    </nav>
  );
};

export default Navbar;
