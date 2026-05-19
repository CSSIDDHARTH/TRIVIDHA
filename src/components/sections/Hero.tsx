import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text "Woven Royalty" moves fast over the image
  // It moves fast in the first 25% of the scroll
  const textY = useTransform(scrollYProgress, [0, 0.25], [0, -1200]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.25], [1, 0]);

  // Reveal animation for the image
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1.2, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  
  // Branding Reveal
  const brandingOpacity = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);
  const brandingY = useTransform(scrollYProgress, [0.6, 0.85], [100, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-brand-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-brand-black z-[-1]" />
        
        {/* Hero Image - Fully Visible but Animated */}
        <motion.div 
          style={{ opacity: imageOpacity, scale: imageScale }}
          className="absolute inset-0 z-0 h-screen w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/80 z-10" />
          <img 
            src="/images/hero.jpg" 
            alt="TRIVIDHA Heritage Collection" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1583394838336-acd977730f8a?q=80&w=2000&auto=format&fit=crop";
            }}
            className="w-full h-full object-cover brightness-[0.6] contrast-[1.2]"
          />
        </motion.div>

        {/* Initial Text - Moves very fast */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-20 text-center pointer-events-none"
        >
          <span className="block font-sans text-xs uppercase tracking-[1.2em] text-brand-gold mb-10 opacity-80">Since 1892</span>
          <h2 className="text-7xl md:text-[15rem] font-serif text-white tracking-tighter leading-[0.7]">
             Woven <br /> <span className="italic">Royalty</span>
          </h2>
        </motion.div>

        {/* Brand Identity Reveal */}
        <motion.div
           style={{ opacity: brandingOpacity, y: brandingY }}
           className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center p-6"
        >
            <div className="flex flex-col items-center max-w-4xl">
              <img 
                src="/images/logo.png" 
                alt="Trividha" 
                className="w-48 md:w-96 mb-8 drop-shadow-2xl object-contain"
              />
              <div className="w-64 h-[1px] bg-brand-gold/40 mb-12 hidden" />
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-32 flex flex-col items-center gap-8 hidden md:flex"
              >
                <div className="w-[1px] h-32 bg-gradient-to-b from-brand-gold to-transparent opacity-40" />
                <span className="text-[10px] uppercase tracking-[0.6em] text-brand-gold/60">Legacy Unfolds</span>
              </motion.div>
            </div>
        </motion.div>

        {/* Cinematic Noise Overlay */}
        <div className="absolute inset-0 noise-overlay opacity-5 pointer-events-none mix-blend-overlay z-40" />
      </div>
    </section>
  );
}
