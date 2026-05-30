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
    <section className="pt-32 pb-16 md:pb-32 bg-brand-brown/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl md:text-5xl font-serif leading-tight mb-8"
            >
              Voices of <br />
              <span className="italic">Grace.</span>
            </motion.h2>
            <Quote className="w-12 h-12 text-brand-gold opacity-30" />
          </div>

          <div className="md:w-2/3 space-y-12">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
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
