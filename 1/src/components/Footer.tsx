export default function Footer() {
  return (
    <footer className="bg-liquid-blush/30 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-liquid-beige">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-serif tracking-widest mb-6">AURA</h2>
          <p className="text-sm text-liquid-dark/70 leading-relaxed font-light mb-6">
            Embrace your natural radiance with our luxury collection of cosmetics and accessories. Flow beautifully.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium tracking-widest text-sm uppercase mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-liquid-dark/70 font-light">
            <li><a href="#" className="hover:text-liquid-gold transition-colors">Skincare</a></li>
            <li><a href="#" className="hover:text-liquid-gold transition-colors">Fragrance</a></li>
            <li><a href="#" className="hover:text-liquid-gold transition-colors">Complexion</a></li>
            <li><a href="#" className="hover:text-liquid-gold transition-colors">Accessories</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium tracking-widest text-sm uppercase mb-6">About</h4>
          <ul className="space-y-4 text-sm text-liquid-dark/70 font-light">
            <li><a href="#" className="hover:text-liquid-gold transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-liquid-gold transition-colors">Ingredients</a></li>
            <li><a href="#" className="hover:text-liquid-gold transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-liquid-gold transition-colors">Journal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium tracking-widest text-sm uppercase mb-6">Newsletter</h4>
          <p className="text-sm text-liquid-dark/70 mb-4 font-light">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-transparent border-b border-liquid-dark/20 py-2 px-0 w-full focus:outline-none focus:border-liquid-gold text-sm placeholder-liquid-dark/40 transition-colors"
            />
            <button className="border-b border-liquid-dark/20 py-2 uppercase text-xs tracking-widest font-medium hover:text-liquid-gold hover:border-liquid-gold transition-colors pl-4">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-liquid-dark/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-liquid-dark/50 tracking-wide">© 2026 AURA LUXURY BEAUTY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 text-xs text-liquid-dark/50 tracking-wide">
          <a href="#" className="hover:text-liquid-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-liquid-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
