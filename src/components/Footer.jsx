import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Akustore</h3>
          <p className="text-gray-400">Ən yeni məhsullar sizin üçün!</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
