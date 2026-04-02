import React from "react";
import { MessageCircle } from "lucide-react";
import * as gtag from "../utils/gtag";

const WhatsappButton = () => {
  const handleClick = () => {
    gtag.event({
      action: "contact",
      category: "WhatsApp",
      label: "Floating WhatsApp Button",
    });
  };

  return (
    <a
      href="https://wa.me/919913238496"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={30} fill="white" color="var(--primary-color)" />
    </a>
  );
};

export default WhatsappButton;
