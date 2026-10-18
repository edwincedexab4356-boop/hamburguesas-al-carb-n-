import React, { useState } from 'react';
import { ChevronDown, Flame } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurant';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cómo funciona el pedido directo por WhatsApp?',
      a: `Nuestro menú digital te permite armar tu comanda con todas las personalizaciones (término de carne, pan, quesos y notas especiales). Al confirmar, la web genera un resumen ordenado y abre automáticamente una conversación con nuestra línea oficial (${RESTAURANT_CONFIG.phoneDisplay}) donde nuestro equipo valida disponibilidad y tiempo de entrega.`,
    },
    {
      q: '¿Puedo personalizar el tipo de chorizo o pan en mis hamburguesas?',
      a: 'Por supuesto. Nuestra icónica Chori Burger te permite elegir entre chorizo artesanal natural o chorizo picante ahumado. Además, puedes optar por brioche de mantequilla horneado a diario, pan negro con carbón activado o envoltura fresca de lechuga orgánica.',
    },
    {
      q: '¿Cuál es el tiempo estimado de entrega y costo a domicilio?',
      a: `El tiempo promedio de preparación y envío es de 30 a 45 minutos para garantizar que la carne conserve su temperatura óptima. El costo base de entrega configurado es de $${RESTAURANT_CONFIG.deliveryFee.toFixed(2)}, ajustable según la zona de cobertura.`,
    },
    {
      q: '¿Qué formas de pago son aceptadas?',
      a: 'Aceptamos transferencias bancarias directas a los principales bancos del país, pagos con tarjeta de débito o crédito mediante terminal POS inalámbrico al momento de la entrega, o efectivo exacto.',
    },
    {
      q: '¿Manejan protocolos para celíacos o personas con alergias?',
      a: 'Sí. Contamos con panes sin gluten y opción "Low Carb" en hojas de lechuga hidropónica. Por favor especifica cualquier intolerancia en el campo de observaciones al personalizar tu plato.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#110F0D] relative border-t border-[#261A14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#FFA000] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <Flame className="w-4 h-4 text-[#FF7A00]" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FFFFFF] tracking-tight mb-4">
            Dudas Comunes sobre el Servicio
          </h2>
          <p className="text-sm text-[#D4CEB8] font-light">
            Transparencia y claridad en cada etapa de tu pedido a la brasa.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`bg-[#16120F] border rounded-xl overflow-hidden transition-colors ${
                  isOpen ? 'border-[#FF7A00]/60' : 'border-[#2B1D16]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#1C1612] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#FFFFFF]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FF7A00] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#A89E96] leading-relaxed border-t border-[#261A14]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
