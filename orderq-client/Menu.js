// src/components/Menu.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const menuCollection = collection(db, 'menu_items');
      const snapshot = await getDocs(menuCollection);
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMenuItems(items);
    };

    fetchMenu();
  }, []);

  return (
    <div>
      <h2>📋 Our Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <h3>{item.name} - ₱{item.price}</h3>
            <p>{item.description}</p>
            {item.image && <img src={item.image} alt={item.name} width="200" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
