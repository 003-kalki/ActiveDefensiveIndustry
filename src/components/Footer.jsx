import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-2">Active Defensive Industry</h1>
          <p className="text-gray-400 text-sm">
            Smart security solutions for a safer world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-400 hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#products" className="text-gray-400 hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400 text-sm">Email: support@securelife.com</p>
          <p className="text-gray-400 text-sm">Phone: 69696969696</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-gray-400 hover:text-white text-lg"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-gray-400 hover:text-white text-lg"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-gray-400 hover:text-white text-lg"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-gray-400 hover:text-white text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2024 SecureLife. All rights reserved.
      </div>
    </footer>
  );
}
