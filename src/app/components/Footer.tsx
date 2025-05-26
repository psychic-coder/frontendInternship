"use client"
import React from 'react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-gray-800 pt-8 pb-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Brand Column */}
        <div>
          <h3 className="text-lg font-light mb-4">Eclipse</h3>
          <div className="text-xs text-gray-400 mt-8">© Eclipse 2023</div>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-sm text-gray-500 mb-2">CONTACT</h4>
          <p className="text-sm text-gray-400">+91123-456-7890</p>
        </div>

        {/* Navigation Column */}
        <div>
          <div className="text-sm text-gray-400 space-y-1">
            <div>Home / About / Buy /</div>
            <div>Our Customers /</div>
            <div>Contacts</div>
          </div>
        </div>

        {/* Email & Scroll Button Column */}
        <div className="flex flex-col justify-between items-end">
          <div>
            <h4 className="text-sm text-gray-500 mb-2">EMAIL</h4>
            <p className="text-sm text-gray-400">eclipse@gmail.com</p>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;