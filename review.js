// ═══════════════════════════════════════
// REVIEWS DATA
// ═══════════════════════════════════════
const reviewsData = [
  {
    id: 1,
    name: "Alexandra B.",
    verified: true,
    date: "5/5/2026",
    stars: 5,
    text: "Es una paca, con ropa espectacular, viene variada con pantalónes, jeans, vestidos, blusas, faldas y algunas traen etiquetas. Muy bien seleccionada.",
    product: "Premium Plus Size Mujer",
    productImg: "image /premium/premium (1).png",
    images: [
      "image /premium/premium (2).png",
      "image /premium/premium (1).png",
    ],
  },
  {
    id: 2,
    name: "Jonh Hamilton Parra M.",
    verified: true,
    date: "4/26/2026",
    stars: 5,
    text: "Esta muy bonita la ropa, llegó en perfectas condiciones y todo como se describe. Muy recomendado.",
    product: "Mixta Summer Premium Juvenil",
    productImg: "image /new-releases/new (1).png",
    images: ["image /new-releases/new (2).png"],
    video: true,
  },
  {
    id: 3,
    name: "Marilú F.",
    verified: true,
    date: "4/20/2026",
    stars: 5,
    text: "Me encantó!! Viene tal cual como lo describen en calidad!! Y el margen de ganancia es muy bueno. Ya hice mi segundo pedido.",
    product: "Boutique Juvenil Mix",
    productImg: "image /favorite /fav (5).png",
    images: [
      "image /favorite /fav (6).png",
      "image /favorite /fav (7).png",
      "image /favorite /fav (8).png",
    ],
  },
  {
    id: 4,
    name: "Carlos R.",
    verified: true,
    date: "4/15/2026",
    stars: 5,
    text: "Excelente servicio y calidad increíble. La paca de marcas tenía piezas de Nike, H&M, Zara — mis clientes no podían creer los precios!",
    product: "Premium Brand Mix",
    productImg: "image /favorite /fav (3).png",
    images: [],
  },
  {
    id: 5,
    name: "María G.",
    verified: true,
    date: "4/10/2026",
    stars: 4,
    text: "Mi primera paca llegó a tiempo y llena de prendas hermosas. Se agotó en 3 días — ya estoy haciendo mi segundo pedido!",
    product: "TGT Children's Mixed",
    productImg: "image /favorite /fav (6).png",
    images: ["image /free_shipping/free (6).png"],
  },
  {
    id: 6,
    name: "Jessica L.",
    verified: true,
    date: "4/5/2026",
    stars: 5,
    text: "Este es mi 4to pedido — todo siempre es perfecto. El proceso es fácil, el envío es rápido. 100% recomendado!",
    product: "New Nurse",
    productImg: "image /favorite /fav (8).png",
    images: [],
  },
  {
    id: 7,
    name: "Roberto M.",
    verified: true,
    date: "3/28/2026",
    stars: 4,
    text: "Buena calidad en general. Algunas prendas con etiqueta, otras sin. El precio es muy competitivo para reventa.",
    product: "Premium Winter Mix",
    productImg: "image /favorite /fav (3).png",
    images: ["image /free_shipping/free (10).png"],
  },
  {
    id: 8,
    name: "Daniela P.",
    verified: true,
    date: "3/20/2026",
    stars: 5,
    text: "Increíble variedad. Cada paca es una sorpresa y siempre positiva. El servicio al cliente por WhatsApp es excelente.",
    product: "Ladies Cardigans #1",
    productImg: "image /favorite /fav (2).png",
    images: [],
  },
  {
    id: 9,
    name: "Fatima O.",
    verified: true,
    date: "3/15/2026",
    stars: 3,
    text: "Buena experiencia en general. La entrega tardó un poco más de lo esperado pero la calidad compensa.",
    product: "Vestido De Fiesta Nuevo",
    productImg: "image /favorite /fav (4).png",
    images: [],
  },
  {
    id: 10,
    name: "Pedro A.",
    verified: true,
    date: "3/10/2026",
    stars: 5,
    text: "La mejor inversión para mi negocio de ropa. Mis clientes quedan satisfechos siempre. Seguiré comprando.",
    product: "Boutique Juvenil Mix",
    productImg: "image /favorite /fav (5).png",
    images: ["image /favorite /fav (9).png"],
  },
];

// ═══════════════════════════════════════
// RATING SUMMARY
// ═══════════════════════════════════════
function getRatingSummary() {
  const total = reviewsData.length;
  const avg = (reviewsData.reduce((s, r) => s + r.stars, 0) / total).toFixed(1);
  const counts = [5, 4, 3, 2, 1].map((s) => ({
    star: s,
    count: reviewsData.filter((r) => r.stars === s).length,
  }));
  return { total, avg, counts };
}

// ═══════════════════════════════════════
// RENDER STARS
// ═══════════════════════════════════════
function renderStars(n, size = 16) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(n)) {
      html += `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#3a7d1e"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    } else if (i - 0.5 <= n) {
      html += `<svg width="${size}" height="${size}" viewBox="0 0 24 24"><defs><linearGradient id="half"><stop offset="50%" stop-color="#3a7d1e"/><stop offset="50%" stop-color="#ddd"/></linearGradient></defs><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half)"/></svg>`;
    } else {
      html += `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#ddd"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    }
  }
  return html;
}

// ═══════════════════════════════════════
// RENDER REVIEWS SECTION
// ═══════════════════════════════════════
function renderReviews() {
  const el = document.getElementById("reviews-section");
  if (!el) return;

  const { total, avg, counts } = getRatingSummary();

  el.innerHTML = `
    <div class="reviews-wrapper">

      <!-- HEADER -->
      <div class="reviews-header">
        <div class="section-label">Lo que dicen</div>
        <div class="section-title">RESEÑAS</div>
      </div>

      <!-- SUMMARY -->
      <div class="reviews-summary">
        <div class="reviews-avg-box">
          <div class="reviews-avg-score">${avg}</div>
          <div class="reviews-avg-stars">${renderStars(
            parseFloat(avg),
            22,
          )}</div>
          <div class="reviews-avg-total">${total} Reseñas</div>
        </div>
        <div class="reviews-bars">
          ${counts
            .map(
              (c) => `
            <div class="reviews-bar-row">
              <div class="reviews-bar-label">${renderStars(c.star, 13)}</div>
              <div class="reviews-bar-track">
                <div class="reviews-bar-fill" style="width:${
                  total ? (c.count / total) * 100 : 0
                }%"></div>
              </div>
              <div class="reviews-bar-count">(${c.count})</div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>

      <!-- CARDS -->
      <div class="reviews-grid" id="reviews-grid">
        ${reviewsData
          .map(
            (r) => `
          <div class="review-card" onclick="openReviewModal(${r.id})">
            <div class="review-card-top">
              <div class="review-avatar">${r.name.charAt(0)}</div>
              <div>
                <div class="review-name">
                  ${r.name}
                  ${
                    r.verified
                      ? `<span class="review-verified">✓ Verificada</span>`
                      : ""
                  }
                </div>
                <div class="review-date">${r.date}</div>
              </div>
            </div>
            <div class="review-stars">${renderStars(r.stars, 14)}</div>
            <div class="review-text">${
              r.text.length > 120 ? r.text.substring(0, 120) + "..." : r.text
            }</div>
            ${
              r.images.length > 0
                ? `
              <div class="review-thumbs">
                ${r.images
                  .slice(0, 3)
                  .map(
                    (img, i) => `
                  <div class="review-thumb">
                    <img src="${img}" alt="Review image" onerror="this.parentElement.style.display='none'">
                    ${
                      i === 2 && r.images.length > 3
                        ? `<div class="review-thumb-more">+${
                            r.images.length - 3
                          }</div>`
                        : ""
                    }
                  </div>
                `,
                  )
                  .join("")}
              </div>`
                : ""
            }
            <div class="review-product-tag">
              <img src="${r.productImg}" alt="${
              r.product
            }" onerror="this.style.display='none'">
              <span>${r.product}</span>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════
// REVIEW MODAL
// ═══════════════════════════════════════
function openReviewModal(id) {
  const r = reviewsData.find((x) => x.id === id);
  if (!r) return;

  const modal = document.getElementById("review-modal");
  const box = document.getElementById("review-modal-box");

  box.innerHTML = `
    <button onclick="closeReviewModal()"
      style="position:absolute;top:14px;right:14px;background:white;border:none;border-radius:50%;
      width:32px;height:32px;font-size:20px;cursor:pointer;display:flex;align-items:center;
      justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.15);z-index:10;color:#555">×</button>

    <div class="rmodal-top">
      <div class="review-avatar" style="width:46px;height:46px;font-size:18px">${r.name.charAt(
        0,
      )}</div>
      <div>
        <div class="review-name" style="font-size:16px">
          ${r.name}
          ${
            r.verified
              ? `<span class="review-verified">✓ Verificada</span>`
              : ""
          }
        </div>
        <div class="review-date">${r.date}</div>
      </div>
    </div>

    <div style="margin:12px 0">${renderStars(r.stars, 18)}</div>

    <p style="font-size:15px;color:#444;line-height:1.7;margin-bottom:16px">${
      r.text
    }</p>

    ${
      r.images.length > 0
        ? `
      <div class="rmodal-images">
        ${r.images
          .map(
            (img) => `
          <div class="rmodal-img-wrap">
            <img src="${img}" alt="Review" onerror="this.parentElement.style.display='none'">
          </div>
        `,
          )
          .join("")}
      </div>`
        : ""
    }

    <div class="rmodal-product">
      <img src="${r.productImg}" alt="${
    r.product
  }" onerror="this.style.display='none'">
      <div>
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#999;font-weight:700">Producto</div>
        <div style="font-weight:700;font-size:14px;color:#1a1a1a">${
          r.product
        }</div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeReviewModal() {
  document.getElementById("review-modal").classList.remove("open");
  document.body.style.overflow = "";
}

// Init on load
document.addEventListener("DOMContentLoaded", renderReviews);
