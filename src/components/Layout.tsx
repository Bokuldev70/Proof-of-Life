import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Instagram, Twitter, Mail } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Episodes', path: '/episodes' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream text-navy font-sans selection:bg-yellow selection:text-navy">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b-2 border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <Logo className="transform transition-transform group-hover:scale-105" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-bold uppercase tracking-widest border-b-4 transition-colors ${
                    location.pathname === link.path
                      ? 'border-tomato text-tomato'
                      : 'border-transparent text-navy hover:border-pink hover:text-pink'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Listen Button */}
            <div className="hidden md:flex items-center">
              <a
                href="#listen"
                className="bg-tomato text-cream px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-pink transition-colors shadow-[4px_4px_0px_0px_rgba(26,43,60,1)] hover:shadow-[2px_2px_0px_0px_rgba(26,43,60,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
              >
                Listen Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button className="text-navy hover:text-tomato focus:outline-none">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy text-cream border-t-8 border-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center md:items-start">
              <Logo variant="square" className="w-48 h-48 bg-cream text-navy border-none shadow-[8px_8px_0px_0px_rgba(224,77,54,1)] mb-6" />
              <p className="text-center md:text-left text-sm font-medium opacity-80 max-w-xs">
                Two delusional besties telling each other exactly. A podcast about motherhood, life, entrepreneurship, and marriage.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-yellow font-serif font-bold text-2xl mb-6">Quick Links</h3>
              <ul className="space-y-4 text-center md:text-left">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-pink transition-colors font-bold uppercase tracking-widest text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-yellow font-serif font-bold text-2xl mb-6">Connect</h3>
              <div className="flex space-x-6 mb-8">
                <a href="#" className="text-cream hover:text-teal transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-8 w-8" />
                </a>
                <a href="#" className="text-cream hover:text-teal transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-8 w-8" />
                </a>
                <a href="#" className="text-cream hover:text-teal transition-colors">
                  <span className="sr-only">Email</span>
                  <Mail className="h-8 w-8" />
                </a>
              </div>
              <p className="text-sm font-medium opacity-80 text-center md:text-left">
                &copy; {new Date().getFullYear()} Proof of Life Podcast. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
