// src/pages/VendorDashboard.js
import React, { useState } from 'react';

const allVendors = [
  { name: 'Fresh Tomatoes', price: 25, image: 'https://cdn-icons-png.flaticon.com/512/590/590685.png' },
  { name: 'Golden Potatoes', price: 20, image: 'https://cdn-icons-png.flaticon.com/512/590/590678.png' },
  { name: 'Red Onions', price: 30, image: 'https://cdn-icons-png.flaticon.com/512/590/590674.png' },
  { name: 'Steamed Rice', price: 40, image: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' },
  { name: 'Organic Pulses', price: 55, image: 'https://cdn-icons-png.flaticon.com/512/590/590689.png' },
  { name: 'Lady’s Finger', price: 35, image: 'https://cdn-icons-png.flaticon.com/512/766/766084.png' },
  { name: 'Fresh Garlic', price: 90, image: 'https://cdn-icons-png.flaticon.com/512/590/590686.png' },
  { name: 'Green Chilies', price: 45, image: 'https://cdn-icons-png.flaticon.com/512/590/590675.png' },
  { name: 'Carrots', price: 28, image: 'https://cdn-icons-png.flaticon.com/512/590/590677.png' },
  { name: 'Cabbage', price: 18, image: 'https://cdn-icons-png.flaticon.com/512/590/590673.png' },
];

const VendorDashboard = ({ onOrder }) => {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filtered = allVendors
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-800">🛍️ Available Items from Local Shops</h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="asc">Sort by Price: Low to High</option>
          <option value="desc">Sort by Price: High to Low</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((vendor, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-xl transition">
            <img src={vendor.image} alt={vendor.name} className="w-20 h-20 object-contain mb-4" />
            <h3 className="text-lg font-bold text-green-700 mb-1">{vendor.name}</h3>
            <p className="text-gray-600">Price: ₹{vendor.price}/kg</p>
            <button
              onClick={() => onOrder(vendor)}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-semibold"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorDashboard;
