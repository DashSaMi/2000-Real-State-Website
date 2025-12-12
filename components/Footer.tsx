import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary border-t border-gray-800 pt-16 pb-8 text-gray-400">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <Link href="/" className="text-2xl font-serif font-bold text-accent block mb-6">
            CroState
          </Link>
          <p className="leading-relaxed text-sm">
            Setting the standard for excellence in luxury real estate. We define modern living with
            exceptional properties.
          </p>
        </div>
        <div>
          <h4 className="text-white font-serif font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/properties" className="hover:text-accent transition-colors">
                Properties
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-accent transition-colors">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-serif font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center">
              <MapPin size={16} className="text-accent mr-3" /> 123 Luxury Lane, NY 10001
            </li>
            <li className="flex items-center">
              <Phone size={16} className="text-accent mr-3" /> +1 (212) 555-0123
            </li>
            <li className="flex items-center">
              <Mail size={16} className="text-accent mr-3" /> hello@crostate.com
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-serif font-semibold mb-6">Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-secondary text-white px-4 py-2 w-full outline-none focus:ring-1 focus:ring-accent rounded-l-sm"
            />
            <button className="bg-accent text-primary px-4 py-2 font-bold rounded-r-sm hover:bg-white transition-colors">
              <ChevronRight />
            </button>
          </div>
          <div className="flex space-x-4 mt-6">
            <Facebook size={20} className="hover:text-accent cursor-pointer transition-colors" />
            <Instagram size={20} className="hover:text-accent cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-accent cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
      <div className="text-center text-xs border-t border-gray-800 pt-8">
        &copy; 2024 CroState Real Estate. All rights reserved.
      </div>
    </footer>
  );
}

