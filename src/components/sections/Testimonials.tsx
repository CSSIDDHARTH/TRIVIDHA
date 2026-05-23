import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: "Meera Krishnan",
    role: "Collector",
    text: "The drape and weight of a TRIVIDHA saree is unlike anything else. It feels like wearing history itself. The gold zari has a warmth that only true metal can provide."
  },
  {
    name: "Anjali Sharma",
    role: "Fashion Editorialist",
    text: "TRIVIDHA has masterfully bridged the gap between heritage and high-fashion. Their sarees are a staple for every woman who values soulful craftsmanship."
  },
  {
    name: "Dr. Latha Rao",
    role: "Heritage Enthusiast",
    text: "I wore my mother's TRIVIDHA saree for my daughter’s wedding. It looked as radiant as the day it was woven 30 years ago. That is the power of true Kanchipuram."
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-brand-brown/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-serif leading-tight mb-8"
            >
              Voices of <br />
              <span className="italic">Grace.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.3, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Quote className="w-12 h-12 text-brand-gold" />
            </motion.div>
          </div>

          <div className="md:w-2/3 space-y-12">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)", scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="border-b border-white/5 pb-10 last:border-0"
              >
                <p className="text-xl md:text-2xl font-serif italic mb-6 leading-relaxed opacity-80">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-brand-gold" />
                  <div>
                    <h5 className="font-sans text-sm uppercase tracking-widest font-medium text-brand-gold">
                      {review.name}
                    </h5>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
