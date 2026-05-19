import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left: Text Content */}
        <div className="relative z-10">
          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif leading-tight mb-8"
          >
            A legacy carved in <br />
            <span className="italic text-brand-gold">pure silk & gold.</span>
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 font-sans font-light tracking-wide leading-relaxed text-sm md:text-base border-l border-brand-gold/30 pl-8"
          >
            <p>
              TRIVIDHA represents the pinnacle of South Indian textile artistry. For six generations, our master weavers have preserved the sacred techniques that define the legendary Kanchipuram saree.
            </p>
            <p>
              Each weave is a dialogue between the artisan and the silk—a meticulous process where pure mulberry silk meets hand-drawn gold zari, creating patterns inspired by the temple architecture of Dravidian heritage.
            </p>
            <p className="font-serif italic text-lg text-brand-gold pt-4">
              "We don't just weave fabric; we weave memories that last lifetimes."
            </p>
          </motion.div>
        </div>

        {/* Right: Immersive Visuals */}
        <div className="relative h-[400px] md:h-[600px]">
          <motion.div 
            style={{ x: xLeft }}
            className="absolute top-0 left-0 w-2/3 h-4/5 z-20 shadow-2xl overflow-hidden"
          >
            <img 
              src="/images/section2/670901817_17859866232685552_1172374404641254451_n.webp" 
              alt="Silk Weaving" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </motion.div>
          <motion.div 
            style={{ x: xRight }}
            className="absolute bottom-0 right-0 w-2/3 h-4/5 z-10 opacity-60 overflow-hidden"
          >
            <img 
              src="/images/section2/691337223_17864174604685552_362105987356817333_n.jpg" 
              alt="Detail Pattern" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </motion.div>
          
          {/* Ornamental Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-brand-gold/10 rounded-full animate-spin-slow pointer-events-none" />
        </div>
      </div>
      
      {/* Background Text */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif opacity-[0.02] whitespace-nowrap pointer-events-none select-none">
        HERITAGE
      </h2>
    </section>
  );
}
