import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/src/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LOOKBOOK_IMAGES = [
  {
    src: "/images/The look book/674415796_17860853016685552_7296335546888274059_n.jpg",
    speed: 1.15,
    className: "col-span-6 md:col-span-4 md:row-span-4 mb-20 md:mb-0 aspect-[3/4] md:aspect-auto",
    title: "Heritage Weave"
  },
  {
    src: "/images/The look book/675488309_17861247645685552_1149680390446994253_n.webp",
    speed: 0.95,
    className: "col-span-4 col-start-3 md:col-span-2 md:row-span-3 md:mt-12 mb-12 md:mb-0 aspect-[4/5] md:aspect-auto",
    title: "Golden Zari"
  },
  {
    src: "/images/The look book/683198670_17861046102685552_3838582058398102156_n.jpg",
    speed: 1.25,
    className: "col-span-4 col-start-1 md:col-span-3 md:row-span-4 md:-mt-24 mb-20 md:mb-0 aspect-[2/3] md:aspect-auto mt-[-10%] md:mt-0",
    title: "Timeless Drape"
  },
  {
    src: "/images/The look book/683890209_17862692814685552_8718084967457621904_n.webp",
    speed: 1.1,
    className: "col-span-5 col-start-2 md:col-span-3 md:row-span-3 md:ml-auto mt-0 md:mt-0 aspect-[3/4] md:aspect-auto",
    title: "Royal Crimson"
  }
];

export default function Lookbook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const headerY       = useTransform(scrollYProgress, [0, 0.15], [60, 0]);

  // Label and heading line slide in from opposite sides
  const labelX     = useTransform(scrollYProgress, [0, 0.2], [-80, 0]);
  const headlineXA = useTransform(scrollYProgress, [0, 0.22], [-120, 0]);
  const headlineXB = useTransform(scrollYProgress, [0, 0.22], [120, 0]);
  const subOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const subY       = useTransform(scrollYProgress, [0.1, 0.25], [30, 0]);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-48 bg-brand-black overflow-hidden"
    >
      <div className="w-full px-6 md:px-12">
        {/* Editorial Header */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="mb-16 md:mb-32 flex flex-col items-start max-w-screen-2xl mx-auto"
        >
          <motion.span
            style={{ x: labelX, opacity: headerOpacity }}
            className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-brand-gold mb-6 md:mb-8 block"
          >
            Visual Narratives
          </motion.span>
          <h2 className="text-4xl md:text-[10rem] font-serif leading-[1.1] md:leading-[0.95] tracking-tighter">
            <motion.span style={{ x: headlineXA, display: 'block' }}>
              Spread the
            </motion.span>
            <motion.span style={{ x: headlineXB, display: 'block' }} className="italic text-brand-gold ml-[0.1em] py-2">
              Legacy
            </motion.span>
          </h2>
          <motion.div style={{ opacity: subOpacity, y: subY }} className="mt-8 md:mt-12 max-w-md">
            <p className="text-sm md:text-base text-brand-gold/60 font-light leading-relaxed tracking-wide">
              An asymmetric journey through the threads of time. Each frame captures a moment where tradition meets modern editorial aesthetics.
            </p>
          </motion.div>
        </motion.div>

        {/* Asymmetric Overlapping Grid - Full Width */}
        <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-12 auto-rows-min">
          {LOOKBOOK_IMAGES.map((img, i) => (
            <ParallaxImage 
              key={i} 
              src={img.src} 
              speed={img.speed} 
              className={img.className}
              title={img.title}
              index={i}
            />
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-6 md:col-span-4 md:col-start-2 mt-12 md:mt-24"
          >
            <p className="text-lg md:text-4xl font-serif italic text-white/40 leading-tight">
              "The beauty of a saree lies in the stories woven into its very fabric."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hotspot({ x, y, label }: { x: string; y: string; label: string }) {
  return (
    <div 
      className="absolute z-30 group/hotspot pointer-events-auto"
      style={{ left: x, top: y }}
    >
      <div className="relative">
        {/* Minimalist Premium Marker */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-2.5 h-2.5 bg-brand-gold rounded-full shadow-[0_0_15px_rgba(197,160,89,0.5)]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-brand-gold/30 rounded-full scale-0 group-hover/hotspot:scale-100 transition-transform duration-700" />
        
        <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover/hotspot:opacity-100 transition-all duration-700 pointer-events-none translate-x-2 group-hover/hotspot:translate-x-0">
          <div className="bg-brand-black/90 backdrop-blur-xl border border-brand-gold/20 px-4 py-2">
            <span className="text-[8px] uppercase tracking-[0.4em] text-brand-gold font-medium">{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ParallaxImageProps {
  src: string;
  speed: number;
  className?: string;
  title: string;
  index: number;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, speed, className, title, index }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!imageRef.current) return;

    const isMobile = window.innerWidth < 768;
    // Use unified speed on mobile to maintain alignment between side-by-side images
    const effectiveSpeed = isMobile ? 1.1 : speed;
    const movement = (effectiveSpeed - 1) * (isMobile ? 80 : 250);

    const anim = gsap.to(imageRef.current, {
      y: movement,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    return () => {
      anim.kill();
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
    };
  }, [speed]);

  return (
    <div 
      ref={imageRef}
      className={cn(
        "relative group overflow-hidden bg-brand-brown/10 shadow-2xl reveal-item",
        className
      )}
    >
      {/* Luxury Frame Overlays */}
      <div className="absolute inset-2 md:inset-4 border border-brand-gold/10 pointer-events-none z-10" />
      <div className="absolute top-2 md:top-4 right-2 md:right-4 w-4 md:w-6 h-4 md:h-6 border-t border-r border-brand-gold/40 pointer-events-none z-10" />
      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 w-4 md:w-6 h-4 md:h-6 border-b border-l border-brand-gold/40 pointer-events-none z-10" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
        className="w-full h-full relative"
      >
        <img 
          src={src} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Editorial Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/20 opacity-100" />
        
        {/* Refined Premium Labels */}
        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-20 transition-transform duration-700 group-hover:-translate-y-2">
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.6em] text-brand-gold/80 block mb-2 font-sans font-light">
            Catalogue Nº 0{index + 1}
          </span>
          <h4 className="text-xl md:text-4xl font-serif text-white leading-[0.9] tracking-tighter">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "italic text-brand-gold/90 ml-2" : ""}>
                {word}{' '}
              </span>
            ))}
          </h4>
        </div>

        {/* Hotspots for Storytelling */}
        {index === 0 && (
           <>
            <Hotspot x="30%" y="40%" label="Hand-woven Gold Zari" />
            <Hotspot x="70%" y="60%" label="Pure Mulberry Silk" />
           </>
        )}
        {index === 2 && (
            <Hotspot x="50%" y="30%" label="Traditional Temple Border" />
        )}

        {/* Cinematic Noise / Grain */}
        <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none z-20" />
      </motion.div>
    </div>
  );
}
