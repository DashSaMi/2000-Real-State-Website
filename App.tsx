import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronRight, User as UserIcon } from 'lucide-react';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Blog from './pages/Blog';

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-accent tracking-wider">
          CroState
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Properties', 'About', 'Blog', 'Contact'].map((item) => (
            <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-300 hover:text-accent font-medium transition-colors text-sm uppercase tracking-wide">
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
           <Link to="/auth" className="text-gray-300 hover:text-white"><UserIcon size={20}/></Link>
           <Link to="/contact" className="px-5 py-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-all rounded-sm text-sm font-semibold uppercase">
             Book a Tour
           </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary border-t border-gray-700 shadow-2xl animate-fade-in-down">
          <div className="flex flex-col p-6 space-y-4">
             {['Home', 'Properties', 'About', 'Blog', 'Contact', 'Auth', 'Admin'].map((item) => (
              <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-300 hover:text-accent font-medium text-lg">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-primary border-t border-gray-800 pt-16 pb-8 text-gray-400">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div>
        <Link to="/" className="text-2xl font-serif font-bold text-accent block mb-6">CroState</Link>
        <p className="leading-relaxed text-sm">
          Setting the standard for excellence in luxury real estate. We define modern living with exceptional properties.
        </p>
      </div>
      <div>
        <h4 className="text-white font-serif font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-3 text-sm">
          <li><Link to="/properties" className="hover:text-accent transition-colors">Properties</Link></li>
          <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
          <li><Link to="/blog" className="hover:text-accent transition-colors">Insights</Link></li>
          <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-serif font-semibold mb-6">Contact</h4>
        <ul className="space-y-4 text-sm">
          <li className="flex items-center"><MapPin size={16} className="text-accent mr-3"/> 123 Luxury Lane, NY 10001</li>
          <li className="flex items-center"><Phone size={16} className="text-accent mr-3"/> +1 (212) 555-0123</li>
          <li className="flex items-center"><Mail size={16} className="text-accent mr-3"/> hello@crostate.com</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-serif font-semibold mb-6">Newsletter</h4>
        <div className="flex">
          <input type="email" placeholder="Email Address" className="bg-secondary text-white px-4 py-2 w-full outline-none focus:ring-1 focus:ring-accent rounded-l-sm" />
          <button className="bg-accent text-primary px-4 py-2 font-bold rounded-r-sm hover:bg-white transition-colors"><ChevronRight/></button>
        </div>
        <div className="flex space-x-4 mt-6">
          <Facebook size={20} className="hover:text-accent cursor-pointer transition-colors"/>
          <Instagram size={20} className="hover:text-accent cursor-pointer transition-colors"/>
          <Twitter size={20} className="hover:text-accent cursor-pointer transition-colors"/>
        </div>
      </div>
    </div>
    <div className="text-center text-xs border-t border-gray-800 pt-8">
      &copy; 2024 CroState Real Estate. All rights reserved.
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Main App ---

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}