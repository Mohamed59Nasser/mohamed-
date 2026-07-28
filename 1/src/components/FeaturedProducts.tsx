import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Luminous Serum",
    category: "Skincare",
    price: "$125",
    image: "https://images.pexels.com/photos/4202329/pexels-photo-4202329.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400",
  },
  {
    id: 2,
    name: "Velvet Crème",
    category: "Moisturizer",
    price: "$95",
    image: "https://images.pexels.com/photos/8361539/pexels-photo-8361539.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400",
  },
  {
    id: 3,
    name: "Aura Essence",
    category: "Fragrance",
    price: "$180",
    image: "https://images.pexels.com/photos/7005938/pexels-photo-7005938.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400",
  },
  {
    id: 4,
    name: "Golden Elixir",
    category: "Body Oil",
    price: "$85",
    image: "https://images.pexels.com/photos/4202321/pexels-photo-4202321.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400",
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-liquid-beige relative">
      <div className="flex justify-between items-end mb-12">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-2"
          >
            Trending <span className="italic text-liquid-gold">Now</span>
          </motion.h2>
        </div>
        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          href="#" 
          className="text-sm tracking-widest uppercase hover:text-liquid-gold transition-colors pb-1 border-b border-liquid-dark hover:border-liquid-gold"
        >
          View All
        </motion.a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-liquid-sand">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Glass Add to Cart Button */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <button className="glass px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/60 text-sm font-medium">
                  <ShoppingBag size={16} />
                  Add to Bag
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <span className="text-xs text-liquid-dark/50 tracking-widest uppercase mb-1 block">
                {product.category}
              </span>
              <h3 className="text-lg font-serif mb-1 group-hover:text-liquid-gold transition-colors">
                {product.name}
              </h3>
              <p className="text-liquid-dark/80 font-light">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
