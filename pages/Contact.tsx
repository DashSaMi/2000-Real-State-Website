import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-primary min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info */}
          <div>
            <h1 className="text-4xl font-serif text-white mb-6">Get in Touch</h1>
            <p className="text-gray-400 mb-10 text-lg">Whether you're looking to buy, sell, or rent, our team is ready to provide you with exceptional service.</p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded text-accent mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Headquarters</h3>
                  <p className="text-gray-400">123 Luxury Lane, Suite 100<br/>New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded text-accent mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Phone</h3>
                  <p className="text-gray-400">+1 (212) 555-0123<br/>+1 (212) 555-0124</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded text-accent mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email</h3>
                  <p className="text-gray-400">info@crostate.com<br/>sales@crostate.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded text-accent mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Working Hours</h3>
                  <p className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-secondary p-8 rounded-lg border border-gray-700 shadow-2xl">
            <h2 className="text-2xl font-serif text-white mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">First Name</label>
                  <input type="text" className="w-full bg-primary border border-gray-600 rounded p-3 text-white focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                  <input type="text" className="w-full bg-primary border border-gray-600 rounded p-3 text-white focus:border-accent outline-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                <input type="email" className="w-full bg-primary border border-gray-600 rounded p-3 text-white focus:border-accent outline-none" />
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea rows={5} className="w-full bg-primary border border-gray-600 rounded p-3 text-white focus:border-accent outline-none"></textarea>
              </div>

              <button className="w-full bg-accent text-primary font-bold py-4 rounded hover:bg-white transition-all shadow-lg">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;