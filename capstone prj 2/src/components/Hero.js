import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="hero">
    <img 
      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80" 
      className="hero-video"
      alt="Hero background"
    />
    <motion.div 
      className="hero-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>ADVENTURE <br/> AWAITS</h1>
      <p>Luxury travel experiences curated for the modern explorer.</p>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        className="btn-primary"
      >
        Explore World
      </motion.button>
    </motion.div>
  </section>
);
export default Hero;