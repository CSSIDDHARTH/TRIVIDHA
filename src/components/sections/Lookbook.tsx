import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const LOOKBOOK_IMAGES = [
  "/images/The look book/674415796_17860853016685552_7296335546888274059_n.jpg",
  "/images/The look book/675488309_17861247645685552_1149680390446994253_n.webp",
  "/images/The look book/683198670_17861046102685552_3838582058398102156_n.jpg",
  "/images/The look book/683890209_17862692814685552_8718084967457621904_n.webp",
  "/images/The look book/694797167_17863707531685552_154504372439060264_n.webp"
];

export default function Lookbook() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.6em] text-brand-gold mb-6 block"
          >
            Visual Narratives
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif"
          >
            The <span className="italic">Lookbook</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {LOOKBOOK_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              whileHover={{ scale: 0.98 }}
              className={cn(
                "relative overflow-hidden group cursor-pointer",
                i === 0 || i === 4 ? "md:col-span-2 aspect-[16/9]" : "aspect-[3/4]"
              )}
            >
              <img 
                src={src} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Fashion Look"
              />
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Corner Accents on Hover */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
