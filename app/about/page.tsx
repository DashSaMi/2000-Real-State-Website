'use client';

import { Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-primary min-h-screen pt-20">
      <div className="py-20 text-center container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Legacy of Excellence</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Pioneering the luxury real estate market with integrity, innovation, and unwavering dedication to our clients.
        </p>
      </div>

      <div className="bg-secondary py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Office"
            className="rounded-lg shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-serif text-white mb-6">Our Story</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Founded in 2005, CroState began with a singular vision: to redefine the real estate experience for the
              ultra-luxury market. We recognized that buying or selling a premium property is not just a transaction, but
              a life-changing event.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Today, we stand as a global leader, connecting the world's most affluent buyers with the most exquisite
              properties. Our team of expert agents brings deep local knowledge and international reach.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 border border-gray-800 rounded hover:border-accent transition-colors">
            <Users size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-xl font-serif text-white mb-2">Client Focus</h3>
            <p className="text-gray-400">We place our clients' interests above all else, ensuring personalized service and discretion.</p>
          </div>
          <div className="text-center p-8 border border-gray-800 rounded hover:border-accent transition-colors">
            <Target size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-xl font-serif text-white mb-2">Excellence</h3>
            <p className="text-gray-400">We strive for perfection in every detail, from property presentation to closing.</p>
          </div>
          <div className="text-center p-8 border border-gray-800 rounded hover:border-accent transition-colors">
            <Award size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-xl font-serif text-white mb-2">Integrity</h3>
            <p className="text-gray-400">Trust is our currency. We operate with complete transparency and ethical standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

