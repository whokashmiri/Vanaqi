import React, { useEffect, useState } from 'react';

const Name = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h1
        className="fixed top-[25%] text-white leading-none font-extrabold tracking-tight mix-blend-difference pointer-events-none z-10 transition-all duration-500 ease-in-out"
        style={{
          fontSize: isScrolled ? '10vh' : '20vw',
          left: isScrolled ? '5%' : '50%',
          transform: isScrolled
            ? 'translateY(-50%)'
            : 'translate(-50%, -50%)',
        }}
      >
        VANESSA
      </h1>
    </div>
  );
};

export default Name;
