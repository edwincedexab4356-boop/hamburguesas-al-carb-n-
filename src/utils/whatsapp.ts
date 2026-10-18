import { RESTAURANT_CONFIG } from '../config/restaurant';
import { CartItem, OrderFormState } from '../types';

export function buildWhatsAppOrderMessage(
  cart: CartItem[],
  form: OrderFormState,
  subtotal: number,
  deliveryFee: number,
  total: number
): string {
  const isDelivery = form.deliveryMode === 'delivery';

  let itemsText = '';
  cart.forEach((item) => {
    const itemTotal = (item.unitPrice * item.quantity).toFixed(2);
    itemsText += `• ${item.quantity}x ${item.product.name} — $${itemTotal}\n`;

    if (item.customizations) {
      const c = item.customizations;
      if (c.meatDoneness) {
        itemsText += `   - Término de carne: ${c.meatDoneness}\n`;
      }
      if (c.chorizoType) {
        itemsText += `   - Elección: ${c.chorizoType}\n`;
      }
      if (c.bread) {
        itemsText += `   - Tipo de pan: ${c.bread.name}\n`;
      }
      if (c.extraCheeses && c.extraCheeses.length > 0) {
        itemsText += `   - Quesos extra: ${c.extraCheeses.map((q) => q.name).join(', ')}\n`;
      }
      if (c.extraToppings && c.extraToppings.length > 0) {
        itemsText += `   - Toppings extra: ${c.extraToppings.map((t) => t.name).join(', ')}\n`;
      }
      if (c.specialNotes && c.specialNotes.trim()) {
        itemsText += `   - Nota especial: "${c.specialNotes.trim()}"\n`;
      }
    }
  });

  const lines = [
    `Hola, quiero realizar un pedido en ${RESTAURANT_CONFIG.name}.`,
    ``,
    `Nombre: ${form.fullName || 'No especificado'}`,
    `Teléfono de contacto: ${form.phone ? form.phone : 'El de este chat de WhatsApp'}`,
    `Modalidad: ${isDelivery ? 'Entrega a Domicilio' : 'Retiro en el Restaurante'}`,
  ];

  if (isDelivery) {
    lines.push(`Dirección: ${form.address || 'Pendiente de coordinar'}`);
    if (form.reference && form.reference.trim()) {
      lines.push(`Referencia / Ubicación: ${form.reference.trim()}`);
    }
  }

  lines.push(`Método de pago preferido: ${form.paymentMethod}`);
  lines.push(``);
  lines.push(`MI PEDIDO:`);
  lines.push(itemsText.trimEnd());
  lines.push(``);
  lines.push(`Subtotal: $${subtotal.toFixed(2)}`);

  if (isDelivery && deliveryFee > 0) {
    lines.push(`Costo estimado de entrega: $${deliveryFee.toFixed(2)}`);
  }

  lines.push(`Total estimado: $${total.toFixed(2)}`);
  lines.push(``);
  lines.push(`Observaciones: ${form.notes?.trim() ? form.notes.trim() : 'Ninguna'}`);
  lines.push(``);
  lines.push(`Por favor, confirmen la disponibilidad y el pedido. Gracias.`);

  return lines.join('\n');
}

export function openWhatsAppOrder(
  cart: CartItem[],
  form: OrderFormState,
  subtotal: number,
  deliveryFee: number,
  total: number
): void {
  const message = buildWhatsAppOrderMessage(cart, form, subtotal, deliveryFee, total);
  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${RESTAURANT_CONFIG.phoneWhatsappRaw}?text=${encoded}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

export function openWhatsAppInquiry(topic?: string): void {
  const defaultText = topic
    ? `Hola ${RESTAURANT_CONFIG.name}, deseo consultar sobre: ${topic}.`
    : `Hola ${RESTAURANT_CONFIG.name}, me gustaría hacer una consulta sobre una reserva o el menú.`;
  const encoded = encodeURIComponent(defaultText);
  const whatsappUrl = `https://wa.me/${RESTAURANT_CONFIG.phoneWhatsappRaw}?text=${encoded}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
