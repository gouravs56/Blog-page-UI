import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

  // For Scroll Transparency
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `bg-gray-800 ${
    isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'
  } fixed w-full z-10 transition-all duration-300`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <h1 className="text-slate-100 text-lg lg:text-2xl font-extrabold">MyBlog</h1>
          </div>
          <div className="flex items-center space-x-3 lg:space-x-12">
            <Link
              to="News Feed"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white font-semibold hover:text-gray-300 transition duration-300 cursor-pointer"
            >
              News Feed
            </Link>
            <Link
              to="Updates"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white font-semibold hover:text-gray-300 transition duration-300 cursor-pointer"
            >
              Updates
            </Link>
            <Link
              to="Jobs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white font-bold hover:text-gray-300 transition duration-300 cursor-pointer"
            >
              Jobs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
