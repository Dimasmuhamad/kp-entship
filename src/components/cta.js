import React from "react";
import Image from "next/image";
import { ChatIcon } from "@heroicons/react/solid"; // Import ikon Chat dari Heroicons

function Cta() {
  const nomorWhatsapp = "+62895700990716";
  const whatsappLink = `https://wa.me/${nomorWhatsapp}`;

  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center z-0 space-x-2 bg-orange-500 shadow-orange-200/50 shadow-[0_20px_35px] px-6 py-3 text-white rounded-xl cursor-pointer"
    >
      <Image src="images/logowa.svg" alt="" width={32} height={32} />
      {/* Ikon WhatsApp */}
      <span>Hubungi Kami</span>
    </button>
  );
}

export default Cta;
