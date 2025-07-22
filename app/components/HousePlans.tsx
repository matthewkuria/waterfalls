"use client";
import Link from 'next/link';
import React, { useState } from 'react'

const HousePlans = () => {
   const [isMoved, setIsMoved] = useState(false);

  const handleCardClick = () => {
    setIsMoved(!isMoved);
  };
  return (
    <section className="flex flex-col items-center justify-center w-full mx-auto my-8 p-4">
          <h4 className="title uppercase text-2xl border-2 p-1">House Plans</h4>
          <div className="textcenter my-4">
              <p className="">
                  The essence of a controlled development which TGL Phase one is implies that the outlook of the estate is pre-imagined. The built and natural environments are deliberate to achieve appropriate aesthetics that drive the stature and value aspirations of the development. Below are sample of approved house plans.
              </p>
          </div>
          <aside className="flex flex-col  justify-center w-[60vw] md:w-[50vw] p-4">
              <h6 className="text-left text-sm my-5 text-gray-400">Browse house plans here</h6>
              <div className="w-full">
                <div className="card z-30 shadow-md bg-base-100 transition-transform duration-500 ease-in-out">
                    <div className="card-body bg-secondary text-white">
                    <h2 className="card-title">House plan 1</h2>
                    <p>Click <Link href="#" className='px-2 underline text-primary'>here</Link>to read</p>
                    </div>
                </div>

                <div
                    onClick={handleCardClick}
                    className={`card z-20 shadow-2xl -mt-20 bg-base-100 cursor-pointer transition-transform duration-500 ease-in-out ${
                    isMoved ? "translate-y-20" : ""
                    }`}
                >
                    <div className="card-body bg-secondary text-white">
                    <h2 className="card-title">House plan 2</h2>
                    <p>Click <Link href="#" className='px-2 underline text-primary'>here</Link>to read</p>
                    </div>
                </div>
                </div>        
          </aside>

    </section>
  )
}

export default HousePlans