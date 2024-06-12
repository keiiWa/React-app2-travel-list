import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./index.js"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);









/*

import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function addItem(description, quantity) {
    setItems([
      ...items,
      {
        id: items.length + 1,
        description,
        quantity,
        packed: false,
      },
    ]);
  }

  function removeItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  function togglePacked(id) {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addItem} />
      <PackingList items={items} onRemoveItem={removeItem} onTogglePacked={togglePacked} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>Far Away 🌴🛄</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(2);

  function handleSubmit(e) {
    e.preventDefault();
    if (description) {
      onAddItem(description, quantity);
      setDescription("");
      setQuantity(2);
    }
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="item..."
        type="text"
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onRemoveItem, onTogglePacked }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onRemoveItem={onRemoveItem} onTogglePacked={onTogglePacked} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onRemoveItem, onTogglePacked }) {
  return (
    <li>
      <span
        style={item.packed ? { textDecoration: "line-through" } : {}}
        onClick={() => onTogglePacked(item.id)}
      >
        {item.quantity}x {item.description}
      </span>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const percentagePacked = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        You have {totalItems} items on your list, and you already packed {packedItems} ({percentagePacked}%)
      </em>
    </footer>
  );
}


*/