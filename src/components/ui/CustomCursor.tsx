import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'motion/react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState<'default' | 'image' | 'button'>('default');
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const auraX = useSpring(cursorX, { damping: 40, stiffness: 100, mass: 1 });
  const auraY = useSpring(cursorY, { damping: 40, stiffness: 100, mass: 1 });
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('button, a, .interactive');
      const image = target.closest('img, .parallax-image');
      
      if (interactive) {
        setIsHovered(true);
        setHoverType('button');
      } else if (image) {
        setIsHovered(true);
        setHoverType('image');
      } else {
        setIsHovered(false);
        setHoverType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          {/* Layer 1: The Luxury Aura (Ambient Glow) */}
          <motion.div
            className="absolute top-0 left-0 w-[150px] h-[150px] bg-brand-gold/10 rounded-full blur-[60px]"
            style={{
              x: auraX,
              y: auraY,
              translateX: '-50%',
              translateY: '-50%',
              scale: isHovered ? 1.5 : 1,
            }}
          />

          {/* Layer 2: The Main Interactive Ring */}
          <motion.div
            className="absolute top-0 left-0 border border-brand-gold/30 rounded-full"
            style={{
              x: ringX,
              y: ringY,
              translateX: '-50%',
              translateY: '-50%',
              width: isHovered ? 80 : 40,
              height: isHovered ? 80 : 40,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          >
            {/* Contextual Text inside ring */}
            <AnimatePresence>
              {isHovered && hoverType === 'image' && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center text-[8px] uppercase tracking-[0.2em] text-brand-gold font-bold"
                >
                  View
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Layer 3: The Precision Point (Core) */}
          <motion.div
            className="absolute top-0 left-0 w-1.5 h-1.5 bg-brand-gold rounded-full shadow-[0_0_10px_rgba(197,160,89,0.8)]"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
              scale: isHovered ? 0 : 1,
            }}
          />

          {/* Layer 4: Floating Luxury Particles (Subtle Trail) */}
          <motion.div
            className="absolute top-0 left-0 w-1 h-1 bg-brand-gold/20 rounded-full"
            animate={{
              x: cursorX.get() + (Math.random() - 0.5) * 20,
              y: cursorY.get() + (Math.random() - 0.5) * 20,
              opacity: [0, 0.5, 0],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
