import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import Logo from "../../../public/assets/Logo.svg";

const Navbar = () => {
  const { url } = usePage(); 

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/news', label: 'News' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
  ];

  return (
    <div>
      <div className="w-full h-14 px-10 bg-transparent flex justify-between items-center font-inter text-white fixed z-30">
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
