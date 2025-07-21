import React from 'react'

const page = () => {
  return (
      
      <div className="w-full flex flex-col justify-center items-center">
        <div className="contact-page w-full h-[45vh] bg-cover bg-center relative flex items-center justify-center">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="md:text-5xl font-bold">Contact Us</h1>
            </div>
          </div>
        </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="">
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
              <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
     </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <p>123 Waterfalls Lane, Paradise City, PC 12345</p>
            <p className="mt-2">Phone: (123) 456-7890</p>
              <p>Email: <a href="mailto:info@waterfalls.co.ke" className="link link-primary">
                  info@waterfalls.co.ke
                </a>
              </p>
          </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                <p>Stay connected with us on social media:</p>
                <ul className="list-disc pl-5 mt-2">
                <li><a href="https://facebook.com/waterfalls" className="link link-primary">Facebook</a></li>
                <li><a href="https://twitter.com/waterfalls" className="link link-primary">Twitter</a></li>
                <li><a href="https://instagram.com/waterfalls" className="link link-primary">Instagram</a></li>
              </ul>
          </div>
    </section>
    </div>
            
  )
}

export default page