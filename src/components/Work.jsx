import React from 'react'

const Work = () => {
  return (
    <>

     {/* Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full z-0 mt-52">
        {/* Left Image (Hidden on mobile) */}
        <div className="hidden md:block relative overflow-hidden rounded-xl h-[500px]">
          <img
            src="https://images.pexels.com/photos/24350556/pexels-photo-24350556.jpeg"
            alt="Sienna 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Image (Always visible) */}
        <div className="relative overflow-hidden rounded-xl h-[600px]">
          <img
            src="https://images.pexels.com/photos/8107979/pexels-photo-8107979.jpeg"
            alt="Sienna 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image (Hidden on mobile) */}
        <div className="hidden md:block relative overflow-hidden rounded-xl h-[500px]">
          <img
            src="https://images.pexels.com/photos/8108095/pexels-photo-8108095.jpeg"
            alt="Sienna 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default Work