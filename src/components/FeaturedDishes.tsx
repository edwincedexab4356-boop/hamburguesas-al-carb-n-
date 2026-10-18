import React from 'react';
import { SlidersHorizontal, Plus, Flame } from 'lucide-react';
import { Product } from '../types';
import { MENU_PRODUCTS } from '../data/menu';
import { useCart } from '../context/CartContext';

export const FeaturedDishes: React.FC = () => {
  const { setOpenCustomizerFor, addToCart } = useCart();

  const featured = MENU_PRODUCTS.filter((p) => p.isFeatured).slice(0, 3);

  const handleQuickAdd = (product: Product) => {
    if (product.customization) {
      setOpenCustomizerFor(product);
    } else {
      addToCart(product, 1);
    }
  };

  return (
    <section className="py-20 bg-[#0E0E0E] border-t border-[#241A14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#FFA000] font-bold mb-2">
              <Flame className="w-4 h-4 text-[#FF7A00]" />
              <span>Selección de la Brasa</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
              Creaciones Icónicas al Carbón
            </h2>
          </div>
          <a
            href="#menu"
            className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] hover:text-[#FFA000] transition-colors inline-flex items-center gap-1 self-start md:self-auto py-1 border-b border-[#FF7A00]/40"
          >
            Ver carta completa ({MENU_PRODUCTS.length} platos) &rarr;
          </a>
        </div>

        {/* 3-Column Luxury Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group bg-[#14110E] rounded-xl border border-[#2B1D16] hover:border-[#FF7A00] transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF6B00]/15"
            >
              {/* Product Media */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#181310]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-transparent to-transparent opacity-80" />

                {/* Badge matching logo flame style */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[#0E0E0E]/90 border border-[#FF7A00]/60 px-3 py-1 text-[11px] font-bold tracking-wider text-[#FFA000] uppercase rounded-md shadow-md">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#FFFFFF] group-hover:text-[#FFA000] transition-colors mb-2">
                    {product.name}
                  </h3>

                  <span className="font-serif text-2xl font-bold text-[#FF7A00] block mb-3 tabular-nums">
                    ${product.price.toFixed(2)}
                  </span>

                  <p className="text-xs text-[#A89E96] leading-relaxed line-clamp-3 mb-6">
                    {product.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#261A14] flex items-center gap-2">
                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#FF7A00] to-[#E65100] hover:from-[#FFA000] hover:to-[#FF6B00] text-white text-xs font-bold tracking-wider rounded-md transition-all active:scale-98 shadow-md shadow-[#FF6B00]/25"
                  >
                    {product.customization ? (
                      <>
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        <span>Personalizar y Pedir</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Añadir al Pedido</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
