import { Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-32 pb-12 px-6 border-t gold-border">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-8">
              <img src="/images/logo.png" alt="TRIVIDHA" className="h-[120px] md:h-[160px] object-contain" />
              <span className="block text-[8px] tracking-[0.6em] font-sans font-light mt-4 opacity-40 text-white">Tradition | Craft | Elegance</span>
            </div>
            <p className="text-[11px] font-sans font-light tracking-widest opacity-40 leading-relaxed uppercase">
              Preserving the sacred art of Kanchipuram weaving since 1892. Handcrafted in the heart of Tamil Nadu.
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="text-[9px] uppercase tracking-[0.4em] text-brand-gold mb-8 font-medium">Collection</h5>
            <ul className="space-y-4 text-[10px] uppercase font-sans tracking-widest opacity-60">
                <li className="hover:text-brand-gold cursor-pointer transition-colors">Vaikuntha Gold</li>
                <li className="hover:text-brand-gold cursor-pointer transition-colors">Temple Heritage</li>
                <li className="hover:text-brand-gold cursor-pointer transition-colors">Bridal Couture</li>
                <li className="hover:text-brand-gold cursor-pointer transition-colors">Everyday Grace</li>
            </ul>
          </div>

          <div>
            <h5 className="text-[9px] uppercase tracking-[0.4em] text-brand-gold mb-8 font-medium">Journal</h5>
            <ul className="space-y-4 text-[10px] uppercase font-sans tracking-widest opacity-60">
                <li className="hover:text-brand-gold cursor-pointer transition-colors flex items-center gap-2">Art of Weaving <ArrowUpRight className="w-3 h-3"/></li>
                <li className="hover:text-brand-gold cursor-pointer transition-colors flex items-center gap-2">The Zari Story <ArrowUpRight className="w-3 h-3"/></li>
                <li className="hover:text-brand-gold cursor-pointer transition-colors flex items-center gap-2">Temple Motifs <ArrowUpRight className="w-3 h-3"/></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-[9px] uppercase tracking-[0.4em] text-brand-gold mb-8 font-medium">Concierge</h5>
            <p className="text-[10px] uppercase font-sans tracking-widest opacity-60 mb-6">Join our inner circle for exclusive previews.</p>
            <div className="flex border-b gold-border pb-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-none outline-none text-[10px] uppercase w-full font-sans tracking-widest placeholder:opacity-30"
                />
                <button className="text-brand-gold uppercase text-[9px] tracking-widest px-2 font-bold">Join</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gold-border gap-8">
          <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">
            © 2026 TRIVIDHA Heritage.
          </p>
          
          <div className="flex gap-8 items-center">
            <Instagram className="w-4 h-4 opacity-30 hover:opacity-100 cursor-pointer transition-opacity" />
            <Facebook className="w-4 h-4 opacity-30 hover:opacity-100 cursor-pointer transition-opacity" />
            <Twitter className="w-4 h-4 opacity-30 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>

          <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] opacity-40">
            <span className="hover:text-brand-gold cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-brand-gold cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
