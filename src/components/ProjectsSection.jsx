export default function ProjectsSection() {
    return (
      <section className="bg-[#f6f0e8] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start h-[650px]">
          {/* Left Text Column */}
          <div className="pr-4 mt-24">
            <span className="uppercase tracking-wider font-medium text-sm inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-black"></div>
              Project
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Explore Our Latest <br />
              Interior Design <br />
              Masterpieces
            </h2>
            <p className="text-gray-700 mb-8 max-w-md">
              Step into a world of elegance and innovation with our latest interior design projects each space we create.
            </p>
            <button className="border border-black px-8 py-4 font-medium text-sm hover:bg-black hover:text-white transition">
              MORE PROJECT
            </button>
          </div>
  
          {/* Right Projects Column - Scrollable */}
          <div className="space-y-10 overflow-y-auto pr-2 h-full hide-scrollbar">
            {/* Project 1 */}
            <div className="grid grid-cols-2 gap-6 items-center">
              <img
                src="https://images.pexels.com/photos/16261022/pexels-photo-16261022/free-photo-of-light-fixture-hanging-over-a-book-lying-on-a-coffee-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern Elegance"
                className="w-full h-auto rounded shadow-sm"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Modern Elegance Residence
                </h3>
                <p className="text-gray-600 text-xl mb-4">
                  A perfect blend of sophistication and contemporary design
                </p>
                <button className="text-sm underline underline-offset-4 hover:text-black">
                  LEARN MORE
                </button>
              </div>
            </div>
  
            {/* Project 2 */}
            <div className="grid grid-cols-2 gap-6 items-center">
              <img
                src="https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern Serenity"
                className="w-full h-auto rounded shadow-sm"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Modern Serenity Retreat
                </h3>
                <p className="text-gray-600 text-xl mb-4">
                  Natural textures, and calming tones that promote relaxation.
                </p>
                <button className="text-sm underline underline-offset-4 hover:text-black">
                  LEARN MORE
                </button>
              </div>
            </div>
  
            {/* Project 3 */}
            <div className="grid grid-cols-2 gap-6 items-center">
              <img
                src="https://images.pexels.com/photos/2397351/pexels-photo-2397351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Serenity Retreat"
                className="w-full h-auto rounded shadow-sm"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Modern Serenity Retreat
                </h3>
                <p className="text-gray-600 text-xl mb-4">
                  Natural textures, and open, airy spaces that promote relaxation.
                </p>
                <button className="text-sm underline underline-offset-4 hover:text-black">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  