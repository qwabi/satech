import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/#services',
    dropdown: [
      { name: 'TV Wall Mounting', href: '/services/tv-wall-mounting' },
      { name: 'DStv Installation', href: '/services/dstv-installation' },
    ],
  },
  { name: 'Why Choose Us', href: '/#why-choose-us' },
  { name: 'About Us', href: '/#about-us' },
  { name: 'Contact', href: '/#contact-us' },
];
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className='sticky top-0 z-50  bg-white shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='h-16 container mx-auto px-4 flex justify-between items-center py-4'>
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/'>
              <img
                className='h-12 w-auto'
                src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/satech%20logo-DFSRtWfcXj0ml0AEAU8Z2VqbozkwV5.png'
                alt='SA Tech DStv Installers Logo'
              />
            </Link>
          </div>
          <div className='hidden md:flex space-x-6'>
            {navItems.map((item) =>
              item.dropdown ? (
                <Popover key={item.name}>
                  <PopoverTrigger className='bg-white text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center'>
                    {item.name}
                    <ChevronDown className='ml-1 h-4 w-4' />
                  </PopoverTrigger>
                  <PopoverContent className='w-48 bg-white'>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary'
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </PopoverContent>
                </Popover>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium'
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
          <button
            onClick={toggleMenu}
            className='md:hidden text-gray-700 hover:text-primary p-2 rounded-md'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${
          mobileMenuOpen ? 'block' : 'hidden'
        } bg-white shadow-lg`}
      >
        {navItems.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              className='text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium'
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
            {item.dropdown && (
              <div className='pl-4'>
                {item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className='text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-sm font-medium'
                    onClick={toggleMenu}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
