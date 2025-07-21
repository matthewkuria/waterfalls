"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
      
      <div className="w-full flex flex-col justify-center items-center">
        <div className="contact-page w-full h-[70vh] flex items-end justify-start bg-cover bg-center relative">
            <div className="hero-content text-left text-white ">
            <div className="max-w-md">
                <h1 className=" text-3xl md:text-4xl font-bold text-background">Contact Us</h1>
                <div className="breadcrumbs text-sm">
                    <ul>
                       <li className=""><Link href="/">Home</Link></li> 
                        <li className='text-primary font-semibold'>Contact page</li>
                    </ul>
            </div>
                <p className="py-6">We would love to hear from you! If you have any questions or inquiries, please fill out the form below or contact us directly.</p>
            </div>
          </div>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-baseline p-6 max-w-screen-xl mx-auto">
              <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p>Off Kandara Road,Murang’a County</p>
            <p className="mt-2">Phone: <a href="tel:+254757446117" className='link link-primary'>+254757446117</a> </p>
              <p>Email: <a href="mailto:info@waterfalls.co.ke" className="link link-primary">
                  info@waterfalls.co.ke
                </a>
              </p>
              <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7978.440689796537!2d37.060435!3d-0.991992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4d7c31b0cbe1%3A0xe8e7ec3a7f59d85f!2sWaterfalls%20Country%20Homes%20(Thika%20Green%20Phase%201)!5e0!3m2!1sen!2sus!4v1753094451357!5m2!1sen!2sus"
                      width="600" height="450"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-64 rounded-lg shadow-lg mt-10"
                      title="Waterfalls Country Homes Location" >                      
                </iframe>
          </div>
        <div className="">
            <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
            <p>If you have any questions or inquiries, feel free to reach out to us using the form below.</p>
            <form className="space-y-4">  
            <div>
            <label className="block mb-2">Name</label>
            <input type="text" className="input input-bordered w-full" placeholder="Your Name" required />
            </div>
            <div>
            <label className="block mb-2">Email</label>
            <input type="email" className="input input-bordered w-full" placeholder="Your Email" required />
            </div>
            <div>
            <label className="block mb-2">Message</label>
            <textarea className="textarea textarea-bordered w-full" rows={4} placeholder="Your Message" required></textarea>
            </div>
                <div className="w-full flex justify-end">
                <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
            </form>
     </div>
          
           
    </section>
    </div>
            
  )
}

export default page