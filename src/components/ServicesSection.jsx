import React, { useState } from 'react';

const ServiceCard = ({ index, title, images }) => {
  const [floatingSrc, setFloatingSrc] = useState(null);
  const [floatingPos, setFloatingPos] = useState({ x: 0, y: 0 });

  const handleHover = (e, img) => {
    const rect = e.target.getBoundingClientRect();
    setFloatingSrc(img);
    setFloatingPos({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };

  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 w-full sm:w-[300px] h-[360px] flex flex-col items-center justify-end relative transition-all duration-500 group">
      {/* Floating image appears from hovered image position */}
      {floatingSrc && (
        <div
          className="fixed z-5 pointer-events-none transition-transform duration-500 ease-out"
          style={{
            left: floatingPos.x,
            top: floatingPos.y,
            transform: 'translate(-50%, -150%) scale(1.1)',
            opacity: 1,
          }}
        >
          <img
            src={floatingSrc}
            alt="Floating"
            className="w-[120px] rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* Index */}
      <p className="text-xs text-gray-400 mb-4 uppercase">/ {index}</p>

      {/* Stacked images */}
      <div className="relative w-full flex justify-center items-center gap-2 mt-4 mb-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            onMouseEnter={(e) => handleHover(e, img)}
            onMouseLeave={() => setFloatingSrc(null)}
            className={`w-[90px] h-[130px] object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110 ${
              i === 0 ? 'rotate-[-12deg] z-10' : 'rotate-[12deg] z-0'
            }`}
          />
        ))}
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold tracking-wide text-center">{title}</h3>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col items-center">
      <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">/ Services</p>
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-14">
        HOW I BRING YOUR <br className="sm:hidden" /> VISION TO LIFE?
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        <ServiceCard
          index="01"
          title="PORTRAITS"
          images={[
            'https://images.pexels.com/photos/18325795/pexels-photo-18325795/free-photo-of-yellow-chevrolet-chevette.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/15435381/pexels-photo-15435381/free-photo-of-red-shining-chevy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          ]}
        />

        <ServiceCard
          index="02"
          title="EVENTS & WEDDING"
          images={[
            'https://images.pexels.com/photos/20828072/pexels-photo-20828072/free-photo-of-urban-buzz-life-in-the-heart-of-the-city.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/3185489/pexels-photo-3185489.jpeg?auto=compress&cs=tinysrgb&w=800',
          ]}
        />

        <ServiceCard
          index="03"
          title="COMMERCIAL & BRANDING"
          images={[
            'https://images.pexels.com/photos/3801091/pexels-photo-3801091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/14058448/pexels-photo-14058448.jpeg?auto=compress&cs=tinysrgb&w=800',
          ]}
        />



         <ServiceCard
          index="04"
          title="MOUNTAINS & SEAS "
          images={[
            'https://images.pexels.com/photos/28610723/pexels-photo-28610723/free-photo-of-stunning-view-of-half-dome-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/561463/pexels-photo-561463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          ]}
        />
         <ServiceCard
          index="05"
          title="MOVIES & CINEMATIC"
          images={[
            'https://images.pexels.com/photos/2095594/pexels-photo-2095594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/32503455/pexels-photo-32503455/free-photo-of-historic-red-tram-on-istiklal-street-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          ]}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
