import React, { useEffect, useState } from 'react';

const Name = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);

      // Evaluate scroll again immediately after resize
      const threshold = mobile ? 50 : 180;
      setIsScrolled(window.scrollY > threshold);
    };

    const handleScroll = () => {
      const threshold = isMobile ? 50 : 180;
      setIsScrolled(window.scrollY > threshold);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  // Style logic
  const fontSize = isScrolled
    ? isMobile ? '3vh' : '10vh'
    : isMobile ? '16vw' : '20vw';

  const top = isScrolled
    ? isMobile ? '4%' : '15%'
    : isMobile ? '12%' : '25%';

  const left = isMobile ? 'auto' : isScrolled ? '5%' : '50%';
  const right = isMobile ? (isScrolled ? '5%' : '50%') : 'auto';

  const transform = isMobile
    ? (isScrolled ? 'translateY(0)' : 'translateX(50%) translateY(-50%)')
    : (isScrolled ? 'translateY(-50%)' : 'translate(-50%, -50%)');

  return (
    <div>
      <h1
        className="fixed text-white leading-none font-extrabold tracking-tight mix-blend-difference pointer-events-none z-10 transition-[top,left,right,transform,font-size] duration-[1000ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{
          fontSize,
          top,
          left,
          right,
          transform,
        }}
      >
        VANESSA
      </h1>
    </div>
  );
};

export default Name;
