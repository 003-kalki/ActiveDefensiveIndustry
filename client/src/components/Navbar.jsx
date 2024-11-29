import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav 
      className={`fixed w-full transition-all duration-500 z-50 
        backdrop-blur-sm bg-gray-900/80
        ${scrolled ? 'shadow-lg shadow-purple-500/10' : ''}
        ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced animation */}
          <div className="flex-shrink-0 group">
            <h1 className="text-2xl font-bold relative">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 
                bg-clip-text text-transparent transition-all duration-300
                group-hover:from-blue-400 group-hover:to-purple-400 cursor-pointer">
                ADIndustry 
              </span>
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 
                bg-gradient-to-r from-purple-400 to-blue-400
                group-hover:w-full transition-all duration-300" />
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setActiveLink(link.href)}
                onMouseLeave={() => setActiveLink('')}
                className="relative group px-2 py-1"
              >
                <span className={`text-sm font-medium transition-all duration-300 
                  relative z-10
                  ${activeLink === link.href ? 'text-white' : 'text-gray-300 group-hover:text-white'}
                  animate-fade-in`}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {link.label}
                </span>
                {/* Animated background highlight */}
                <span className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/0 to-blue-600/0
                  group-hover:from-purple-600/10 group-hover:to-blue-600/10
                  transition-all duration-300 transform scale-50 opacity-0
                  group-hover:scale-100 group-hover:opacity-100`} />
                {/* Animated underline */}
                <span className={`absolute -bottom-1 left-0 h-0.5 
                  bg-gradient-to-r from-purple-400 to-blue-400
                  transition-all duration-300
                  ${activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button with enhanced animation */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2 rounded-lg transition-all duration-300 
                hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10
                text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <div className="transform transition-all duration-300 hover:scale-110">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with enhanced animation */}
      <div className={`md:hidden transition-all duration-500 ease-in-out
        ${isOpen 
          ? 'opacity-100 translate-y-0 max-h-64' 
          : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'}
        backdrop-blur-sm bg-gray-900/80`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-lg text-base font-medium 
                text-gray-300 hover:text-white
                transform transition-all duration-300
                hover:translate-x-2
                relative group
                animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <span className="relative z-10">{link.label}</span>
              {/* Hover background effect */}
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/0 to-blue-600/0
                group-hover:from-purple-600/10 group-hover:to-blue-600/10
                transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;