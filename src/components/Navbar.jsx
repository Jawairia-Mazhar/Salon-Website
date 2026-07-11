import React, { useState } from 'react'
import logo from '../assets/Salon-logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#about', label: 'About' },
  ]

  return (
    <nav className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="hidden flex-1 items-center justify-end mr-6 gap-6 md:flex lg:gap-8">
          {links.slice(0, 2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-base font-medium sm:text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#" className="flex-shrink-0 items-center justify-center md:flex">
          <img src={logo} alt="Salon logo" className="h-12 w-auto object-contain sm:h-14" />
        </a>

        <div className="hidden flex-1 items-center justify-start ml-6 gap-6 md:flex lg:gap-8" >
          {links.slice(2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-base font-medium sm:text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>

  {/* toggle btn */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen} // means whether the menu is open or not
          aria-label="Toggle navigation" // Label for accessibility
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col items-center gap-3 border-t border-gray-100 bg-white px-4 py-3">
          {links.map((link) => (
            <a
              key={link.label} 
              href={link.href}
              className="nav-link text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar