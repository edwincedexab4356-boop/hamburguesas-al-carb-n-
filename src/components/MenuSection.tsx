import React, { useState } from 'react';
import { Plus, Minus, SlidersHorizontal, ShoppingBag, Flame } from 'lucide-react';
import { MENU_PRODUCTS, CATEGORIES_LIST } from '../data/menu';
import { Product, MenuCategory } from '../types';
import { useCart } from '../context/CartContext';

export const MenuSection: React.FC = () => {
  const { addToCart, setOpenCustomizerFor } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'todos'>('todos');
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const filteredProducts =
    selectedCategory === 'todos'
      ? MENU_PRODUCTS
      : MENU_PRODUCTS.filter((p) => p.category === selectedCategory);

  const getQuantity = (id: string) => quantities[id] || 1;

  const updateCardQty = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleAction = (product: Product) => {
    if (product.customization) {
      setOpenCustomizerFor(product);
    } else {
      const qty = getQuantity(product.id);
      addToCart(product, qty);
    }
  };

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#110F0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-[#FFA000] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <Flame className="w-4 h-4 text-[#FF7A00]" />
            <span>Carta Gastronómica</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FFFFFF] tracking-tight mb-4">
            Menú Digital al Carbón
          </h2>
          <p className="text-sm sm:text-base text-[#D4CEB8] font-light leading-relaxed">
            Platos preparados al momento sobre carbón ardiente. Selecciona tus favoritos, personaliza cada ingrediente y envía tu orden directa a nuestro WhatsApp oficial.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none gap-2">
          {CATEGORIES_LIST.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as MenuCategory | 'todos')}
                className={`px-4 py-2.5 text-xs font-semibold tracking-wide rounded-md transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF7A00] to-[#E65100] text-white shadow-lg shadow-[#FF6B00]/30'
                    : 'bg-[#181310] text-[#A89E96] hover:text-[#FFFFFF] hover:bg-[#201814] border border-[#2B1D16] hover:border-[#FF7A00]/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const qty = getQuantity(product.id);
            const isCustomizable = !!product.customization;

            return (
              <div
                key={product.id}
                className="bg-[#15120F] rounded-xl border border-[#2A1C15] hover:border-[#FF7A00]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF6B00]/10"
              >
                {/* Media */}
                <div className="relative aspect-[4/3] bg-[#1A1410] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15120F] via-transparent to-transparent opacity-80" />

                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#0E0E0E]/90 border border-[#FF7A00]/60 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#FFA000] uppercase rounded-md shadow">
                      {product.badge}
                    </div>
                  )}

                  {isCustomizable && (
                    <div className="absolute bottom-3 right-3 bg-[#0E0E0E]/85 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] text-[#FFA000] font-bold flex items-center gap-1 border border-[#FF7A00]/40">
                      <SlidersHorizontal className="w-3 h-3 text-[#FF7A00]" />
                      <span>Personalizable</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FFFFFF] leading-snug group-hover:text-[#FFA000] transition-colors">
                        {product.name}
                      </h3>
                      <span className="font-serif text-xl font-bold text-[#FF7A00] tabular-nums shrink-0">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-xs text-[#A89E96] leading-relaxed line-clamp-3 mb-6">
                      {product.description}
                    </p>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="pt-4 border-t border-[#261A14] flex items-center justify-between gap-3">
                    {/* Quantity Selector */}
                    {!isCustomizable ? (
                      <div className="flex items-center bg-[#1B1511] border border-[#332219] rounded-md">
                        <button
                          type="button"
                          onClick={() => updateCardQty(product.id, -1)}
                          className="px-2.5 py-1.5 text-[#FF7A00] hover:bg-[#2A1D16] transition-colors"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#FFFFFF] tabular-nums">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateCardQty(product.id, 1)}
                          className="px-2.5 py-1.5 text-[#FF7A00] hover:bg-[#2A1D16] transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-[11px] text-[#A89E96] italic">
                        Elige término y extras
                      </span>
                    )}

                    {/* Primary Button */}
                    <button
                      type="button"
                      onClick={() => handleAction(product)}
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold tracking-wider rounded-md transition-all active:scale-95 ${
                        isCustomizable
                          ? 'bg-[#201814] hover:bg-[#FF7A00] hover:text-white text-[#FFA000] border border-[#FF7A00]/50'
                          : 'bg-gradient-to-r from-[#FF7A00] to-[#E65100] hover:from-[#FFA000] hover:to-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/25'
                      }`}
                    >
                      {isCustomizable ? (
                        <>
                          <SlidersHorizontal className="w-3.5 h-3.5" />
                          <span>Personalizar</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Añadir al Pedido</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
