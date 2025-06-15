import React, { useState } from 'react';


const ServiceCard = ({ index, title, images }) => {
  const [floatingSrc, setFloatingSrc] = useState(null);

  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 w-full sm:w-[300px] h-[360px] flex flex-col items-center justify-end relative transition-all duration-500 group">
      {/* Floating image (only shows if one is hovered) */}
      {floatingSrc && (
  <div className="absolute -top-24 transition-all duration-500 ease-in-out opacity-0 translate-y-4 scale-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-110">
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
            onMouseEnter={() => setFloatingSrc(img)}
            onMouseLeave={() => setFloatingSrc(null)}
            className={`w-[80px] h-[100px] object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110 ${
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
            'https://images.pexels.com/photos/18845887/pexels-photo-18845887.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/22228774/pexels-photo-22228774.jpeg?auto=compress&cs=tinysrgb&w=800',
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
            'https://images.pexels.com/photos/17320825/pexels-photo-17320825.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/6356044/pexels-photo-6356044.jpeg?auto=compress&cs=tinysrgb&w=800',
          ]}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
