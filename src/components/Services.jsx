import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';

const services = [
    {
      title: "Custom Furniture Selection",
      description:
        "Our custom furniture designs merge elegance with functionality, creating timeless pieces for your home.",
      image:
        "https://images.pexels.com/photos/31464932/pexels-photo-31464932/free-photo-of-vintage-indoor-plant-scene-with-antique-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Bohemian Eclectic Interiors",
      description:
        "Each piece we create is a fusion of artistry and utility, crafted to complement your space effortlessly.",
      image:
        "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Modern Minimalist Interiors",
      description:
        "Our mission is to design furniture that not only looks stunning but also serves your needs flawlessly.",
      image:
        "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        title: "Wellness Spa Interior Design",
        description:
          "Our bespoke furniture designs elevate interiors with a perfect balance of style and complement purpose.",
        image:
          "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        title: "Kids' Room Play Area Design",
        description:
          "Handcrafted with precision, our furniture pieces offer a seamless blend of elegance and practicality",
        image:
          "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        title: "Ceiling & Flooring Design",
        description:
          "Our expertise extends to workspace and co-working space designs, where we create ergonomic.",
        image:
          "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
  ];

const Services = () => {


  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      {/* Hero Section */}
      <section className="bg-white w-full px-6 py-12 md:py-20">
        <div className="relative w-full rounded-3xl overflow-hidden">
          {/* Corners */}
          <div className="absolute top-0 right-0 w-40 h-20 bg-white rounded-bl-3xl z-10"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-tr-3xl z-10"></div>

          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[280px] md:h-[360px] object-cover rounded-3xl"
          >
            <source src="https://videos.pexels.com/video-files/4440816/4440816-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-20">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg">Our Services</h1>
            <div className="mt-6 w-16 h-16 rounded-full bg-white bg-opacity-20 border border-white flex items-center justify-center">
              <span className="text-2xl animate-bounce">↓</span>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 font-medium">Where Comfort Meets Contemporary Design</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-green-800 leading-tight">
            Discover the Art of <br />
            Beautiful Living with Arzoo Interiors
          </h2>
        </div>
      </section>

      <section className="bg-cream px-6 md:px-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover mb-6"
              />
              <h3 className="text-3xl font-medium text-[#161615] mb-3">
                {service.title}
              </h3>
              <p className="text-[#3B3B3B] mb-5 text-lg">
                {service.description}
              </p>
              <a
  href="#"
  className="relative uppercase text-sm text-black font-medium w-fit pb-1 
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:h-[2px] after:w-0 after:bg-black after:transition-all 
             after:duration-300 hover:after:w-full hover:after:h-[2px]"
>
  Get Started Now
</a>


            </div>
          ))}
        </div>
      </section>

     
  
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Services;
