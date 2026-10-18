import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, SelectedCustomizations, DeliveryMode, OrderFormState } from '../types';
import { RESTAURANT_CONFIG } from '../config/restaurant';

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCustomizerFor: Product | null;
  setOpenCustomizerFor: (product: Product | null) => void;
  addToCart: (product: Product, quantity?: number, customizations?: SelectedCustomizations) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
  totalItemsCount: number;
  subtotal: number;
  deliveryFee: number;
  totalEstimated: number;
  orderForm: OrderFormState;
  setOrderForm: React.Dispatch<React.SetStateAction<OrderFormState>>;
  updateDeliveryMode: (mode: DeliveryMode) => void;
}

const CART_STORAGE_KEY = 'maison_elite_cart_v1';
const FORM_STORAGE_KEY = 'maison_elite_form_v1';

const defaultOrderForm: OrderFormState = {
  fullName: '',
  phone: '',
  deliveryMode: 'delivery',
  address: '',
  reference: '',
  paymentMethod: 'Transferencia Bancaria Directa',
  notes: '',
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orderForm, setOrderForm] = useState<OrderFormState>(() => {
    try {
      const saved = localStorage.getItem(FORM_STORAGE_KEY);
      return saved ? { ...defaultOrderForm, ...JSON.parse(saved) } : defaultOrderForm;
    } catch {
      return defaultOrderForm;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [openCustomizerFor, setOpenCustomizerFor] = useState<Product | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(orderForm));
    } catch {
      // ignore
    }
  }, [orderForm]);

  const addToCart = (
    product: Product,
    quantity = 1,
    customizations?: SelectedCustomizations
  ) => {
    // Generate deterministic id based on product and customizations
    const custKey = customizations ? JSON.stringify(customizations) : 'standard';
    const cartItemId = `${product.id}_${custKey}`;

    // Calculate unit price including extras
    let extrasTotal = 0;
    if (customizations) {
      if (customizations.bread) extrasTotal += customizations.bread.priceExtra;
      if (customizations.extraCheeses) {
        customizations.extraCheeses.forEach((c) => (extrasTotal += c.priceExtra));
      }
      if (customizations.extraToppings) {
        customizations.extraToppings.forEach((t) => (extrasTotal += t.priceExtra));
      }
    }
    const unitPrice = product.price + extrasTotal;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const next = [...prevCart];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }
      return [
        ...prevCart,
        {
          cartItemId,
          product,
          quantity,
          customizations,
          unitPrice,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateDeliveryMode = (mode: DeliveryMode) => {
    setOrderForm((prev) => ({ ...prev, deliveryMode: mode }));
  };

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const deliveryFee = orderForm.deliveryMode === 'delivery' ? RESTAURANT_CONFIG.deliveryFee : 0;

  const totalEstimated = subtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        openCustomizerFor,
        setOpenCustomizerFor,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        totalItemsCount,
        subtotal,
        deliveryFee,
        totalEstimated,
        orderForm,
        setOrderForm,
        updateDeliveryMode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
