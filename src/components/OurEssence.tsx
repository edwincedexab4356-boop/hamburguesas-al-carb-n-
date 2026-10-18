import React from 'react';
import { Sparkles, UtensilsCrossed, FlameKindling, Flame } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurant';

export const OurEssence: React.FC = () => {
  return (
    <section id="esencia" className="py-24 sm:py-32 bg-[#110F0D] relative overflow-hidden">
      {/* Subtle background ember glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFA000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 text-[#FFA000] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Nuestra Esencia</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FFFFFF] tracking-tight max-w-2xl leading-tight text-balance">
            Donde el fuego del carbón se encuentra con la alta gastronomía
          </h2>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Detail */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#2E2018] shadow-2xl group">
              <img
                src="/src/assets/images/luxury_restaurant_interior_1792359113643.jpg"
                alt="Ambiente sofisticado de cocina abierta y parrilla al carbón"
                className="w-full h-[400px] sm:h-[500px] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/85 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#14100D]/95 backdrop-blur-md rounded-lg border border-[#332219] max-w-md shadow-xl">
                <span className="text-xs uppercase tracking-widest text-[#FF7A00] font-bold block mb-1">
                  El Fuego Vivo
                </span>
                <p className="text-xs text-[#E0DDD5] leading-relaxed">
                  Parrilla abierta con carbón seleccionado por su combustión limpia, brasa constante y aroma amaderado que sella el jugo de cada hamburguesa.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Blocks */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            {/* Primary Quote */}
            <div className="border-l-2 border-[#FF7A00] pl-6 py-2 bg-[#181310]/40 rounded-r-lg">
              <blockquote className="font-serif text-xl sm:text-2xl italic text-[#FFFFFF] leading-relaxed">
                “Cada ingrediente tiene una historia. Cada plato, una intención. Cada visita, el comienzo de un recuerdo.”
              </blockquote>
              <cite className="block mt-3 text-xs tracking-widest uppercase text-[#FFA000] font-semibold not-italic">
                — Manifiesto Culinario {RESTAURANT_CONFIG.name}
              </cite>
            </div>

            <p className="text-[#D4CEB8] text-sm sm:text-base leading-relaxed">
              No concebimos la hamburguesa como comida rápida, sino como un arte culinario a las brasas. Cada receta equilibra el porcentaje exacto de carne madurada, el sellado crujiente del carbón y salsas reducidas pacientemente.
            </p>

            {/* Core Pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-3.5 rounded-lg bg-[#16120E] border border-[#2B1D16] hover:border-[#FF7A00]/40 transition-colors">
                <div className="p-2.5 rounded bg-[#201712] border border-[#3A241A] text-[#FF7A00] shrink-0">
                  <FlameKindling className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#FFFFFF]">
                    Brasa Natural &amp; Carbón Seleccionado
                  </h4>
                  <p className="text-xs text-[#A89E96] mt-1 leading-relaxed">
                    Sin acelerantes ni gas. Solo carbón noble, calor homogéneo y el punto exacto de humo aromático que carameliza las fibras sin deshidratarlas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-lg bg-[#16120E] border border-[#2B1D16] hover:border-[#FF7A00]/40 transition-colors">
                <div className="p-2.5 rounded bg-[#201712] border border-[#3A241A] text-[#FFA000] shrink-0">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#FFFFFF]">
                    Cortes Madurados &amp; Molienda Diaria
                  </h4>
                  <p className="text-xs text-[#A89E96] mt-1 leading-relaxed">
                    Carne de primera categoría con molienda gruesa realizada horas antes del servicio para preservar la terneza y jugosidad inconfundible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-lg bg-[#16120E] border border-[#2B1D16] hover:border-[#FF7A00]/40 transition-colors">
                <div className="p-2.5 rounded bg-[#201712] border border-[#3A241A] text-[#FF7A00] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#FFFFFF]">
                    Personalización Sin Límites
                  </h4>
                  <p className="text-xs text-[#A89E96] mt-1 leading-relaxed">
                    Elige el término de la carne, panes artesanales horneados en casa, variedades de chorizos parrillero (natural o picante) y quesos fundidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
