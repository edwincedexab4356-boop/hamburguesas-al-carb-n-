import React, { useState } from 'react';
import { Maximize2, X, Flame } from 'lucide-react';

interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const images: GalleryItem[] = [
    {
      src: '/images/chori_burger_artisan_1792359112002.jpg',
      title: 'Chori Burger al Carbón con Queso Fundente',
      category: 'Hamburguesas de Autor',
    },
    {
      src: '/images/pineapple_bourbon_burger_1792359112697.jpg',
      title: 'Glaseado de Miel & Piña a la Brasa',
      category: 'Especialidades al Fuego',
    },
    {
      src: '/images/double_reserve_burger_1792359113247.jpg',
      title: 'Doble Black Angus con Raclette Fundido',
      category: 'Cortes Seleccionados',
    },
    {
      src: '/images/prime_tomahawk_steak_1792359202293.jpg',
      title: 'Tomahawk Prime a 400°C sobre Brasas',
      category: 'Cortes a las Brasas',
    },
    {
      src: '/images/luxury_restaurant_interior_1792359113643.jpg',
      title: 'Salón Principal y Cocina de Fuego Abierto',
      category: 'Ambiente Fine Dining',
    },
    {
      src: '/images/smoked_craft_cocktail_1792359202327.jpg',
      title: 'Cóctel Ahumado con Esencia de Roble y Bourbon',
      category: 'Mixología Botánica',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#110F0D] relative border-t border-[#261A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#FFA000] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <Flame className="w-4 h-4 text-[#FF7A00]" />
            <span>Galería Visual</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FFFFFF] tracking-tight mb-4">
            La Estética del Carbón &amp; Fuego
          </h2>
          <p className="text-sm sm:text-base text-[#D4CEB8] font-light leading-relaxed">
            Un recorrido fotográfico por los detalles, la textura de las brasas y la dedicación en cada montaje.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div
              key={img.title}
              onClick={() => setActiveImage(img)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#181310] border border-[#2B1D16] hover:border-[#FF7A00] transition-all cursor-pointer shadow-lg"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-wider text-[#FFA000] font-bold">
                  {img.category}
                </span>
                <h4 className="font-serif text-base font-bold text-[#FFFFFF]">
                  {img.title}
                </h4>
                <div className="mt-2 text-[#FF7A00] flex items-center gap-1 text-xs font-semibold">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ampliar fotografía</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#14100D] rounded-xl overflow-hidden border border-[#3A241A] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/70 hover:bg-black text-[#F8F6F0] rounded-full transition-colors"
              aria-label="Cerrar vista ampliada"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/10] bg-black">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 bg-[#181310] flex items-center justify-between border-t border-[#261A14]">
              <div>
                <span className="text-xs text-[#FFA000] uppercase tracking-wider block font-bold">
                  {activeImage.category}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#FFFFFF]">
                  {activeImage.title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
