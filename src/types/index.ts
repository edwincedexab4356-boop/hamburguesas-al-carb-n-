export type MenuCategory = 
  | 'todos'
  | 'hamburguesas'
  | 'entradas'
  | 'cortes'
  | 'mar'
  | 'guarniciones'
  | 'postres'
  | 'cocteleria';

export interface CustomizationOption {
  id: string;
  name: string;
  priceExtra: number;
}

export interface ProductCustomizationConfig {
  allowMeatDoneness?: boolean;
  donenessOptions?: string[];
  allowBreadSelection?: boolean;
  breadOptions?: CustomizationOption[];
  allowChorizoSelection?: boolean;
  chorizoOptions?: string[]; // Natural o Picante
  availableCheeses?: CustomizationOption[];
  availableToppings?: CustomizationOption[];
}

export interface Product {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  image: string;
  isFeatured?: boolean;
  badge?: string;
  customization?: ProductCustomizationConfig;
}

export interface SelectedCustomizations {
  meatDoneness?: string;
  bread?: CustomizationOption;
  chorizoType?: string;
  extraCheeses?: CustomizationOption[];
  extraToppings?: CustomizationOption[];
  specialNotes?: string;
}

export interface CartItem {
  cartItemId: string; // Unique hash based on product id + customizations
  product: Product;
  quantity: number;
  customizations?: SelectedCustomizations;
  unitPrice: number; // base price + extras
}

export type DeliveryMode = 'delivery' | 'pickup';

export type PaymentMethod = 
  | 'Transferencia Bancaria Directa'
  | 'Efectivo contra entrega'
  | 'Tarjeta de Débito / Crédito al recibir';

export interface OrderFormState {
  fullName: string;
  phone: string;
  deliveryMode: DeliveryMode;
  address: string;
  reference: string;
  paymentMethod: PaymentMethod;
  notes: string;
}
