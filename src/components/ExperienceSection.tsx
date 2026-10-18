import React from 'react';
import { Flame, Clock, Award, ShieldCheck } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const pillars = [
    {
      icon: Flame,
      title: 'Carbón Seleccionado',
      subtitle: 'Combustión ardiente a 400°C',
      description:
        'Carbón de maderas duras de combustión lenta sin químicos. Genera un calor envolvente que sella la costra caramelizada mientras mantiene el interior tierno.',
    },
    {
      icon: Clock,
      title: 'Maduración en Seco (Dry Aging)',
      subtitle: '30 días de reposo controlado',
      description:
        'Control estricto de humedad y temperatura que descompone suavemente las fibras musculares y concentra notas umami profundas y mantequillosas.',
    },
    {
      icon: Award,
      title: 'Panadería Artesanal Diaria',
      subtitle: 'Horneado cada mañana',
      description:
        'Brioche de mantequilla, pan rústico de papa y nuestro exclusivo pan negro con infusión de carbón activado, horneados a diario para soportar la jugosidad.',
    },
    {
      icon: ShieldCheck,
      title: 'Atención Directa por WhatsApp',
      subtitle: 'Cuidado personalizado de tu pedido',
      description:
        'Cada comanda se gestiona directamente en WhatsApp, asegurando confirmación inmediata de términos de carne, disponibilidad y tiempos exactos.',
    },
  ];

  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-[#0E0E0E] relative border-t border-[#261A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#FFA000] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <Flame className="w-4 h-4 text-[#FF7A00]" />
            <span>El Ritual del Fuego</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FFFFFF] tracking-tight mb-4">
            La Alquimia de las Brasas y el Carbón
          </h2>
          <p className="text-sm sm:text-base text-[#D4CEB8] font-light leading-relaxed">
            Una filosofía donde nada se improvisa. Cuatro pilares innegociables que elevan cada hamburguesa a una categoría superior.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#14100D] border border-[#2B1D16] p-8 rounded-xl flex flex-col justify-between hover:border-[#FF7A00]/60 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B00]/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#201712] border border-[#3A241A] rounded-lg text-[#FF7A00] group-hover:scale-110 group-hover:text-[#FFA000] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-lg font-bold text-[#554035] tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#FFFFFF] mb-1 group-hover:text-[#FFA000] transition-colors">
                    {pillar.title}
                  </h3>
                  <span className="text-[11px] uppercase tracking-wider text-[#FF7A00] font-bold block mb-3">
                    {pillar.subtitle}
                  </span>

                  <p className="text-xs text-[#A89E96] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
