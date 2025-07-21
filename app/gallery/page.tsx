import React from 'react'
import TailwindMasonry from "../components/TailwindMasonry"
import Link from 'next/link';

// This is the gallery page that displays a masonry grid of gallery
const galleryItems = [
  {
    image: '/images/gallery-1.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },  
  {
    image: '/images/gallery-2.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-3.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-4.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-5.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-6.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-7.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-8.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-9.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-10.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-11.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-12.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-13.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-14.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
  {
    image: '/images/gallery-15.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  },
    {
    image: '/images/gallery-16.jpg',
    title: 'Waterfalls Country Homes Logo',
    description: 'The official logo of Waterfalls Country Homes',
    aspectRatio: 0.8
  }

  
  

  
  
];

const page = () => {
  return (
      <main className="">
           {/* The gallery page */}
           <section className="gallery-banner text-white h-[70vh] flex items-end justify-start bg-cover bg-center relative">
                <div className="flex flex-col text-left p-10">
                <h1 className="text-3xl font-bold mb-4 uppercase text-primary">Our Gallery</h1>
                <div className="breadcrumbs text-sm">
                    <ul>
                       <li className=""><Link href="/">Home</Link></li> 
                        <li className='text-primary font-semibold'>Gallery</li>
                    </ul>
                </div>
                <p className="text-lg">Explore our collection of gallery showcasing our amenities.</p>
              </div>
      </section>
      {/* The gallery grid  */}
      <section className=" p-5 md:p-10">
        <p className="mb-5 text-gray-400">Click on the images to zoom</p>
      <TailwindMasonry items={galleryItems} />
    </section>      
    </main>
  )
}

export default page