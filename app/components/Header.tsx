import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/amenities">Amenities</Link></li>
        <li><Link href="/agency">Agency</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>        
        <li><Link href="/contact-us">Contact Us</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
        <Link href="/" className="flex flex-col items-center justify-center text-xs">
          <Image
            src="/images/WATERFALL_LOGO.png"
            alt="Waterfalls Resort Logo"
            width={100}
            height={40} 
            className="inline-block mr-2"
          />
          <p className="text-secondary hidden"><span className="text-primary mx-1">Waterfalls</span>
            Country Homes Ltd
          </p>
        </Link>
  </div>
  <div className="navbar-end">
    <Link href="/search" >
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
    </button>
    </Link>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link href="/login" className="justify-between">
            Profile
            <span className="badge">Members</span>
          </Link>
        </li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Header