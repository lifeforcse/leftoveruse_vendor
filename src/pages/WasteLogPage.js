import React, { useState } from 'react';

const WasteLogPage = () => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [logs, setLogs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogs([...logs, { item, amount }]);
    setItem('');
    setAmount('');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Daily Waste Log</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Item (e.g., Tomato)"
          className="px-3 py-2 border rounded"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Amount (e.g., 2kg)"
          className="px-3 py-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Log</button>
      </form>

      <ul className="bg-white rounded shadow p-4 space-y-2">
        {logs.map((log, i) => (
          <li key={i} className="border-b py-1">
            🗑️ {log.amount} of {log.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WasteLogPage;
