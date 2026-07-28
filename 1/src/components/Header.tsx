import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-6 hidden md:flex">
          <a href="#shop" className="text-sm font-medium tracking-wider hover:text-liquid-gold transition-colors">SHOP</a>
          <a href="#collections" className="text-sm font-medium tracking-wider hover:text-liquid-gold transition-colors">COLLECTIONS</a>
          <a href="#about" className="text-sm font-medium tracking-wider hover:text-liquid-gold transition-colors">ABOUT</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="text-2xl md:text-3xl font-serif tracking-widest text-center flex-1 md:flex-none">
          <a href="#" className="relative group">
            AURA
            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-liquid-gold transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </a>
        </div>

        <div className="flex items-center gap-5">
          <button className="hover:text-liquid-gold transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-liquid-gold transition-colors hidden md:block">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-liquid-gold transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-2 bg-liquid-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">2</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass absolute top-full left-0 w-full border-t border-white/20"
        >
          <div className="flex flex-col p-6 gap-4">
            <a href="#shop" className="text-lg font-serif">Shop</a>
            <a href="#collections" className="text-lg font-serif">Collections</a>
            <a href="#about" className="text-lg font-serif">About</a>
            <a href="#account" className="text-lg font-serif">Account</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
