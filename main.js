// ═══════════════════════════════════════
// PRODUCT DATA — Main Page
// ═══════════════════════════════════════
const products = [
  {
    id: 1,
    name: "Boutique Juvenil",
    category: "mixed",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409575/fav_1_bmnlqz.mp4",
    image:
      "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406088/fav_5_iv1wqt.png",
    price: 645,
    oldPrice: "750",
    stars: 5, // ← add
    reviews: 8, // ← add
    showDetails: true, // ← add if you want stars/reviews to show
    desc: "Boutique Juvenile Mix 👚 Ropa Americana Ligeramente Usada Paca moderna y versátil con ropa para dama y caballero en tallas S, M, L y XL. Incluye prendas juveniles de temporada, con estilos casuales, frescos y urbanos. Perfecta para negocios que buscan moda accesible, auténtica y con personalidad.",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Best Seller", "Youth", "Mix"],
    badge: "Best Seller",
    stock: true,
    pieces: "~250-300 pieces",
  },
  {
    id: 2,
    name: "Vestido De Fiesta Nuevo",
    category: "dresses",
    image:
      "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406082/fav_4_hcrg85.png",
    price: 500,
    oldPrice: 720,
    desc: "New Party Dress Paca premium con vestidos de fiesta para mujer, ideales para eventos y celebraciones.Incluye diferentes estilos, colores y tallas, con 70–80% tallas regulares y 20–30% tallas plus size, modernos y elegantes.✨ Perfecta para revendedores que buscan prendas de alta demanda, moda femenina y excelente rotación.",
    sizes: ["S", "M", "L"],
    tags: ["New Arrival", "Dresses"],
    badge: "New",
    stock: true,
    pieces: "~255 pieces",
  },
  {
    id: 3,
    name: "Premium Winter Mix",
    category: "brand",
    image:
      "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406093/fav_3_kbduv8.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409493/Premium_Children_Mix_0-16_zidadc.mp4",
    price: 500,
    oldPrice: 650,
    desc: "Premium Mixto de Frío – Paca de Invierno Paca premium con ropa de invierno para hombre y mujer, cuidadosamente seleccionada. Incluye suéteres, chaquetas, abrigos, hoodies y prendas térmicas en diferentes tallas y estilos. Ideal para quienes buscan moda de temporada con alta calidad y excelente presentación.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["Premium Mixto de Frío ", "Paca de Invierno"],
    badge: "Hot",
    stock: true,
    pieces: "~270 - 300 pieces",
  },
  {
    id: 4,
    name: "Ladies Cardigans* #1",
    category: "pants",
    image:
      "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406078/fav_2_lbni4h.png",
    price: 130,
    oldPrice: 200,
    desc: "Chaquetas de Punto para Mujer #1 y #2 Paca premium con chaquetas de punto para dama, ideales para la temporada de invierno. Incluye diferentes tallas, estilos y colores, con prendas cómodas, modernas y de excelente presentación. 💡 Perfecta para revendedores que buscan ropa femenina de alta calidad y rotación garantizada.",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Mujer", "Cardigans"],
    badge: null,
    stock: true,
    pieces: "~200 - 250 pieces",
  },
  {
    id: 5,
    name: "TGT Children's Mixed",
    category: "kids",
    image:
      "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406111/fav_6_tqwpah.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409360/TGT_Children_s_Mixed_eokzup.mp4",
    price: 850,
    oldPrice: 950,
    desc: "TGT Children Mix 👕 (370–400 piezas aprox.) Ropa Nueva de Saldos Paca mixta de ropa para niños y niñas de 0 a 14 años, ideal para tiendas o revendedores que buscan artículos nuevos y de excelente calidad. Incluye ropa de verano e invierno, con una gran variedad de estilos, colores y tallas. Calidad TGT (Saldos de tienda) — algunas prendas pueden incluir retornos o piezas sin etiqueta. Perfecta para negocios que buscan ropa infantil nueva y variada para todas las edades.",
    sizes: ["2T", "4T", "6", "8", "10", "12"],
    tags: ["Kids", "Mix"],
    badge: "Popular",
    stock: true,
    pieces: "~370 - 420 pieces",
  },
  {
    id: 6,
    name: "New Nurse",
    category: "dresses",
    image:
      "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406090/fav_8_mu8trj.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409087/New_Nurse_timvia.mp4",
    price: 455,
    oldPrice: 800,
    desc: "Enfermería Nuevo 👩‍⚕️ Ropa Nueva de Uniformes Profesionales Dentro de esta paca encontrarás una gran selección de uniformes nuevos de enfermería, con prendas tanto con etiqueta como sin etiqueta, cuidadosamente seleccionadas para uso profesional.",
    sizes: ["S", "M", "L"],
    tags: ["Mujer y hombre", "Summer"],
    badge: null,
    stock: true,
    pieces: "~260 - 280 pieces",
  },
  {
    id: 7,
    name: "Winter Boutique for Young Adults",
    category: "mixed",
    image:
      "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406105/fav_9_yicwx8.png",
    price: 350,
    oldPrice: 550,
    desc: "Boutique Winter Juvenil ❄️ Ropa Americana Ligeramente Usada Paca de +200 prendas juveniles modernas, ideal para temporada de invierno. Incluye suéteres, hoodies, jeans y blusas de marcas reconocidas. Calidad #1, perfecta para negocios que buscan moda actual y gran rotación.",
    sizes: ["6", "7", "8", "9", "10", "11"],
    tags: ["Shoes", "Brand Names"],
    badge: "Limited",
    stock: true,
    pieces: "~200 - 250 pieces",
  },
  {
    id: 8,
    name: "Men's Casual Bale",
    category: "mixed",

    image:
      "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406095/fav_1_sb3b0x.png",
    price: 250,
    oldPrice: 550,
    desc: "Men's casual wear — polos, tees, shorts, and light jackets. Great everyday styles.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["Men", "Casual"],
    badge: null,
    stock: false,
    pieces: "~150 - 200 pieces",
  },
];

// ═══════════════════════════════════════
// RENDER PRODUCTS — Main Page
// ═══════════════════════════════════════
function renderProducts(filter = "all") {
  const grid = document.getElementById("product-grid");
  const title = document.getElementById("products-title");
  if (!grid || !title) return;
  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);
  const labels = {
    all: "Favoritos Actuales",
    dresses: "Pacas de Vestidos",
    mixed: "Pacas Mixtas",
    brand: "Pacas de Marcas",
    pants: "Pantalones de Mujer",
    kids: "Ropa Infantil",
    shoes: "Pacas de Calzado",
  };
  title.textContent = labels[filter] || "Productos";
  grid.innerHTML = filtered
    .map(
      (p) => `<div class="product-card" onclick="openProductModal(${p.id})">
  <div class="product-thumb">
    <img src="${p.image}" alt="${
        p.name
      }" class="product-thumb-img" onerror="this.style.display='none'">
    ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ""}
    ${!p.stock ? `<div class="product-badge sold-out">Agotado</div>` : ""}
    <button class="product-wishlist" onclick="toggleWishlist(event,${
      p.id
    })" id="wish-${p.id}">
      <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    </button>
  </div>
  <div class="product-info">
    <div class="product-name">${p.name}</div>
    <div class="product-meta">
      <div>
        <span class="product-price">$${p.price}</span>
        <span class="product-old-price">$${p.oldPrice}</span>
      </div>
      <button class="add-cart-btn" ${!p.stock ? "disabled" : ""}
        onclick="event.stopPropagation();quickAdd(event,${p.id})">
        ${p.stock ? "Agregar" : "Agotado"}
      </button>
    </div>
    <div class="product-desc">${p.pieces} · ${p.tags.join(" · ")}</div>
  </div>
</div>`,
    )
    .join("");
}

// ═══════════════════════════════════════
// FILTER
// ═══════════════════════════════════════
function filterProducts(cat) {
  renderProducts(cat);
}

// ═══════════════════════════════════════
// CATALOG FILTER
// ═══════════════════════════════════════
function catalogFilter(el, cat) {
  document
    .querySelectorAll(".cat-tab")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;
  const filtered =
    cat === "all"
      ? products
      : cat === "new"
      ? products.filter(
          (p) => p.badge && (p.badge === "New" || p.badge === "Hot"),
        )
      : products.filter((p) => p.category === cat);
  grid.innerHTML = filtered
    .map(
      (p) => `
    <div class="product-card" onclick="openProductModal(${p.id})">
      <div class="product-thumb">
        <img src="${p.image}" alt="${
        p.name
      }" class="product-thumb-img" onerror="this.style.display='none'">
        ${
          p.badge
            ? `<div class="product-badge${p.badge === "Hot" ? " hot" : ""}">${
                p.badge
              }</div>`
            : ""
        }
        ${!p.stock ? `<div class="product-badge sold-out">Agotado</div>` : ""}
        <button class="product-wishlist" onclick="toggleWishlist(event,${
          p.id
        })" id="cwish-${p.id}">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.pieces} · ${p.tags.join(" · ")}</div>
        <div class="product-meta">
          <div>
            <span class="product-price">$${p.price}</span>
            <span class="product-old-price">$${p.oldPrice}</span>
          </div>
          <button class="add-cart-btn" ${!p.stock ? "disabled" : ""}
            onclick="event.stopPropagation();quickAdd(event,${p.id})">
            ${p.stock ? "Agregar" : "Agotado"}
          </button>
        </div>
      </div>
    </div>`,
    )
    .join("");
  document
    .getElementById("catalog-grid")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

// ═══════════════════════════════════════
// SHIPPING FAQs
// ═══════════════════════════════════════
const shipFaqs = [
  {
    q: "¿Realizan envíos internacionales?",
    a: "¡Sí! Enviamos a más de 50 países desde nuestro almacén en Houston, Texas. Las tarifas y tiempos varían según la región.",
  },
  {
    q: "¿Cuánto tarda la entrega?",
    a: "2–5 días dentro de EE.UU., 5–8 días a Europa y Latinoamérica, y 7–14 días a África y Asia. Envío express disponible.",
  },
  {
    q: "¿Recibiré un número de rastreo?",
    a: "Sí. Cada pedido incluye un número de rastreo enviado a tu WhatsApp y correo dentro de las 24 horas del despacho.",
  },
  {
    q: "¿Hay aranceles o impuestos de importación?",
    a: "Dependiendo del país, pueden aplicarse aranceles. Son responsabilidad del comprador. Te recomendamos consultar las regulaciones de tu país antes de ordenar.",
  },
  {
    q: "¿Qué pasa si mi paca llega dañada?",
    a: "Empacamos todo con cuidado. Si tu pedido llega dañado, contáctanos por WhatsApp dentro de las 48 horas con fotos y lo resolveremos.",
  },
  {
    q: "¿Puedo obtener envío gratis?",
    a: "¡Sí! Pedidos mayores a $250 califican para envío gratis a la mayoría de países. El descuento se aplica automáticamente al pagar.",
  },
];

function renderShipFaqs() {
  const el = document.getElementById("ship-faq");
  if (!el) return;
  el.innerHTML = shipFaqs
    .map(
      (f, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="toggleFaq(${i})">
        <span>${f.q}</span><span class="faq-icon">+</span>
      </div>
      <div class="faq-a">${f.a}</div>
    </div>`,
    )
    .join("");
}

function toggleFaq(i) {
  document.getElementById("faq-" + i).classList.toggle("open");
}

// ═══════════════════════════════════════
// TRACK ORDER
// ═══════════════════════════════════════
const demoOrders = {
  "TB-11111": {
    name: "Amara M.",
    product: "Boutique Youth Mix",
    date: "March 28 2026",
    status: 2,
    steps: ["Ordenado", "Confirmado", "Enviado", "En Tránsito", "Entregado"],
    eta: "April 5 2026",
    carrier: "DHL",
    tracking: "1234567890",
  },
  "TB-22222": {
    name: "Kezia C.",
    product: "Premium Brand Mix",
    date: "March 30 2026",
    status: 3,
    steps: ["Ordenado", "Confirmado", "Enviado", "En Tránsito", "Entregado"],
    eta: "April 7 2026",
    carrier: "FedEx",
    tracking: "9876543210",
  },
  "TB-33333": {
    name: "Fatima O.",
    product: "Vestido Nuevo Bale",
    date: "April 1 2026",
    status: 1,
    steps: ["Ordenado", "Confirmado", "Enviado", "En Tránsito", "Entregado"],
    eta: "April 9 2026",
    carrier: "UPS",
    tracking: "Pendiente",
  },
};

function trackOrder() {
  const val = document.getElementById("track-input").value.trim().toUpperCase();
  const result = document.getElementById("track-result");
  const empty = document.getElementById("track-empty");
  const order = demoOrders[val];
  if (!order) {
    result.style.display = "block";
    empty.style.display = "none";
    result.innerHTML = `
      <div class="track-card" style="text-align:center;color:var(--muted)">
        <div style="font-size:40px;margin-bottom:10px">🔍</div>
        <div style="font-weight:700;font-size:16px;margin-bottom:6px">Pedido no encontrado</div>
        <div style="font-size:14px">Verifica el número e intenta de nuevo, o
          <a href="#" onclick="showSection('contact')" style="color:var(--green);font-weight:700">contáctanos por WhatsApp</a>
        </div>
      </div>
      <div style="text-align:center;font-size:13px;color:var(--muted);margin-top:1rem">
        💡 Prueba los pedidos demo: <strong>TB-11111</strong>, <strong>TB-22222</strong>, o <strong>TB-33333</strong>
      </div>`;
    return;
  }
  const progress = (order.status / (order.steps.length - 1)) * 100;
  const stepsHtml = order.steps
    .map(
      (s, i) => `
    <div class="track-step">
      <div class="track-dot ${
        i < order.status ? "done" : i === order.status ? "active" : ""
      }">
        ${i < order.status ? "✓" : i === order.status ? "●" : ""}
      </div>
      <div class="track-step-label ${
        i <= order.status ? "done" : ""
      }">${s}</div>
    </div>`,
    )
    .join("");
  result.style.display = "block";
  empty.style.display = "none";
  result.innerHTML = `
    <div class="track-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;margin-bottom:1rem">
        <div>
          <div style="font-weight:700;font-size:18px">${val}</div>
          <div style="font-size:13px;color:var(--muted)">Ordenado ${
            order.date
          } · ${order.product}</div>
        </div>
        <div style="background:var(--green-light);color:var(--green-dark);padding:6px 14px;border-radius:20px;font-size:13px;font-weight:700">
          ${order.steps[order.status]}
        </div>
      </div>
      <div class="track-status-bar" style="--progress:${progress}%">${stepsHtml}</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border)">
        <div><div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted)">Transportista</div><div style="font-weight:700;margin-top:3px">${
          order.carrier
        }</div></div>
        <div><div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted)">Rastreo #</div><div style="font-weight:700;margin-top:3px">${
          order.tracking
        }</div></div>
        <div><div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted)">Entrega Est.</div><div style="font-weight:700;margin-top:3px">${
          order.eta
        }</div></div>
      </div>
    </div>`;
}

// ═══════════════════════════════════════
// SHOW SECTION (SPA navigation)
// ═══════════════════════════════════════
const allPages = ["home", "catalog", "shipping", "track", "contact"];
function showSection(sec) {
  allPages.forEach((p) => {
    const el = document.getElementById("main-" + p);
    if (el) el.style.display = p === sec ? "block" : "none";
  });
  if (sec === "catalog") {
    setTimeout(() => {
      const firstTab = document.querySelector(".cat-tab");
      if (firstTab) catalogFilter(firstTab, "all");
    }, 50);
  }
  if (sec === "shipping") setTimeout(renderShipFaqs, 50);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
  updateCartUI();
});
