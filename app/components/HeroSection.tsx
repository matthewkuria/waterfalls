import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero flex flex-col w-full h-[85vh]  items-start justify-center md:justify-end">
      <div className="text-background  bg-opacity-50 p-8 md:p-0  w-full md:w-1/2 lg:w-1/3 md:m-5 mt-28 md:mt-0">
        <h1 className="text-4xl font-bold mb-4">Welcome to <span className="">Waterfalls Country</span><span className="text-secondary px-2">Homes Ltd</span></h1>
        <p className="mb-8">Your journey starts here.</p>
        <div className="flex gap-5">
          <Link href="/about-us"><button className="btn btn-primary rounded-md">Explore more</button></Link>
          <Link href="/contact-us">
            <button className="btn bg-transparent text-primary mr-4 hover:bg-background  rounded-md">Contact Us</button>
          </Link>
        </div>
      </div>
        
      </div>
  )
}

export default HeroSection