import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const page = () => {
  return (
    // Main section for the About Us page
      <main className="">
            <section className="about-banner text-white h-[70vh] flex items-end justify-start bg-cover bg-center relative">
                    <div className="flex flex-col text-left p-10">
                    <h1 className="text-3xl font-bold mb-4 uppercase text-primary">About Us</h1>
                    <div className="breadcrumbs text-sm">
                        <ul>
                         <li className=""><Link href="/">Home</Link></li> 
                            <li className='text-primary font-semibold'>About Us</li>
                        </ul>
                    </div>
                    <p className="text-lg">Learn more about our company and values.</p>
              </div>
          </section>
          <section className="">
            <div className="p-10">
                <h2 className="text-2xl font-bold mb-4 title">Who We Are</h2>
                <p className="mb-4">Thika Greens Phase 1, also known as Waterfalls Country Homes, is a premier gated community offering a homogenous lifestyle estate. The estate is 5 minutes drive from The Blue Posts Hotel, off the well-maintained Kandara Road. This upmarket address comprises of 960 quarter acre properties in a secure serviced environment. The infrastructure, comprising of water, electricity, roads and security features is already set up</p>
                <h3 className="text-xl font-semibold mb-2 title">Our Mission</h3>
                  <p className='mb-4'>Maintain a community that ensures a high-quality lifestyle through innovative use of resources to guarantee a high return on investment.</p>
                <h3 className="text-xl font-semibold mb-2 title">Our Vision Statement</h3>
                  <p className='mb-4'>To be the premier property management company that creates a wholesome community.</p>
              </div>
              <aside className='grid grid-cols-1 md:grid-cols-2 gap-6 px-10'>
                  <div className="">
                  <Image
                    src="/images/about-banner.jpg"
                    alt="About Us Image"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover mt-5 rounded-lg shadow-lg"
                  />
              </div>
                  <div className="">
                  <p className="">
                      Thika Greens Phase 1 is the premier residential project of Thika Greens Limited’s 3 phased, 4500-unit development. The estate, christened Waterfalls Country Homes, will at completion comprise approximately 1000 households. It now boasts of robust growth with 20% of plot owners presently residing and many more at various stages of construction. We project that the rate of development will rise exponentially in the coming years. We are part of a growing neighborhood complemented by our sister developments; Mugumo Greens Estate and Thika Greens Golf City, the home of the operational 18 hole championship golf course, and the iconic 19th Hole Restaurant, which is open to the public. Please visit Thika Greens Limited to learn more.
                  </p>
              </div>
              
              </aside>
          </section>
    </main>
  )
}

export default page