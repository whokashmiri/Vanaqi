/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "From start to finish, their professionalism and attention to detail were unmatched. They created a space that perfectly reflects our style.",
    name: "Taylor Reynolds",
    title: "Founder & Lead Designer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Every step of the process felt seamless. The results exceeded our expectations—pure elegance and class.",
    name: "Ava Mitchell",
    title: "Interior Consultant",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = testimonials.length;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + total) % total);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  const { quote, name, title, avatar } = testimonials[index];

  return (
    <section className="bg-gradient-to-r from-cream to-ivory py-16 px-4 text-center">
    <div className="max-w-3xl mx-auto">
      <div className="text-yellow-500 stroke-yellow-600 mb-6 text-5xl">★★★★★</div> {/* Increased star size */}
  
      <div className="relative min-h-[300px] overflow-hidden"> {/* Increased height */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 px-4"
          >
            <p className="text-xl md:text-2xl font-medium text-[#1c1c1c] mb-10">
              "{quote}"
            </p>
  
            <div className="flex flex-col items-center space-y-2">
              <img
                src={avatar}
                alt={name}
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <h3 className="text-base font-semibold text-[#1c1c1c]">{name}</h3>
              <p className="text-sm text-gray-600">{title}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
  
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={() => paginate(-1)}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
  
  );
}
