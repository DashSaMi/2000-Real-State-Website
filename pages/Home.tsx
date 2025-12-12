import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Search, Home as HomeIcon, Key, DollarSign, Building, ArrowRight, Star, 
  Map as MapIcon, Calculator, TrendingUp, Video, MessageSquare, CheckCircle, 
  Users, HelpCircle, Shield, Briefcase, ChevronDown, ChevronUp, Send, X, Plus
} from 'lucide-react';
import { properties, neighborhoods, partners, faqs } from '../services/mockData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

// --- Animation Wrapper ---
const Section = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <motion.section 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.section>
);

// --- Sub-Components ---

const AIRecommendation = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult(properties[0]);
    }, 2000);
  };

  return (
    <Section className="py-20 bg-secondary border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-8"><span className="text-accent">AI</span> Smart Match</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Let our advanced algorithm scan thousands of properties to find your perfect match in seconds.</p>
        
        <div className="bg-primary border border-gray-700 rounded-xl p-8 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          {loading && (
            <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center z-20">
              <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-accent font-bold animate-pulse">Analyzing Market Trends...</p>
            </div>
          )}
          
          {!result ? (
             <div className="space-y-6">
               <div className="flex justify-between mb-8">
                 {[1, 2, 3].map(i => (
                   <div key={i} className={`h-1 flex-1 mx-1 rounded ${step >= i ? 'bg-accent' : 'bg-gray-700'}`} />
                 ))}
               </div>
               
               {step === 1 && (
                 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                   <h3 className="text-xl text-white mb-6">What are you looking for?</h3>
                   <div className="grid grid-cols-2 gap-4">
                     <button onClick={() => setStep(2)} className="p-4 border border-gray-600 rounded hover:border-accent hover:bg-accent/10 text-white transition-all">Buy a Home</button>
                     <button onClick={() => setStep(2)} className="p-4 border border-gray-600 rounded hover:border-accent hover:bg-accent/10 text-white transition-all">Rent a Space</button>
                     <button onClick={() => setStep(2)} className="p-4 border border-gray-600 rounded hover:border-accent hover:bg-accent/10 text-white transition-all">Investment</button>
                     <button onClick={() => setStep(2)} className="p-4 border border-gray-600 rounded hover:border-accent hover:bg-accent/10 text-white transition-all">Commercial</button>
                   </div>
                 </motion.div>
               )}

               {step === 2 && (
                 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-xl text-white mb-6">Preferred Location?</h3>
                    <input type="text" placeholder="e.g. Los Angeles, New York" className="w-full bg-secondary p-4 rounded text-white border border-gray-600 focus:border-accent mb-4 outline-none" />
                    <div className="flex justify-between">
                       <button onClick={() => setStep(1)} className="text-gray-400 hover:text-white">Back</button>
                       <button onClick={() => setStep(3)} className="bg-accent text-primary px-6 py-2 rounded font-bold">Next</button>
                    </div>
                 </motion.div>
               )}

               {step === 3 && (
                 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-xl text-white mb-6">Budget Range?</h3>
                    <input type="range" min="100" max="1000" className="w-full accent-accent mb-4" />
                    <div className="flex justify-between text-gray-400 text-sm mb-8">
                      <span>$100k</span>
                      <span>$10M+</span>
                    </div>
                    <button onClick={handleSearch} className="w-full bg-accent text-primary py-4 rounded font-bold hover:bg-white transition-all">Find My Home</button>
                 </motion.div>
               )}
             </div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-left">
              <div className="flex justify-between items-start mb-6">
                 <h3 className="text-xl text-white font-bold">We found a 98% Match!</h3>
                 <button onClick={() => setResult(null)} className="text-gray-400 hover:text-white"><X/></button>
              </div>
              <div className="flex gap-4">
                <img src={result.image} className="w-1/3 rounded object-cover" alt="" />
                <div>
                  <h4 className="text-lg text-white font-serif">{result.title}</h4>
                  <p className="text-accent font-bold text-xl my-2">${result.price.toLocaleString()}</p>
                  <p className="text-gray-400 text-sm">{result.location}</p>
                  <Link href={`/properties/${result.id}`} className="mt-4 inline-block bg-white text-primary px-4 py-2 rounded text-sm font-bold">View Details</Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Section>
  );
};

const MapExplorer = () => {
  const [activePin, setActivePin] = useState<any>(null);

  const pins = [
    { id: 1, x: '20%', y: '30%', price: '$2.5M', name: 'Luxury Villa' },
    { id: 2, x: '50%', y: '50%', price: '$5.2M', name: 'Downtown Penthouse' },
    { id: 3, x: '70%', y: '20%', price: '$1.8M', name: 'Seaside Mansion' },
  ];

  return (
    <Section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white">Interactive Map Explorer</h2>
        <p className="text-gray-400 mt-2">Explore properties by region in real-time.</p>
      </div>
      
      <div className="relative w-full h-[600px] bg-secondary group">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500"
          alt="Map Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>

        {/* Pins */}
        {pins.map((pin) => (
          <div 
            key={pin.id}
            className="absolute cursor-pointer group/pin"
            style={{ top: pin.y, left: pin.x }}
            onClick={() => setActivePin(pin)}
          >
            <div className="relative">
               <div className="w-4 h-4 bg-accent rounded-full border-2 border-white z-10 relative"></div>
               <div className="absolute inset-0 bg-accent rounded-full pin-pulse"></div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-primary px-3 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">
              {pin.price}
            </div>
          </div>
        ))}

        {/* Sidebar / Overlay */}
        <AnimatePresence>
          {activePin && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 h-full w-full md:w-80 bg-secondary/95 backdrop-blur-md border-l border-gray-700 p-6 z-20"
            >
              <button onClick={() => setActivePin(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X/></button>
              <h3 className="text-2xl font-serif text-white mt-8">{activePin.name}</h3>
              <p className="text-accent text-xl font-bold mt-2">{activePin.price}</p>
              <div className="mt-6 space-y-4">
                <div className="h-40 bg-gray-800 rounded mb-4 overflow-hidden">
                   <img src={`https://picsum.photos/seed/${activePin.id}/300/200`} className="w-full h-full object-cover" alt="" />
                </div>
                <button className="w-full bg-accent text-primary py-3 rounded font-bold">View Details</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

const HeatMap = () => (
  <Section className="py-20 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Market Price Heatmap</h2>
          <p className="text-gray-400 mb-6 text-lg">Visualize property values across top neighborhoods. Identify investment opportunities with our real-time color-coded analytics.</p>
          <div className="flex gap-4 text-sm mb-8">
            <div className="flex items-center text-gray-300"><div className="w-4 h-4 bg-emerald-500 rounded mr-2"></div> Value</div>
            <div className="flex items-center text-gray-300"><div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div> Premium</div>
            <div className="flex items-center text-gray-300"><div className="w-4 h-4 bg-red-500 rounded mr-2"></div> Ultra Luxury</div>
          </div>
          <button className="border border-accent text-accent px-6 py-3 rounded hover:bg-accent hover:text-primary transition-colors">Analyze Market</button>
        </div>
        <div className="flex-1 w-full grid grid-cols-4 gap-1 h-64 opacity-80">
          {[...Array(32)].map((_, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: i * 0.02 }}
               className={`rounded-sm ${i % 5 === 0 ? 'bg-red-500/60' : i % 3 === 0 ? 'bg-yellow-500/60' : 'bg-emerald-500/60'} hover:opacity-100 transition-opacity cursor-pointer`}
               title="Avg Price: $1.2M"
             />
          ))}
        </div>
      </div>
    </div>
  </Section>
);

const MortgageCalculator = () => {
  const [price, setPrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(200000);
  const [rate, setRate] = useState(4.5);
  
  const loanAmount = price - downPayment;
  const monthlyRate = rate / 100 / 12;
  const terms = 30 * 12;
  const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -terms));

  return (
    <Section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-12">Smart Mortgage Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-secondary p-8 rounded-xl border border-gray-700 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="text-gray-400 block mb-2">Property Price: <span className="text-white font-bold">${price.toLocaleString()}</span></label>
              <input type="range" min="100000" max="5000000" step="10000" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full accent-accent" />
            </div>
            <div>
              <label className="text-gray-400 block mb-2">Down Payment: <span className="text-white font-bold">${downPayment.toLocaleString()}</span></label>
              <input type="range" min="0" max={price} step="5000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full accent-accent" />
            </div>
            <div>
              <label className="text-gray-400 block mb-2">Interest Rate: <span className="text-white font-bold">{rate}%</span></label>
              <input type="range" min="1" max="10" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-accent" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-primary rounded-xl p-8 border border-gray-800">
            <h3 className="text-gray-400 text-lg mb-2">Estimated Monthly Payment</h3>
            <p className="text-5xl font-bold text-accent mb-4">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            <div className="text-sm text-gray-500 text-center">
              *Based on a 30-year fixed loan. Includes principal and interest only.
            </div>
            <button className="mt-8 bg-white text-primary px-8 py-3 rounded font-bold hover:bg-gray-200 transition-colors">Get Pre-Approved</button>
          </div>
        </div>
      </div>
    </Section>
  );
};

const MarketStats = () => {
  const data = [
    { name: 'Jan', price: 4000 },
    { name: 'Feb', price: 3000 },
    { name: 'Mar', price: 2000 },
    { name: 'Apr', price: 2780 },
    { name: 'May', price: 1890 },
    { name: 'Jun', price: 2390 },
    { name: 'Jul', price: 3490 },
  ];

  return (
    <Section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-12">Real Estate Analytics</h2>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d4af37" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#d4af37" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }} />
              <Area type="monotone" dataKey="price" stroke="#d4af37" fillOpacity={1} fill="url(#colorPrice)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-gray-400 mt-6 italic">Market trends based on average price per sqft over the last 6 months.</p>
      </div>
    </Section>
  );
};

const Neighborhoods = () => (
  <Section className="py-20 bg-primary">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-white">Top Neighborhoods</h2>
        <button className="text-accent flex items-center gap-2 hover:text-white transition-colors">See All Areas <ArrowRight size={18}/></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {neighborhoods.map((n, i) => (
          <div key={i} className="group relative rounded-xl overflow-hidden h-80 cursor-pointer">
            <img src={n.image} alt={n.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white">{n.name}</h3>
              <p className="text-sm text-gray-300 mb-2">{n.city}</p>
              <div className="grid grid-cols-2 gap-2 text-xs border-t border-gray-600 pt-2">
                <span className="text-accent">Avg: {n.price}</span>
                <span className="text-green-400">Growth: {n.growth}</span>
                <span className="text-blue-400">Safe: {n.safety}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const ComparisonPreview = () => (
  <Section className="py-20 bg-secondary">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Compare Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-700 rounded-xl overflow-hidden bg-primary">
        {[1, 2, 3].map((item, idx) => (
          <div key={idx} className={`p-8 ${idx !== 2 ? 'border-r border-gray-700' : ''} hover:bg-gray-900 transition-colors`}>
             <div className="h-32 bg-secondary rounded mb-4 overflow-hidden">
               <img src={`https://picsum.photos/seed/comp${item}/200/200`} className="w-full h-full object-cover" alt="" />
             </div>
             <h4 className="text-white font-bold mb-2">Villa {item}</h4>
             <ul className="text-sm text-gray-400 space-y-2">
               <li className="flex justify-between border-b border-gray-800 pb-1"><span>Price</span> <span className="text-white">$2.5M</span></li>
               <li className="flex justify-between border-b border-gray-800 pb-1"><span>Size</span> <span className="text-white">4500 sqft</span></li>
               <li className="flex justify-between border-b border-gray-800 pb-1"><span>Beds</span> <span className="text-white">5</span></li>
               <li className="flex justify-between border-b border-gray-800 pb-1"><span>Year</span> <span className="text-white">2022</span></li>
             </ul>
             <button className="mt-6 w-full border border-gray-600 text-white py-2 rounded hover:border-accent hover:text-accent">Select</button>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const VirtualTour = () => (
  <Section className="py-20 bg-black relative">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40"></div>
    <div className="container mx-auto px-6 relative z-10 text-center">
      <span className="bg-accent text-primary px-3 py-1 rounded text-xs font-bold uppercase mb-4 inline-block">VR Experience</span>
      <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Step Inside Before You Buy</h2>
      <div className="max-w-4xl mx-auto aspect-video bg-gray-900 rounded-xl border border-gray-700 flex items-center justify-center group cursor-pointer shadow-2xl hover:shadow-accent/20 transition-all">
         <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
           <Video size={32} className="text-white ml-1" />
         </div>
      </div>
    </div>
  </Section>
);

const Partners = () => (
  <Section className="py-16 bg-primary border-t border-gray-800">
    <div className="container mx-auto px-6">
      <p className="text-center text-gray-500 mb-8 uppercase text-sm tracking-widest">Trusted by Industry Leaders</p>
      <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {partners.map((p, i) => (
          <div key={i} className="flex items-center gap-2 text-2xl font-serif font-bold text-white">
            <span className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded border border-gray-700 text-accent text-sm">{p.logo}</span>
            <span className="hidden md:block">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const FAQ = () => (
  <Section className="py-20 bg-secondary">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="bg-primary rounded-lg border border-gray-700 group">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-semibold">
              <span className="flex items-center gap-3"><HelpCircle size={18} className="text-accent" /> {faq.q}</span>
              <ChevronDown className="group-open:rotate-180 transition-transform text-gray-500" />
            </summary>
            <div className="px-6 pb-6 text-gray-400 pl-12">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </Section>
);

const WhyUs = () => (
  <Section className="py-20 bg-primary">
    <div className="container mx-auto px-6">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
          {[
            { label: 'Years of Excellence', val: '18+' },
            { label: 'Properties Sold', val: '12k' },
            { label: 'Happy Families', val: '98%' },
            { label: 'Certified Agents', val: '450' }
          ].map((stat, i) => (
            <div key={i} className="pt-8 md:pt-0 px-4">
               <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.val}</div>
               <div className="text-gray-400 uppercase text-xs tracking-widest">{stat.label}</div>
            </div>
          ))}
       </div>
    </div>
  </Section>
);

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ from: 'bot', text: 'Hello! How can I help you find your dream home today?' }]);

  const handleSend = (e: any) => {
    e.preventDefault();
    const text = e.target.input.value;
    if(!text) return;
    setMsgs([...msgs, { from: 'user', text }]);
    e.target.reset();
    setTimeout(() => {
       setMsgs(prev => [...prev, { from: 'bot', text: 'Thank you. An agent will review your request and contact you shortly.' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-secondary border border-gray-700 w-80 md:w-96 rounded-xl shadow-2xl mb-4 overflow-hidden flex flex-col max-h-[500px]"
          >
             <div className="bg-primary p-4 border-b border-gray-700 flex justify-between items-center">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                 <span className="font-bold text-white">CroState Assistant</span>
               </div>
               <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white"><X size={18}/></button>
             </div>
             <div className="p-4 flex-1 overflow-y-auto space-y-4 bg-gray-900/50">
                {msgs.map((m, i) => (
                  <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg text-sm ${m.from === 'user' ? 'bg-accent text-primary' : 'bg-gray-700 text-white'}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
             </div>
             <form onSubmit={handleSend} className="p-3 bg-primary border-t border-gray-700 flex gap-2">
               <input name="input" type="text" placeholder="Type a message..." className="flex-1 bg-secondary text-white px-3 py-2 rounded border border-gray-600 focus:border-accent outline-none text-sm" />
               <button type="submit" className="bg-accent text-primary p-2 rounded hover:bg-white"><Send size={18}/></button>
             </form>
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-16 h-16 bg-accent rounded-full text-primary flex items-center justify-center shadow-lg hover:bg-white transition-colors"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

// --- Main Home Component ---

const Home = () => {
  const router = useRouter();
  const featuredProperties = properties.filter(p => p.isFeatured).slice(0, 3);

  const categories = [
    { icon: <HomeIcon size={32} />, label: "Buy", desc: "Find your dream home" },
    { icon: <Key size={32} />, label: "Rent", desc: "Luxury rentals available" },
    { icon: <Building size={32} />, label: "Commercial", desc: "Office & retail spaces" },
    { icon: <DollarSign size={32} />, label: "Sell", desc: "Get the best valuation" },
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://dropinblog.net/cdn-cgi/image/fit=scale-down,width=1140/34246798/files/featured/Mountain_House_-_Between_Dream__amp__Reality.png" 
          alt="Luxury Home" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 font-bold tracking-tight"
          >
            Discover Exceptional Living
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
          >
            Experience the pinnacle of luxury real estate with our exclusive portfolio of premier properties.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg max-w-4xl mx-auto shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input type="text" placeholder="Location, City, Zip" className="p-3 bg-secondary/80 text-white rounded border border-gray-600 focus:border-accent outline-none" />
              <select className="p-3 bg-secondary/80 text-white rounded border border-gray-600 focus:border-accent outline-none">
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
              <select className="p-3 bg-secondary/80 text-white rounded border border-gray-600 focus:border-accent outline-none">
                <option>Price Range</option>
                <option>$500k - $1M</option>
                <option>$1M - $5M</option>
                <option>$5M+</option>
              </select>
              <button 
                onClick={() => router.push('/properties')}
                className="bg-accent text-primary font-bold py-3 rounded hover:bg-white hover:text-accent transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Search size={20} /> Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Categories */}
      <Section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-primary p-8 rounded-lg border border-gray-800 hover:border-accent transition-all duration-300 group cursor-pointer text-center">
                <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-2">{cat.label}</h3>
                <p className="text-gray-400 text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. Popular Listings */}
      <Section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Popular Listings</h2>
              <div className="h-1 w-20 bg-accent"></div>
            </div>
            <Link href="/properties" className="text-accent hover:text-white flex items-center gap-2 transition-colors">View All <ArrowRight size={18}/></Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-secondary rounded-lg overflow-hidden border border-gray-800 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 text-xs font-bold uppercase rounded-sm">
                    {property.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif text-white truncate">{property.title}</h3>
                    <p className="text-accent font-bold">${property.price.toLocaleString()}</p>
                  </div>
                  <p className="text-gray-400 flex items-center mb-6 text-sm"><Search size={14} className="mr-2"/> {property.location}</p>
                  <div className="flex justify-between border-t border-gray-700 pt-4 text-gray-400 text-sm">
                    <span>{property.bedrooms} Beds</span>
                    <span>{property.bathrooms} Baths</span>
                    <span>{property.sqft.toLocaleString()} Sqft</span>
                  </div>
                  <Link href={`/properties/${property.id}`} className="block mt-6 text-center w-full border border-gray-600 py-2 text-white hover:bg-accent hover:text-primary hover:border-accent transition-colors rounded-sm text-sm uppercase font-semibold">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. AI Recommendation */}
      <AIRecommendation />

      {/* 5. Map Explorer */}
      <MapExplorer />

      {/* 6. Neighborhoods */}
      <Neighborhoods />

      {/* 7. Heatmap */}
      <HeatMap />

      {/* 8. Comparison Tool */}
      <ComparisonPreview />

      {/* 9. Mortgage Calculator */}
      <MortgageCalculator />

      {/* 10. Analytics */}
      <MarketStats />

      {/* 11. Virtual Tour */}
      <VirtualTour />

      {/* 12. Why Choose Us */}
      <WhyUs />

      {/* 13. Testimonials (Success Stories) */}
      <Section className="py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Success Stories</h2>
            <div className="h-1 w-20 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-primary p-8 rounded border border-gray-800 relative hover:border-accent transition-colors">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-400 italic mb-6">"Finding our dream home was effortless with CroState. Their attention to detail and premium service is unmatched in the industry."</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-12 h-12 rounded-full border border-accent" />
                  <div>
                    <h4 className="text-white font-serif">The Smiths</h4>
                    <p className="text-xs text-gray-500">Purchased in Miami</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 14. Partners */}
      <Partners />

      {/* 15. FAQ */}
      <FAQ />

      {/* 16. CTA */}
      <Section className="py-24 bg-accent relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-primary font-bold mb-6">Ready to find your dream property?</h2>
          <p className="text-primary/80 text-xl mb-8 max-w-2xl mx-auto">Contact our specialized agents today to schedule a viewing or discuss your investment.</p>
          <div className="flex justify-center gap-4">
             <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-primary transition-all shadow-xl">
               Book Consultation
             </Link>
             <button className="bg-white/20 text-primary border border-primary px-8 py-4 rounded font-bold hover:bg-primary hover:text-white transition-all">
               List With Us
             </button>
          </div>
        </div>
      </Section>

      {/* 17. Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Home;