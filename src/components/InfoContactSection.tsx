import React from 'react';
import { Clock, MapPin, Phone, MessageCircle, ArrowUpRight, Flame } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurant';
import { openWhatsAppInquiry } from '../utils/whatsapp';

export const InfoContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-24 sm:py-32 bg-[#0E0E0E] relative border-t border-[#261A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#FFA000] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <Flame className="w-4 h-4 text-[#FF7A00]" />
            <span>Visítanos &amp; Contáctanos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FFFFFF] tracking-tight mb-4">
            Ubicación &amp; Horarios de Brasa
          </h2>
          <p className="text-sm sm:text-base text-[#D4CEB8] font-light">
            Visítanos para vivir la experiencia en sala o contacta a nuestro equipo para pedidos especiales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Horarios */}
          <div className="bg-[#14100D] border border-[#2B1D16] p-8 rounded-xl flex flex-col justify-between hover:border-[#FF7A00]/50 transition-colors shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#201712] border border-[#3A241A] flex items-center justify-center text-[#FF7A00] mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FFFFFF] mb-4">
                Horario de Atención
              </h3>

              <div className="space-y-4 text-xs text-[#D4CEB8]">
                <div className="pb-3 border-b border-[#261A14]">
                  <span className="text-[#A89E96] block mb-1">Martes a Jueves:</span>
                  <p className="font-bold text-[#FFFFFF]">{RESTAURANT_CONFIG.scheduleWeekday}</p>
                </div>

                <div className="pb-3 border-b border-[#261A14]">
                  <span className="text-[#A89E96] block mb-1">Fin de Semana (Viernes a Domingo):</span>
                  <p className="font-bold text-[#FFFFFF]">{RESTAURANT_CONFIG.scheduleWeekend}</p>
                </div>

                <div>
                  <span className="text-[#FFA000] font-semibold block mb-1">Día de Reposo:</span>
                  <p className="text-[#88786F]">Lunes cerrado por limpieza profunda y curación de parrillas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Ubicación & Retiros */}
          <div className="bg-[#14100D] border border-[#2B1D16] p-8 rounded-xl flex flex-col justify-between hover:border-[#FF7A00]/50 transition-colors shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#201712] border border-[#3A241A] flex items-center justify-center text-[#FF7A00] mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FFFFFF] mb-4">
                Dirección del Restaurante
              </h3>

              <div className="space-y-3 text-xs text-[#D4CEB8] mb-6">
                <p className="text-sm font-bold text-[#FFFFFF]">
                  {RESTAURANT_CONFIG.address}
                </p>
                <p className="text-[#A89E96]">
                  {RESTAURANT_CONFIG.city}
                </p>
                <p className="text-[11px] text-[#77665B] leading-relaxed">
                  Zona con valet parking y área reservada para retiro express de pedidos take-away.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#261A14]">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  RESTAURANT_CONFIG.address + ', ' + RESTAURANT_CONFIG.city
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#FFA000] hover:text-[#FF7A00] font-bold"
              >
                <span>Cómo llegar en Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Contacto Directo WhatsApp */}
          <div className="bg-gradient-to-b from-[#1E1510] to-[#120E0B] border border-[#FF7A00]/50 p-8 rounded-xl flex flex-col justify-between shadow-xl shadow-[#FF6B00]/10">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#FF7A00]/15 border border-[#FF7A00]/50 flex items-center justify-center text-[#FFA000] mb-6">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FFFFFF] mb-2">
                Atención Inmediata
              </h3>
              <p className="text-xs text-[#A89E96] mb-6 leading-relaxed">
                ¿Deseas consultar disponibilidad para una mesa, eventos privados o preguntas sobre la carta al carbón?
              </p>

              <div className="p-4 bg-[#0E0E0E] rounded-lg border border-[#2B1D16] mb-6">
                <span className="text-[10px] text-[#A89E96] uppercase tracking-wider block mb-1">
                  Línea Oficial WhatsApp
                </span>
                <p className="font-serif text-xl font-bold text-[#FFA000]">
                  {RESTAURANT_CONFIG.phoneDisplay}
                </p>
              </div>
            </div>

            <button
              onClick={() => openWhatsAppInquiry('Reservas y eventos')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs font-extrabold tracking-wider rounded-md transition-all active:scale-95 shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Iniciar Chat de WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
