import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "SIENNA’S WORK IS TRULY REMARKABLE. SHE CAPTURED THE MOST CANDID AND EMOTIONAL MOMENTS DURING OUR WEDDING, MAKING US RELIVE THE MAGIC EVERY TIME WE LOOK AT THE PHOTOS. HER TALENT, PROFESSIONALISM, AND PASSION SHINE THROUGH IN EVERY FRAME!",
    name: 'MICHAEL & ANNA K',
    role: 'NEWLYWEDS',
    background:
      'https://images.pexels.com/photos/18500431/pexels-photo-18500431.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    quote:
      "ABSOLUTELY STUNNING PHOTOS! SIENNA HAS AN EYE FOR DETAIL AND A STYLE THAT FEELS TIMELESS. OUR WEDDING ALBUM FEELS LIKE ART.",
    name: 'EMILY & DANIEL M',
    role: 'COUPLE',
    background:
      'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    quote:
      "ABSOLUTELY STUNNING PHOTOS! SIENNA HAS AN EYE FOR DETAIL AND A STYLE THAT FEELS TIMELESS. OUR WEDDING ALBUM FEELS LIKE ART.",
    name: 'EMILY & DANIEL M',
    role: 'COUPLE',
    background:
      'https://images.pexels.com/photos/7586140/pexels-photo-7586140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    quote:
      "ABSOLUTELY STUNNING PHOTOS! SIENNA HAS AN EYE FOR DETAIL AND A STYLE THAT FEELS TIMELESS. OUR WEDDING ALBUM FEELS LIKE ART.",
    name: 'EMILY & DANIEL M',
    role: 'COUPLE',
    background:
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    quote:
      "VANESSA'S PHOTOGRAPHY IS ABSOLUTELY BREATHTAKING. HER ATTENTION TO DETAIL AND TIMELESS STYLE TURNED OUR WEDDING MEMORIES INTO A TRUE WORK OF ART. EVERY IMAGE FEELS LIKE A MASTERPIECE.",
    name: 'VANAQI',
    role: 'COUPLE',
    background:
      'https://images.pexels.com/photos/26110235/pexels-photo-26110235/free-photo-of-man-on-boat-on-dal-lake-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${current.background})` }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

      {/* Testimonial Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-xl max-w-xl text-center px-8 py-10 text-white shadow-2xl">
        <p className="text-sm sm:text-base leading-relaxed font-light">
          {current.quote}
        </p>
        <div className="mt-6">
          <h4 className="text-lg font-semibold">{current.name}</h4>
          <p className="text-xs text-gray-300 tracking-wider">{current.role}</p>
        </div>

        {/* Arrows */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Dot */}
      <div className="absolute right-8 bottom-20 w-4 h-4 bg-white rounded-full opacity-80" />
    </section>
  );
};

export default TestimonialCarousel;
