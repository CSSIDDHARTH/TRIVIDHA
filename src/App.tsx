import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import Hero from './components/sections/Hero';
import BrandStory from './components/sections/BrandStory';
import FeaturedCollection from './components/sections/FeaturedCollection';
import Craftsmanship from './components/sections/Craftsmanship';
import Lookbook from './components/sections/Lookbook';
import Testimonials from './components/sections/Testimonials';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/layout/SmoothScroll';
import CustomCursor from './components/ui/CustomCursor';
import AnimatedBackground from './components/ui/AnimatedBackground';
import CartDrawer from './components/layout/CartDrawer';
import MagneticButton from './components/ui/MagneticButton';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-brand-gold origin-left z-[200]"
      style={{ scaleX }}
    />
  );
}

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.2, ease: "linear" }}
      onAnimationComplete={() => {
        document.body.style.overflow = "auto";
      }}
      className="fixed inset-0 z-[9999] bg-brand-black flex items-center justify-center pointer-events-none"
    >
      <div className="text-center px-6">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/images/logo.png"
          alt="Trividha Logo"
          className="w-72 md:w-[512px] mx-auto mb-4 object-contain"
        />
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-[1px] bg-brand-gold w-32 md:w-[200px] mx-auto origin-center mt-4"
        />
      </div>
    </motion.div>
  );
}

function Spotlight() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[1] pointer-events-none"
      animate={{
        background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(197, 160, 89, 0.05), transparent 80%)`,
      }}
    />
  );
}

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Prevent scroll during loading
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <SmoothScroll>
      <LoadingScreen />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        className="relative min-h-screen"
      >
        <CustomCursor />
        <Spotlight />
        <ScrollProgress />
        <AnimatedBackground />
        
        <Navbar onOpenCart={() => setIsCartOpen(true)} />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        <main>
          <Hero />
          <BrandStory />
          <FeaturedCollection />
          <Craftsmanship />
          <Lookbook />
          <Testimonials />
          
          {/* CTA Section */}
          <section className="pt-16 pb-32 md:py-64 px-6 text-center relative overflow-hidden group">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
               <motion.img 
                  initial={{ scale: 1.15, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                  src="/images/saree.png" 
                  alt="Begin your legacy"
                  className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.2]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1610030469617-3f3bb3240e53?q=80&w=2000&auto=format&fit=crop";
                  }}
               />
               {/* Vignette/Overlay for luxury feel */}
               <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black z-10" />
               <div className="absolute inset-0 bg-brand-black/30 z-10" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto relative z-20"
            >
              <h2 className="text-4xl md:text-[11rem] font-serif mb-12 md:mb-20 leading-[1.1] md:leading-[0.8] text-white drop-shadow-2xl">
                Begin your <br />
                <span className="italic text-brand-gold">legacy.</span>
              </h2>
              <div className="flex justify-center">
                <button className="group relative px-12 md:px-24 py-5 md:py-8 border border-brand-gold font-sans text-[10px] md:text-sm uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 bg-brand-black/20 backdrop-blur-sm">
                  <span className="relative z-10 text-white group-hover:text-brand-black font-medium transition-colors duration-500">Book a Private Viewing</span>
                  <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1] z-0" />
                </button>
              </div>
            </motion.div>
          </section>
        </main>
        
        <Footer />
      </motion.div>
    </SmoothScroll>
  );
}
