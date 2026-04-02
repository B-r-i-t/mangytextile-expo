// ═══════════════════════════════════════
// PRODUCT DATA
// ═══════════════════════════════════════
const products = [
  {
    id: 1,
    name: "Boutique Youth Mix",
    category: "mixed",
    emoji: "👗",
    price: 145,
    oldPrice: 180,
    desc: "Trendy youth boutique clothing mix. On-trend styles, fast-selling pieces, perfect for youth market stores.",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Best Seller", "Youth", "Mix"],
    badge: "Best Seller",
    stock: true,
    pieces: "~65 pieces",
  },
  {
    id: 2,
    name: "Vestido Nuevo Bale",
    category: "dresses",
    emoji: "👒",
    price: 165,
    oldPrice: 200,
    desc: "Fresh new dresses, never worn. Party dresses, casual styles, wedding pieces included.",
    sizes: ["S", "M", "L"],
    tags: ["New Arrival", "Dresses"],
    badge: "New",
    stock: true,
    pieces: "~55 pieces",
  },
  {
    id: 3,
    name: "Premium Brand Mix",
    category: "brand",
    emoji: "✨",
    price: 210,
    oldPrice: 260,
    desc: "American brand names — Nike, H&M, Zara, Gap and more. Recognizable labels that sell fast.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["Premium", "Brand Names"],
    badge: "Hot",
    stock: true,
    pieces: "~50 pieces",
  },
  {
    id: 4,
    name: "Women's Trousers Bale",
    category: "pants",
    emoji: "👖",
    price: 130,
    oldPrice: 160,
    desc: "High-demand women's pants and jeans, sourced directly from American retail.",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Women", "Trousers"],
    badge: null,
    stock: true,
    pieces: "~70 pieces",
  },
  {
    id: 5,
    name: "Kids Clothing Mix",
    category: "kids",
    emoji: "🧒",
    price: 95,
    oldPrice: 120,
    desc: "Cute and colorful kids clothing from ages 2–12. Mix of tops, bottoms, and sets.",
    sizes: ["2T", "4T", "6", "8", "10", "12"],
    tags: ["Kids", "Mix"],
    badge: "Popular",
    stock: true,
    pieces: "~80 pieces",
  },
  {
    id: 6,
    name: "Summer Dress Bale",
    category: "dresses",
    emoji: "🌸",
    price: 155,
    oldPrice: 190,
    desc: "Lightweight summer dresses, floral prints, casual beach styles. Perfect for warm climates.",
    sizes: ["S", "M", "L"],
    tags: ["Dresses", "Summer"],
    badge: null,
    stock: true,
    pieces: "~60 pieces",
  },
  {
    id: 7,
    name: "Shoes Mix Bale",
    category: "shoes",
    emoji: "👟",
    price: 175,
    oldPrice: 220,
    desc: "Mixed American brand footwear — sneakers, sandals, heels. Various sizes included.",
    sizes: ["6", "7", "8", "9", "10", "11"],
    tags: ["Shoes", "Brand Names"],
    badge: "Limited",
    stock: true,
    pieces: "~40 pairs",
  },
  {
    id: 8,
    name: "Men's Casual Bale",
    category: "mixed",
    emoji: "🧔",
    price: 140,
    oldPrice: 170,
    desc: "Men's casual wear — polos, tees, shorts, and light jackets. Great everyday styles.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["Men", "Casual"],
    badge: null,
    stock: false,
    pieces: "~60 pieces",
  },
];

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
let cart = JSON.parse(localStorage.getItem("tb_cart") || "[]");
let currentProduct = null;
let currentFilter = "all";
let modalQty = 1;
let selectedSize = "";

// ═══════════════════════════════════════
// RENDER PRODUCTS
// ═══════════════════════════════════════
function renderProducts(filter = "all") {
  currentFilter = filter;
  const grid = document.getElementById("product-grid");
  const title = document.getElementById("products-title");
  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);
  const labels = {
    all: "Current Favorites",
    dresses: "Dress Bales",
    mixed: "Mixed Bales",
    brand: "Brand Name Bales",
    pants: "Women's Trousers",
    kids: "Kids Clothing",
    shoes: "Shoe Bales",
  };
  title.textContent = labels[filter] || "Products";
  grid.innerHTML = filtered
    .map(
      (p) => `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-thumb">
        <div class="product-thumb-placeholder">${p.emoji}</div>
        ${
          p.badge
            ? `<div class="product-badge${p.badge === "Hot" ? " hot" : ""}">${
                p.badge
              }</div>`
            : ""
        }
        ${!p.stock ? `<div class="product-badge sold-out">Sold Out</div>` : ""}
        <button class="product-wishlist" onclick="toggleWishlist(event,${
          p.id
        })" id="wish-${p.id}">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.pieces} · ${p.tags.join(" · ")}</div>
        <div class="product-meta">
          <div><span class="product-price">$${
            p.price
          }</span><span class="product-old-price">$${p.oldPrice}</span></div>
          <button class="add-cart-btn" ${
            !p.stock ? "disabled" : ""
          } onclick="quickAdd(event,${p.id})">${
        p.stock ? "Add to Cart" : "Sold Out"
      }</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
  document
    .getElementById("products-section")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

// ═══════════════════════════════════════
// PRODUCT MODAL
// ═══════════════════════════════════════
function openProduct(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  currentProduct = p;
  modalQty = 1;
  selectedSize = p.sizes[0];
  document.getElementById(
    "modal-img",
  ).innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:90px;background:linear-gradient(135deg,#e8f5e9,#f1f8e9)">${p.emoji}</div>`;
  document.getElementById("modal-name").textContent = p.name;
  document.getElementById("modal-price").textContent = `$${p.price}`;
  document.getElementById(
    "modal-desc",
  ).innerHTML = `${p.desc}<br><br><strong>${p.pieces}</strong> per bale`;
  document.getElementById("modal-qty").textContent = 1;
  document.getElementById("modal-sizes").innerHTML = p.sizes
    .map(
      (s, i) =>
        `<button class="size-btn${
          i === 0 ? " active" : ""
        }" onclick="selectSize(this,'${s}')">${s}</button>`,
    )
    .join("");
  document.getElementById("modal-tags").innerHTML = p.tags
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");
  document.getElementById("modal-add-btn").textContent = p.stock
    ? "Add to Cart"
    : "Out of Stock";
  document.getElementById("modal-add-btn").disabled = !p.stock;
  openModal("product-modal");
}
function selectSize(el, size) {
  selectedSize = size;
  document
    .querySelectorAll(".size-btn")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
}
function changeModalQty(delta) {
  modalQty = Math.max(1, Math.min(99, modalQty + delta));
  document.getElementById("modal-qty").textContent = modalQty;
}
function addToCartFromModal() {
  if (!currentProduct || !currentProduct.stock) return;
  addToCart(currentProduct, selectedSize, modalQty);
  closeModal("product-modal");
}
function quickAdd(e, id) {
  e.stopPropagation();
  const p = products.find((x) => x.id === id);
  if (p && p.stock) addToCart(p, p.sizes[0], 1);
}

// ═══════════════════════════════════════
// CART LOGIC
// ═══════════════════════════════════════
function addToCart(product, size, qty) {
  const key = `${product.id}-${size}`;
  const existing = cart.find((i) => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      key,
      id: product.id,
      name: product.name,
      emoji: product.emoji,
      price: product.price,
      size,
      qty,
    });
  }
  saveCart();
  updateCartUI();
  showToast(`✓ ${product.name} added to cart`);
}
function removeFromCart(key) {
  cart = cart.filter((i) => i.key !== key);
  saveCart();
  updateCartUI();
  renderCartItems();
}
function changeQty(key, delta) {
  const item = cart.find((i) => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}
function saveCart() {
  localStorage.setItem("tb_cart", JSON.stringify(cart));
}
function cartTotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}
function cartCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function updateCartUI() {
  const count = cartCount();
  const countEl = document.getElementById("cart-count");
  countEl.textContent = count;
  countEl.classList.toggle("show", count > 0);
  document.getElementById("cart-item-count").textContent = count;
  const total = cartTotal();
  document.getElementById("cart-subtotal").textContent = `$${total.toFixed(2)}`;
  document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;
  document.getElementById("cart-shipping").textContent =
    total >= 250 ? "🎉 Free!" : "Calculated at checkout";
  document.getElementById("cart-footer").style.display = cart.length
    ? "block"
    : "none";
  document.getElementById("cart-empty").style.display = cart.length
    ? "none"
    : "flex";
}

function renderCartItems() {
  const body = document.getElementById("cart-body");
  const items = cart
    .map(
      (i) => `
    <div class="cart-item">
      <div class="cart-item-img">${i.emoji}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${i.name}</div>
        <div class="cart-item-variant">Size: ${i.size}</div>
        <div class="cart-item-row">
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeQty('${
              i.key
            }',-1)">−</button>
            <span class="qty-val">${i.qty}</span>
            <button class="qty-btn" onclick="changeQty('${i.key}',1)">+</button>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <span class="cart-item-price">$${(i.price * i.qty).toFixed(
              2,
            )}</span>
            <button class="cart-item-remove" onclick="removeFromCart('${
              i.key
            }')">×</button>
          </div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
  const empty = document.getElementById("cart-empty");
  body.innerHTML = "";
  if (cart.length) {
    body.insertAdjacentHTML("beforeend", items);
  } else {
    body.appendChild(empty);
  }
}

// ═══════════════════════════════════════
// CHECKOUT
// ═══════════════════════════════════════
function openCheckout() {
  if (!cart.length) return;
  const summary = document.getElementById("checkout-order-summary");
  const total = cartTotal();
  const shipping = total >= 250 ? "Free" : "TBD";
  summary.innerHTML =
    cart
      .map(
        (i) =>
          `<div class="order-line"><span>${i.name} ×${i.qty}</span><span>$${(
            i.price * i.qty
          ).toFixed(2)}</span></div>`,
      )
      .join("") +
    `<div class="order-line"><span>Shipping</span><span>${shipping}</span></div>` +
    `<div class="order-line bold"><span>Total</span><span>$${total.toFixed(
      2,
    )}</span></div>`;
  document.getElementById("checkout-form-view").style.display = "block";
  document.getElementById("success-screen").classList.remove("show");
  closeCart();
  openModal("checkout-modal");
}
function placeOrder() {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const country = document.getElementById("country").value;
  if (!fname || !lname || !email || !phone || !country) {
    showToast("⚠️ Please fill in all required fields");
    return;
  }
  document.getElementById("checkout-form-view").style.display = "none";
  const orderNum = "TB-" + Math.floor(Math.random() * 90000 + 10000);
  document.getElementById("order-number").textContent = orderNum;
  document.getElementById("success-screen").classList.add("show");
}
function resetAfterOrder() {
  cart = [];
  saveCart();
  updateCartUI();
  renderCartItems();
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("country").value = "";
  document.getElementById("city").value = "";
  document.getElementById("address").value = "";
  document.getElementById("notes").value = "";
}

// ═══════════════════════════════════════
// MODAL HELPERS
// ═══════════════════════════════════════
function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}
function closeProductModal(e) {
  if (e.target.classList.contains("modal-overlay")) closeModal(e.target.id);
}
function openCart() {
  renderCartItems();
  document.getElementById("cart-overlay").classList.add("open");
  document.getElementById("cart-sidebar").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  document.getElementById("cart-overlay").classList.remove("open");
  document.getElementById("cart-sidebar").classList.remove("open");
  document.body.style.overflow = "";
}

// ═══════════════════════════════════════
// MISC
// ═══════════════════════════════════════
function filterProducts(cat) {
  renderProducts(cat);
}
function showSection(sec) {
  if (sec === "products") renderProducts("all");
}
function toggleWishlist(e, id) {
  e.stopPropagation();
  const btn = document.getElementById("wish-" + id);
  btn.classList.toggle("active");
  showToast(
    btn.classList.contains("active")
      ? "❤️ Added to wishlist"
      : "Removed from wishlist",
  );
}
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}
function openSearch() {
  showToast("🔍 Search coming soon!");
}
function openMobileNav() {
  const nav = document.getElementById("mobile-nav");
  nav.style.display = "flex";
  setTimeout(() => nav.classList.add("open"), 10);
  document.body.style.overflow = "hidden";
}
function closeMobileNav() {
  const nav = document.getElementById("mobile-nav");
  nav.classList.remove("open");
  setTimeout(() => (nav.style.display = "none"), 300);
  document.body.style.overflow = "";
}

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
  updateCartUI();
});
