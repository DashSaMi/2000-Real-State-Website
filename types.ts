export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  type: 'Buy' | 'Rent' | 'Mortgage' | 'Commercial' | 'Luxury';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  agent: Agent;
  isFeatured?: boolean;
  dateAdded: string;
}

export interface Agent {
  name: string;
  phone: string;
  email: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface StatCard {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}