import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurEssence } from './components/OurEssence';
import { FeaturedDishes } from './components/FeaturedDishes';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InfoContactSection } from './components/InfoContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { DishCustomizerModal } from './components/DishCustomizerModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

const MainLayout: React.FC = () => {
  const { openCustomizerFor, setOpenCustomizerFor } = useCart();

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E8] flex flex-col font-sans selection:bg-[#C7A66A] selection:text-black">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <OurEssence />
        <FeaturedDishes />
        <MenuSection />
        <ExperienceSection />
        <GallerySection />
        <TestimonialsSection />
        <InfoContactSection />
        <FAQSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Side Cart Drawer */}
      <CartDrawer />

      {/* Dish Customizer Modal */}
      {openCustomizerFor && (
        <DishCustomizerModal
          product={openCustomizerFor}
          onClose={() => setOpenCustomizerFor(null)}
        />
      )}

      {/* Floating Concierge Action */}
      <FloatingWhatsAppButton />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
