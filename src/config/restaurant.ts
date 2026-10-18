export interface RestaurantConfig {
  name: string;
  tagline: string;
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;
  phoneDisplay: string;
  phoneWhatsappRaw: string;
  address: string;
  city: string;
  scheduleWeekday: string;
  scheduleWeekend: string;
  deliveryFee: number;
  currency: string;
  instagramUrl: string;
  facebookUrl: string;
  tiktokUrl: string;
  logoPath: string;
}

export const RESTAURANT_CONFIG: RestaurantConfig = {
  name: "HAMBURGUESAS AL CARBÓN",
  tagline: "El Auténtico Sabor a las Brasas y Fuego Vivo",
  heroKicker: "HAMBURGUESAS AL CARBÓN · FINE CRAFT & BRASAS",
  heroTitle: "El arte de saborear lo extraordinario",
  heroDescription:
    "Carne seleccionada sellada al calor vivo del carbón ardiente. Una experiencia culinaria con el inconfundible aroma a humo, quesos fundidos al punto y pan artesanal horneado a diario.",
  phoneDisplay: "+593 99 7999 0070",
  phoneWhatsappRaw: "5939979990070",
  address: "Av. Principal Gourmet 1450 & Los Olivos",
  city: "Quito, Ecuador",
  scheduleWeekday: "Martes a Jueves: 13:00 - 22:30",
  scheduleWeekend: "Viernes a Domingo: 12:30 - 23:30 (Lunes cerrado por reposo de brasa)",
  deliveryFee: 2.50,
  currency: "$",
  instagramUrl: "https://instagram.com",
  facebookUrl: "https://facebook.com",
  tiktokUrl: "https://tiktok.com",
  logoPath: "/images/logo.png",
};
