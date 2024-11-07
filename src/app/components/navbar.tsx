"use client"
import React from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { usePathname } from 'next/navigation'
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar">
      <div className='navItems'>
        <div>
          <h2 className='logo'><Link href="/">FitWith<span className='span'>Talha.</span></Link></h2>
        </div>
        <div className="navigation-container">
          <ul className='navigation'>
            <li><Link href="/" className={isActive("/") ? "active" : ""}>Home</Link></li>
            <li><Link href="/about" className={isActive("/about") ? "active" : ""}>About</Link></li>
            <li><Link href="/services" className={isActive("/services") ? "active" : ""}>Services</Link></li>
            <li><Link href="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link></li>
          </ul>
        </div>
        <div>
          <button className="mainbutton"><Link href="/contact">Join Now</Link></button>
        </div>
      </div>
      <div onClick={handleNav} className="menu-icon">
        {nav ? <AiOutlineClose size={24} className='icon-close' /> : <AiOutlineMenu size={24} className='icon-menu' />}
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${nav ? 'active' : ''}`}>
        <h2 className='logo2'><Link href="/">FitWith<span className='span'>Talha.</span></Link></h2>
        <ul className="mobile-navigation">
          <li onClick={handleNav}><Link href="/">Home</Link></li>
          <li onClick={handleNav}><Link href="/about">About</Link></li>
          <li onClick={handleNav}><Link href="/services">Services</Link></li>
          <li onClick={handleNav}><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
