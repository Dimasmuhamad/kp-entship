import React, { useState } from "react";
import Image from "next/image";

const FloatingWhatsAppButton = () => {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <a
      href="https://api.whatsapp.com/send?phone=62895700990716"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 bg-whatsapp-green text-white rounded-full p-4 shadow-floating flex items-center justify-center transition-transform transform-gpu hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showText ? (
        "Hubungi Sales"
      ) : (
        <image src="images/logowa.svg" className="h-6 w-6" />
      )}
    </a>
  );
};

export default FloatingWhatsAppButton;
