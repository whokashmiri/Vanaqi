import React from 'react';

const Work = () => {
  return (
    <section
      className="relative w-full h-[120vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/8107979/pexels-photo-8107979.jpeg')`,
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Center Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-center px-4">

        {/* Paragraphs */}
        <p className="max-w-xl text-sm sm:text-base leading-snug tracking-normal font-light">
          MY PASSION IS TO CRAFT CAPTIVATING VISUALS THAT TELL AUTHENTIC STORIES, PRESERVING LIFE’S MOST PRECIOUS MOMENTS THROUGH THE LENS OF MY CAMERA.
        </p>
        <p className="max-w-xl mt-4 text-sm sm:text-base leading-snug tracking-normal font-light">
          STEP INTO MY WORLD, WHERE EVERY FRAME IS A MASTERPIECE, AND YOUR UNIQUE JOURNEY BECOMES THE HEART OF MY ART.
        </p>

        {/* Button */}
        <button className="mt-8 px-6 py-2 border border-white text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition">
          About Me
        </button>
      </div>
    </section>
  );
};

export default Work;
