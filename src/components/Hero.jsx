import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden px-4 py-16 flex flex-col justify-center items-center text-white">
      {/* Navigation */}
      <nav className="absolute top-8 left-0 right-0 flex justify-between max-w-6xl mx-auto px-4 text-sm font-semibold z-10">
        <div className="flex gap-8">
          <a href="#" className="hover:opacity-80">HOME</a>
          <a href="#" className="hover:opacity-80">ABOUT</a>
          <a href="#" className="hover:opacity-80">GALLERY</a>
          <a href="#" className="hover:opacity-80">ARTICLES</a>
        </div>
        <a href="#" className="hover:opacity-80">ENQUIRE</a>
      </nav>

      {/* Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full z-0 mt-20">
        {/* Left Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="https://images.pexels.com/photos/24350556/pexels-photo-24350556.jpeg"
            alt="Sienna 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="https://images.pexels.com/photos/21404438/pexels-photo-21404438.jpeg"
            alt="Sienna 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="https://images.pexels.com/photos/2279370/pexels-photo-2279370.jpeg"
            alt="Sienna 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Big Overlay Text */}
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20vw] leading-none font-extrabold tracking-tight text-white mix-blend-difference pointer-events-none z-10">
        VANESSA
      </h1>
    </section>
  );
};

export default Hero;
