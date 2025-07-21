import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero flex flex-col w-full h-[90vh] items-start justify-center md:justify-end">
      <div className="text-primary  bg-opacity-50 p-8  w-3/4 md:w-1/2 lg:w-1/3 md:m-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to <span className="text-secondary"> Waterfalls</span></h1>
        <p className="text-lg mb-8">Your journey starts here.</p>
      </div>
        
      </div>
  )
}

export default HeroSection