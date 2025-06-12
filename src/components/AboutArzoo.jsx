import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const useTypingText = (fullText, speed = 40, start = true) => {
    const [text, setText] = useState("");
  
    useEffect(() => {
      if (!start) return;
  
      let index = -1;
      const interval = setInterval(() => {
        index++;
        if (index < fullText.length) {
          setText((prev) => prev + fullText.charAt(index));
        } else {
          clearInterval(interval);
        }
      }, speed);
  
      return () => clearInterval(interval);
    }, [fullText, speed, start]);
  
    return text;
  };
  
  

const AboutArzoo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Typing text hooks
 // Typing text hooks (trigger only when inView = true)
const headingText = useTypingText("Hi... I’m Arzoo!", 80, isInView);
const paragraph1 = useTypingText(
  "For me, design goes beyond aesthetics — it's about humanizing spaces and crafting environments that inspire and connect.",
  20,
  isInView
);
const paragraph2 = useTypingText(
  "After 5+ years in the field and a successful corporate career, I stepped out at 25+ to pursue my independent vision, leaving behind traditional boundaries.",
  20,
  isInView
);
const paragraph3 = useTypingText(
  "Creativity, quick learning, and collaboration with exceptional people fuel my journey. I believe in taking risks to inspire and innovate.",
  20,
  isInView
);


  return (
    <section
      ref={sectionRef}
      className="bg-[#f9f5f0] px-6 md:px-16 py-20 text-black overflow-hidden"
    >
      {/* === Hero Section === */}
      <motion.div
        className="flex flex-col lg:flex-row gap-12 items-center justify-between max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left: Typing Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#222]">
            {headingText}
            <span className="animate-pulse ml-1">|</span>
          </h1>

          <div className="space-y-8 text-sm md:text-base text-gray-800">
            <div>
              <h2 className="font-extrabold uppercase">Passion Meets Purpose:</h2>
              <p className="font-medium">{paragraph1}</p>
            </div>

            <div>
              <h2 className="font-extrabold uppercase">Experience & Transition:</h2>
              <p className="font-medium">{paragraph2}</p>
            </div>

            <div>
              <h2 className="font-extrabold uppercase">What Drives Me:</h2>
              <p className="font-medium">{paragraph3}</p>
            </div>
          </div>
        </div>

        {/* Right: Circular Image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative w-72 h-72 bg-[#ddd1c0] rounded-full flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/731506/pexels-photo-731506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with actual image
              alt="Arzoo"
              className="w-64 h-64 object-cover rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* === Skills + Experience Section === */}
      <motion.div
        className="mt-24 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-12 text-center">Background</h1>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Personal Skills */}
          <div>
            <h3 className="text-2xl font-medium mb-4">Personal Skills</h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>Time Management</li>
              <li>Strategic Planning & Execution Drawing</li>
              <li>Presentation</li>
              <li>Creativity</li>
              <li>Team Work</li>
              <li>Excellent Communication Skills</li>
            </ul>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-medium mb-4">Work Experience</h3>
            <div className="text-sm text-gray-700 space-y-4">
              <div>
                <p className="text-xl font-medium">
                  Design Coordinator – Project Management Consultancy, Pune
                </p>
                <ul className="list-disc text-lg ml-5 mt-1">
                  <li>Design specs & cost procedures with clients/engineers</li>
                  <li>Defined project scope & milestones</li>
                  <li>Tracked site visits & feasibility reviews</li>
                </ul>
              </div>
              <div>
                <p className="text-xl font-medium mt-4">Architect – Architectural Consultant, Pune</p>
                <ul className="list-disc ml-5 text-lg mt-1">
                  <li>Outlined design objectives</li>
                  <li>Created concepts, sketches, and mockups</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-medium mb-4">Technical Skills</h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>Design Softwares</li>
              <li>Mockup Packages</li>
              <li>Schematic Packaging</li>
              <li>Material Selection</li>
              <li>Site Supervision</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutArzoo;
