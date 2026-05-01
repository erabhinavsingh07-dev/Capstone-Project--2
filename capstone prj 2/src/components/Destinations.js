import React from 'react';
import { motion } from 'framer-motion';

const data = [
  { title: "Bora Bora", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
  { title: "Swiss Alps", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80" },
  { title: "Kyoto Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80" }
];

const Destinations = () => (
  <section className="destinations">
    <motion.h2 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        style={{ fontSize: '3rem', margin: '0' }}
    >
        Trending Destinations
    </motion.h2>
    <div className="grid">
      {data.map((item, i) => (
        <motion.div 
          key={i} 
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -10 }}
        >
          <img src={item.img} className="card-img" alt={item.title} />
          <div className="card-overlay">
            <h3>{item.title}</h3>
            <p>From $1,200 / person</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
export default Destinations;