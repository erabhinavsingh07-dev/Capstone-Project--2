import React from 'react';
import { motion } from 'framer-motion';

const BookingBar = () => (
  <div className="booking-container">
    <motion.div 
      className="booking-bar"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="input-group">
        <label>Destination</label>
        <input type="text" placeholder="Where are you going?" />
      </div>
      <div className="input-group">
        <label>Dates</label>
        <input type="text" placeholder="Add dates" />
      </div>
      <div className="input-group">
        <label>Travelers</label>
        <input type="text" placeholder="Add guests" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button className="btn-primary" style={{ width: '100%' }}>Search</button>
      </div>
    </motion.div>
  </div>
);
export default BookingBar;