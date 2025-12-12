import { Property, BlogPost, User } from '../types';

export const properties: Property[] = [
  {
    id: 1,
    title: "Elysium Penthouse",
    price: 8500000,
    location: "Beverly Hills, CA",
    type: "Luxury",
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4500,
    image: "https://picsum.photos/seed/luxury1/800/600",
    images: ["https://picsum.photos/seed/luxury1/800/600", "https://picsum.photos/seed/int1/800/600", "https://picsum.photos/seed/int2/800/600"],
    description: "An absolute masterpiece of modern architecture featuring panoramic views of the city.",
    features: ["Pool", "Smart Home", "Wine Cellar", "Private Elevator"],
    agent: {
      name: "Victoria Sterling",
      phone: "+1 (555) 123-4567",
      email: "victoria@crostate.com",
      image: "https://picsum.photos/seed/agent1/200/200"
    },
    isFeatured: true,
    dateAdded: "2023-10-01"
  },
  {
    id: 2,
    title: "Oceanfront Villa",
    price: 4200000,
    location: "Miami Beach, FL",
    type: "Buy",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6000,
    image: "https://picsum.photos/seed/luxury2/800/600",
    images: ["https://picsum.photos/seed/luxury2/800/600"],
    description: "Direct ocean access with private dock and infinity pool.",
    features: ["Ocean View", "Dock", "Guest House"],
    agent: {
      name: "James Bond",
      phone: "+1 (555) 987-6543",
      email: "james@crostate.com",
      image: "https://picsum.photos/seed/agent2/200/200"
    },
    isFeatured: true,
    dateAdded: "2023-10-05"
  },
  {
    id: 3,
    title: "Downtown Loft",
    price: 4500,
    location: "New York, NY",
    type: "Rent",
    bedrooms: 1,
    bathrooms: 2,
    sqft: 1200,
    image: "https://picsum.photos/seed/luxury3/800/600",
    images: ["https://picsum.photos/seed/luxury3/800/600"],
    description: "Industrial chic loft in the heart of SoHo.",
    features: ["High Ceilings", "Exposed Brick", "Doorman"],
    agent: {
      name: "Sarah Parker",
      phone: "+1 (555) 222-3333",
      email: "sarah@crostate.com",
      image: "https://picsum.photos/seed/agent3/200/200"
    },
    isFeatured: false,
    dateAdded: "2023-10-10"
  },
  {
    id: 4,
    title: "Suburban Family Home",
    price: 850000,
    location: "Austin, TX",
    type: "Buy",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2400,
    image: "https://picsum.photos/seed/home4/800/600",
    images: ["https://picsum.photos/seed/home4/800/600"],
    description: "Perfect family home near top-rated schools.",
    features: ["Backyard", "Garage", "Fireplace"],
    agent: {
      name: "Mike Ross",
      phone: "+1 (555) 444-5555",
      email: "mike@crostate.com",
      image: "https://picsum.photos/seed/agent4/200/200"
    },
    isFeatured: false,
    dateAdded: "2023-10-12"
  },
  {
    id: 5,
    title: "Modern Tech Hub Office",
    price: 12000000,
    location: "San Francisco, CA",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 10,
    sqft: 15000,
    image: "https://picsum.photos/seed/office1/800/600",
    images: ["https://picsum.photos/seed/office1/800/600"],
    description: "Prime commercial real estate in Silicon Valley.",
    features: ["Open Plan", "Conference Rooms", "Cafeteria"],
    agent: {
      name: "Elon M.",
      phone: "+1 (555) 666-7777",
      email: "elon@crostate.com",
      image: "https://picsum.photos/seed/agent5/200/200"
    },
    isFeatured: true,
    dateAdded: "2023-10-15"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Interior Design Trends for 2024",
    excerpt: "Discover what's hot in the world of luxury interiors this year.",
    content: "Full content here...",
    date: "Oct 24, 2023",
    author: "Elena Fisher",
    image: "https://picsum.photos/seed/blog1/800/400",
    category: "Design"
  },
  {
    id: 2,
    title: "Investing in Real Estate: A Beginner's Guide",
    excerpt: "How to start your portfolio with minimal risk and maximum return.",
    content: "Full content here...",
    date: "Oct 20, 2023",
    author: "Marcus Aurelius",
    image: "https://picsum.photos/seed/blog2/800/400",
    category: "Investment"
  }
];

export const users: User[] = [
  { id: 1, name: "Admin User", email: "admin@crostate.com", role: "admin" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "user" }
];

export const neighborhoods = [
  { name: "Upper East Side", city: "New York", price: "$2.5M", safety: "98%", growth: "+5%", image: "https://picsum.photos/seed/ny1/400/300" },
  { name: "Beverly Hills", city: "Los Angeles", price: "$5.2M", safety: "95%", growth: "+8%", image: "https://picsum.photos/seed/la1/400/300" },
  { name: "Brickell", city: "Miami", price: "$1.1M", safety: "92%", growth: "+12%", image: "https://picsum.photos/seed/miami1/400/300" },
  { name: "Pacific Heights", city: "San Francisco", price: "$4.1M", safety: "94%", growth: "+3%", image: "https://picsum.photos/seed/sf1/400/300" },
];

export const partners = [
  { name: "Trilogy Construction", logo: "TC" },
  { name: "Apex Developers", logo: "AD" },
  { name: "Global Ventures", logo: "GV" },
  { name: "Skyline Architects", logo: "SA" },
  { name: "Urban Living", logo: "UL" },
];

export const faqs = [
  { q: "What documents do I need to buy a home?", a: "Typically you need proof of income, identification, bank statements, and a pre-approval letter for a mortgage." },
  { q: "How long does the buying process take?", a: "On average, it takes 30-45 days from closing the deal to getting the keys, depending on mortgage processing." },
  { q: "Do you handle commercial real estate?", a: "Yes, we have a dedicated division for commercial properties including office spaces and retail locations." },
  { q: "What is your commission structure?", a: "Our standard commission is competitive with the market rate, typically split between buyer and seller agents. Contact us for specifics." },
];