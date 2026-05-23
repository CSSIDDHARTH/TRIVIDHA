import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress while section is in view (for exit transition)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll progress while section is entering (for parallax entry)
  const { scrollYProgress: enterProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  // --- Entry parallax ---
  const xLeft  = useTransform(enterProgress, [0, 1], ["0%", "-20%"]);
  const xRight = useTransform(enterProgress, [0, 1], ["0%",  "20%"]);

  // --- Content drifts upward and fades as user scrolls out (parallax crossfade) ---
  const contentY       = useTransform(scrollYProgress, [0, 0.8], ["0%", "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.75], [1, 0]);

  // --- Images fade independently, slightly earlier ---
  const imageOpacity = useTransform(scrollYProgress, [0.1, 0.55], [1, 0]);
  const imageY       = useTransform(scrollYProgress, [0, 0.8], ["0%", "-10%"]);

  // --- Background watermark text drifts up and fades ---
  const bgTextOpacity = useTransform(scrollYProgress, [0.05, 0.45], [0.015, 0]);
  const bgTextY       = useTransform(scrollYProgress, [0, 0.8], ["0%", "-25%"]);

  // --- Black curtain drops over everything at the very end ---
  const curtainOpacity = useTransform(scrollYProgress, [0.65, 1], [0, 1]);

  return (
    <section ref={containerRef} className="h-[180vh] relative bg-brand-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Background watermark "TRADITION" */}
        <motion.h2
          style={{ opacity: bgTextOpacity, y: bgTextY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] md:text-[20vw] font-serif whitespace-nowrap pointer-events-none select-none z-0 origin-center"
        >
          TRADITION
        </motion.h2>

        {/* Main content — drifts up and crossfades out */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="w-full px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10"
        >
          {/* Left: Text */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-6xl font-serif leading-tight mb-8 w-full"
            >
              A legacy carved in <br />
              <span className="italic text-brand-gold">pure silk &amp; gold.</span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6 font-sans font-light tracking-wide leading-relaxed text-sm md:text-base border-l-0 md:border-l border-brand-gold/30 pl-0 md:pl-8 text-center md:text-left"
            >
              <p className="font-serif italic text-base md:text-lg text-brand-gold pt-4">
                "We don't just weave fabric; we weave memories that last lifetimes."
              </p>
            </motion.div>
          </div>

          {/* Right: Images — parallax entry + fade out */}
          <motion.div
            style={{ opacity: imageOpacity, y: imageY }}
            className="relative h-[400px] md:h-[600px] origin-center hidden md:block"
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

            {/* Ornamental ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 h-32 md:h-48 border border-brand-gold/10 rounded-full animate-spin-slow pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Brand-text curtain wipe — fills the entire viewport regardless of aspect ratio */}
        <motion.div
          style={{ opacity: curtainOpacity }}
          className="absolute inset-0 bg-brand-text z-40 pointer-events-none"
        />
      </div>
    </section>
  );
}
