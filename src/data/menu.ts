import { Product } from '../types';

export const MENU_PRODUCTS: Product[] = [
  {
    id: 'chori-burger',
    name: 'Chori Burger al Carbón de Quebracho',
    category: 'hamburguesas',
    price: 13.50,
    badge: 'Firma de la Casa',
    isFeatured: true,
    image: '/src/assets/images/chori_burger_artisan_1792359112002.jpg',
    description:
      'Medallón de carne madurada sellado a la brasa, rodajas doradas de chorizo artesanal parrillero, cascada de queso cheddar y raclette fundido, pepinillos encurtidos al eneldo y rúcula fresca en pan brioche tostado.',
    customization: {
      allowMeatDoneness: true,
      donenessOptions: ['Término Medio (Recomendado)', 'Tres Cuartos', 'Bien Cocido'],
      allowChorizoSelection: true,
      chorizoOptions: ['Chorizo Artesanal Natural', 'Chorizo Picante Ahumado'],
      allowBreadSelection: true,
      breadOptions: [
        { id: 'brioche', name: 'Brioche Artesanal de Mantequilla', priceExtra: 0 },
        { id: 'carbon', name: 'Pan Negro de Carbón Activado', priceExtra: 1.00 },
        { id: 'papa', name: 'Pan Rústico de Papa', priceExtra: 0.50 },
        { id: 'sin-pan', name: 'Envoltura Fresca de Lechuga (Low Carb)', priceExtra: 0 }
      ],
      availableCheeses: [
        { id: 'extra-cheddar', name: 'Cheddar Inglés Añejado (+ $1.50)', priceExtra: 1.50 },
        { id: 'extra-raclette', name: 'Raclette Suizo Fundido (+ $2.00)', priceExtra: 2.00 },
        { id: 'extra-gorgonzola', name: 'Gorgonzola Italiano (+ $1.75)', priceExtra: 1.75 }
      ],
      availableToppings: [
        { id: 'tocino-crispy', name: 'Tocino Ahumado Extra Crujiente (+ $1.50)', priceExtra: 1.50 },
        { id: 'cebolla-bourbon', name: 'Cebolla Caramelizada al Bourbon (+ $1.25)', priceExtra: 1.25 },
        { id: 'pepinillos-extra', name: 'Pepinillos Encurtidos Caseros (+ $0.75)', priceExtra: 0.75 }
      ]
    }
  },
  {
    id: 'pineapple-bourbon',
    name: 'Honey Bourbon & Roasted Pineapple Burger',
    category: 'hamburguesas',
    price: 14.25,
    badge: 'Creación Especial',
    isFeatured: true,
    image: '/src/assets/images/pineapple_bourbon_burger_1792359112697.jpg',
    description:
      'Pan negro horneado con carbón vegetal, carne sellada a fuego vivo, rodaja gruesa de piña caramelizada al grill, queso provolone fundente, panceta crocante y reducción caliente de miel pura con bourbon ahumado.',
    customization: {
      allowMeatDoneness: true,
      donenessOptions: ['Término Medio (Jugoso)', 'Tres Cuartos', 'Bien Cocido'],
      allowBreadSelection: true,
      breadOptions: [
        { id: 'carbon', name: 'Pan Negro de Carbón Activado (Original)', priceExtra: 0 },
        { id: 'brioche', name: 'Brioche Clásico de Mantequilla', priceExtra: 0 },
        { id: 'papa', name: 'Pan Rústico de Papa', priceExtra: 0.50 }
      ],
      availableCheeses: [
        { id: 'extra-provolone', name: 'Doble Provolone a la Brasa (+ $1.50)', priceExtra: 1.50 },
        { id: 'extra-raclette', name: 'Queso Raclette Cremoso (+ $2.00)', priceExtra: 2.00 }
      ],
      availableToppings: [
        { id: 'extra-pina', name: 'Doble Piña Asada a la Leña (+ $1.50)', priceExtra: 1.50 },
        { id: 'extra-tocino', name: 'Panceta de Cerdo Glaseada (+ $1.75)', priceExtra: 1.75 },
        { id: 'chile-miel', name: 'Toque de Miel Habanero Picante (+ $1.00)', priceExtra: 1.00 }
      ]
    }
  },
  {
    id: 'double-reserve',
    name: 'Doble Reserva Black Angus al Carbón',
    category: 'hamburguesas',
    price: 16.50,
    badge: 'Edición Gourmet',
    isFeatured: true,
    image: '/src/assets/images/double_reserve_burger_1792359113247.jpg',
    description:
      'Doble medallón de 160g de Black Angus madurado 30 días, cascada irresistible de queso raclette alpino y cheddar madurado, tiras crocantes de tocino ahumado en manzano, finos aros de cebolla morada y salsa de la casa.',
    customization: {
      allowMeatDoneness: true,
      donenessOptions: ['Término Medio', 'Tres Cuartos', 'Bien Cocido'],
      allowBreadSelection: true,
      breadOptions: [
        { id: 'brioche-sesamo', name: 'Brioche Artesanal con Sésamo Tostado', priceExtra: 0 },
        { id: 'carbon', name: 'Pan Negro de Carbón Activado', priceExtra: 1.00 },
        { id: 'sin-pan', name: 'Envoltura de Lechuga Orgánica', priceExtra: 0 }
      ],
      availableCheeses: [
        { id: 'extra-triple-cheese', name: 'Triple Capa de Queso Fundido (+ $2.50)', priceExtra: 2.50 },
        { id: 'extra-azul', name: 'Gorgonzola Reserva (+ $2.00)', priceExtra: 2.00 }
      ],
      availableToppings: [
        { id: 'huevo-trufa', name: 'Huevo de Campo Frito con Aceite de Trufa (+ $2.00)', priceExtra: 2.00 },
        { id: 'extra-bacon', name: 'Doble Porción de Tocino Ahumado (+ $2.00)', priceExtra: 2.00 }
      ]
    }
  },
  {
    id: 'maison-truffe',
    name: 'Maison Truffe Wagyu Burger',
    category: 'hamburguesas',
    price: 18.00,
    badge: 'Fine Dining Signature',
    isFeatured: true,
    image: '/src/assets/images/hero_charcoal_burger_1792359111053.jpg',
    description:
      'Corte de Wagyu seleccionado a la parrilla de carbón, queso brie de Meaux fundido con virutas de trufa negra fresca, cebollas estofadas en oporto y emulsión cremosa de tuétano y ajo asado.',
    customization: {
      allowMeatDoneness: true,
      donenessOptions: ['Término Medio (Recomendado del Chef)', 'Tres Cuartos'],
      allowBreadSelection: true,
      breadOptions: [
        { id: 'brioche-negro', name: 'Brioche Dorado con Sésamo Negro', priceExtra: 0 },
        { id: 'carbon', name: 'Pan de Carbón Activado Artesanal', priceExtra: 1.00 }
      ],
      availableCheeses: [
        { id: 'extra-brie', name: 'Extra Queso Brie Francés (+ $2.50)', priceExtra: 2.50 }
      ],
      availableToppings: [
        { id: 'trufa-fresca', name: 'Láminas adicionales de Trufa Negra (+ $4.50)', priceExtra: 4.50 },
        { id: 'hongos-salvajes', name: 'Setas Salteadas al Vino Blanco (+ $2.50)', priceExtra: 2.50 }
      ]
    }
  },
  {
    id: 'tomahawk-prime',
    name: 'Tomahawk Steak Prime a las Brasas (850g)',
    category: 'cortes',
    price: 42.00,
    badge: 'Corte de Autor',
    image: '/src/assets/images/prime_tomahawk_steak_1792359202293.jpg',
    description:
      'Corte Prime con hueso largo sellado a 400°C sobre brasas de quebracho blanco. Acompañado de mantequilla clarificada con hierbas de montaña, flor de sal marina y chimichurri rústico de la casa.',
    customization: {
      allowMeatDoneness: true,
      donenessOptions: ['Término Medio (Recomendado)', 'Tres Cuartos', 'A Punto']
    }
  },
  {
    id: 'truffle-fries',
    name: 'Papas Rústicas con Trufa & Parmesano Reggiano',
    category: 'guarniciones',
    price: 7.50,
    badge: 'Acompañamiento Estrella',
    image: '/src/assets/images/truffle_fries_gourmet_1792359202215.jpg',
    description:
      'Papas andinas seleccionadas con doble cocción para máxima crocancia exterior y corazón suave, bañadas en aceite de trufa blanca de Alba, nieve de Parmesano Reggiano 24 meses y perejil fresco. Incluye aioli casero de ajo asado.',
    customization: {
      availableToppings: [
        { id: 'extra-aioli', name: 'Doble Dip Aioli de Ajo Asado (+ $1.00)', priceExtra: 1.00 },
        { id: 'extra-trufa', name: 'Intensidad Extra de Trufa (+ $2.00)', priceExtra: 2.00 }
      ]
    }
  },
  {
    id: 'smoked-cocktail',
    name: 'Cóctel Ahumado "Roble & Brasa"',
    category: 'cocteleria',
    price: 11.50,
    badge: 'Mixología de Autor',
    image: '/src/assets/images/smoked_craft_cocktail_1792359202327.jpg',
    description:
      'Bourbon añejado en barrica de roble blanco, licor artesanal de café especiado, bitter de naranja y clavo, presentado bajo campana de cristal ahumada al momento con astillas de leña de manzano.',
    customization: {
      availableToppings: [
        { id: 'toque-ahumado-fuerte', name: 'Ahumado Intenso de Madera de Roble (+ $0.00)', priceExtra: 0 }
      ]
    }
  },
  {
    id: 'provoleta-brasas',
    name: 'Provoleta Asada en Hierro Fundido',
    category: 'entradas',
    price: 9.50,
    image: '/src/assets/images/chori_burger_artisan_1792359112002.jpg',
    description:
      'Queso provolone fundido en sartén de hierro sobre carbón, tomates cherry confitados al romero, orégano silvestre y pan de masa madre a la brasa con aceite de oliva extra virgen.',
    customization: {
      availableToppings: [
        { id: 'extra-pan', name: 'Porción Extra de Pan de Masa Madre (+ $1.50)', priceExtra: 1.50 }
      ]
    }
  },
  {
    id: 'pulpo-brasa',
    name: 'Tentáculo de Pulpo al Carbón con Puré Rústico',
    category: 'mar',
    price: 19.50,
    image: '/src/assets/images/hero_charcoal_burger_1792359111053.jpg',
    description:
      'Pulpo tierno sellado a las brasas de quebracho con pimentón de la Vera ahumado, emulsión de limón amarillo y puré rústico de papa andina aromatizado con aceite de oliva.',
  },
  {
    id: 'volcan-chocolate',
    name: 'Volcán Fundente de Cacao Ecuatoriano 70%',
    category: 'postres',
    price: 8.50,
    image: '/src/assets/images/luxury_restaurant_interior_1792359113643.jpg',
    description:
      'Bizcocho tibio de chocolate fino de aroma con corazón líquido fundente, acompañado de quenelle de helado artesanal de vainilla Bourbon de Madagascar y crumble de avellanas tostadas.',
  }
];

export const CATEGORIES_LIST: { id: string; label: string }[] = [
  { id: 'todos', label: 'Todo el Menú' },
  { id: 'hamburguesas', label: 'Hamburguesas al Carbón' },
  { id: 'entradas', label: 'Entradas a la Brasa' },
  { id: 'cortes', label: 'Cortes & Carnes' },
  { id: 'guarniciones', label: 'Guarniciones & Papas' },
  { id: 'mar', label: 'Pescados & Brasas' },
  { id: 'postres', label: 'Postres de Autor' },
  { id: 'cocteleria', label: 'Coctelería & Vinos' },
];
