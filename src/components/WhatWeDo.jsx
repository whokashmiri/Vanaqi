// import React from "react";

export default function WhatWeDo() {
  return (
    <section className="bg-ivory h-screen py-16 px-6 md:px-16">
      {/* Label with black square */}
      <div className="flex items-center mb-6">
        <span className="inline-block w-7 h-7 bg-black mr-3"></span>
        <h2 className="tracking-wider font-medium text-base uppercase">
          What We Do
        </h2>
      </div>

      {/* Heading */}
      <h1 className=" font-medium tracking-wider text-black text-4xl md:text-5xl lg:text-6xl leading-tight">
      Redefining Modern Living with Minimalist Luxury and 3DFlair:&nbsp;
        <span className="text-gray-400">
        Tailored Architecture, Refined Interior Design, 
        </span>
        and Premium 3D Rendering Services for the Discerning Eye.
      </h1>
    </section>
  );
}
