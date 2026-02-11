'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Technical Portfolio', href: '/technical-portfolio' },
    { name: 'About Me', href: '/about-me' },
    { name: 'Resources', href: '#resources' },
    { name: 'Blogs', href: '#blogs' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F2F0E9]/80 backdrop-blur-[10px] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Slightly taller for elegance */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold font-sans tracking-tight">
              SP.
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-accent-teal px-3 py-2 text-xs font-mono uppercase tracking-wide transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* CTA Button */}
            <Link 
              href="#contact"
              className="bg-accent-teal text-white px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-black/5" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#F2F0E9]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block hover:text-accent-teal px-3 py-4 text-sm font-mono border-b border-black/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
                href="#contact"
                className="block bg-accent-teal text-white px-3 py-4 text-center text-sm font-mono font-bold uppercase mt-4"
                onClick={() => setIsOpen(false)}
            >
                Hire Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;