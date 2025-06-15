import React, { useState } from 'react';
import useLenisScroll from '../hooks/useLenisScroll';
import Name from './Name';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    useLenisScroll(); // 👈 smooth scroll activates here


  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden px-4 py-16 flex flex-col justify-center items-center text-white">
      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-50 max-w-6xl mx-auto px-3 flex justify-between items-center text-sm font-semibold mix-blend-difference">
  

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 text-white">
          <a href="#" className="hover:opacity-80">HOME</a>
          <a href="#" className="hover:opacity-80">ABOUT</a>
          <a href="#" className="hover:opacity-80">GALLERY</a>
          <a href="#" className="hover:opacity-80">ARTICLES</a>
        </div>

        {/* ENQUIRE Button (Desktop) */}
        <a href="#" className="hidden md:block hover:opacity-80 text-white">ENQUIRE</a>

        {/* Burger Icon (Mobile) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
  className={`fixed top-20 left-0 right-0 bg-black text-white overflow-hidden transition-all duration-500 ease-in-out z-40 md:hidden ${
    menuOpen ? 'max-h-[300px] py-10' : 'max-h-0 py-0'
  }`}
>
  <div className="flex flex-col items-center gap-6">
    <a href="#" onClick={() => setMenuOpen(false)}>HOME</a>
    <a href="#" onClick={() => setMenuOpen(false)}>ABOUT</a>
    <a href="#" onClick={() => setMenuOpen(false)}>GALLERY</a>
    <a href="#" onClick={() => setMenuOpen(false)}>ARTICLES</a>
    <a href="#" onClick={() => setMenuOpen(false)}>ENQUIRE</a>
  </div>
</div>


      {/* Title */}
      <Name />

      {/* Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full z-0 mt-0 md:mt-52">
        {/* Left Image (Hidden on mobile) */}
        <div className="hidden md:block relative overflow-hidden rounded-xl h-[500px]">
          <img
            src="https://images.pexels.com/photos/18191481/pexels-photo-18191481.jpeg"
            alt="VANESSA 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Image (Always visible) */}
        <div className="relative overflow-hidden rounded-xl h-[700px]">
          <img
            src="https://images.pexels.com/photos/8107979/pexels-photo-8107979.jpeg"
            alt="VANESSA 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image (Hidden on mobile) */}
        <div className="hidden md:block relative overflow-hidden rounded-xl h-[500px]">
          <img
            src="https://images.pexels.com/photos/8108095/pexels-photo-8108095.jpeg"
            alt="VANESSA 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
