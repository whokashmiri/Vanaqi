import React from 'react'; // Add this line
import Hero from './components/Hero';
import Work from './components/Work';
import { Blur } from './components/Blur';
import HeroIntro from './components/HeroIntro';
import GalleryIntro from './components/GalleryIntro';
import GalleryGrid from './components/GalleryGrid';
import ServicesSection from './components/ServicesSection';
import GalleryMarquee from './components/GalleryMarquee';
import TestimonialCarousel from './components/TestimonialCarousel';
import ArticleGrid from './components/ArticleGrid';
import FooterSection from './components/FooterSection';


function App() {

  return (
    <>
    <Blur/>
      <Hero/>
      <HeroIntro/>
      <Work/>
      <GalleryIntro/> 
      <GalleryGrid/>
      <ServicesSection/>
      <GalleryMarquee/>
      <TestimonialCarousel/>
      <ArticleGrid/>
      <FooterSection/>
     

    </>
  )
}

export default App
