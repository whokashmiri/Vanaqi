
import Newsletter from './Newsletter';
import Footer from './Footer';
import Navbar from './Navbar';
import { Flag } from 'lucide-react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion, useAnimation  } from "framer-motion";
import { useEffect } from 'react';
import StatsSection from './StatsSection';
import AboutArzoo from './AboutArzoo';


const AboutPage = () => {

    const items = [
        {
          title: "Our Vision",
          description:
            "Our vision is to create interiors that not only reflect the unique personalities aspirations.",
        },
        {
          title: "Our Mission",
          description:
            "Our goal is to craft spaces that inspire creativity, foster connection, and promote well-being.",
        },
        {
          title: "Our Goal",
          description:
            "Through meticulous attention to detail and a passion for sustainable design, we aim.",
        },
      ];

      const images = [
        'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
        'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',
      ];
 

      const controls = useAnimation();

      useEffect(() => {
        let current = 0;
    
        const cycle = () => {
          current = (current + 1) % images.length;
          controls.start({
            x: `-${current * 100}%`,
            transition: { duration: 1, ease: 'easeInOut' },
          });
        };
    
        const interval = setInterval(cycle, 3000);
        return () => clearInterval(interval);
      }, [controls, images.length]);

     

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
            <source src="https://videos.pexels.com/video-files/6551321/6551321-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-20">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg">About Arzoo Designs</h1>
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

      <section className="bg-ivory h-fit py-16 px-6 md:px-16">
      {/* Label with black square */}
     

      {/* Heading */}
      <h1 className=" font-medium tracking-wider text-black text-2xl md:text-3xl lg:text-4xl leading-tight">
      We focus on designing spaces that are both functional and visually
 appealing for residential and commercial clients. By partnering with
 architects, builders, and homeowners, we transform design into
 beautiful and harmonious environments.
      </h1><br />

      <h1 className=" font-medium tracking-wider text-black text-2xl md:text-3xl lg:text-4xl leading-tight">
      Whether it&apos;s a  <span className='text-gray-400'>cozy home, a boutique hotel, or an office space, our  
designers take into account factors like layout, color schemes,
 furniture, lighting, usability,access, site features and decor </span> to create
 spaces that reflect the client’s vision and lifestyle. Our aim is to enhance
 both the functionality and aesthetic appeal of the space, making it
 comfortable, inviting, and personalized
      </h1>
    </section>

    <section className="w-full bg-[#f4f1ea] py-16 px-6 md:px-16">
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#f0ede6] p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Replace with your icon if needed */}
            <div className="mb-6">
             <Flag size={45} className='stroke-yellow-600'/>
            </div>
            <h3 className="text-xl font-semibold text-black mb-4">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#f9f5f0] w-full py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Heading */}
        <div>
          <h1 className="text-4xl md:text-5xl font-medium text-black leading-tight">
            Crafting Spaces That <br />
            Inspire and Function
          </h1>
        </div>

        {/* Right: Description + List */}
        <div>
          <p className="text-gray-700 mb-6">
            We believe that great design is a harmonious blend of inspiration and functionality.
            Our mission is to craft spaces.
          </p>

          <ul className="space-y-4">
            {[
              "Create Spaces That Inspire",
              "Crafting Interiors That Enhance",
              "Maximizing Comfort and Style",
              "Innovative Solutions for Your Interiors",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-3 text-black font-medium">
                <FaCheckCircle className="text-[#be916c] mt-1" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="w-full bg-[#f9f5f0] py-10 px-4 md:px-16 overflow-hidden">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
        <motion.div
          className="flex w-full"
          animate={controls}
          initial={{ x: 0 }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-full h-[300px] md:h-[450px] flex-shrink-0"
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    
<AboutArzoo/>
    <StatsSection/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default AboutPage;
