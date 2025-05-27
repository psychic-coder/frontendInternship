'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isCartPage = pathname === '/cart';
  const textColorClass = isCartPage
    ? 'text-black hover:text-gray-700'
    : 'text-white hover:text-gray-300';
  const underlineColor = isCartPage ? 'bg-black' : 'bg-white';
  const buyButtonStyle = 'px-6 py-2 rounded-full text-sm font-medium transition-colors';

  const navLinkClass = `relative group ${textColorClass} transition-colors text-lg font-light cursor-pointer`;

  const underlineClass = `absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ease-in-out ${underlineColor}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isCartPage ? 'bg-transparent' : 'bg-black/70 backdrop-blur-md'
      } flex justify-between items-center px-2 py-6 transition-colors duration-300 md:px-32`}
    >
      <div
        className="w-10 h-10 relative cursor-pointer "
        onClick={() => router.push('/')}
      >
        <Image
          src="/logo.jpg"
          alt="Eclypse Logo"
          fill
          className="object-contain"
          sizes="64px"
        />
      </div>

      <div className="flex items-center space-x-10">
        {[
          { label: 'About Us', path: '/about' },
          { label: 'Waitlist', path: '/waitlist' },
          { label: 'Cart', path: '/cart' }
        ].map(({ label, path }) => (
          <div
            key={label}
            onClick={() => router.push(path)}
            className={navLinkClass}
          >
            {label}
            <span className={underlineClass}></span>
          </div>
        ))}

        {!isCartPage && (
          <button
            onClick={() => router.push('/buy')}
            className={`bg-white text-black hover:bg-gray-100 border border-white ${buyButtonStyle}`}
          >
            Buy
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
