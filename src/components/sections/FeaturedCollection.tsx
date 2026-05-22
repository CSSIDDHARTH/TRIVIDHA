import { motion } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';

const PRODUCTS = [
  { 
    id: 1, 
    image: "/images/section3/659002708_17860670229685552_6925149895421849876_n.jpg",
    name: "The Temple Gold Heritage",
    category: "Kanchipuram Silk",
    className: "md:col-span-6 md:row-span-2"
  },
  { 
    id: 7, 
    image: "/images/section3/671274311_17860112574685552_444872677863680722_n.jpg",
    name: "Royal Crimson Drape",
    category: "Bridal Collection",
    className: "md:col-span-3 md:row-span-1"
  },
  { 
    id: 5, 
    image: "/images/section3/682641749_17861248113685552_514557694251827091_n.webp",
    name: "Emerald Vine Weave",
    category: "Classic Zari",
    className: "md:col-span-3 md:row-span-1"
  },
  { 
    id: 4, 
    image: "/images/section3/686484062_17863025874685552_5212255087155383598_n.webp",
    name: "Midnight Bloom",
    category: "Chanderi Cotton",
    className: "md:col-span-3 md:row-span-2"
  },
  { 
    id: 3, 
    image: "/images/section3/Introducing our Chanderi cotton saree collection ..... Breathable, easy to drape, and effortles (1).webp",
    name: "Sacred Lotus Silk",
    category: "Heritage Weave",
    className: "md:col-span-3 md:row-span-1"
  }
];

export default function FeaturedCollection() {
  return (
    <section className="py-24 md:py-48 bg-brand-black">
      <div className="px-6 max-w-screen-2xl mx-auto mb-16 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-brand-gold mb-6 md:mb-8 block"
            >
              Curated Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-8xl font-serif leading-[1.1] md:leading-[0.9]"
            >
              Crafted with <br />
              <span className="italic text-brand-gold">Absolute Elegance</span>
            </motion.h2>
          </div>
          <div className="pb-0 md:pb-4">
            <MagneticButton>
              <button className="text-[10px] uppercase tracking-[0.4em] border-b border-brand-gold/40 pb-2 hover:text-brand-gold transition-colors">
                View All Collections
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="px-6 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={product.className}
            >
              <div className="group relative aspect-[3/4] overflow-hidden bg-brand-brown/5 rounded-sm">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.9] group-hover:brightness-100"
                />
                
                {/* Overlay Details - Permanently Visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent flex flex-col justify-end p-6 md:p-12">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-gold mb-2 md:mb-4">
                    {product.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-serif text-white mb-6 md:mb-8">
                    {product.name}
                  </h3>
                  <div>
                    <button className="px-6 md:px-8 py-3 md:py-4 border border-brand-gold/40 text-[9px] md:text-[10px] uppercase tracking-[0.4em] hover:bg-brand-gold hover:text-brand-black transition-all duration-500">
                      Acquire Piece
                    </button>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-700" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-700" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-700" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
