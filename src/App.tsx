import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
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
      transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
      onAnimationComplete={() => document.body.style.overflow = "auto"}
      className="fixed inset-0 z-[9999] bg-brand-black flex items-center justify-center pointer-events-none"
    >
      <div className="text-center">
        <motion.img 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/images/logo.png"
          alt="Trividha Logo"
          className="w-96 md:w-[512px] mx-auto mb-4 object-contain"
        />
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="h-[1px] bg-brand-gold max-w-[200px] mx-auto"
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
  const ctaRef = useRef<HTMLElement>(null);

  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });

  // Scale from 1.15 to 1.0 as we scroll
  const bgScale = useTransform(ctaScroll, [0, 0.75], [1.15, 1]);
  // Fade image in as section enters
  const bgOpacity = useTransform(ctaScroll, [0, 0.35], [0, 1]);

  // Left and right text fly-ins based on scroll position
  const textLeftX = useTransform(ctaScroll, [0, 0.35], ["-50%", "0%"]);
  const textRightX = useTransform(ctaScroll, [0, 0.35], ["50%", "0%"]);
  const textOpacity = useTransform(ctaScroll, [0.05, 0.32], [0, 1]);

  // Button fade up
  const btnY = useTransform(ctaScroll, [0.12, 0.4], [60, 0]);
  const btnOpacity = useTransform(ctaScroll, [0.12, 0.35], [0, 1]);

  useEffect(() => {
    // Prevent scroll during loading
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <SmoothScroll>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative min-h-screen"
      >
        <LoadingScreen />
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
          <section ref={ctaRef} className="py-32 md:py-64 px-6 text-center relative overflow-hidden group">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
               <motion.img 
                  style={{ scale: bgScale, opacity: bgOpacity }}
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

            <div className="max-w-4xl mx-auto relative z-20">
              <h2 className="text-4xl md:text-[11rem] font-serif mb-12 md:mb-20 leading-[1.1] md:leading-[0.8] text-white drop-shadow-2xl">
                <motion.span
                  style={{ x: textLeftX, opacity: textOpacity }}
                  className="block"
                >
                  Begin your
                </motion.span>
                <motion.span
                  style={{ x: textRightX, opacity: textOpacity }}
                  className="block italic text-brand-gold"
                >
                  legacy.
                </motion.span>
              </h2>
              <motion.div
                style={{ y: btnY, opacity: btnOpacity }}
                className="flex justify-center"
              >
                <button className="group relative px-12 md:px-24 py-5 md:py-8 border border-brand-gold font-sans text-[10px] md:text-sm uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 bg-brand-black/20 backdrop-blur-sm">
                  <span className="relative z-10 text-white group-hover:text-brand-black font-medium transition-colors duration-500">Book a Private Viewing</span>
                  <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1] z-0" />
                </button>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </motion.div>
    </SmoothScroll>
  );
}
