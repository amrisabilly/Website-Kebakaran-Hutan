import React, { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Logo from "../../../public/assets/Logo.svg";

const Navbar = () => {
  const { url } = usePage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/news', label: 'News' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/education', label: 'Education' }
  ];

  return (
    <div>
      <div
        className={`w-full h-14 px-10 flex justify-between items-center font-inter text-white fixed z-30 transition duration-300 ${
          isScrolled ? 'bg-black' : 'bg-transparent'
        }`}
      >
        <div>
          <h1 className="font-bold text-3xl">SI<span className='italic'>MB</span></h1>
        </div>
        <div className="flex items-center gap-14 font-semibold text-[20px]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={url === link.path ? 'text-red-600' : 'transition duration-200 hover:text-red-600'}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
