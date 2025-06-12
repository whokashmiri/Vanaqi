import Lucid2 from "../assets/Lucid2.avif";

const HeroSection = () => {
  return (
    <section className="min-h-dvh bg-white sm:p-12 rounded-[60px] overflow-hidden mx-auto max-w-screen-xl relative">
      {/* Background Image */}
      <img
        src={Lucid2}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover p-2 object-center z-0 rounded-[150px]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 rounded-[150px]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-between text-white h-full text-center">
        {/* Top Content */}
        <div className="flex flex-col items-center ">
          <h1 className="text-[36px] sm:text-[48px] md:text-[55px] font-glitch glitch-text">
            VANAQI
          </h1>
          <p className="mt-2 text-xs font-glitch glitch-text">DESIGN STUDIO · CALOFORNIA</p>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-96 ">
          <p className="mx-auto text-sm">
            At Vanaqi, we transcend convention to craft designs that embody timeless elegance and distinction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
