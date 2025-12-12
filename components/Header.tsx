'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, User as UserIcon } from 'lucide-react';

const navItems = ['Home', 'Properties', 'About', 'Blog', 'Contact'];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-accent tracking-wider">
          CroState
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-accent font-medium transition-colors text-sm uppercase tracking-wide"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/auth" className="text-gray-300 hover:text-white">
            <UserIcon size={20} />
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-all rounded-sm text-sm font-semibold uppercase"
          >
            Book a Tour
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary border-t border-gray-700 shadow-2xl animate-fade-in-down">
          <div className="flex flex-col p-6 space-y-4">
            {[...navItems, 'Auth', 'Admin'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-accent font-medium text-lg"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

