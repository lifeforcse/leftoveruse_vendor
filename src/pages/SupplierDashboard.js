// src/pages/SupplierDashboard.js
import React, { useState } from 'react';

const defaultItems = [
  {
    name: 'FreshMart',
    price: 25,
    image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',
  },
  {
    name: 'Potato Point',
    price: 20,
    image: 'https://cdn-icons-png.flaticon.com/512/590/590678.png',
  },
  {
    name: 'Onion Basket',
    price: 30,
    image: 'https://cdn-icons-png.flaticon.com/512/590/590674.png',
  },
  {
    name: 'Green Delight',
    price: 35,
    image: 'https://cdn-icons-png.flaticon.com/512/766/766084.png',
  },
  {
    name: 'Rice World',
    price: 40,
    image: 'https://cdn-icons-png.flaticon.com/512/686/686589.png',
  },
  {
    name: 'Pulse Hub',
    price: 55,
    image: 'https://cdn-icons-png.flaticon.com/512/2935/2935284.png',
  },
  {
    name: 'Garlic Grove',
    price: 90,
    image: 'https://cdn-icons-png.flaticon.com/512/590/590686.png',
  },
  {
    name: 'Chili Cart',
    price: 45,
    image: 'https://cdn-icons-png.flaticon.com/512/590/590675.png',
  },
  {
    name: 'Carrot King',
    price: 28,
    image: 'https://cdn-icons-png.flaticon.com/512/590/590677.png',
  },
  {
    name: 'Cabbage Co.',
    price: 18,
    image: 'https://cdn-icons-png.flaticon.com/512/590/590673.png',
  },
];

const SupplierDashboard = () => {
  const [items, setItems] = useState(defaultItems);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.image) return;
    setItems([...items, formData]);
    setFormData({ name: '', price: '', image: '' });
  };

  return (
    <div className="space-y-10">
      {/* Hero Banner */}
      <div className="bg-green-100 p-6 rounded-xl shadow-md text-center">
        <h1 className="text-4xl font-bold text-green-900 mb-2">🌟 Solving Real Problems for Street Vendors</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Street food vendors often waste hours sourcing raw materials at fair prices. SpiceDepot helps by providing a verified list of suppliers, real-time inventory visibility, and one-click ordering – saving time and building trust.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-green-800">🌾 SpiceDepot Supplier Panel</h2>

      <form onSubmit={handleSubmit} className="grid gap-4 bg-white p-6 rounded-lg shadow-md max-w-md">
        <input
          type="text"
          placeholder="Material Name (e.g., Tomatoes)"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price in ₹/kg"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Paste image URL (from Flaticon/Unsplash)"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700"
        >
          Upload Item
        </button>
      </form>

      <div>
        <h3 className="text-2xl font-bold mb-4 text-green-700">🧺 Your Specialty Stock</h3>
        {items.length === 0 ? (
          <p className="text-gray-500">No items uploaded yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-full mb-4 border border-green-200"
                />
                <h3 className="text-xl font-semibold text-green-800 mb-1">{item.name}</h3>
                <p className="text-gray-600">Price: ₹{item.price}/kg</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplierDashboard;
