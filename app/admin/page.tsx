'use client';

import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { properties, users } from '@/services/mockData';
import { LayoutDashboard, Building, Users, FileText, Plus, Trash2, Edit } from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const chartData = [
    { name: 'Jan', visits: 4000, views: 2400 },
    { name: 'Feb', visits: 3000, views: 1398 },
    { name: 'Mar', visits: 2000, views: 9800 },
    { name: 'Apr', visits: 2780, views: 3908 },
    { name: 'May', visits: 1890, views: 4800 },
    { name: 'Jun', visits: 2390, views: 3800 }
  ];

  const SidebarItem = ({ id, icon: Icon, label }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 px-6 py-4 transition-colors border-l-4 ${
        activeTab === id ? 'bg-secondary border-accent text-white' : 'border-transparent text-gray-400 hover:bg-secondary/50 hover:text-gray-200'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="flex min-h-screen bg-primary pt-20">
      <div className="w-64 border-r border-gray-800 hidden md:block">
        <div className="py-6">
          <SidebarItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
          <SidebarItem id="properties" icon={Building} label="Properties" />
          <SidebarItem id="users" icon={Users} label="Users" />
          <SidebarItem id="blog" icon={FileText} label="Blog Posts" />
        </div>
      </div>

      <div className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-serif text-white mb-8">Dashboard Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { title: 'Total Sales', val: '$45.2M', col: 'text-accent' },
                { title: 'Active Listings', val: properties.length, col: 'text-white' },
                { title: 'New Leads', val: '142', col: 'text-white' },
                { title: 'Site Visits', val: '12.5K', col: 'text-white' }
              ].map((stat, i) => (
                <div key={i} className="bg-secondary p-6 rounded border border-gray-700">
                  <p className="text-gray-400 text-sm uppercase">{stat.title}</p>
                  <p className={`text-3xl font-bold mt-2 ${stat.col}`}>{stat.val}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-secondary p-6 rounded border border-gray-700">
                <h3 className="text-white mb-6 font-bold">Traffic Statistics</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="name" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                      <Bar dataKey="visits" fill="#d4af37" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-secondary p-6 rounded border border-gray-700">
                <h3 className="text-white mb-6 font-bold">Property Views</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="name" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                      <Line type="monotone" dataKey="views" stroke="#38bdf8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'properties' && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif text-white">Manage Properties</h2>
              <button className="bg-accent text-primary px-4 py-2 rounded font-bold flex items-center gap-2 hover:bg-white transition-colors">
                <Plus size={18} /> Add Property
              </button>
            </div>
            <div className="bg-secondary rounded border border-gray-700 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-primary text-gray-400 uppercase text-sm">
                  <tr>
                    <th className="p-4">Property</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Type</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {properties.map((p) => (
                    <tr key={p.id} className="text-gray-300 hover:bg-white/5 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <img src={p.image} className="w-12 h-12 rounded object-cover" alt="" />
                        {p.title}
                      </td>
                      <td className="p-4 font-bold text-white">${p.price.toLocaleString()}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded bg-gray-700 text-xs">{p.type}</span>
                      </td>
                      <td className="p-4 text-sm">{p.dateAdded}</td>
                      <td className="p-4 flex gap-2">
                        <button className="p-2 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500 hover:text-white">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500 hover:text-white">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-serif text-white mb-8">User Management</h2>
            <div className="bg-secondary rounded border border-gray-700 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-primary text-gray-400 uppercase text-sm">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {users.map((u) => (
                    <tr key={u.id} className="text-gray-300 hover:bg-white/5 transition-colors">
                      <td className="p-4">{u.name}</td>
                      <td className="p-4">{u.email}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            u.role === 'admin' ? 'bg-accent/20 text-accent' : 'bg-gray-700'
                          }`}
                        >
                          {u.role}
                        </span>
                      </td>
                      <td className="p-4 flex gap-2">
                        <button className="p-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500 hover:text-white">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

