import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full opacity-80"
          style={{ filter: 'contrast(1.1) saturate(1.2)' }}
        >
          <source src="https://videos.pexels.com/video-files/11749692/11749692-uhd_4096_2160_30fps.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-liquid-beige/30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-liquid-beige/40 via-transparent to-liquid-beige"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 block text-liquid-dark/80">
            The Essence of Elegance
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8 max-w-4xl"
        >
          Fluid Beauty & <br className="hidden md:block"/> 
          <span className="text-gradient italic">Timeless Grace</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-liquid-dark/70 mb-12 max-w-xl mx-auto font-light"
        >
          Discover our curated collection of luxury cosmetics and accessories, designed to flow seamlessly with your natural aura.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button className="glossy-btn px-10 py-4 rounded-full flex items-center gap-3 text-sm tracking-widest uppercase">
            Explore Collection
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Decorative Liquid Shape */}
      <motion.div 
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-liquid-blush/40 blur-3xl rounded-full mix-blend-multiply liquid-shape"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-1/4 -right-20 w-80 h-80 bg-liquid-gold/20 blur-3xl rounded-full mix-blend-multiply liquid-shape"
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
