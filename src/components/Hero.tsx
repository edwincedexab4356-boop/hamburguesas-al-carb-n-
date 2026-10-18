import React from 'react';
import { ArrowDown, Flame, MessageCircle, Sparkles } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurant';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_charcoal_burger_1792359111053.jpg"
          alt="Hamburguesa de autor sellada al carbón de leña ardiente"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Gradients and Dark Vignette Scrim with subtle warm ember bottom glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/80 to-[#0E0E0E]/65" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0E0E0E]/50 to-[#0E0E0E]/95" />
        
        {/* Warm fire ember ambient lighting effect */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-[#FF6B00]/15 via-[#FFA000]/5 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 flex flex-col items-center">
        {/* Logo Badge Emblem Preview */}
        <div className="mb-6 relative group">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#FFA000] to-[#FF3D00] opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-300" />
          <img
            src={RESTAURANT_CONFIG.logoPath}
            alt={RESTAURANT_CONFIG.name}
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#FFA000] shadow-2xl shadow-[#FF6B00]/40"
          />
        </div>

        {/* Subtle Kicker */}
        <div className="inline-flex items-center gap-2 mb-5 text-[#FFA000] text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border border-[#FF7A00]/40 bg-[#16120F]/80 backdrop-blur-sm shadow-lg shadow-[#FF6B00]/10">
          <Flame className="w-4 h-4 text-[#FF7A00] animate-pulse" />
          <span>{RESTAURANT_CONFIG.heroKicker}</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFFFFF] max-w-4xl leading-[1.1] mb-6 text-balance drop-shadow-md">
          {RESTAURANT_CONFIG.heroTitle}
        </h1>

        {/* Emotional Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#E2DFD6] max-w-2xl font-normal leading-relaxed mb-10 text-balance">
          {RESTAURANT_CONFIG.heroDescription}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold tracking-wider text-white bg-gradient-to-r from-[#FF7A00] to-[#E65100] hover:from-[#FFA000] hover:to-[#FF6B00] transition-all rounded shadow-xl shadow-[#FF6B00]/30 hover:shadow-[#FF6B00]/50 active:scale-98"
          >
            <Sparkles className="w-4 h-4" />
            <span>Explorar Menú al Carbón</span>
          </a>

          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold tracking-wider text-[#FFA000] border border-[#FF7A00]/60 bg-[#16120E]/70 hover:bg-[#FF7A00]/15 backdrop-blur-sm transition-all rounded active:scale-98 shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#FF7A00]" />
            <span>Pedir por WhatsApp</span>
          </button>
        </div>

        {/* Charcoal & Fire Metrics */}
        <div className="mt-14 pt-8 border-t border-[#2B201A] grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#FFA000] tabular-nums">400°C</span>
            <span className="text-xs text-[#A89E96] uppercase tracking-wider mt-1">Brasas al Carbón</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#FFA000] tabular-nums">30 Días</span>
            <span className="text-xs text-[#A89E96] uppercase tracking-wider mt-1">Carne Madurada</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#FFA000] tabular-nums">100%</span>
            <span className="text-xs text-[#A89E96] uppercase tracking-wider mt-1">Artesanal Diario</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#FFA000] tabular-nums">Directo</span>
            <span className="text-xs text-[#A89E96] uppercase tracking-wider mt-1">Pedidos por WhatsApp</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#esencia"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#A39D93] hover:text-[#FFA000] transition-colors group"
        aria-label="Desplazarse a Nuestra Esencia"
      >
        <span className="text-[11px] tracking-widest uppercase mb-1 font-sans font-semibold">Descubrir</span>
        <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-[#FFA000]" />
      </a>
    </section>
  );
};
