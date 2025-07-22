import Link from 'next/link'
import React from 'react'

const AccordionLinks = () => {
  return (
      <section id='accordion-links' className="flex flex-col items-center justify-center w-full  mx-auto my-8 md:flex-row md:gap-20 md:justify-between">
          <div className="w-full text-left my-8 p-4 md:p-10">
              <p className="  text-gray-700">
                <span className="uppercase text-xl font-semibold text-secondary">Thika Greens Phase 1</span>, also known as Waterfalls Country Homes, is a premier gated community offering a homogenous lifestyle estate. The estate is 5 minutes drive from The Blue Posts Hotel, off the well-maintained Kandara Road. This upmarket address comprises of 960 quarter acre properties in a secure serviced environment. The infrastructure, comprising of water, electricity, roads and security features is already set up.
              </p>
              <Link href="/about-us" className='text-primary hover:font-semibold'>Read More              
          <span className="">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
                </span></Link>
          </div>
          <div className="w-full mx-auto md:my-8 bg-secondary p-2  rounded-lg">
              <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">Construction News</div>         
                  <div className="collapse-content text-sm">Please
                    <Link href="/login" className='text-primary mx-2 font-semibold underline uppercase hover:font-bold'>Login</Link> to view the latest construction news.           
                </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">Upcoming Events</div>         
                  <div className="collapse-content text-sm">Please
                    <Link href="/login" className='text-primary mx-2 font-semibold underline uppercase hover:font-bold'>Login</Link> to view upcoming events.            
                </div>
                </div>
                
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">The waterfalls Newsletter</div>
                <div className="collapse-content text-sm">Please
                  <Link href="/login" className='text-primary mx-2 font-semibold underline uppercase hover:font-bold'>Login</Link>
                   to view the latest newsletter.            
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">Real Estate information</div>
                <div className="collapse-content text-sm">Please
                  <Link href="/login" className='text-primary mx-2 font-semibold underline uppercase hover:font-bold'>Login</Link>
                  to view the latest real estate information. 
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Waterfalls Community</div>
                    <div className="collapse-content text-sm">Please
                      <Link href="/login" className='text-primary mx-2 font-semibold underline uppercase hover:font-bold'>Login</Link>
                      to view the latest community updates.
                    </div>
                </div>
            </div>        
    </section>
  )
}

export default AccordionLinks