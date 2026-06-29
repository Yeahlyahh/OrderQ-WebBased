// js/customer.js
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const db = window.db;
const menuList = document.getElementById("menu-list");

async function loadMenu() {
  const querySnapshot = await getDocs(collection(db, "menu_items"));
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow";

    card.innerHTML = `
      <h2 class="text-xl font-bold mb-1">${item.name}</h2>
      <p class="text-gray-600">${item.description}</p>
      <p class="text-green-600 font-semibold mt-1">₱${item.price}</p>
      ${item.image ? `<img src="${item.image}" alt="${item.name}" class="w-full h-40 object-cover mt-2 rounded">` : ''}
    `;

    menuList.appendChild(card);
  });
}

loadMenu();
