import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="hero flex flex-col items-center justify-center min-h-screen bg-base-200 w-full">
        <h1 className="text-5xl font-bold mb-4">Welcome to Waterfalls</h1>
        <p className="text-lg mb-8">Your journey starts here.</p>
        
      </div>
  )
}

export default HeroSection