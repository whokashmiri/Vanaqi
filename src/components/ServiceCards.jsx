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
  ];
  
  export default function ServiceCards() {
    return (
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
    );
  }
  