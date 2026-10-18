import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsAppInquiry } from '../utils/whatsapp';
import { RESTAURANT_CONFIG } from '../config/restaurant';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3 bg-[#18120E] border border-[#FF7A00]/50 rounded-xl shadow-2xl text-xs text-[#FFFFFF] animate-in fade-in slide-in-from-bottom duration-300 max-w-xs shadow-[#FF6B00]/15">
          <span>¿Deseas consultar o pedir por WhatsApp?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 text-[#A89E96] hover:text-white"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <button
        onClick={() => openWhatsAppInquiry()}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black shadow-2xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label={`Escribir a WhatsApp (${RESTAURANT_CONFIG.phoneDisplay})`}
        title={`Escribir a WhatsApp (${RESTAURANT_CONFIG.phoneDisplay})`}
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#128C7E] border border-white" />
        </span>
        <MessageCircle className="w-7 h-7 fill-black" />
      </button>
    </div>
  );
};
