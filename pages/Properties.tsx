import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Filter, Grid, List } from 'lucide-react';
import { properties } from '../services/mockData';

const Properties = () => {
  const [filterType, setFilterType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('newest');

  const filteredProperties = properties
    .filter(p => filterType === 'All' || p.type === filterType)
    .filter(p => p.location.toLowerCase().includes(searchTerm.toLowerCase()) || p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    });

  return (
    <div className="bg-primary min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Exclusive Properties</h1>
          <p className="text-gray-400">Browse our portfolio of the world's most luxurious homes</p>
        </div>

        {/* Filters */}
        <div className="bg-secondary p-6 rounded-lg border border-gray-700 mb-10">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            
            <div className="w-full lg:w-1/3 relative">
              <Search className="absolute left-3 top-3 text-gray-500" size={20} />
              <input 
                type="text" 
                placeholder="Search location or keyword..." 
                className="w-full bg-primary text-white pl-10 pr-4 py-3 rounded border border-gray-700 focus:border-accent outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
              {['All', 'Buy', 'Rent', 'Luxury', 'Commercial'].map(type => (
                <button 
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-6 py-2 rounded-full border transition-all whitespace-nowrap ${filterType === type ? 'bg-accent text-primary border-accent font-bold' : 'bg-transparent text-gray-400 border-gray-600 hover:border-white'}`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="w-full lg:w-auto">
              <select 
                className="w-full bg-primary text-white px-4 py-3 rounded border border-gray-700 focus:border-accent outline-none appearance-none cursor-pointer"
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="newest">Newest Listed</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-secondary rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur text-white px-3 py-1 text-sm font-bold rounded flex items-center gap-1">
                    <MapPin size={12} className="text-accent" /> {property.location.split(',')[0]}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-accent text-sm font-bold uppercase tracking-wider">{property.type}</span>
                    <span className="text-gray-500 text-xs">{property.dateAdded}</span>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">{property.title}</h3>
                  <p className="text-2xl font-bold text-white mb-4">${property.price.toLocaleString()}</p>
                  
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-700 pt-4 text-sm text-gray-400 mb-6">
                    <div className="text-center">
                      <span className="block text-white font-bold">{property.bedrooms}</span> Beds
                    </div>
                    <div className="text-center border-l border-r border-gray-700">
                      <span className="block text-white font-bold">{property.bathrooms}</span> Baths
                    </div>
                    <div className="text-center">
                      <span className="block text-white font-bold">{property.sqft}</span> Sqft
                    </div>
                  </div>

                  <Link to={`/properties/${property.id}`} className="mt-auto w-full bg-primary border border-gray-600 text-center py-3 text-white rounded hover:bg-accent hover:text-primary hover:border-accent transition-all font-semibold uppercase text-sm">
                    View Property
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl text-white font-serif">No properties found.</h3>
            <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Properties;