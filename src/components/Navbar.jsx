import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          <img
            src="src/assets/AkuStore.png"
            alt="logo"
            className="w-32 h-auto"
          />
        </Link>

        {/* Mobil üçün Toggle və Səbət */}
        <div className="flex items-center md:hidden space-x-4">
          {/* Səbət */}
          <Link to="/cart" className="text-white hover:text-gray-200 relative">
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Toggle düyməsi */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Böyük ekranlar üçün Menyu və Səbət */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">
            Əsas Səhifə
          </Link>
          <Link to="/products" className="text-white hover:text-gray-200">
            Məhsullar
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200">
            Haqqımızda
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-200">
            Əlaqə
          </Link>

          {/* Səbət (böyük ekran üçün) */}
          <Link to="/cart" className="text-white hover:text-gray-200 relative">
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobil menyu (Kiçik ekranlar üçün) */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 mt-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-white py-2"
          >
            Əsas Səhifə
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="block text-white py-2"
          >
            Məhsullar
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-white py-2"
          >
            Haqqımızda
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-white py-2"
          >
            Əlaqə
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
