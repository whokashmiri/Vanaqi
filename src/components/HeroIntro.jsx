import AOS from "aos";
import "aos/dist/aos.css"; 
import React, { useEffect } from "react";import { FaPlay } from 'react-icons/fa';

const HeroIntro = () => {
     useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-16 flex flex-col justify-center">
      <div className="flex flex-col md:flex-row gap-10 md:gap-32 items-start justify-between w-full">

        {/* Left Column */}
        <div className="relative flex-1">
          {/* Animated Down Arrow */}
          <div className="text-3xl mb-4 animate-bounce">↓</div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight" data-aos="fade-right">
            CALIFORNIA-BASED <br />
            CREATOR OF STRIKING <span className="inline-block w-3 h-3 bg-white rounded-full align-middle ml-1" /> <br />
            VISUALS & TIMELESS <br />
            STORIES.
          </h1>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-6 max-w-md">
          {/* Green Dot and Status */}
          <div className="flex items-center  gap-2" data-aos="fade-right">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse relative">
              <span className="absolute inset-0 bg-green-400 rounded-full animate-ping-slower" />
            </span>
            <span className="text-xs tracking-wide" >AVAILABLE FOR WORK</span>
          </div>

          {/* Paragraphs */}
          <p className="text-sm leading-relaxed text-gray-200 capitalize" data-aos="fade-left">
            Based in the heart of California, I am a passionate photographer and visual storyteller dedicated to crafting compelling imagery that merges artistic vision with authentic expression. From iconic cityscapes to intimate portraits, my work reflects bold creativity and meticulous attention to detail — with a unique flair for capturing moments that speak volumes.
          </p>

          <p className="text-sm leading-relaxed text-gray-200" data-aos="fade-right ">
            I transform ordinary moments into cinematic masterpieces — each frame a story, each scene a memory etched in light. Whether for brands, editorials, or personal journeys, my visuals are crafted to linger in the mind and echo long after the image fades.
          </p>

          {/* Call to Action */}
          <div className="flex items-center gap-2 text-sm font-semibold cursor-pointer hover:underline">
            <FaPlay className="text-xs" />
            <span>LET'S TALK</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntro;
