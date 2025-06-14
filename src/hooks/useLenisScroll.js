// src/hooks/useLenisScroll.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
};

export default useLenisScroll;
