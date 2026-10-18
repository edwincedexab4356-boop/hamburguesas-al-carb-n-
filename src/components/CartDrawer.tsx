import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShoppingBag,
  MapPin,
  Store,
  CreditCard,
  MessageCircle,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { openWhatsAppOrder } from '../utils/whatsapp';
import { RESTAURANT_CONFIG } from '../config/restaurant';
import { DeliveryMode, PaymentMethod } from '../types';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    deliveryFee,
    totalEstimated,
    orderForm,
    setOrderForm,
    updateDeliveryMode,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout'>('cart');
  const [validationError, setValidationError] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!orderForm.fullName.trim()) {
      setValidationError('Por favor ingresa tu nombre completo para el pedido.');
      return;
    }

    if (orderForm.deliveryMode === 'delivery' && !orderForm.address.trim()) {
      setValidationError('Por favor ingresa la dirección de entrega.');
      return;
    }

    openWhatsAppOrder(cart, orderForm, subtotal, deliveryFee, totalEstimated);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside
          className="w-screen max-w-lg bg-[#120F0D] border-l border-[#2E1E16] shadow-2xl flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-heading"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#2A1C15] flex items-center justify-between bg-[#17130F]">
            <div className="flex items-center gap-3">
              <img
                src={RESTAURANT_CONFIG.logoPath}
                alt={RESTAURANT_CONFIG.name}
                className="w-10 h-10 rounded-full object-cover border border-[#FF7A00]/60 shadow-md shadow-[#FF6B00]/20"
              />
              <div>
                <h2 id="cart-heading" className="font-serif text-xl font-bold text-[#FFFFFF]">
                  {checkoutStep === 'cart' ? 'Tu Pedido al Carbón' : 'Datos para WhatsApp'}
                </h2>
                <span className="text-xs text-[#A89E96]">
                  {cart.length} {cart.length === 1 ? 'producto en comanda' : 'productos en comanda'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#A89E96] hover:text-[#FFFFFF] hover:bg-[#261A14] rounded-full transition-colors"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Empty State */}
          {cart.length === 0 ? (
            <div className="p-8 flex flex-col items-center justify-center flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-[#1A1410] border border-[#332219] flex items-center justify-center text-[#FF7A00] mb-4 shadow-lg shadow-[#FF6B00]/10">
                <ShoppingBag className="w-8 h-8 opacity-70" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FFFFFF] mb-2">
                Tu pedido está vacío
              </h3>
              <p className="text-xs text-[#A89E96] max-w-xs mb-6">
                Descubre nuestras hamburguesas al carbón, cortes a la brasa y guarniciones para encender tu experiencia.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#FF7A00] to-[#E65100] text-white text-xs font-bold rounded-md tracking-wider transition-all shadow-md shadow-[#FF6B00]/20 hover:scale-102"
              >
                Explorar el Menú
              </button>
            </div>
          ) : (
            <>
              {/* Step 1: Cart Items List */}
              {checkoutStep === 'cart' ? (
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.cartItemId}
                      className="p-4 bg-[#181310] rounded-xl border border-[#2B1D16] hover:border-[#FF7A00]/40 transition-colors flex gap-4 relative group"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md shrink-0 border border-[#3A261D]"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif text-base font-bold text-[#FFFFFF] leading-tight">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeItem(item.cartItemId)}
                            className="text-[#88786F] hover:text-red-400 p-1 transition-colors"
                            aria-label={`Eliminar ${item.product.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Customization Details */}
                        {item.customizations && (
                          <div className="my-2 p-2 bg-[#120D0A] rounded text-[11px] text-[#A89E96] space-y-0.5 border border-[#261A14]">
                            {item.customizations.meatDoneness && (
                              <p>
                                <strong className="text-[#FFA000]">Término:</strong>{' '}
                                {item.customizations.meatDoneness}
                              </p>
                            )}
                            {item.customizations.chorizoType && (
                              <p>
                                <strong className="text-[#FFA000]">Chorizo:</strong>{' '}
                                {item.customizations.chorizoType}
                              </p>
                            )}
                            {item.customizations.bread && (
                              <p>
                                <strong className="text-[#FFA000]">Pan:</strong>{' '}
                                {item.customizations.bread.name}
                              </p>
                            )}
                            {item.customizations.extraCheeses &&
                              item.customizations.extraCheeses.length > 0 && (
                                <p>
                                  <strong className="text-[#FFA000]">Quesos:</strong>{' '}
                                  {item.customizations.extraCheeses.map((q) => q.name).join(', ')}
                                </p>
                              )}
                            {item.customizations.extraToppings &&
                              item.customizations.extraToppings.length > 0 && (
                                <p>
                                  <strong className="text-[#FFA000]">Toppings:</strong>{' '}
                                  {item.customizations.extraToppings.map((t) => t.name).join(', ')}
                                </p>
                              )}
                            {item.customizations.specialNotes && (
                              <p className="italic text-[#99887C]">
                                &ldquo;{item.customizations.specialNotes}&rdquo;
                              </p>
                            )}
                          </div>
                        )}

                        {/* Price and Stepper */}
                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#261A14]">
                          <div className="flex items-center bg-[#140F0C] border border-[#332219] rounded-md">
                            <button
                              onClick={() => updateQuantity(item.cartItemId, -1)}
                              className="px-2 py-1 text-[#FF7A00] hover:bg-[#241711] transition-colors"
                              aria-label="Disminuir cantidad"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-[#FFFFFF] tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.cartItemId, 1)}
                              className="px-2 py-1 text-[#FF7A00] hover:bg-[#241711] transition-colors"
                              aria-label="Aumentar cantidad"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="text-[10px] text-[#88786F] block">Subtotal</span>
                            <span className="font-serif text-sm font-bold text-[#FF7A00] tabular-nums">
                              ${(item.unitPrice * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Clear Cart Button */}
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={clearCart}
                      className="text-[11px] text-[#88786F] hover:text-red-400 transition-colors flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Vaciar pedido</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Step 2: Checkout Form */
                <form
                  id="checkout-form"
                  onSubmit={handleCheckoutSubmit}
                  className="flex-1 overflow-y-auto p-6 space-y-5 text-xs text-[#D4CEB8]"
                >
                  {validationError && (
                    <div className="p-3 bg-red-950/70 border border-red-700 text-red-200 rounded-md flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* Mode Selector */}
                  <div>
                    <label className="font-serif text-sm font-bold text-[#FFFFFF] block mb-2">
                      Modalidad del Pedido <span className="text-[#FF7A00]">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => updateDeliveryMode('delivery')}
                        className={`p-3 rounded-lg border flex flex-col items-center justify-center gap-1.5 transition-all ${
                          orderForm.deliveryMode === 'delivery'
                            ? 'bg-[#FF7A00]/20 border-[#FF7A00] text-white shadow-md'
                            : 'bg-[#181310] border-[#2E2018] text-[#88786F] hover:border-[#442E22]'
                        }`}
                      >
                        <MapPin className="w-4 h-4 text-[#FF7A00]" />
                        <span className="font-bold text-xs">Entrega a Domicilio</span>
                        <span className="text-[10px] text-[#FFA000] tabular-nums">
                          +${deliveryFee.toFixed(2)}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => updateDeliveryMode('pickup')}
                        className={`p-3 rounded-lg border flex flex-col items-center justify-center gap-1.5 transition-all ${
                          orderForm.deliveryMode === 'pickup'
                            ? 'bg-[#FF7A00]/20 border-[#FF7A00] text-white shadow-md'
                            : 'bg-[#181310] border-[#2E2018] text-[#88786F] hover:border-[#442E22]'
                        }`}
                      >
                        <Store className="w-4 h-4 text-[#FF7A00]" />
                        <span className="font-bold text-xs">Retiro en Restaurante</span>
                        <span className="text-[10px] text-[#A89E96]">Sin costo adicional</span>
                      </button>
                    </div>
                  </div>

                  {/* Customer Full Name */}
                  <div>
                    <label className="font-serif text-sm font-bold text-[#FFFFFF] block mb-1.5">
                      Nombre Completo <span className="text-[#FF7A00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={orderForm.fullName}
                      onChange={(e) =>
                        setOrderForm((prev) => ({ ...prev, fullName: e.target.value }))
                      }
                      placeholder="Ej: Carlos Morales"
                      className="w-full bg-[#181310] border border-[#2E2018] rounded-md p-2.5 text-xs text-[#FFFFFF] placeholder-[#5C4A3F] focus:border-[#FF7A00] focus:outline-none"
                    />
                  </div>

                  {/* Optional Phone */}
                  <div>
                    <label className="font-serif text-sm font-bold text-[#FFFFFF] block mb-1.5">
                      Teléfono Móvil (Opcional)
                    </label>
                    <input
                      type="tel"
                      value={orderForm.phone}
                      onChange={(e) =>
                        setOrderForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="Ej: 099 123 4567"
                      className="w-full bg-[#181310] border border-[#2E2018] rounded-md p-2.5 text-xs text-[#FFFFFF] placeholder-[#5C4A3F] focus:border-[#FF7A00] focus:outline-none"
                    />
                  </div>

                  {/* Address fields (if delivery) */}
                  {orderForm.deliveryMode === 'delivery' && (
                    <>
                      <div>
                        <label className="font-serif text-sm font-bold text-[#FFFFFF] block mb-1.5">
                          Dirección de Entrega <span className="text-[#FF7A00]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={orderForm.address}
                          onChange={(e) =>
                            setOrderForm((prev) => ({ ...prev, address: e.target.value }))
                          }
                          placeholder="Calle principal, número y dpto."
                          className="w-full bg-[#181310] border border-[#2E2018] rounded-md p-2.5 text-xs text-[#FFFFFF] placeholder-[#5C4A3F] focus:border-[#FF7A00] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="font-serif text-sm font-bold text-[#FFFFFF] block mb-1.5">
                          Referencias de Ubicación (Opcional)
                        </label>
                        <input
                          type="text"
                          value={orderForm.reference}
                          onChange={(e) =>
                            setOrderForm((prev) => ({ ...prev, reference: e.target.value }))
                          }
                          placeholder="Ej: Portón negro frente al parque"
                          className="w-full bg-[#181310] border border-[#2E2018] rounded-md p-2.5 text-xs text-[#FFFFFF] placeholder-[#5C4A3F] focus:border-[#FF7A00] focus:outline-none"
                        />
                      </div>
                    </>
                  )}

                  {/* Payment Method Preference */}
                  <div>
                    <label className="font-serif text-sm font-bold text-[#FFFFFF] block mb-1.5">
                      Método de Pago Preferido <span className="text-[#FF7A00]">*</span>
                    </label>
                    <select
                      value={orderForm.paymentMethod}
                      onChange={(e) =>
                        setOrderForm((prev) => ({
                          ...prev,
                          paymentMethod: e.target.value as PaymentMethod,
                        }))
                      }
                      className="w-full bg-[#181310] border border-[#2E2018] rounded-md p-2.5 text-xs text-[#FFFFFF] focus:border-[#FF7A00] focus:outline-none"
                    >
                      <option value="Transferencia Bancaria Directa">
                        Transferencia Bancaria Directa (Pichincha / Guayaquil / Produbanco)
                      </option>
                      <option value="Efectivo contra entrega">
                        Efectivo al recibir (especificar cambio)
                      </option>
                      <option value="Tarjeta de Débito / Crédito al recibir">
                        Tarjeta de Débito / Crédito al recibir (POS móvil)
                      </option>
                    </select>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label className="font-serif text-sm font-bold text-[#FFFFFF] block mb-1.5">
                      Observaciones Especiales del Pedido
                    </label>
                    <textarea
                      value={orderForm.notes}
                      onChange={(e) =>
                        setOrderForm((prev) => ({ ...prev, notes: e.target.value }))
                      }
                      placeholder="Horario deseado de entrega, notas para el asador, etc."
                      className="w-full bg-[#181310] border border-[#2E2018] rounded-md p-2.5 text-xs text-[#FFFFFF] placeholder-[#5C4A3F] focus:border-[#FF7A00] focus:outline-none resize-none h-16"
                    />
                  </div>

                  {/* Transparency Notice */}
                  <div className="p-3 bg-[#1C1612] border border-[#332219] rounded-md text-[11px] text-[#A89E96] leading-relaxed">
                    <p className="flex items-center gap-1.5 font-bold text-[#FFA000] mb-1">
                      <CreditCard className="w-3.5 h-3.5 text-[#FF7A00]" />
                      <span>Confirmación directa por WhatsApp:</span>
                    </p>
                    Al presionar confirmar, se abrirá tu aplicación de WhatsApp con el pedido listo. No se realiza ningún cobro automático aquí: el restaurante confirmará disponibilidad de brasa y tiempos exactos.
                  </div>
                </form>
              )}

              {/* Bottom Sticky Footer */}
              <div className="p-6 border-t border-[#2A1C15] bg-[#17130F] space-y-4">
                {/* Calculations */}
                <div className="space-y-1.5 text-xs text-[#A89E96]">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-serif text-sm font-semibold text-[#FFFFFF] tabular-nums">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  {orderForm.deliveryMode === 'delivery' && (
                    <div className="flex justify-between">
                      <span>Costo de Entrega:</span>
                      <span className="font-serif text-sm font-semibold text-[#FFFFFF] tabular-nums">
                        ${deliveryFee.toFixed(2)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between pt-2 border-t border-[#2B1D16] text-sm">
                    <span className="font-bold text-[#FFFFFF]">Total Estimado:</span>
                    <span className="font-serif text-xl font-bold text-[#FFA000] tabular-nums">
                      ${totalEstimated.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Primary CTA */}
                {checkoutStep === 'cart' ? (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="px-4 py-3 border border-[#332219] hover:bg-[#201814] text-[#A89E96] hover:text-[#FFFFFF] text-xs font-semibold rounded-md tracking-wider transition-colors"
                    >
                      Seguir Pidiendo
                    </button>
                    <button
                      onClick={() => setCheckoutStep('checkout')}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF7A00] to-[#E65100] hover:from-[#FFA000] hover:to-[#FF6B00] text-white text-xs font-bold tracking-wider rounded-md transition-all active:scale-95 shadow-lg shadow-[#FF6B00]/30"
                    >
                      <span>Continuar al Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep('cart')}
                      className="px-4 py-3 border border-[#332219] hover:bg-[#201814] text-[#A89E96] hover:text-[#FFFFFF] text-xs font-semibold rounded-md tracking-wider transition-colors"
                    >
                      Volver
                    </button>
                    <button
                      type="submit"
                      form="checkout-form"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs tracking-wider rounded-md transition-all active:scale-95 shadow-xl shadow-[#25D366]/25"
                    >
                      <MessageCircle className="w-4 h-4 fill-black" />
                      <span>Confirmar Pedido por WhatsApp</span>
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
};
