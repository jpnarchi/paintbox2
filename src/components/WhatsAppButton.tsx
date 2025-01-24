import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/525615206531"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 flex items-center gap-2"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline">¿Listo para revolucionar tu publicidad?</span>
    </a>
  );
};

export default WhatsAppButton;