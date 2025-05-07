let cart = [];

const menuItems = [
  { id: 1, name: "Et Döner Dürüm", price: 80 },
  { id: 2, name: "Tavuk Döner Dürüm", price: 60 },
  { id: 3, name: "İskender", price: 100 },
  { id: 4, name: "Ayran", price: 10 },
  { id: 5, name: "Kola", price: 15 }
];

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuItems);
});

function renderMenu(items) {
  const menu = document.getElementById("menu");
  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.price}₺</p>
      <button onclick='addToCart(${JSON.stringify(item)})'>Sepete Ekle</button>
    `;
    menu.appendChild(div);
  });
}

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const total = document.getElementById("total");
  cartList.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}₺`;
    cartList.appendChild(li);
    sum += item.price;
  });

  total.textContent = `Toplam: ${sum}₺`;
}

function checkout() {
  alert("Siparişiniz alındı! Afiyet olsun 😋");
  cart = [];
  updateCart();
}
