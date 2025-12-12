import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    setTimeout(() => {
      navigate('/admin');
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-primary/90"></div>
      
      <div className="relative z-10 w-full max-w-md p-8 bg-secondary border border-gray-700 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-serif text-white text-center mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="text-gray-400 text-center mb-8">Access the most exclusive real estate listings</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-gray-400 text-sm mb-2">Full Name</label>
              <input type="text" className="w-full bg-primary border border-gray-600 rounded p-3 text-white focus:border-accent outline-none transition-colors" placeholder="John Doe" />
            </div>
          )}
          
          <div>
            <label className="block text-gray-400 text-sm mb-2">Email Address</label>
            <input type="email" className="w-full bg-primary border border-gray-600 rounded p-3 text-white focus:border-accent outline-none transition-colors" placeholder="you@example.com" />
          </div>
          
          <div>
            <label className="block text-gray-400 text-sm mb-2">Password</label>
            <input type="password" className="w-full bg-primary border border-gray-600 rounded p-3 text-white focus:border-accent outline-none transition-colors" placeholder="••••••••" />
          </div>

          <button className="w-full bg-accent text-primary font-bold py-3 rounded hover:bg-white transition-all shadow-lg hover:shadow-accent/50">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-gray-400 hover:text-accent transition-colors text-sm"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;