"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import logo from '../assets/gymlogo.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path:any) => pathname === path

  return (
    <nav className="navbar">
      <div className='navItems'>
        <div>
          <h2 className='logo'><a href="/">FitWith<span className='span'>Talha.</span></a></h2>
        </div>
        <div>
          <ul className='navigation'>
            <li><a href="/" className={isActive("/") ? "active" : ""}>Home</a></li>
            <li><a href="/about" className={isActive("/about") ? "active" : ""}>About</a></li>
            <li><a href="/services" className={isActive("/services") ? "active" : ""}>Services</a></li>
            <li><a href="/contact" className={isActive("/contact") ? "active" : ""}>Contact</a></li>
          </ul>
        </div>
        <div>
          <button className="mainbutton"><a href="/contact">Join Now</a></button>
        </div>
      </div>
    </nav>
  )
}
