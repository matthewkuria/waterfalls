import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
      <main className="">
          <section className="amenities-banner text-white h-[70vh] flex items-end justify-start bg-cover bg-center relative">
                <div className="flex flex-col text-left p-10">
                <h1 className="text-3xl font-bold mb-4 uppercase text-primary">Our amenities</h1>
                <div className="breadcrumbs text-sm">
                    <ul>
                       <li className=""><Link href="/">Home</Link></li> 
                        <li className='text-primary font-semibold'>Amenities</li>
                    </ul>
                </div>
                <p className="text-lg">Explore our amenities.</p>
              </div>
      </section>
    </main>
  )
}

export default page