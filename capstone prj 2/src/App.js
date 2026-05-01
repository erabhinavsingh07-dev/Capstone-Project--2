import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingBar from './components/BookingBar';
import Destinations from './components/Destinations';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BookingBar />
      <Destinations />
      <footer style={{ padding: '100px 50px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--accent)' }}>TRAVEL.PRO</h2>
        <p>© 2024 Premium Capstone Project. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;