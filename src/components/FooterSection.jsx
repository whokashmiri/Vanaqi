import React from 'react';
import Card from "../components/Card";

const FooterSection = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <section
      className="relative bg-black text-white min-h-[140vh] px-6 pt-20 pb-[160px] flex flex-col justify-between overflow-x-hidden"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/30900830/pexels-photo-30900830/free-photo-of-colorful-mexican-chilli-pepper-assortment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start border-b border-white/30 pb-3 gap-8">
          <div>
            <p className="uppercase text-sm font-light leading-6 max-w-xs">
              Every moment holds a story waiting to be <br /> captured
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:opacity-80">LinkedIn</a>
              <a href="#" className="hover:opacity-80">Twitter</a>
              <a href="#" className="hover:opacity-80">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-6 text-xs text-white/70">
          © {currentYear}. Vanessa Rights Reserved.
        </div>
      </div>

      {/* Large screen layout: Card + Vanessa side-by-side */}
      <div className="hidden lg:flex absolute bottom-0 w-full z-10 px-2 items-end justify-center pointer-events-none">
        <div className="pointer-events-auto mb-20 mr-3">
          <Card />
        </div>
        <h1 className="text-[15vw] font-extrabold leading-none mb-20 text-white mix-blend-difference drop-shadow-[0_8px_15px_rgba(0,0,0,0.7)]">
          VANESSA
        </h1>
      </div>

      {/* Small screen: Vertical Vanessa centered */}
      <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[140vh] flex items-center  mix-blend-difference justify-center pointer-events-none z-10">
        <h1 className="text-[25vw] font-extrabold text-white mix-blend-difference drop-shadow-[0_8px_15px_rgba(0,0,0,0.7)] rotate-90 whitespace-nowrap">
          VANESSA  <br /> JAUREGUI
        </h1>
      </div>
    </section>
  );
};

export default FooterSection;
