// src/App.js
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import VendorDashboard from './pages/VendorDashboard';
import SupplierDashboard from './pages/SupplierDashboard';
import WasteLogPage from './pages/WasteLogPage';

function App() {
  const [user, setUser] = useState(null); // user = { role: 'street' | 'raw' }
  const [orders, setOrders] = useState([]); // Track orders for street vendor

  const handleLogin = (role) => {
    setUser({ role });
  };

  const handleLogout = () => {
    setUser(null);
    setOrders([]);
  };

  if (!user) return <LoginPage onLogin={handleLogin} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200">
      <div className="p-4 bg-green-800 text-white flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-extrabold">🥦 LeftOverLog</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-green-700 px-5 py-2 rounded-xl font-bold hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        {user.role === 'street' ? (
          <>
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-2 text-green-900">Welcome, Street Food Vendor 👨‍🍳</h2>
              <p className="text-gray-700 text-lg">
                Discover affordable raw material suppliers like Rice, Pulses, Tomatoes, and Lady's Finger. Place instant orders from a variety of local shops and track daily waste to optimize your profit margins.
              </p>
            </section>

            <VendorDashboard onOrder={(item) => setOrders([...orders, item])} />

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-4 text-green-800">♻️ Waste Tracking</h2>
              <WasteLogPage />
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-4 text-green-800">📦 Your Orders</h2>
              {orders.length === 0 ? (
                <p className="text-gray-500 text-lg">No orders placed yet. Start ordering fresh stock now!</p>
              ) : (
                <ul className="grid md:grid-cols-2 gap-4">
                  {orders.map((order, index) => (
                    <li key={index} className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-5">
                      <img src={order.image} alt={order.name} className="w-16 h-16 object-contain" />
                      <div>
                        <p className="font-bold text-green-800 text-lg">{order.name}</p>
                        <p className="text-gray-600">{order.price}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        ) : (
          <>
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-2 text-green-900">Welcome, Supplier 🧑‍🌾</h2>
              <p className="text-gray-700 text-lg">
                Upload a wide variety of raw materials like Rice, Pulses, Tomatoes, Lady's Finger, and more. Attract vendors by showcasing competitive pricing and fresh inventory from your local shop.
              </p>
            </section>
            <SupplierDashboard />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
