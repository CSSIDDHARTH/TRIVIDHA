import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const PRODUCTS = [
  { id: 1, image: "/images/section3/659002708_17860670229685552_6925149895421849876_n.jpg" },
  { id: 2, image: "/images/section3/671274311_17860112574685552_444872677863680722_n.jpg" },
  { id: 3, image: "/images/section3/682641749_17861248113685552_514557694251827091_n.webp" },
  { id: 4, image: "/images/section3/686484062_17863025874685552_5212255087155383598_n.webp" },
  { id: 5, image: "/images/section3/Introducing our Chanderi cotton saree collection ..... Breathable, easy to drape, and effortles (1).webp" },
  { id: 6, image: "/images/section3/Introducing our Chanderi cotton saree collection ..... Breathable, easy to drape, and effortles (2).webp" },
  { id: 7, image: "/images/section3/Introducing our Chanderi cotton saree collection ..... Breathable, easy to drape, and effortles (3).webp" },
  { id: 8, image: "/images/section3/Introducing our Chanderi cotton saree collection ..... Breathable, easy to drape, and effortles.webp" }
];

export default function FeaturedCollection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <section className="py-32 bg-brand-black/40">
      <div className="px-6 max-w-screen-2xl mx-auto mb-16 flex items-end justify-between">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-brand-gold mb-4 block"
          >
            Curated Selection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif"
          >
            Crafted with <span className="italic">Elegance</span>
          </motion.h2>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-12 px-6 scrollbar-hide snap-x snap-mandatory"
      >
        {PRODUCTS.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="group flex-none w-[300px] md:w-[450px] snap-center cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-brand-brown/10">
              <img 
                src={product.image} 
                alt={`Saree ${product.id}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
