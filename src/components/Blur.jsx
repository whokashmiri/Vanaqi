import React from 'react'

export const Blur = () => {
  return (
    <>
    {/* Uneven bottom blur */}
<div className="fixed -bottom-12 left-0 w-full h-[150px]  pointer-events-none z-20">
  <div className="w-full h-full blur-2xl opacity-100 bg-black  rotate-0 scale-110 " />
</div>


    </>
  )
}
