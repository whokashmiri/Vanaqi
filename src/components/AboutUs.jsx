import { CircleCheckBig } from "lucide-react";

export default function AboutUs() {
    return (
      <section className="bg-cream py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left side with images */}
        <div className="w-full md:w-1/2 flex gap-6">
          {/* Smaller image */}
          <div className="w-1/2">
            <img
              src="https://images.pexels.com/photos/13235414/pexels-photo-13235414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Decorative small image"
              className="rounded-lg shadow-md h-full object-cover"
            />
          </div>
  
          {/* Larger image */}
          <div className="w-2/3">
            <img
              src="https://images.pexels.com/photos/31509746/pexels-photo-31509746/free-photo-of-charming-red-brick-doorway-with-floral-decor-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Decorative large image"
              className="rounded-lg shadow-lg h-full object-cover"
            />
          </div>
        </div>
  
        {/* Right side with content */}
        <div className="w-full md:w-1/2 text-[#161615]">
          {/* Section title */}
          <span className="uppercase tracking-wider font-medium text-sm inline-flex items-center gap-2 mb-4">
            <div className="w-7 h-7 bg-black"></div>
            About Us
          </span>
  
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6 leading-tight">
            Crafting Elegance, One Room at a Time
          </h2>
  
          {/* Paragraph */}
          <p className="text-base sm:text-lg text-[#3B3B3B] mb-8">
            From planning to the final reveal, we handle every detail with precision and creativity, transforming your space into a masterpiece.
          </p>
  
          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm sm:text-base text-[#3B3B3B] font-medium mb-10">
            <div className="flex items-center gap-2">
              <span> <CircleCheckBig /> </span> Enhanced Comfort
            </div>
            <div className="flex items-center gap-2">
              <span><CircleCheckBig /></span> Space Optimization
            </div>
            <div className="flex items-center gap-2">
              <span><CircleCheckBig /></span> Timeless Elegance
            </div>
            <div className="flex items-center gap-2">
              <span><CircleCheckBig /></span> Functional Aesthetics
            </div>
          </div>
  
          {/* CTA Button */}
          <a
            href="#about"
            className="inline-block px-7 py-4 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm uppercase tracking-wide"
          >
            More About Us
          </a>
        </div>
      </section>
    );
  }
  