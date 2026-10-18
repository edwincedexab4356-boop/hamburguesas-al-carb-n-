import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Check, Flame, AlertCircle } from 'lucide-react';
import { Product, CustomizationOption, SelectedCustomizations } from '../types';
import { useCart } from '../context/CartContext';

interface DishCustomizerModalProps {
  product: Product | null;
  onClose: () => void;
}

export const DishCustomizerModal: React.FC<DishCustomizerModalProps> = ({
  product,
  onClose,
}) => {
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [meatDoneness, setMeatDoneness] = useState<string>('');
  const [bread, setBread] = useState<CustomizationOption | undefined>(undefined);
  const [chorizoType, setChorizoType] = useState<string>('');
  const [extraCheeses, setExtraCheeses] = useState<CustomizationOption[]>([]);
  const [extraToppings, setExtraToppings] = useState<CustomizationOption[]>([]);
  const [specialNotes, setSpecialNotes] = useState('');

  // Initialize defaults when product changes
  useEffect(() => {
    if (product?.customization) {
      const c = product.customization;
      if (c.donenessOptions && c.donenessOptions.length > 0) {
        setMeatDoneness(c.donenessOptions[0]);
      } else {
        setMeatDoneness('');
      }

      if (c.breadOptions && c.breadOptions.length > 0) {
        setBread(c.breadOptions[0]);
      } else {
        setBread(undefined);
      }

      if (c.chorizoOptions && c.chorizoOptions.length > 0) {
        setChorizoType(c.chorizoOptions[0]);
      } else {
        setChorizoType('');
      }

      setExtraCheeses([]);
      setExtraToppings([]);
      setSpecialNotes('');
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  const config = product.customization;

  const toggleCheese = (opt: CustomizationOption) => {
    setExtraCheeses((prev) =>
      prev.some((c) => c.id === opt.id)
        ? prev.filter((c) => c.id !== opt.id)
        : [...prev, opt]
    );
  };

  const toggleTopping = (opt: CustomizationOption) => {
    setExtraToppings((prev) =>
      prev.some((t) => t.id === opt.id)
        ? prev.filter((t) => t.id !== opt.id)
        : [...prev, opt]
    );
  };

  // Calculate live item price
  let extrasUnitTotal = 0;
  if (bread) extrasUnitTotal += bread.priceExtra;
  extraCheeses.forEach((c) => (extrasUnitTotal += c.priceExtra));
  extraToppings.forEach((t) => (extrasUnitTotal += t.priceExtra));

  const finalUnitPrice = product.price + extrasUnitTotal;
  const totalPrice = finalUnitPrice * quantity;

  const handleConfirm = () => {
    const customizations: SelectedCustomizations = {
      meatDoneness: meatDoneness || undefined,
      bread: bread || undefined,
      chorizoType: chorizoType || undefined,
      extraCheeses: extraCheeses.length > 0 ? extraCheeses : undefined,
      extraToppings: extraToppings.length > 0 ? extraToppings : undefined,
      specialNotes: specialNotes.trim() || undefined,
    };

    addToCart(product, quantity, customizations);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#14110E] border border-[#332219] rounded-xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="customizer-title"
      >
        {/* Modal Header */}
        <div className="relative p-6 border-b border-[#2B1D16] flex items-center justify-between shrink-0 bg-[#191410]">
          <div className="pr-8">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#FFA000] block mb-1">
              Personalización de Plato al Carbón
            </span>
            <h3 id="customizer-title" className="font-serif text-xl sm:text-2xl font-bold text-[#FFFFFF]">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A89E96] hover:text-[#FFFFFF] hover:bg-[#261A14] rounded-full transition-colors"
            aria-label="Cerrar personalizador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-[#D4CEB8]">
          {/* Product Glance */}
          <div className="flex gap-4 items-center p-3.5 bg-[#1B1612] rounded-lg border border-[#332219]">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md shrink-0 border border-[#3D281E]"
              referrerPolicy="no-referrer"
            />
            <div className="min-w-0">
              <p className="text-xs text-[#A89E96] line-clamp-2 leading-relaxed">
                {product.description}
              </p>
              <span className="font-serif text-base text-[#FF7A00] font-bold mt-1 block tabular-nums">
                Precio base: ${product.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Chorizo Choice (Chori Burger) */}
          {config?.allowChorizoSelection && config.chorizoOptions && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#FF7A00]" />
                <label className="font-serif text-base font-bold text-[#FFFFFF]">
                  Elección de Chorizo Artesanal <span className="text-[#FF7A00]">*</span>
                </label>
              </div>
              <p className="text-xs text-[#A89E96]">
                Elige el perfil de sazón para tu Chori Burger al carbón:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {config.chorizoOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setChorizoType(opt)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                      chorizoType === opt
                        ? 'bg-[#FF7A00]/20 border-[#FF7A00] text-white shadow-sm'
                        : 'bg-[#181310] border-[#2E2018] text-[#A89E96] hover:border-[#442E22]'
                    }`}
                  >
                    <span className="text-xs font-semibold">{opt}</span>
                    {chorizoType === opt && <Check className="w-4 h-4 text-[#FFA000] shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Meat Doneness */}
          {config?.allowMeatDoneness && config.donenessOptions && (
            <div className="space-y-3">
              <label className="font-serif text-base font-bold text-[#FFFFFF] block">
                Término de la Carne a la Brasa <span className="text-[#FF7A00]">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {config.donenessOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setMeatDoneness(opt)}
                    className={`p-2.5 rounded-lg border text-xs font-medium text-center transition-all ${
                      meatDoneness === opt
                        ? 'bg-[#FF7A00]/20 border-[#FF7A00] text-white'
                        : 'bg-[#181310] border-[#2E2018] text-[#A89E96] hover:border-[#442E22]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Bread Choice */}
          {config?.allowBreadSelection && config.breadOptions && (
            <div className="space-y-3">
              <label className="font-serif text-base font-bold text-[#FFFFFF] block">
                Tipo de Pan Artesanal
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {config.breadOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setBread(opt)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                      bread?.id === opt.id
                        ? 'bg-[#FF7A00]/20 border-[#FF7A00] text-white'
                        : 'bg-[#181310] border-[#2E2018] text-[#A89E96] hover:border-[#442E22]'
                    }`}
                  >
                    <span className="text-xs font-medium">{opt.name}</span>
                    <span className="text-xs font-bold text-[#FFA000] ml-2 shrink-0 tabular-nums">
                      {opt.priceExtra > 0 ? `+$${opt.priceExtra.toFixed(2)}` : 'Incluido'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Extra Cheeses */}
          {config?.availableCheeses && config.availableCheeses.length > 0 && (
            <div className="space-y-3">
              <label className="font-serif text-base font-bold text-[#FFFFFF] block">
                Quesos Madurados Extra
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {config.availableCheeses.map((opt) => {
                  const isSelected = extraCheeses.some((c) => c.id === opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleCheese(opt)}
                      className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                        isSelected
                          ? 'bg-[#FF7A00]/20 border-[#FF7A00] text-white'
                          : 'bg-[#181310] border-[#2E2018] text-[#A89E96] hover:border-[#442E22]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#FF7A00] border-[#FF7A00] text-white'
                              : 'border-[#4D3325]'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs">{opt.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Extra Toppings */}
          {config?.availableToppings && config.availableToppings.length > 0 && (
            <div className="space-y-3">
              <label className="font-serif text-base font-bold text-[#FFFFFF] block">
                Toppings de Autor Adicionales
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {config.availableToppings.map((opt) => {
                  const isSelected = extraToppings.some((t) => t.id === opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleTopping(opt)}
                      className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                        isSelected
                          ? 'bg-[#FF7A00]/20 border-[#FF7A00] text-white'
                          : 'bg-[#181310] border-[#2E2018] text-[#A89E96] hover:border-[#442E22]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#FF7A00] border-[#FF7A00] text-white'
                              : 'border-[#4D3325]'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs">{opt.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Notes & Allergies */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-[#FFA000]">
              <AlertCircle className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Instrucciones de cocina o requerimientos especiales:</span>
            </div>
            <textarea
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder="Ejemplo: Sin cebolla, término jugoso, salsa de trufa aparte, alérgico a..."
              className="w-full bg-[#1A1410] border border-[#332219] rounded-lg p-3 text-xs text-[#FFFFFF] placeholder-[#66554B] focus:border-[#FF7A00] focus:outline-none resize-none h-20"
              maxLength={200}
            />
          </div>
        </div>

        {/* Modal Footer (Sticky Summary) */}
        <div className="p-5 border-t border-[#2B1D16] bg-[#181310] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          {/* Quantity Stepper */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#A89E96]">Cantidad:</span>
            <div className="flex items-center bg-[#201814] border border-[#3D281E] rounded-md">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 text-[#FF7A00] hover:bg-[#2B1F19] transition-colors rounded-l-md"
                aria-label="Disminuir cantidad"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-3.5 py-1 text-sm font-bold text-[#FFFFFF] tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-[#FF7A00] hover:bg-[#2B1F19] transition-colors rounded-r-md"
                aria-label="Aumentar cantidad"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
            <div className="text-right">
              <span className="text-[10px] text-[#A89E96] uppercase tracking-wider block">Total</span>
              <span className="font-serif text-xl font-bold text-[#FFA000] tabular-nums">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              onClick={handleConfirm}
              className="flex-1 sm:flex-initial px-6 py-3 bg-gradient-to-r from-[#FF7A00] to-[#E65100] hover:from-[#FFA000] hover:to-[#FF6B00] text-white font-bold text-xs tracking-wider rounded-md transition-all active:scale-95 shadow-lg shadow-[#FF6B00]/30"
            >
              Añadir al Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
