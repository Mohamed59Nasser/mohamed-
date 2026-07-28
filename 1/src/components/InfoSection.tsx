import { motion } from 'framer-motion';

export default function InfoSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden flex items-center justify-center min-h-[70vh]">
      {/* Abstract Liquid Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/2 left-1/4 w-[40rem] h-[40rem] bg-liquid-blush/40 blur-[100px] rounded-full mix-blend-multiply"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translate(-50%, -50%)" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-[35rem] h-[35rem] bg-liquid-gold/20 blur-[100px] rounded-full mix-blend-multiply"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translate(50%, -50%)" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 glass-card p-12 md:p-24 rounded-[3rem] border border-white/40 shadow-2xl backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-sm font-medium tracking-[0.3em] uppercase mb-8 block text-liquid-gold">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-liquid-dark">
            Beauty that flows <br />
            <span className="italic font-light">with your true nature</span>
          </h2>
          <p className="text-lg md:text-xl text-liquid-dark/70 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            We believe in cosmetics that don't mask, but reveal. Our formulas are created with 
            liquid-silk textures that blend seamlessly into your skin, providing an ethereal, 
            glossy finish that lasts all day.
          </p>
          <button className="border-b border-liquid-dark pb-1 text-sm uppercase tracking-widest hover:text-liquid-gold hover:border-liquid-gold transition-all duration-300">
            Read Our Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
