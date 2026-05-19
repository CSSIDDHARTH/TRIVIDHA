import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text 1: "More Than Just Sarees"
  const text1Y = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 0, -1000]);
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);

  // Text 2: "A Bond Woven Through Generations"
  const text2Y = useTransform(scrollYProgress, [0, 0.45, 0.55], [0, 0, -1000]);
  const text2Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);

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
            srcSet="/images/hero.jpg 2000w, /images/hero.jpg 3000w"
            sizes="(max-width: 768px) 100vw, 1200px"
            alt="TRIVIDHA Heritage Collection"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1583394838336-acd977730f8a?q=80&w=2000&auto=format&fit=crop";
            }}
            className="w-full h-full object-cover brightness-[1] contrast-[1]"
          />
        </motion.div>

        {/* Text 1: "More Than a Saree" */}
        <motion.div 
          style={{ y: text1Y, opacity: text1Opacity }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none px-6"
        >
          <span className="block font-sans text-xs uppercase tracking-[1.2em] text-brand-gold mb-10 opacity-80">Since 1892</span>
          <h2 className="text-5xl md:text-[8rem] font-serif text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white tracking-tighter leading-tight pb-4">
            More Than<br /> <span className="italic">Just Sarees</span>
          </h2>
        </motion.div>

        {/* Text 2: "A Bond Woven Through Generations" */}
        <motion.div 
          style={{ y: text2Y, opacity: text2Opacity }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none px-6"
        >
          <h2 className="text-4xl md:text-[6rem] font-serif text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white tracking-tighter leading-tight pb-4">
            A Bond<br /> <span className="italic">Woven Through Generations</span>
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
