import React from 'react';
import { Star, Quote, Flame } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Alejandro Viteri',
      role: 'Comensal Frecuente',
      dish: 'Chori Burger & Doble Reserva',
      quote:
        'El sabor del carbón real es incomparable. El balance del chorizo artesanal con el queso raclette fundido es de otro nivel. Sin duda, la mejor experiencia de hamburguesa gourmet.',
      rating: 5,
    },
    {
      name: 'Valeria Cárdenas',
      role: 'Crítica Gastronómica Independiente',
      dish: 'Honey Bourbon & Roasted Pineapple',
      quote:
        'La piña caramelizada con el glaseado de miel y el toque ahumado del pan negro es una combinación magistral. Se nota el cuidado milimétrico en cada detalle y la cocción al fuego vivo.',
      rating: 5,
    },
    {
      name: 'Sebastián Andrade',
      role: 'Cliente Domicilio WhatsApp',
      dish: 'Maison Truffe & Papas Trufadas',
      quote:
        'Pedir por WhatsApp fue súper ágil y transparente. El empaque preserva la temperatura del pan y la carne llegó en su término medio jugoso perfecto. 10/10.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0E0E0E] relative border-t border-[#261A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-[#FFA000] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <Flame className="w-4 h-4 text-[#FF7A00]" />
            <span>Comensales &amp; Experiencias</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FFFFFF] tracking-tight mb-4">
            Elogios a las Brasas
          </h2>
          <p className="text-xs text-[#88786F] italic">
            * Contenido de demostración editable para el restaurante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#14100D] border border-[#2B1D16] p-8 rounded-xl flex flex-col justify-between hover:border-[#FF7A00]/50 transition-colors relative shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-[#FF7A00] gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF7A00]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#2D2019]" />
                </div>

                <p className="text-xs sm:text-sm text-[#D4CEB8] leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#261A14]">
                <h4 className="font-serif text-base font-bold text-[#FFFFFF]">
                  {t.name}
                </h4>
                <div className="flex items-center gap-2 text-[11px] text-[#A89E96] mt-0.5">
                  <span>{t.role}</span>
                  <span>·</span>
                  <span className="text-[#FFA000] font-semibold">{t.dish}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
