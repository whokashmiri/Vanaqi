import React from 'react';
import Marquee from 'react-fast-marquee';

const imageRows = [
  [
    'https://images.pexels.com/photos/14058448/pexels-photo-14058448.jpeg',
    'https://images.pexels.com/photos/18290352/pexels-photo-18290352.jpeg',
    'https://images.pexels.com/photos/30256929/pexels-photo-30256929/free-photo-of-classic-muscle-cars.jpeg',
    'https://images.pexels.com/photos/18077448/pexels-photo-18077448.jpeg',
    'https://images.pexels.com/photos/14430327/pexels-photo-14430327.jpeg',
  ],
  [
    'https://images.pexels.com/photos/11918092/pexels-photo-11918092.jpeg',
    'https://images.pexels.com/photos/20119920/pexels-photo-20119920.jpeg',
    'https://images.pexels.com/photos/18735567/pexels-photo-18735567.jpeg',
    'https://images.pexels.com/photos/17573523/pexels-photo-17573523.jpeg',
    'https://images.pexels.com/photos/18033183/pexels-photo-18033183.jpeg',
  ],
  [
    'https://images.pexels.com/photos/32523708/pexels-photo-32523708.jpeg',
    'https://images.pexels.com/photos/18781892/pexels-photo-18781892.jpeg',
    'https://images.pexels.com/photos/15755610/pexels-photo-15755610.jpeg',
    'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg',
    'https://images.pexels.com/photos/18079319/pexels-photo-18079319.jpeg',
  ],
];

const GalleryRow = ({ images, reverse = false }) => (
  <Marquee
    gradient={false}
    speed={30}
    direction={reverse ? 'right' : 'left'}
    pauseOnHover={true}
    className="gap-4"
  >
    {images.concat(images).map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`gallery-${idx}`}
        className="w-[220px] h-[300px] object-cover rounded-lg mx-2"
      />
    ))}
  </Marquee>
);

const GalleryMarquee = () => {
  return (
    <section className="relative bg-black text-white py-12 px-4 lg:px-10 overflow-hidden">
      {/* Left Black Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-[200px] z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      {/* Text Overlay on Carousel */}
      <div className="absolute z-20 top-1/3 left-4 lg:left-auto lg:right-12 text-left lg:text-right max-w-md">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          EXPLORE MORE <br /> MASTERPIECES IN <br /> THE GALLERY
        </h2>
        <button className="mt-6 text-sm uppercase border-b border-white tracking-widest">
          ▸ BROWSE GALLERY
        </button>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-6 relative z-0">
        <GalleryRow images={imageRows[0]} />
        <GalleryRow images={imageRows[1]} reverse />
        <GalleryRow images={imageRows[2]} />
      </div>
    </section>
  );
};

export default GalleryMarquee;
