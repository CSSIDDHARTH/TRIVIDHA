import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Craftsmanship() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const steps = [
    {
      num: "01",
      title: "Sacred Mulberry Silk",
      desc: "We source only the finest silk from native cocoons, prized for their strength and natural luminosity. Each thread is twisted by hand to ensure durability.",
      image: "/images/section2/The Alchemy of Temple Gold/683198670_17861046102685552_3838582058398102156_n.jpg"
    },
    {
      num: "02",
      title: "Pure Silver & Gold Zari",
      desc: "Our zari is authentic—made by drawing pure silver into fine wire and electroplating it with 24-karat gold. It never loses its shine, even across centuries.",
      image: "/images/section2/The Alchemy of Temple Gold/683890209_17862692814685552_8718084967457621904_n.webp"
    },
    {
      num: "03",
      title: "The Adai Technique",
      desc: "Master weavers use the 'Adai' loom system to create complex geometric patterns inspired by the temple gopurams of Kanchipuram.",
      image: "/images/section2/The Alchemy of Temple Gold/691337223_17864174604685552_362105987356817333_n.jpg"
    }
  ];

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-brand-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[20rem] font-serif italic text-white/5 pointer-events-none whitespace-nowrap">
          Artisanal Heritage Artisanal Heritage
        </div>

        <motion.div style={{ x }} className="flex gap-12 md:gap-24 px-6 md:px-24">
          {/* Intro Slide */}
          <div className="flex-shrink-0 w-[85vw] md:w-[80vw] flex flex-col justify-center">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-brand-gold mb-6 md:mb-8 block">The Process</span>
            <h2 className="text-4xl md:text-[10rem] font-serif leading-[1.1] md:leading-[0.85] tracking-tighter mb-8 md:mb-12">
              The Alchemy of <br />
              <span className="italic text-brand-gold">Temple Gold</span>
            </h2>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="w-12 md:w-24 h-[1px] bg-brand-gold" />
              <p className="text-brand-gold/60 uppercase tracking-widest text-[9px] md:text-xs">Scroll to witness the transformation</p>
            </div>
          </div>

          {/* Step Slides */}
          {steps.map((step, i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] md:w-[80vw] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden group">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-black/20" />
                <div className="absolute inset-2 md:inset-4 border border-brand-gold/20" />
              </div>
              <div className="max-w-xl">
                <span className="text-3xl md:text-6xl font-serif text-brand-gold mb-4 md:mb-8 block">{step.num}</span>
                <h3 className="text-2xl md:text-6xl font-serif mb-4 md:mb-8">{step.title}</h3>
                <p className="text-sm md:text-lg font-sans font-light tracking-wide text-white/60 leading-relaxed mb-8 md:mb-12">
                  {step.desc}
                </p>
                <div className="w-24 md:w-32 h-[1px] bg-brand-gold/40" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
