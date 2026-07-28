import { motion } from 'framer-motion';

const categories = [
  {
    id: 1,
    title: "Skincare Essentials",
    subtitle: "Nourish & Glow",
    image: "https://images.pexels.com/photos/7005938/pexels-photo-7005938.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    size: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Signature Scents",
    subtitle: "Aura Collection",
    image: "https://images.pexels.com/photos/8361488/pexels-photo-8361488.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    size: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Complexion",
    subtitle: "Flawless Finish",
    image: "https://images.pexels.com/photos/7256092/pexels-photo-7256092.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    size: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Bath & Body",
    subtitle: "Liquid Silk",
    image: "https://images.pexels.com/photos/4202321/pexels-photo-4202321.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1200",
    size: "col-span-1 md:col-span-2 row-span-1",
  }
];

export default function Categories() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20 bg-liquid-beige">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-4"
        >
          Curated <span className="italic text-liquid-gold">Collections</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-liquid-dark/60 max-w-lg mx-auto"
        >
          Elevate your daily rituals with our meticulously crafted selections.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className={`${category.size} group relative rounded-3xl overflow-hidden glass-card cursor-pointer`}
          >
            <div className="absolute inset-0 bg-liquid-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            
            {/* Image with Liquid Zoom Effect */}
            <motion.img 
              src={category.image} 
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              style={{ filter: 'contrast(0.95) saturate(1.1)' }}
            />
            
            {/* Subtle water reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            {/* Glossy reflection highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 mix-blend-overlay"></div>

            <div className="absolute bottom-0 left-0 p-8 z-30 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
              <span className="text-white/80 text-sm tracking-widest uppercase mb-2 block font-medium">
                {category.subtitle}
              </span>
              <h3 className="text-2xl md:text-3xl text-white font-serif">
                {category.title}
              </h3>
            </div>
            
            {/* Ripple effect on hover element */}
            <div className="absolute inset-0 z-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px]"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
