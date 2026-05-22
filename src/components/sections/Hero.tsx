import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen bg-brand-black overflow-hidden">
      {/* Hero Image - Standard Background */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0 h-full w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/80 z-10" />
        <img 
          src="/images/hero.jpeg"
          srcSet="/images/hero.jpeg 2000w, /images/hero.jpeg 3000w"
          sizes="(max-width: 768px) 100vw, 1200px"
          alt="TRIVIDHA Heritage Collection"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1583394838336-acd977730f8a?q=80&w=2000&auto=format&fit=crop";
          }}
          className="w-full h-full object-cover brightness-[1] contrast-[1]"
        />
      </motion.div>

      {/* Main Content: "More Than Just Sarees" */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-6xl sm:text-7xl md:text-[8rem] font-serif text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white tracking-tighter leading-[1.1] md:leading-tight pb-4">
          More Than<br /> <span className="italic">Just Sarees</span>
        </h2>
        
        {/* Simple Scroll Hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-brand-gold to-transparent opacity-40" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-brand-gold/60">Scroll to Explore</span>
        </motion.div>
      </motion.div>

      {/* Cinematic Noise Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-5 pointer-events-none mix-blend-overlay z-40" />
    </section>
  );
}
