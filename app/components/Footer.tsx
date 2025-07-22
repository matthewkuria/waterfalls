import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <nav>
        <h6 className="footer-title">Waterfalls Country Homes Ltd</h6>
        <Image
            src="/images/WATERFALL_LOGO.png"
            alt="Waterfalls Resort Logo"
            width={100}
            height={40} 
            className="inline-block mr-2"
          />
        <p className="">
          P.O BOX, 16961 – 00620,
          Off Kandara Road, Murang’a County
        </p>
        <p className="mt-2">Phone: <a href="tel:+254757446117" className='link link-primary'>+254757446117</a> </p>
        <p>Email: <a href="mailto:info@waterfalls.co.ke" className="link link-primary">
            info@waterfalls.co.ke
          </a>
        </p>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link href="/about-us"  className="link link-hover">About us</Link>
    <Link href="/contact-us" className="link link-hover">Contacts</Link>
    <Link href="/gallery" className="link link-hover">Gallery</Link>
    <Link href="" className="link link-hover">Downloads</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
  )
}

export default Footer