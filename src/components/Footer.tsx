import React from 'react';
import { Instagram, Facebook, Flame } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurant';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090807] border-t border-[#261A14] py-16 text-xs text-[#8E7E73]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#20150F]">
          {/* Brand Col with Logo */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={RESTAURANT_CONFIG.logoPath}
                alt={RESTAURANT_CONFIG.name}
                className="w-12 h-12 rounded-full object-cover border border-[#FF7A00] shadow-md shadow-[#FF6B00]/20"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-widest text-white uppercase">
                  HAMBURGUESAS
                </span>
                <span className="text-[12px] font-bold tracking-widest text-[#FF7A00] uppercase font-sans">
                  Al Carbón
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A89E96] max-w-md leading-relaxed font-light">
              Hamburguesas de autor y cortes seleccionados sellados sobre carbón ardiente. Sabor auténtico a las brasas con servicio y pedidos directos por WhatsApp.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={RESTAURANT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#16120E] border border-[#2E2018] flex items-center justify-center text-[#FF7A00] hover:text-[#FFA000] hover:border-[#FF7A00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#16120E] border border-[#2E2018] flex items-center justify-center text-[#FF7A00] hover:text-[#FFA000] hover:border-[#FF7A00] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#FFFFFF] uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#inicio" className="hover:text-[#FFA000] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#esencia" className="hover:text-[#FFA000] transition-colors">
                  Nuestra Esencia
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FFA000] transition-colors">
                  Menú a la Brasa
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#FFA000] transition-colors">
                  El Ritual del Fuego
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#FFA000] transition-colors">
                  Ubicación &amp; Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Pedidos & Legal */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#FFFFFF] uppercase tracking-wider mb-4">
              Pedidos &amp; Reservas
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-[#E0DDD5]">
                WhatsApp:{' '}
                <a
                  href={`https://wa.me/${RESTAURANT_CONFIG.phoneWhatsappRaw}`}
                  className="text-[#FFA000] hover:underline font-bold"
                >
                  {RESTAURANT_CONFIG.phoneDisplay}
                </a>
              </p>
              <p className="text-[#A89E96]">{RESTAURANT_CONFIG.address}</p>
              <p className="text-[#A89E96]">{RESTAURANT_CONFIG.city}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A6A5E]">
          <p>© {new Date().getFullYear()} {RESTAURANT_CONFIG.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <span>Hamburguesas al Carbón</span>
            <span aria-hidden="true">·</span>
            <span>Brasas de Autor</span>
            <span aria-hidden="true">·</span>
            <span>Pedidos WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
