import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav>
    <div className="logo">TRAVEL.PRO</div>
    <div style={{ display: 'flex', gap: '30px' }}>
      <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Destinations</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Experiences</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Packages</a>
    </div>
    <button className="btn-primary" style={{ padding: '10px 25px' }}>Sign In</button>
  </nav>
);
export default Navbar;