import React, { useState } from 'react';

const GalleryCard = ({
  image,
  hoverImage,
  orientation = 'horizontal',
  title,
  category,
  date,
  customWidth = '', // NEW
}) => {
  const [hovered, setHovered] = useState(false);

  const isVertical = orientation === 'vertical';

   const widthClass = customWidth
    ? customWidth
    : isVertical
    ? 'w-[420px]'
    : 'w-[500px]';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-2xl bg-[#1a1a1a] text-white shadow-md transition-all duration-300 flex flex-col ${widthClass} ${
        isVertical ? 'h-[660px]' : 'h-[450px]'
      }`}
    >
      {/* Image Container */}
      <div className="relative w-full h-[75%] overflow-hidden">
        <img
          src={image}
          alt="gallery"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={hoverImage}
          alt="hover"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Text Section */}
      <div className="w-full h-[25%] px-4 py-5 z-10">
        <div className="flex justify-between text-xs text-gray-400 uppercase">
          <span>{category}</span>
          <span>{date}</span>
        </div>
        <h3 className="text-sm sm:text-base font-medium mt-2 leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
};

const GalleryGrid = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-12 flex flex-col gap-12 items-center">
      {/* Top Row - Horizontal + Vertical Cards */}
      <div className="flex flex-wrap gap-10 justify-center">
        <GalleryCard
          orientation="horizontal"
          image="https://images.pexels.com/photos/29014056/pexels-photo-29014056/free-photo-of-yosemite-national-park-autumn-scene-with-waterfall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          hoverImage="https://images.pexels.com/photos/5633257/pexels-photo-5633257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="LUMINOUS NIGHTS: A DISCO–INSPIRED PORTRAIT"
          category="/ PORTRAITS"
          date="FEB 7, 2025"
        />

        <GalleryCard
          orientation="vertical"
          image="https://images.pexels.com/photos/9989653/pexels-photo-9989653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          hoverImage="https://images.pexels.com/photos/3729215/pexels-photo-3729215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="DANCING IN SERENITY: A SYMPHONY OF NATURE"
          category="/ GALLERY"
          date="MAR 18, 2025"
        />
      </div>

      {/* Bottom Centered Card */}
      <div className="flex justify-center">
        <GalleryCard
          orientation="horizontal"
           customWidth="w-[600px]"
          image="https://images.pexels.com/photos/1637210/pexels-photo-1637210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          hoverImage="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="GOLDEN STILLNESS: A MOMENT BETWEEN WORLDS"
          category="/ FEATURED"
          date="APR 22, 2025"
        />
      </div>
    </section>
  );
};

export default GalleryGrid;
