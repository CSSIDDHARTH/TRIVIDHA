import { motion } from 'motion/react';
import { Menu, ShoppingBag, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-4",
        isScrolled ? "bg-brand-black backdrop-blur-lg border-b gold-border py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Left: Burger Menu */}
        <div className="flex-1 flex items-center gap-10">
          <button className="p-2 hover:text-brand-gold transition-colors duration-300">
            <Menu className="w-5 h-5" />
          </button>
          <nav className="hidden lg:flex gap-10 text-[9px] uppercase tracking-widest font-sans font-medium">
            <a href="#" className="hover:text-brand-gold transition-colors">Collections</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Heritage</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Our Story</a>
          </nav>
        </div>

        {/* Center: Brand Name */}
        <div className="text-center">
          <a href="#" className="inline-block">
            <img 
              src="/images/logo.png" 
              alt="TRIVIDHA" 
              className="h-[100px] md:h-[120px] object-contain"
            />
          </a>
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <button className="p-2 hover:text-brand-gold transition-colors duration-300">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:text-brand-gold transition-colors duration-300 relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-gold rounded-full" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
