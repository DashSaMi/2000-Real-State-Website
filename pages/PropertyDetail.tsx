import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MapPin, Bed, Bath, Move, Check, Phone, Mail, User, ArrowLeft } from 'lucide-react';
import { properties } from '../services/mockData';

const PropertyDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const propertyId = Array.isArray(id) ? id[0] : id;
  const property = properties.find(p => p.id === Number(propertyId));

  if (!property) return <div className="text-white text-center pt-32">Property not found</div>;

  return (
    <div className="bg-primary min-h-screen pt-20">
      {/* Gallery Header */}
      <div className="h-[50vh] md:h-[70vh] relative">
        <img src={property.images[0]} alt="Main" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="container mx-auto">
            <Link href="/properties" className="inline-flex items-center text-gray-300 hover:text-accent mb-4 transition-colors">
              <ArrowLeft size={20} className="mr-2" /> Back to listings
            </Link>
            <div className="flex flex-col md:flex-row justify-between items-end">
              <div>
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">{property.title}</h1>
                <p className="text-xl text-gray-300 flex items-center gap-2"><MapPin className="text-accent" /> {property.location}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-4xl md:text-5xl font-bold text-accent">${property.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Stats */}
            <div className="bg-secondary p-8 rounded-lg border border-gray-700 grid grid-cols-3 gap-4">
              <div className="text-center">
                <Bed size={32} className="mx-auto text-accent mb-2" />
                <span className="block text-2xl font-bold text-white">{property.bedrooms}</span>
                <span className="text-gray-400">Bedrooms</span>
              </div>
              <div className="text-center border-l border-gray-600">
                <Bath size={32} className="mx-auto text-accent mb-2" />
                <span className="block text-2xl font-bold text-white">{property.bathrooms}</span>
                <span className="text-gray-400">Bathrooms</span>
              </div>
              <div className="text-center border-l border-gray-600">
                <Move size={32} className="mx-auto text-accent mb-2" />
                <span className="block text-2xl font-bold text-white">{property.sqft}</span>
                <span className="text-gray-400">Square Ft</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-serif text-white mb-6 border-b border-gray-800 pb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{property.description}</p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-serif text-white mb-6 border-b border-gray-800 pb-4">Property Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                      <Check size={14} className="text-accent" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

             {/* Map Placeholder */}
             <div>
              <h2 className="text-2xl font-serif text-white mb-6 border-b border-gray-800 pb-4">Location</h2>
              <div className="bg-gray-800 h-64 rounded-lg flex items-center justify-center text-gray-500">
                <p>Interactive Map Component Would Go Here (Google Maps API)</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-secondary p-8 rounded-lg border border-gray-700 sticky top-24">
              <h3 className="text-xl font-serif text-white mb-6">Contact Agent</h3>
              <div className="flex items-center gap-4 mb-6">
                <img src={property.agent.image} alt={property.agent.name} className="w-16 h-16 rounded-full border-2 border-accent object-cover" />
                <div>
                  <h4 className="text-white font-bold">{property.agent.name}</h4>
                  <p className="text-accent text-sm">Senior Real Estate Agent</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <a href={`tel:${property.agent.phone}`} className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Phone size={18} className="mr-3 text-accent" /> {property.agent.phone}
                </a>
                <a href={`mailto:${property.agent.email}`} className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Mail size={18} className="mr-3 text-accent" /> {property.agent.email}
                </a>
              </div>

              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-primary border border-gray-600 rounded p-3 text-white focus:border-accent outline-none" />
                <input type="email" placeholder="Your Email" className="w-full bg-primary border border-gray-600 rounded p-3 text-white focus:border-accent outline-none" />
                <textarea rows={4} placeholder="Hello, I am interested in this property..." className="w-full bg-primary border border-gray-600 rounded p-3 text-white focus:border-accent outline-none"></textarea>
                <button className="w-full bg-accent text-primary font-bold py-3 rounded hover:bg-white transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;