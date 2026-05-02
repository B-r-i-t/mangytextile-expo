// ═══════════════════════════════════════
// SHARED.JS — Mangy's Textile Exports
// Used by ALL pages
// ═══════════════════════════════════════

// ═══════════════════════════════════════
// CART STATE
// ═══════════════════════════════════════
let cart = JSON.parse(localStorage.getItem("tb_cart") || "[]");
let pmQty = 1;
let pmCurrentId = null;
let modalQty = 1;
let selectedSize = "";
let currentProduct = null;

// ═══════════════════════════════════════
// UTILITY
// ═══════════════════════════════════════
function stars(n) {
  let s = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(n)) s += "★";
    else if (i - 0.5 === n) s += "⭐";
    else s += "☆";
  }
  return s;
}

function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

function openSearch() {
  showToast("🔍 Búsqueda próximamente!");
}

// ═══════════════════════════════════════
// ANNOUNCEMENT BAR
// ═══════════════════════════════════════
const announces = [
  "🚚 Tu proveedor directo, sin intermediarios.",
  "Envío gratis en todos los pedidos",
  "Ofertas de abril — tiempo limitado",
  "Pacas textiles al por mayor en todo el mundo",
];
let announceIdx = 0;

function prevAnnounce() {
  announceIdx = (announceIdx - 1 + announces.length) % announces.length;
  const el =
    document.getElementById("announce") ||
    document.getElementById("announce-text");
  if (el) el.textContent = announces[announceIdx];
}
function nextAnnounce() {
  announceIdx = (announceIdx + 1) % announces.length;
  const el =
    document.getElementById("announce") ||
    document.getElementById("announce-text");
  if (el) el.textContent = announces[announceIdx];
}
setInterval(nextAnnounce, 4000);

// ═══════════════════════════════════════
// CART LOGIC
// ═══════════════════════════════════════
function addToCart(product, size, qty) {
  // Support both calling styles:
  // addToCart(product, size, qty)  ← main.js style
  // addToCart(id)                  ← shipping.js style
  if (typeof product === "number") {
    const id = product;
    const p = products.find((x) => x.id === id);
    if (!p) return;
    const sz = p.sizes ? p.sizes[0] : "ONE SIZE";
    const key = `${p.id}-${sz}`;
    const existing = cart.find((i) => i.key === key);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        key,
        id: p.id,
        name: p.name,
        emoji: p.emoji || "📦",
        image: p.image || p.img,
        price: p.price,
        size: sz,
        qty: 1,
      });
    }
    saveCart();
    updateCartUI();
    showToast(`✓ ${p.name} agregado al carrito`);
    return;
  }

  // Object style
  const key = `${product.id}-${size}`;
  const existing = cart.find((i) => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      key,
      id: product.id,
      name: product.name,
      emoji: product.emoji || "📦",
      image: product.image || product.img,
      price: product.price,
      size,
      qty,
    });
  }
  saveCart();
  updateCartUI();
  showToast(`✓ ${product.name} agregado al carrito`);
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

// ═══════════════════════════════════════
// CART UI
// ═══════════════════════════════════════
function updateCartUI() {
  const count = cartCount();

  // Update badge — works for both id="cart-count" styles
  const countEl = document.getElementById("cart-count");
  if (countEl) {
    countEl.textContent = count;
    countEl.classList.toggle("show", count > 0);
  }

  // Main site cart elements
  const itemCountEl = document.getElementById("cart-item-count");
  if (itemCountEl) itemCountEl.textContent = count;

  const total = cartTotal();

  const subtotalEl = document.getElementById("cart-subtotal");
  if (subtotalEl) subtotalEl.textContent = `$${total.toFixed(2)}`;

  const totalEl = document.getElementById("cart-total");
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)} USD`;

  const shippingEl = document.getElementById("cart-shipping");
  if (shippingEl)
    shippingEl.textContent =
      total >= 250 ? "🎉 ¡Gratis!" : "Calculado al pagar";

  const footerEl = document.getElementById("cart-footer");
  if (footerEl) footerEl.style.display = cart.length ? "block" : "none";

  const emptyEl = document.getElementById("cart-empty");
  if (emptyEl) emptyEl.style.display = cart.length ? "none" : "flex";
}

function renderCartItems() {
  const body = document.getElementById("cart-items-list");
  if (!body) return;

  const empty = document.getElementById("cart-empty");

  if (cart.length) {
    body.innerHTML = cart
      .map(
        (i) => `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${i.image}" alt="${i.name}"
            style="width:100%;height:100%;object-fit:cover;border-radius:8px;"
            onerror="this.style.display='none'">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-name">${i.name}</div>
          <div class="cart-item-variant">Talla: ${i.size}</div>
          <div class="cart-item-row">
            <div class="qty-controls">
              <button class="qty-btn" onclick="changeQty('${
                i.key
              }',-1)">−</button>
              <span class="qty-val">${i.qty}</span>
              <button class="qty-btn" onclick="changeQty('${
                i.key
              }',1)">+</button>
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
      </div>`,
      )
      .join("");
    if (empty) empty.style.display = "none";
  } else {
    body.innerHTML = "";
    if (empty) empty.style.display = "flex";
  }
}

// ═══════════════════════════════════════
// CART OPEN / CLOSE
// ═══════════════════════════════════════
function openCart() {
  renderCartItems();
  const overlay = document.getElementById("cart-overlay");
  const sidebar = document.getElementById("cart-sidebar");
  if (overlay) overlay.classList.add("open");
  if (sidebar) sidebar.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  const overlay = document.getElementById("cart-overlay");
  const sidebar = document.getElementById("cart-sidebar");
  if (overlay) overlay.classList.remove("open");
  if (sidebar) sidebar.classList.remove("open");
  document.body.style.overflow = "";
}

function toggleCart() {
  const sidebar = document.getElementById("cart-sidebar");
  if (!sidebar) return;
  if (sidebar.classList.contains("open")) {
    closeCart();
  } else {
    openCart();
  }
}

// ═══════════════════════════════════════
// PRODUCT MODAL
// ═══════════════════════════════════════
function openProductModal(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  pmCurrentId = id;
  currentProduct = p;
  pmQty = 1;
  modalQty = 1;
  selectedSize = p.sizes ? p.sizes[0] : "ONE SIZE";

  // Support both image field names
  const imgSrc = p.image || p.img || "";
  const priceFmt = typeof p.price === "number" ? p.price.toFixed(2) : p.price;
  const oldPriceFmt =
    typeof p.oldPrice === "number" ? p.oldPrice.toFixed(2) : p.oldPrice;
  const hasStock = p.stock !== false;

  // Media: video or image
  const media = p.video
    ? `<video src="${p.video}" autoplay loop controls
        style="width:100%;height:100%;object-fit:cover;display:block"
        onerror="this.style.display='none'"></video>`
    : `<img src="${imgSrc}" alt="${p.name}"
        style="width:100%;height:100%;object-fit:cover;display:block"
        onerror="this.style.background='#c8ddb8'">`;

  // Sizes row (optional)
  const sizesHTML = p.sizes
    ? `<div>
        <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#999;margin-bottom:8px">Talla</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          ${p.sizes
            .map(
              (s, i) =>
                `<button class="size-btn${i === 0 ? " active" : ""}"
                  onclick="selectSize(this,'${s}')">${s}</button>`,
            )
            .join("")}
        </div>
      </div>`
    : "";

  // Tags row (optional)
  const tagsHTML =
    p.tags && p.tags.length
      ? `<div style="display:flex;flex-wrap:wrap;gap:6px">
          ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>`
      : "";

  // Stars row (optional)
  const starsHTML =
    p.stars !== undefined
      ? `<div style="color:#f5a623;font-size:15px">
          ${stars(p.stars)}
          <span style="color:#999;font-size:12px;margin-left:4px">(${
            p.reviews || 0
          } reseñas)</span>
        </div>`
      : "";

  // Pieces row (optional)
  const piecesHTML = p.pieces
    ? `<strong>${p.pieces}</strong> por paca<br><br>`
    : "";

  // Badge / offer
  const badgeHTML =
    p.offer || p.badge
      ? `<span style="background:var(--green);color:white;font-size:11px;font-weight:700;
          padding:4px 12px;border-radius:20px;width:fit-content;text-transform:uppercase;
          letter-spacing:1px;display:inline-block">${
            p.badge || "Oferta"
          }</span>`
      : "";

  const modalBox = document.querySelector("#product-modal .modal-box");
  if (!modalBox) return;

  modalBox.innerHTML = `
    <button onclick="closeProductModal()"
      style="position:absolute;top:14px;right:14px;z-index:10;background:white;border-radius:50%;
      width:34px;height:34px;display:flex;align-items:center;justify-content:center;
      box-shadow:0 2px 8px rgba(0,0,0,0.15);border:none;font-size:20px;color:#555;cursor:pointer">×</button>

    <div style="display:grid;grid-template-columns:1.1fr 1fr;min-height:480px">

      <div style="background:#f5f5f3;overflow:hidden;border-radius:16px 0 0 16px">
        ${media}
      </div>

      <div style="padding:2rem;overflow-y:auto;max-height:none;display:flex;flex-direction:column;gap:14px">

        ${badgeHTML}
        ${tagsHTML}

        <div style="font-size:1.8rem;font-weight:800;line-height:1.1;font-family:'Bebas Neue','Playfair Display',serif">
          ${p.name}
        </div>

        ${starsHTML}

        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:2rem;font-weight:800;color:var(--green)">$${priceFmt}</span>
          <span style="font-size:14px;color:#bbb;text-decoration:line-through">$${oldPriceFmt} USD</span>
        </div>

       ${sizesHTML}

        <div>
          <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#999;margin-bottom:8px">Cantidad</div>
          <div style="display:flex;align-items:center;border:1.5px solid #e2e8de;border-radius:8px;width:fit-content;overflow:hidden">
            <button onclick="pmChangeQty(-1)" style="padding:8px 16px;background:none;border:none;font-size:20px;font-weight:700;cursor:pointer;color:var(--green)">−</button>
            <span id="pm-qty" style="padding:8px 16px;font-weight:700;font-size:15px;border-left:1px solid #eee;border-right:1px solid #eee">1</span>
            <button onclick="pmChangeQty(1)" style="padding:8px 16px;background:none;border:none;font-size:20px;font-weight:700;cursor:pointer;color:var(--green)">+</button>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:10px;">
          <button onclick="pmAddToCart()" style="width:100%;padding:14px;background:${
            hasStock ? "var(--green)" : "#ccc"
          };color:white;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:${
    hasStock ? "pointer" : "not-allowed"
  }" ${!hasStock ? "disabled" : ""}>
            ${hasStock ? "Agregar al Carrito" : "Sin Stock"}
          </button>
          <button onclick="pmBuyNow()" style="width:100%;padding:14px;background:white;color:var(--green);border:2px solid var(--green);border-radius:10px;font-size:15px;font-weight:700;cursor:pointer">
            Comprar Ahora
          </button>
        </div>

        <div style="font-size:14px;color:#555;line-height:1.7;border-top:1px solid #eee;padding-top:12px">
          ${piecesHTML}
          ${
            p.desc ||
            "Paca de ropa americana de alta calidad, lista para reventa inmediata."
          }
        </div>

        <div style="font-size:12px;color:#999;border-top:1px solid #eee;padding-top:12px;line-height:2">
          ✅ Envío gratis en pedidos mayores a $250<br>
          📦 Lista para reventa inmediata<br>
          💬 Soporte por WhatsApp 24/7
        </div>

      </div>
    </div>
  `;

  document.getElementById("product-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

function selectSize(el, size) {
  selectedSize = size;
  document
    .querySelectorAll(".size-btn")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
}

function pmChangeQty(delta) {
  pmQty = Math.max(1, Math.min(99, pmQty + delta));
  modalQty = pmQty;
  const el = document.getElementById("pm-qty");
  if (el) el.textContent = pmQty;
}

function pmAddToCart() {
  const p = products.find((x) => x.id === pmCurrentId);
  if (!p || p.stock === false) return;
  addToCart(p, selectedSize || (p.sizes ? p.sizes[0] : "ONE SIZE"), pmQty);
  closeProductModal();
}

function pmBuyNow() {
  pmAddToCart();
  toggleCart();
}

// Legacy aliases used in main.js
function addToCartFromModal() {
  pmAddToCart();
}
function quickAdd(e, id) {
  e.stopPropagation();
  const p = products.find((x) => x.id === id);
  if (p && p.stock !== false) {
    addToCart(p, p.sizes ? p.sizes[0] : "ONE SIZE", 1);
  }
}
function buyNow(id) {
  addToCart(id);
  toggleCart();
}

// ═══════════════════════════════════════
// CHECKOUT
// ═══════════════════════════════════════
function openCheckout() {
  if (!cart.length) return;
  const total = cartTotal();
  const shipping = total >= 250 ? "Gratis 🎉" : "Por calcular";
  const summary = document.getElementById("checkout-order-summary");
  if (summary) {
    summary.innerHTML =
      cart
        .map(
          (i) =>
            `<div class="order-line"><span>${i.name} ×${i.qty}</span>
            <span>$${(i.price * i.qty).toFixed(2)}</span></div>`,
        )
        .join("") +
      `<div class="order-line"><span>Envío</span><span>${shipping}</span></div>` +
      `<div class="order-line bold"><span>Total</span><span>$${total.toFixed(
        2,
      )}</span></div>`;
  }
  const formView = document.getElementById("checkout-form-view");
  const successScreen = document.getElementById("success-screen");
  if (formView) formView.style.display = "block";
  if (successScreen) successScreen.style.display = "none";

  closeCart();

  // Support both modal styles
  const checkoutModal = document.getElementById("checkout-modal");
  if (checkoutModal) {
    checkoutModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeCheckout() {
  const checkoutModal = document.getElementById("checkout-modal");
  if (checkoutModal) checkoutModal.classList.remove("open");
  document.body.style.overflow = "";
}

function placeOrder() {
  const fname = document.getElementById("fname")?.value.trim();
  const lname = document.getElementById("lname")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const phone = document.getElementById("phone")?.value.trim();
  const country = document.getElementById("country")?.value;
 if (!fname || !lname || !email || !phone || !country) {
   showToast("⚠️ Por favor completa todos los campos");
   return;
 }
 if (!selectedPaymentMethod) {
   showToast("⚠️ Por favor selecciona un método de pago");
   return;
 }
  const formView = document.getElementById("checkout-form-view");
  const successScreen = document.getElementById("success-screen");
  const orderNum = document.getElementById("order-number");
  if (formView) formView.style.display = "none";
  if (orderNum)
    orderNum.textContent = "TB-" + Math.floor(Math.random() * 90000 + 10000);
  if (successScreen) successScreen.style.display = "block";
}

function resetAfterOrder() {
  cart = [];
  saveCart();
  updateCartUI();
  renderCartItems();
  [
    "fname",
    "lname",
    "email",
    "phone",
    "country",
    "city",
    "address",
    "notes",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}

function resetOrder() {
  resetAfterOrder();
  closeCheckout();
}

// ═══════════════════════════════════════
// MODAL HELPERS
// ═══════════════════════════════════════
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("open");
  document.body.style.overflow = "";
}

// ═══════════════════════════════════════
// MOBILE NAV
// ═══════════════════════════════════════
function openMobileNav() {
  const nav = document.getElementById("mobile-nav");
  if (!nav) return;
  nav.style.display = "flex";
  setTimeout(() => nav.classList.add("open"), 10);
  document.body.style.overflow = "hidden";
}
function closeMobileNav() {
  const nav = document.getElementById("mobile-nav");
  if (!nav) return;
  nav.classList.remove("open");
  setTimeout(() => (nav.style.display = "none"), 300);
  document.body.style.overflow = "";
}

// ═══════════════════════════════════════
// WISHLIST
// ═══════════════════════════════════════
function toggleWishlist(e, id) {
  e.stopPropagation();
  const btn = document.getElementById("wish-" + id);
  if (!btn) return;
  btn.classList.toggle("active");
  showToast(
    btn.classList.contains("active")
      ? "❤️ Agregado a favoritos"
      : "Eliminado de favoritos",
  );
}

// ═══════════════════════════════════════
// SYNC CART ACROSS TABS
// ═══════════════════════════════════════
window.addEventListener("storage", () => {
  cart = JSON.parse(localStorage.getItem("tb_cart") || "[]");
  updateCartUI();
});


function openSubNav() {
  document.getElementById("sub-mobile-nav")?.classList.add("open");
  document.getElementById("sub-nav-overlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSubNav() {
  document.getElementById("sub-mobile-nav")?.classList.remove("open");
  document.getElementById("sub-nav-overlay")?.classList.remove("open");
  document.body.style.overflow = "";
}


let selectedPaymentMethod = "";

function selectPayment(el, method) {
  selectedPaymentMethod = method;
  // remove selected from all
  document
    .querySelectorAll(".pay-btn")
    .forEach((b) => b.classList.remove("selected"));
  el.classList.add("selected");
  // show selected label
  const label = document.getElementById("payment-selected");
  const name = document.getElementById("payment-method-name");
  if (label) label.style.display = "block";
  if (name) name.textContent = method;
}