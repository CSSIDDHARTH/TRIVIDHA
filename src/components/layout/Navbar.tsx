import { motion, AnimatePresence } from 'motion/react';
import { Menu, ShoppingBag, Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';
import MagneticButton from '../ui/MagneticButton';

interface NavbarProps {
  onOpenCart: () => void;
}

export default function Navbar({ onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Collections", href: "#" },
    { name: "Heritage", href: "#" },
    { name: "Our Story", href: "#" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 py-2",
          isScrolled ? "bg-brand-black/60 backdrop-blur-lg border-b gold-border py-1.5" : "bg-transparent"
        )}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* Left: Burger Menu */}
          <div className="flex-1 flex items-center gap-4 lg:gap-10">
            <MagneticButton>
              <button 
                className="p-2 hover:text-brand-gold transition-colors duration-300 cursor-default"
              >
                <Menu className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </MagneticButton>
            <nav className="hidden lg:flex gap-10 text-[9px] uppercase tracking-widest font-sans font-medium">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-brand-gold transition-colors">{link.name}</a>
              ))}
            </nav>
          </div>

          {/* Center: Brand Name */}
          <div className="text-center">
            <a href="#" className="inline-block">
              <img 
                src="/images/logo.png" 
                alt="TRIVIDHA" 
                className={cn(
                  "transition-all duration-500 object-contain",
                  isScrolled ? "h-[50px] md:h-[60px]" : "h-[65px] md:h-[90px]"
                )}
              />
            </a>
          </div>

          {/* Right: Icons */}
          <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
            <MagneticButton className="hidden sm:block">
              <button className="p-2 hover:text-brand-gold transition-colors duration-300">
                <Search className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </MagneticButton>
            <MagneticButton>
              <button 
                className="p-2 hover:text-brand-gold transition-colors duration-300 relative cursor-default"
              >
                <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-gold rounded-full" />
              </button>
            </MagneticButton>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-brand-black flex flex-col"
          >
            <div className="p-8 flex justify-between items-center border-b gold-border">
              <img src="/images/logo.png" alt="TRIVIDHA" className="h-12 object-contain" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-brand-gold"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-12 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl md:text-6xl font-serif text-white hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex gap-8"
              >
                 <span className="text-[10px] uppercase tracking-[0.4em]">Instagram</span>
                 <span className="text-[10px] uppercase tracking-[0.4em]">Facebook</span>
              </motion.div>
            </div>
            
            <div className="p-12 text-center border-t gold-border">
              <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold">Experience Divine Craftsmanship</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
