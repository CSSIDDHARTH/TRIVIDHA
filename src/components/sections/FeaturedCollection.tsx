import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const PRODUCTS = [
  { id: 1, image: "/images/section3/659002708_17860670229685552_6925149895421849876_n.jpg" },
  { id: 7, image: "/images/section3/671274311_17860112574685552_444872677863680722_n.jpg" },
  { id: 5, image: "/images/section3/682641749_17861248113685552_514557694251827091_n.webp" },
  { id: 4, image: "/images/section3/686484062_17863025874685552_5212255087155383598_n.webp" },
  { id: 3, image: "/images/section3/Introducing our Chanderi cotton saree collection ..... Breathable, easy to drape, and effortles (1).webp" },
  { id: 6, image: "/images/section3/Introducing our Chanderi cotton saree collection ..... Breathable, easy to drape, and effortles (2).webp" },
  { id: 2, image: "/images/section3/Introducing our Chanderi cotton saree collection ..... Breathable, easy to drape, and effortles (3).webp" },
  { id: 8, image: "/images/section3/Introducing our Chanderi cotton saree collection ..... Breathable, easy to drape, and effortles.webp" }
];

export default function FeaturedCollection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getPosition = (idx: number) => {
    let diff = idx - currentIndex;
    const len = PRODUCTS.length;
    if (diff < -Math.floor(len / 2)) diff += len;
    else if (diff > Math.floor(len / 2)) diff -= len;
    return diff;
  };

  return (
    <section className="py-32 bg-brand-black/40 overflow-hidden">
      <div className="px-6 max-w-screen-2xl mx-auto mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-[0.4em] text-brand-gold mb-4 block"
        >
          Curated Selection
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="text-4xl md:text-7xl font-serif"
        >
          Crafted with <span className="italic">Elegance</span>
        </motion.h2>
      </div>

      <div className="relative h-[500px] md:h-[600px] w-full max-w-6xl mx-auto flex items-center justify-center perspective-[1000px]">
        {PRODUCTS.map((product, idx) => {
          const position = getPosition(idx);

          return (
            <motion.div
              key={product.id}
              animate={{ 
                opacity: position === 0 ? 1 : Math.abs(position) === 1 ? 0.6 : Math.abs(position) === 2 ? 0.3 : 0, 
                scale: position === 0 ? 1 : Math.abs(position) === 1 ? 0.75 : Math.abs(position) === 2 ? 0.55 : 0.4, 
                x: position === 0 ? "0%" : 
                   position === -1 ? "-75%" : 
                   position === 1 ? "75%" : 
                   position === -2 ? "-130%" : 
                   position === 2 ? "130%" : "0%",
                zIndex: position === 0 ? 10 : Math.abs(position) === 1 ? 5 : Math.abs(position) === 2 ? 2 : 0,
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="absolute w-[280px] md:w-[400px] aspect-[3/4] cursor-pointer"
              style={{ pointerEvents: position === 0 ? "auto" : "none" }}
            >
              <div className="w-full h-full rounded-sm overflow-hidden bg-brand-brown/10 shadow-2xl relative">
                <img 
                  src={product.image} 
                  alt={`Saree ${product.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
