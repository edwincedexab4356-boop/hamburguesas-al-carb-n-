import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, MessageCircle, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../config/restaurant';
import { openWhatsAppInquiry } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoadFailed, setLogoLoadFailed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nuestra Esencia', href: '#esencia' },
    { label: 'Menú', href: '#menu' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[#261E1A] py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0E0E0E]/95 via-[#0E0E0E]/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Logo & Wordmark matching the new uploaded emblem */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-decoration-none"
            aria-label={RESTAURANT_CONFIG.name}
          >
            <div className="relative">
              {/* Flame aura halo on hover */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FFA000] opacity-40 blur-sm group-hover:opacity-80 transition-opacity duration-300" />
              
              {!logoLoadFailed ? (
                <img
                  src={RESTAURANT_CONFIG.logoPath}
                  alt={RESTAURANT_CONFIG.name}
                  className="relative h-11 w-11 sm:h-13 sm:w-13 rounded-full object-cover border-2 border-[#FF7A00] shadow-lg shadow-[#FF6B00]/30 transition-transform duration-300 group-hover:scale-105"
                  onError={() => setLogoLoadFailed(true)}
                />
              ) : (
                <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-[#1A120E] border-2 border-[#FF7A00] flex items-center justify-center text-[#FF7A00]">
                  <Flame className="w-6 h-6 animate-pulse" />
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg sm:text-xl font-extrabold tracking-wider text-white uppercase group-hover:text-[#FFA000] transition-colors leading-none">
                  HAMBURGUESAS
                </span>
              </div>
              <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-[#FF7A00] uppercase font-sans leading-tight">
                Al Carbón
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#E0DDD5] hover:text-[#FF7A00] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#FFA000] after:to-[#FF6B00] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Cart */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick WhatsApp Inquiry button */}
            <button
              onClick={() => openWhatsAppInquiry()}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#FFA000] border border-[#FF7A00]/40 rounded hover:bg-[#FF7A00]/15 hover:border-[#FF7A00] transition-all whitespace-nowrap shrink-0 shadow-sm"
              title="Consultas directas por WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Consultar</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-wider text-white bg-gradient-to-r from-[#FF7A00] to-[#E65100] hover:from-[#FFA000] hover:to-[#FF6B00] transition-all rounded shadow-lg shadow-[#FF6B00]/30 hover:shadow-[#FF6B00]/50 whitespace-nowrap shrink-0 active:scale-95"
              aria-label={`Ver pedido (${totalItemsCount} productos)`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden xs:inline">Mi Pedido</span>
              {totalItemsCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 bg-[#0E0E0E] text-[#FFA000] text-[11px] font-extrabold rounded-full min-w-[20px] text-center border border-[#FF7A00]/50">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#E0DDD5] hover:text-[#FF7A00] transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#12100E] border-b border-[#2E2018] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-[#F8F6F0] hover:text-[#FF7A00] transition-colors py-2 border-b border-[#1F1713]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FFA000] border border-[#FF7A00]/40 rounded hover:bg-[#FF7A00]/15 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#FF7A00]" />
              <span>WhatsApp Directo ({RESTAURANT_CONFIG.phoneDisplay})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
