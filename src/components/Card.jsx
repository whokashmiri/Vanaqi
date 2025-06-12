import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import  { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const images = [
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3753436/pexels-photo-3753436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

const Card = () => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#6e7d70] font-sans text-white overflow-hidden">
      {/* Background Image Slider */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[index]})`,
          filter: 'grayscale(100%)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#6e7d70]/70" />

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-20">
        <h1 className="text-md uppercase tracking-wide font-semibold text-white">
          sparc design
        </h1>
        <div className="relative z-50">
      {/* Hamburger / X Icon */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex flex-col justify-center items-center cursor-pointer space-y-1"
      >
        <motion.span
          className="block h-0.5 bg-white w-8"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block h-0.5 bg-white w-8"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block h-0.5 bg-white w-8"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-4 w-48 bg-white text-gray-800 rounded shadow-lg overflow-hidden"
          >
            <a href="#about" className="block px-4 py-2 hover:bg-gray-100">
              About Us
            </a>
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">
              Contact
            </a>
            <a href="#blogs" className="block px-4 py-2 hover:bg-gray-100">
              Blogs
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
      </div>

      {/* Centered Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-[0.3em] text-center font-light">
          WHERE THOUGHTS BECOME THINGS
        </h2>
      </div>

      {/* Footer Navigation */}
      <div className="absolute bottom-0 left-0 w-full px-6 py-4 bg-[#6e7d70] bg-opacity-90 text-sm flex justify-between items-center text-white z-20">
        <div>© SPARC DESIGN</div>
        <div className="space-x-8 uppercase tracking-widest text-xs hidden md:flex">
          <span>Architecture</span>
          <span>Interiors</span>
          <span>Landscape</span>
        </div>
        <div className="flex space-x-4 text-white text-lg">
          <a href="#" className="hover:opacity-70"> <FacebookIcon/> </a>
          <a href="#" className="hover:opacity-70"> <InstagramIcon/> </a>
          <a href="#" className="hover:opacity-70"> <LinkedinIcon/> </a>
          <a href="#" className="hover:opacity-70"><GithubIcon/></a>
        </div>
      </div>
    </div>
  );
};

export default Card;
