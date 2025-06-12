export default function ServicesSection() {
    return (
      <section className="bg-cream py-20 px-6 md:px-20">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          {/* Left title */}
          <div>
            <span className="uppercase tracking-wider font-medium text-sm inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-black"></div>
              Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#161615]">
              Our best services
            </h2>
          </div>
  
          {/* Right link */}
          <div className="mt-6 md:mt-0">
            <a
              href="#services"
              className="uppercase tracking-wide text-sm font-medium text-[#161615] border-b border-black pb-1 hover:opacity-70 transition"
            >
              View All Services
            </a>
          </div>
        </div>
  
        {/* You can map service cards here */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          // Cards go here
        </div> */}
      </section>
    );
  }
  