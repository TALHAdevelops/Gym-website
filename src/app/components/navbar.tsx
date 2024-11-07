"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path:string) => pathname === path

  return (
    <nav className="navbar">
      <div className='navItems'>
        <div>
          <h2 className='logo'><Link href="/">FitWith<span className='span'>Talha.</span></Link></h2>
        </div>
        <div>
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
    </nav>
  )
}
