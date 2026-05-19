import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Craftsmanship() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} className="py-32 relative">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Visual Showcase */}
        <div className="md:col-span-7 relative h-[600px] overflow-hidden group">
          <motion.div style={{ scale }} className="w-full h-full">
            <video 
              src="/videos/AQPx-zz6OFFNdDJ8arZNOlExAkN4Nq53HfQuS90u_ouZDoV4LTjctYxS5SlenxgvMvTGMMau05NQXlJTer3wGwzz6GIuicuouKbyNVI.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover brightness-[0.8]"
            />
          </motion.div>
          
          {/* Overlay Detail */}
          <div className="absolute inset-0 bg-brand-wine/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
          
          {/* Ornamental Frame */}
          <div className="absolute inset-8 border border-white/10 pointer-events-none" />
        </div>

        {/* Text Content */}
        <div className="md:col-span-5 md:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs uppercase tracking-[0.5em] text-brand-gold mb-6 block">Artisanal Process</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              The Alchemy of <br />
              <span className="italic">Temple Gold.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="text-2xl font-serif text-brand-gold">01</span>
                <div>
                  <h4 className="font-serif text-xl mb-2">Sacred Mulberry Silk</h4>
                  <p className="text-sm font-sans font-light tracking-wide opacity-60 leading-relaxed">
                    We source only the finest silk from native cocoons, prized for their strength and natural luminosity. Each thread is twisted by hand to ensure durability.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <span className="text-2xl font-serif text-brand-gold">02</span>
                <div>
                  <h4 className="font-serif text-xl mb-2">Pure Silver & Gold Zari</h4>
                  <p className="text-sm font-sans font-light tracking-wide opacity-60 leading-relaxed">
                    Our zari is authentic—made by drawing pure silver into fine wire and electroplating it with 24-karat gold. It never loses its shine, even across centuries.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <span className="text-2xl font-serif text-brand-gold">03</span>
                <div>
                  <h4 className="font-serif text-xl mb-2">The Adai Technique</h4>
                  <p className="text-sm font-sans font-light tracking-wide opacity-60 leading-relaxed">
                    Master weavers use the 'Adai' loom system to create complex geometric patterns inspired by the temple gopurams of Kanchipuram.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
