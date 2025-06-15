import AOS from "aos";
import "aos/dist/aos.css"; 
import React, { useEffect } from "react";

const GalleryIntro = () => {
      useEffect(() => {
          AOS.init({ duration: 1000 });
        }, []);
  return (
    <section className="relative w-full lg:h-screen sm:max-h-96 bg-black text-white overflow-hidden px-6 sm:px-12">
      {/* Content */}
      <div className="absolute bottom-20 left-6 sm:left-12 z-10">
        <p className="text-xs tracking-widest text-gray-400 mb-2">/ GALLERY</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight space-y-2">
          <div data-aos="fade-left">WHERE EVERY</div>
          <div data-aos="fade-left">FRAME TELLS A</div>
          <div className="relative inline-block">
            <span data-aos="fade-left">STORY</span>
            <span className="absolute -bottom-1 left-0 w-full h-full text-white blur-md opacity-30" data-aos="fade-left">
              STORY
            </span>
          </div>
        </h1>
      </div>
    </section>
  );
};

export default GalleryIntro;
