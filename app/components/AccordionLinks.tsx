import Link from 'next/link'
import React from 'react'

const AccordionLinks = () => {
  return (
      <section className="flex flex-col items-center justify-center w-full  mx-auto my-8 md:flex-row gap-20 md:justify-between">
          <div className="w-full text-left my-8">
              <p className="p-10 text-sm text-gray-700">
                Thika Greens Phase 1, also known as Waterfalls Country Homes, is a premier gated community offering a homogenous lifestyle estate. The estate is 5 minutes drive from The Blue Posts Hotel, off the well-maintained Kandara Road. This upmarket address comprises of 960 quarter acre properties in a secure serviced environment. The infrastructure, comprising of water, electricity, roads and security features is already set up
              </p>
          </div>
          <div className="w-full mx-auto my-8">
              <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">Upcoming Events</div>         
                  <div className="collapse-content text-sm">Please
                    <Link href="/login" className='text-primary mx-2 font-semibold underline uppercase hover:font-bold'>Login</Link> to view upcoming events.            
                </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">How do I update my profile information?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
          </div>
    </section>
  )
}

export default AccordionLinks