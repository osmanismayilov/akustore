import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp iconu üçün

const WhatsAppButton = ({ phoneNumber }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleClick}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center"
      >
        <FaWhatsapp className="text-2xl" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
