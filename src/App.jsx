import React from 'react'; // Add this line
import Hero from './components/Hero';
import Work from './components/Work';
import { Blur } from './components/Blur';
import HeroIntro from './components/HeroIntro';

function App() {

  return (
    <>
    <Blur/>
      <Hero/>
      <HeroIntro/>
      <Work/>

    </>
  )
}

export default App
