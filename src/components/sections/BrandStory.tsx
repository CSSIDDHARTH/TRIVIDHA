import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll for zoom-in effect when leaving
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Track scroll for parallax effects when entering
  const { scrollYProgress: enterProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const xLeft = useTransform(enterProgress, [0, 1], ["0%", "-20%"]);
  const xRight = useTransform(enterProgress, [0, 1], ["0%", "20%"]);
  
  // Massive zoom in for the text
  const textScale = useTransform(scrollYProgress, [0, 0.85], [1, 120]);
  const textOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);

  // Shrink images
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

  // Grow background text
  const bgTextScale = useTransform(scrollYProgress, [0, 0.8], [1, 30]);
  const bgTextOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0.015, 0]);
  
  // Overall fade out for the container
  const containerOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-brand-black">
      <motion.div 
        style={{ opacity: containerOpacity }} 
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="w-full px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          {/* Left: Text Content */}
          <motion.div 
            style={{ scale: textScale, opacity: textOpacity }}
            className="relative z-10 origin-center"
          >
            <motion.h3 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-6xl font-serif leading-tight mb-8"
            >
              A legacy carved in <br />
              <span className="italic text-brand-gold">pure silk & gold.</span>
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6 font-sans font-light tracking-wide leading-relaxed text-sm md:text-base border-l border-brand-gold/30 pl-6 md:pl-8"
            >
              <p className="font-serif italic text-base md:text-lg text-brand-gold pt-4">
                "We don't just weave fabric; we weave memories that last lifetimes."
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Visuals */}
          <motion.div 
            style={{ scale: imageScale, opacity: imageOpacity }}
            className="relative h-[400px] md:h-[600px] mt-12 md:mt-0 origin-center"
          >
            <motion.div 
              style={{ x: xLeft }}
              className="absolute top-0 left-0 w-[70%] h-4/5 z-20 shadow-2xl overflow-hidden"
            >
              <img 
                src="/images/section2/670901817_17859866232685552_1172374404641254451_n.webp" 
                alt="Silk Weaving" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            </motion.div>
            <motion.div 
              style={{ x: xRight }}
              className="absolute bottom-0 right-0 w-[70%] h-4/5 z-10 opacity-60 overflow-hidden"
            >
              <img 
                src="/images/section2/691337223_17864174604685552_362105987356817333_n.jpg" 
                alt="Detail Pattern" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            </motion.div>
            
            {/* Ornamental Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 h-32 md:h-48 border border-brand-gold/10 rounded-full animate-spin-slow pointer-events-none" />
          </motion.div>
        </div>
        
        {/* Background Text */}
        <motion.h2 
          style={{ scale: bgTextScale, opacity: bgTextOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] md:text-[20vw] font-serif whitespace-nowrap pointer-events-none select-none z-0 origin-center"
        >
          TRADITION
        </motion.h2>
      </motion.div>
    </section>
  );
}
