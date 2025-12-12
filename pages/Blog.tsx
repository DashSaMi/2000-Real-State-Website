import React from 'react';
import { blogPosts } from '../services/mockData';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  return (
    <div className="bg-primary min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Latest Insights</h1>
          <p className="text-gray-400">Trends, market analysis, and luxury living tips.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-secondary rounded-lg overflow-hidden border border-gray-800 hover:border-accent transition-all duration-300 group">
              <div className="h-64 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-accent uppercase font-bold tracking-wider mb-4">
                  <span className="flex items-center"><Calendar size={14} className="mr-1"/> {post.date}</span>
                  <span className="flex items-center"><User size={14} className="mr-1"/> {post.author}</span>
                </div>
                <h2 className="text-2xl font-serif text-white mb-4 group-hover:text-accent transition-colors">{post.title}</h2>
                <p className="text-gray-400 mb-6">{post.excerpt}</p>
                <button className="text-white border-b border-accent pb-1 hover:text-accent transition-colors">Read Article</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;