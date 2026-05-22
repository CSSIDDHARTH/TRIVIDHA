import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Mock data for sarees
  const cartItems = [
    {
      id: 1,
      name: "The Temple Gold Heritage",
      price: "₹1,45,000",
      image: "https://images.unsplash.com/photo-1610030469617-3f3bb3240e53?q=80&w=200",
      qty: 1
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-black border-l border-brand-gold/20 z-[201] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-brand-gold/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-brand-gold" />
                <h2 className="text-xl font-serif uppercase tracking-widest">Your Collection</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:rotate-90 transition-transform duration-500"
              >
                <X className="w-6 h-6 text-brand-gold" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6">
                    <div className="w-24 h-32 bg-white/5 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-serif text-lg mb-1">{item.name}</h3>
                        <p className="text-brand-gold text-sm font-medium">{item.price}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-white/10 px-3 py-1 gap-4">
                          <button className="hover:text-brand-gold"><Minus className="w-3 h-3" /></button>
                          <span className="text-xs font-sans">{item.qty}</span>
                          <button className="hover:text-brand-gold"><Plus className="w-3 h-3" /></button>
                        </div>
                        <button className="text-white/40 hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag className="w-12 h-12 mb-4" />
                  <p className="font-serif text-lg">Your collection is empty</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-brand-gold/10 bg-white/5 space-y-6">
              <div className="flex justify-between items-center text-sm uppercase tracking-widest">
                <span>Subtotal</span>
                <span className="text-brand-gold">₹1,45,000</span>
              </div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] leading-relaxed">
                Taxes and shipping calculated at checkout.<br />
                International shipping available.
              </p>
              <button className="w-full py-6 bg-brand-gold text-brand-black text-xs uppercase tracking-[0.4em] font-bold hover:bg-white transition-colors duration-500">
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
