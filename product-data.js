// ═══════════════════════════════════════
// PRODUCT DATA — Free Shipping Page
// ═══════════════════════════════════════
const free_shipping = [
  {
    id: 1,
    name: "Premium Winter Mix",
    showOldPrice: true,
    oldPrice: 450,
    price: 290,
    stars: 4,
    reviews: 3,
    showDetails: true,
    offer: true,
    type: "winter",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406093/fav_3_kbduv8.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409393/Premium_Winter_Mix_ydtvfd.mp4",
    desc: "Paca premium con ropa de invierno para hombre y mujer, cuidadosamente seleccionada. Incluye suéteres, chaquetas, abrigos, hoodies y prendas térmicas en diferentes tallas y estilos. Ideal para quienes buscan moda de temporada con alta calidad y excelente presentación.",
  },
  {
    id: 2,
    name: "TGT Credencial Mix",
    showOldPrice: true,
    oldPrice: 650,
    price: 600,
    stars: 5,
    reviews: 4,
    showDetails: true,
    offer: true,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406243/free_9_tyf4qe.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409297/TGT_Credencial_Mix_uiofxx.mp4",
    desc: "TGT Credencial Mixta 👕👗 (Aprox. 200 piezas) Ropa Americana Nueva de Saldos Paca mixta con ropa para mujer, hombre y niños, ideal para revendedores o tiendas que buscan surtido variado y de excelente presentación. Incluye prendas de verano e invierno, en tallas regulares hasta plus size, con una amplia variedad de diseños, colores y estilos.",
  },
  {
    id: 3,
    name: "Children Winter Mix #2",
    showOldPrice: true,
    oldPrice: 200,
    price: 150,
    stars: 5,
    reviews: 6,
    showDetails: true,
    offer: true,
    type: "kids",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406242/free_8_hjoic2.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778408845/Children_Winter_Mix_cpceum.mp4",
    desc: "Frío Mixto de Niños #2 Paca intermedia con ropa de invierno para niños y niñas, incluyendo chaquetas, suéteres y pantalones. Incluye diferentes tallas, estilos, colores y materiales, cómodos, cálidos y modernos. ✨ Perfecta para revendedores que buscan prendas infantiles de temporada con buena rotación y presentación.",
  },
  {
    id: 4,
    name: "New Nurse",
    showOldPrice: true,
    oldPrice: 800,
    price: 450,
    stars: 4.5,
    reviews: 9,
    showDetails: true,
    offer: true,
    type: "nurse",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406090/fav_8_mu8trj.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409087/New_Nurse_timvia.mp4",
    desc: "Enfermería Nuevo 👩⚕️ Ropa Nueva de Uniformes Profesionales Dentro de esta paca encontrarás una gran selección de uniformes nuevos de enfermería, con prendas tanto con etiqueta como sin etiqueta, cuidadosamente seleccionadas para uso profesional.",
  },
  {
    id: 5,
    name: "Premium Children's Winter Mix",
    showOldPrice: false,
    oldPrice: 0,
    price: 500,
    stars: 4,
    reviews: 3,
    showDetails: true,
    offer: false,
    type: "kids",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406221/free_6_invmzx.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409333/Premium_Children_s_Winter_Mix_lop2y3.mp4",
    desc: "Premium Niño Frío Mixto Paca premium con ropa de invierno para niños y niñas, incluyendo chaquetas, suéteres, pantalones y accesorios. Incluye diferentes estilos, tallas, colores y materiales, cómodos, cálidos y modernos. ✨ Perfecta para revendedores que buscan prendas infantiles de alta calidad y excelente rotación.",
  },
  {
    id: 6,
    name: "TGT Infantil Mixta",
    showOldPrice: true,
    oldPrice: 950,
    price: 900,
    stars: 5,
    reviews: 6,
    showDetails: true,
    offer: true,
    type: "kids",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406242/free_5_x22rkn.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409360/TGT_Children_s_Mixed_eokzup.mp4",
    desc: "TGT Children Mix 👕 (370–400 piezas aprox.) Ropa Nueva de Saldos Paca mixta de ropa para niños y niñas de 0 a 14 años, ideal para tiendas o revendedores que buscan artículos nuevos y de excelente calidad. Incluye ropa de verano e invierno, con una gran variedad de estilos, colores y tallas. Calidad TGT (Saldos de tienda) — algunas prendas pueden incluir retornos o piezas sin etiqueta.",
  },
  {
    id: 7,
    name: "Premium Oversize Winter",
    showOldPrice: true,
    oldPrice: 350,
    price: 240,
    stars: 5,
    reviews: 4,
    showDetails: true,
    offer: true,
    type: "winter",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406225/free_4_jtos61.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778408867/Premium_Oversize_Winter_tx7xjw.mp4",
    desc: "Ropa de Invierno Tallas Grandes Paca premium con ropa de invierno para mujer y hombre en tallas grandes. Incluye suéteres, chaquetas, hoodies y prendas térmicas en estilos modernos y cómodos. Ideal para quienes buscan moda de invierno oversize con alta calidad y excelente presentación.",
  },
  {
    id: 8,
    name: "Premium Hoodie Sweat Shirt",
    showOldPrice: true,
    oldPrice: 400,
    price: 300,
    stars: 5,
    reviews: 3,
    showDetails: false,
    offer: true,
    type: "winter",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406235/free_3_vxccvl.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778408890/Premium_Hoodie_Sweat_ShirA_gt6sse.mp4",
    desc: "Sudadera con Gorro Premium 🧥Ropa Americana Ligeramente Usada Paca de 100 lbs con sudaderas premium para hombre y mujer, ideales para la temporada de invierno. Calidad Premium, con 150–180 piezas de excelente estilo y presentación.",
  },
  {
    id: 9,
    name: "Mixta Regular Plus",
    showOldPrice: false,
    oldPrice: 400,
    price: 200,
    stars: 0,
    reviews: 2,
    showDetails: false,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406220/free_2_fqznui.png",
    desc: "Regular Plus Mix 👚 Ropa Americana Ligeramente Usada Paca versátil de verano con ropa para dama y caballero en tallas XL y mayores. Ofrece una mezcla moderna de colores y estilos con un toque juvenil y actual. Ideal para quienes buscan variedad, frescura y moda llamativa con personalidad.",
  },
  {
    id: 10,
    name: "Premium Oversize Mix",
    showOldPrice: true,
    oldPrice: 900,
    price: 680,
    stars: 4.5,
    reviews: 11,
    showDetails: false,
    offer: true,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406328/premium_6_dqvii3.png",
    desc: "Ropa Mixta Tallas Grandes Premium 👕👗Ropa Americana Ligeramente Usada Paca de 100 lbs con ropa mixta de tallas grandes (plus size) para hombre y mujer. Calidad Premium, ideal para todas las temporadas, con prendas modernas, cómodas y de excelente calidad. Perfecta para reventa o surtido plus size de alta rotación y estilo actual.",
  },
];

// ═══════════════════════════════════════
// new_releases
// ═══════════════════════════════════════

const new_releases = [
  {
    id: 1,
    name: "Mixed Plus Size #3",
    showOldPrice: true,
    oldPrice: 160,
    price: 100,
    stars: 2,
    reviews: 2,
    showDetails: false,
    offer: true,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406287/new_9_ypzlpx.png",
    // video: "",
  },
  {
    id: 2,
    name: "Out Door Mix A-Grade",
    showOldPrice: false,
    oldPrice: 0,
    price: 700,
    stars: 4,
    reviews: 2,
    showDetails: false,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406291/new_8_ozotso.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778407734/Outdoor_Mix_eofbwt.mp4",
    desc: "Outdoor Mix Paca #1 con suéteres y chaquetas de marcas como Columbia, Patagonia, Realtree, Magellan y The North Face. Incluye ropa de hombre y mujer, tallas XS a Plus. Contenido: 95% winter, 5% summer, calidad 1 y 2. 💡 Ideal para revendedores que buscan marcas reconocidas y excelente rotación.",
  },
  {
    id: 3,
    name: "Batas Médicas",
    showOldPrice: true,
    oldPrice: 500,
    price: 300,
    stars: 5,
    reviews: 3,
    showDetails: false,
    offer: true,
    type: "kids",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406283/new_7_itdntp.png",
  },
  {
    id: 4,
    name: "Premium Ladies Sweater",
    showOldPrice: true,
    oldPrice: 350,
    price: 250,
    stars: 4.5,
    reviews: 9,
    showDetails: false,
    offer: true,
    type: "nurse",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406289/new_6_xvoydh.png",
  },
  {
    id: 5,
    name: "Texas Boutique",
    showOldPrice: false,
    oldPrice: 0,
    price: 650,
    stars: 4,
    reviews: 2,
    showDetails: true,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406287/new_5_fhi9ca.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778408712/Texas_Boutique_evbcsd.mp4",
    desc: "✨ Texas Mix Premium – Mezcla Texas Premium 💎 La paca que marca la diferencia en tu inventario. ✅ Prendas modernas y juveniles ✅ Mezcla dama + caballero en alta calidad ✅ Colores vibrantes de verano ☀️ ✅ Algunas piezas ¡nuevas con etiqueta! 🏷️ 🔥 Ideal para negocios que buscan moda americana premium con excelente rotación. 👉 ¡Aumenta tus ventas con la paca más exclusiva del verano!",
  },
  {
    id: 6,
    name: "Boutique Juvenil",
    showOldPrice: false,
    oldPrice: 0,
    price: 650,
    stars: 5,
    reviews: 3,
    showDetails: true,
    offer: false,
    type: "sweat",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406088/fav_5_iv1wqt.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409575/fav_1_bmnlqz.mp4",
    desc: "Boutique Juvenile Mix 👚 Ropa Americana Ligeramente Usada Paca moderna y versátil con ropa para dama y caballero en tallas S, M, L y XL. Incluye prendas juveniles de temporada, con estilos casuales, frescos y urbanos. Perfecta para negocios que buscan moda accesible, auténtica y con personalidad.",
  },
  {
    id: 7,
    name: "Mixta Summer Premium Juvenil",
    showOldPrice: false,
    oldPrice: 700,
    price: 450,
    stars: 5,
    reviews: 2,
    showDetails: true,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406286/new_3_ouekjk.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778407637/Mixta_Summer_Premium_Juvenil_nsxacd.mp4",
    desc: "Mixta summer Premium Juvenil Especificaciones importantes Peso: 100 Lbs. Tipo de ropa: Ropa de hombre y mujer Temporada: Ropa de verano Calidad: Premium Contiene: Todo tipo de material de ropa, tallas y estilos.",
  },
  {
    id: 8,
    name: "Men's Levi's New",
    showOldPrice: false,
    oldPrice: 0,
    price: 720,
    stars: 4.5,
    reviews: 2,
    showDetails: false,
    offer: false,
    type: "winter",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406268/new_2_s87ysh.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778407517/Men_Levi_s_Nuevo_ytycxp.mp4",
    desc: "Men Levi's New Especificaciones importantes Peso: Apprx: 90 a 100 lbs Tipo de ropa: Ropa de hombre Temporada: Ropa de verano Calidad: Premium (Grado AAA) Cantidad (PC): 60 Contiene: Pantalones Levi’s de diferentes tallas y estilos",
  },
  {
    id: 9,
    name: "Vintage & Retro Mix",
    showOldPrice: false,
    oldPrice: 0,
    price: 600,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406275/new_1_tf0n0k.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778407517/Men_Levi_s_Nuevo_ytycxp.mp4",
    desc: "Paca con prendas de ropa antigua, moda retro y gráficos. Incluye un mix de categorías. Por la naturaleza del vintage, algunas prendas pueden presentar manchas o pequeños detalles. 💡 Ideal para revendedores que buscan piezas retro de alta demanda y excelente rotación",
  },
];

// ═══════════════════════════════════════
// best sellers
// ═══════════════════════════════════════

const best_sellers = [
  {
    id: 1,
    name: "Premium Winter Mix",
    showOldPrice: true,
    oldPrice: 450,
    price: 290,
    stars: 5,
    reviews: 3,
    showDetails: true,
    offer: true,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406093/fav_3_kbduv8.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409393/Premium_Winter_Mix_ydtvfd.mp4",
    desc: "Premium Mixto de Frío – Paca de Invierno Paca premium con ropa de invierno para hombre y mujer, cuidadosamente seleccionada. Incluye suéteres, chaquetas, abrigos, hoodies y prendas térmicas en diferentes tallas y estilos. Ideal para quienes buscan moda de temporada con alta calidad y excelente presentación.",
  },
  {
    id: 2,
    name: "Premium Children Mix 0-16",
    showOldPrice: false,
    oldPrice: 0,
    price: 600,
    stars: 5,
    reviews: 7,
    showDetails: true,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405898/best_seller_7_io0owr.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409493/Premium_Children_Mix_0-16_zidadc.mp4",
    desc: "Premium Bebé Calor Mixto (0-16) Paca premium + #1 con ropa mixta para niñas y niños de 0 a 16 años. Incluye entre 300 y 350 piezas, ideales para la temporada de verano, con diferentes estilos, colores y tallas. 💡 Perfecta para revendedores que buscan ropa infantil de alta calidad y excelente rotación.",
  },
  {
    id: 3,
    name: "TGT Credencial Mix",
    showOldPrice: true,
    oldPrice: 650,
    price: 600,
    stars: 5,
    reviews: 5,
    showDetails: true,
    offer: true,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406243/free_9_tyf4qe.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409297/TGT_Credencial_Mix_uiofxx.mp4",
    desc: "TGT Credencial Mixta 👕👗 (Aprox. 200 piezas) Ropa Americana Nueva de Saldos Paca mixta con ropa para mujer, hombre y niños, ideal para revendedores o tiendas que buscan surtido variado y de excelente presentación. Incluye prendas de verano e invierno, en tallas regulares hasta plus size, con una amplia variedad de diseños, colores y estilos.",
  },
  {
    id: 4,
    name: "New Nurse",
    showOldPrice: true,
    oldPrice: 800,
    price: 450,
    stars: 4.5,
    reviews: 11,
    showDetails: true,
    offer: true,
    type: "nurse",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406090/fav_8_mu8trj.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409087/New_Nurse_timvia.mp4",
    desc: "Enfermería Nuevo 👩⚕️ Ropa Nueva de Uniformes Profesionales Dentro de esta paca encontrarás una gran selección de uniformes nuevos de enfermería, con prendas tanto con etiqueta como sin etiqueta, cuidadosamente seleccionadas para uso profesional.",
  },
  {
    id: 5,
    name: "Premium Children Winter Mix",
    showOldPrice: false,
    oldPrice: 0,
    price: 500,
    stars: 4,
    reviews: 2,
    showDetails: true,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406111/fav_6_tqwpah.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409333/Premium_Children_s_Winter_Mix_lop2y3.mp4",
    desc: "Premium Niño Frío Mixto Paca premium con ropa de invierno para niños y niñas, incluyendo chaquetas, suéteres, pantalones y accesorios. Incluye diferentes estilos, tallas, colores y materiales, cómodos, cálidos y modernos. ✨ Perfecta para revendedores que buscan prendas infantiles de alta calidad y excelente rotación.",
  },
  {
    id: 6,
    name: "Men Levi’s Nuevo",
    showOldPrice: false,
    oldPrice: 0,
    price: 720,
    stars: 5,
    reviews: 3,
    showDetails: false,
    offer: false,
    type: "sweat",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406268/new_2_s87ysh.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778407517/Men_Levi_s_Nuevo_ytycxp.mp4",
    desc: "Men Levi's New Especificaciones importantes Peso: Apprx: 90 a 100 lbs Tipo de ropa: Ropa de hombre Temporada: Ropa de verano Calidad: Premium (Grado AAA) Cantidad (PC): 60 Contiene: Pantalones Levi’s de diferentes tallas y estilos",
  },
  {
    id: 7,
    name: "Nurse Usado",
    showOldPrice: true,
    oldPrice: 350,
    price: 250,
    stars: 5,
    reviews: 2,
    showDetails: true,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406095/fav_7_mmssdj.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778407637/Mixta_Summer_Premium_Juvenil_nsxacd.mp4",
    desc: "Ropa de Enfermería Usada 👩⚕️🩺 Ropa Americana Ligeramente Usada Paca de 100 lbs con ropa de enfermería para hombre y mujer, en combinación de calidades #1 y #2. Incluye aprox. 180–200 piezas (no contadas), todas en buen estado, sin prendas rotas ni con cloro. Ideal para todas las temporadas, con uniformes cómodos, funcionales y listos para reventa.",
  },
  {
    id: 8,
    name: "TGT Oversize Credencial Mix",
    showOldPrice: true,
    oldPrice: 500,
    price: 400,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: true,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405910/best_seller_1_ycaukn.png",
    desc: "TGT Tallas Grandes Explora esta paca de ropa nueva de saldos TGT en tallas grandes para mujeres, hombres y niños. Incluye entre 100 y 130 piezas, con diseños variados y estilos mixtos, algunas prendas pueden repetirse o no traer etiqueta. 💚 Perfecta para ofrecer variedad de tallas oversize y agregar valor a tu inventario con prendas listas",
  },
];

// ═══════════════════════════════════════
// FOOTWEAR
// ═══════════════════════════════════════

const foot_wear = [
  {
    id: 1,
    name: "Sport Tennis Mix Shoes #2 (44LBS)",
    showOldPrice: true,
    oldPrice: 400,
    price: 350,
    stars: 4,
    reviews: 1,
    showDetails: true,
    offer: true,
    type: "footwear",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406151/footwear_3_pbxosq.png",
    desc: "Tenis Deportivos Mixtos #2 👟 Calzado Americano Ligeramente Usado Paca de 44 lbs con tenis deportivos y juveniles en tallas mixtas. Incluye variedad de estilos ideales para reventa o surtido diverso.",
  },
  {
    id: 2,
    name: "Children Shoes Mix #2 (55LBS)",
    showOldPrice: false,
    oldPrice: 650,
    price: 300,
    stars: 5,
    reviews: 5,
    showDetails: false,
    offer: false,
    type: "footwear",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406158/footwear_4_xw9usc.png",
    // video: "videos/free-shipping/TGT Credencial Mix.mp4",
    desc: "Calzado Infantil #2 👟 Calzado Americano Ligeramente Usado Paca de 55 lbs con calzado infantil surtido en tallas mixtas. Incluye variedad de estilos ideales para reventa o surtido diverso.",
  },
  {
    id: 3,
    name: "Sport Económico Mix (66LBS)",
    showOldPrice: false,
    oldPrice: 800,
    price: 375,
    stars: 5,
    reviews: 11,
    showDetails: false,
    offer: false,
    type: "footwear",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406155/footwear_2_bbobyj.png",
    desc: "",
  },
  {
    id: 4,
    name: "Ladies Shoes #1 (55LBS)",
    showOldPrice: false,
    oldPrice: 0,
    price: 350,
    stars: 5,
    reviews: 7,
    showDetails: false,
    offer: false,
    type: "footwear",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406154/footwear_1_njtr8h.png",
    desc: "Calzado de Mujer #1 👠 Calzado Americano Ligeramente Usado Paca de 55 lbs con calzado femenino surtido en tallas mixtas. Incluye variedad de estilos modernos, ideales para reventa o surtido diverso.",
  },
];

// ═══════════════════════════════════════
// PAGE INIT — Free Shipping
// ═══════════════════════════════════════

const premuim_bales = [
  {
    id: 1,
    name: "Premium Winter Mix",
    showOldPrice: true,
    oldPrice: 450,
    price: 290,
    stars: 5,
    reviews: 3,
    showDetails: true,
    offer: true,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406093/fav_3_kbduv8.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409393/Premium_Winter_Mix_ydtvfd.mp4",
    desc: "Premium Mixto de Frío – Paca de Invierno Paca premium con ropa de invierno para hombre y mujer, cuidadosamente seleccionada. Incluye suéteres, chaquetas, abrigos, hoodies y prendas térmicas en diferentes tallas y estilos. Ideal para quienes buscan moda de temporada con alta calidad y excelente presentación.",
  },
  {
    id: 2,
    name: "Premium Children Mix 0-16",
    showOldPrice: false,
    oldPrice: 0,
    price: 600,
    stars: 5,
    reviews: 7,
    showDetails: true,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405898/best_seller_7_io0owr.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409493/Premium_Children_Mix_0-16_zidadc.mp4",
    desc: "Premium Bebé Calor Mixto (0-16) Paca premium + #1 con ropa mixta para niñas y niños de 0 a 16 años. Incluye entre 300 y 350 piezas, ideales para la temporada de verano, con diferentes estilos, colores y tallas. 💡 Perfecta para revendedores que buscan ropa infantil de alta calidad y excelente rotación.",
  },
  {
    id: 3,
    name: "Premium Athconstic Mix",
    showOldPrice: false,
    oldPrice: 650,
    price: 600,
    stars: 5,
    reviews: 5,
    showDetails: true,
    offer: true,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406340/premium_14_iquqzt.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778407082/Premium_Athletic_Mix_tdaowg.mp4",
    desc: "Premium Atlético Mixto 💪 Paca Premium con ropa deportiva mixta para hombre y mujer. Incluye entre 230–260 piezas de verano, con prendas cómodas, modernas leggin y de alto rendimiento. 📦 Por alta demanda, este producto tiene una demora aproximada de 2 semanas. ✨ Ideal para revendedores que buscan calidad superior en moda fitness.",
  },
  {
    id: 4,
    name: "Premium Children Winter Mix",
    showOldPrice: false,
    oldPrice: 0,
    price: 500,
    stars: 4.5,
    reviews: 2,
    showDetails: true,
    offer: true,
    type: "nurse",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406111/fav_6_tqwpah.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409333/Premium_Children_s_Winter_Mix_lop2y3.mp4",
    desc: "Premium Niño Frío Mixto Paca premium con ropa de invierno para niños y niñas, incluyendo chaquetas, suéteres, pantalones y accesorios. Incluye diferentes estilos, tallas, colores y materiales, cómodos, cálidos y modernos. ✨ Perfecta para revendedores que buscan prendas infantiles de alta calidad y excelente rotación.",
  },
  {
    id: 5,
    name: "Premium Plus Size Mujer",
    showOldPrice: true,
    oldPrice: 400,
    price: 350,
    stars: 4,
    reviews: 2,
    showDetails: false,
    offer: true,
    type: "men",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406344/premium_12_cawsqf.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409333/Premium_Children_s_Winter_Mix_lop2y3.mp4",
    desc: "Premium Mujer Mixto Tallas Grandes Paca premium con una mezcla de ropa de mujer en tallas grandes, ideal para temporada de verano. Incluye blusas, vestidos, shorts, pantalones y más, en diferentes estilos, telas y colores. 💃 Perfecta para negocios que buscan ofrecer moda plus size moderna, fresca y con excelente calidad.",
  },
  {
    id: 6,
    name: "Premium Oversize Winter",
    showOldPrice: true,
    oldPrice: 350,
    price: 240,
    stars: 5,
    reviews: 3,
    showDetails: true,
    offer: true,
    type: "sweat",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406324/premium_4_fxr39g.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778408867/Premium_Oversize_Winter_tx7xjw.mp4",
    desc: "Ropa de Invierno Tallas Grandes Paca premium con ropa de invierno para mujer y hombre en tallas grandes. Incluye suéteres, chaquetas, hoodies y prendas térmicas en estilos modernos y cómodos. Ideal para quienes buscan moda de invierno oversize con alta calidad y excelente presentación.",
  },
  {
    id: 7,
    name: "Premium Men Mix",
    showOldPrice: false,
    oldPrice: 0,
    price: 600,
    stars: 5,
    reviews: 1,
    showDetails: true,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406330/premium_10_p2zmpq.png",
    video: "videos/premium/Premium Men Mix.mp4",
    desc: "Men’s Premium Mix 👕 Ropa Americana Ligeramente Usada Paca de 100 lbs con ropa de hombre para todas las temporadas. Calidad Premium, con una amplia variedad de tallas, materiales y estilos. Ideal para negocios que buscan moda masculina de alta calidad y excelente rotación.",
  },
  {
    id: 8,
    name: "Premium Mix",
    showOldPrice: false,
    oldPrice: 500,
    price: 550,
    stars: 5,
    reviews: 1,
    showDetails: true,
    offer: true,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406318/premium_9_ins88x.png",
    video: "videos/premium/Premium Mix.mp4",
    desc: "Premium Mixto Paca premium con ropa mixta para hombre y mujer, incluyendo diferentes estilos, tallas, colores y materiales. Adecuada para todas las temporadas, combinando prendas modernas y de alta calidad. ✨ Una selección versátil que aporta variedad y valor a tu inventario.",
  },
  {
    id: 9,
    name: "Premium Hoodie Sweat Shirt",
    showOldPrice: true,
    oldPrice: 400,
    price: 300,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: true,
    type: "sweat",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406235/free_3_vxccvl.png",
    video: "videos/free-shipping/Premium Hoodie Sweat ShirA.mp4",
    desc: " Sudadera con Gorro Premium 🧥Ropa Americana Ligeramente Usada Paca de 100 lbs con sudaderas premium para hombre y mujer, ideales para la temporada de invierno. Calidad Premium, con 150–180 piezas de excelente estilo y presentación.",
  },
  {
    id: 10,
    name: "Premium Jacket Mix",
    showOldPrice: false,
    oldPrice: 500,
    price: 500,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406320/premium_7_ddu8nf.png",
    desc: "Chaqueta Mixta Premium 🧥 Ropa Americana de Alta CalidadPaca de 100 lbs con chaquetas mixtas de diferentes estilos, materiales y marcas. Incluye prendas para hombre y mujer, ideales para la temporada de invierno o clima fresco. Calidad Premium con piezas en excelente estado, modernas y con gran presentación. Perfecta para reventa o tiendas que buscan ropa de marca a precios accesibles.",
  },
  {
    id: 11,
    name: "Premium Oversize Mix",
    showOldPrice: true,
    oldPrice: 500,
    price: 400,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: true,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406328/premium_6_dqvii3.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778408867/Premium_Oversize_Winter_tx7xjw.mp4",
    desc: " Ropa Mixta Tallas Grandes Premium 👕👗Ropa Americana Ligeramente Usada Paca de 100 lbs con ropa mixta de tallas grandes (plus size) para hombre y mujer. Calidad Premium, ideal para todas las temporadas, con prendas modernas, cómodas y de excelente calidad. Perfecta para reventa o surtido plus size de alta rotación y estilo actual.",
  },
  {
    id: 12,
    name: "Premium Ladies Blazer",
    showOldPrice: true,
    oldPrice: 350,
    price: 250,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: true,
    type: "ladies",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406321/premium_5_xhjwtk.png",
    desc: "Paca intermedia con blazers elegantes para mujer, confeccionados en telas de excelente calidad, cómodas y con acabado profesional. Incluye diferentes tallas y estilos modernos, ideales para uso de oficina, eventos o looks formales durante todo el año.",
  },
  {
    id: 13,
    name: "Premium Jeans Mujer",
    showOldPrice: false,
    oldPrice: 500,
    price: 500,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: false,
    type: "men",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406324/premium_4_fxr39g.png",
    desc: "Premium Ladies Jeans 👖 Ropa Americana Ligeramente Usada Paca de 100 lbs con jeans para mujer en tallas y estilos variados. Calidad Premium, ideal para la temporada de verano, con prendas modernas, cómodas y de excelente presentación. Perfecta para reventa o surtido femenino de mezclilla de alta rotación.",
  },
  {
    id: 14,
    name: "Premium Children Jacket Mix",
    showOldPrice: false,
    oldPrice: 500,
    price: 500,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: false,
    type: "mix",
    img: " https://res.cloudinary.com/dremx6tnp/image/upload/v1778406310/premium_3_ntbfee.png",
    desc: "Niño Mixto Chaqueta #1 Paca premium con chamarras y chaquetas para niños y niñas, ideales para la temporada de invierno. Incluye diferentes estilos, tallas, colores y materiales, cálidas, cómodas y modernas. ✨ Perfecta para revendedores que buscan ropa infantil de alta calidad y excelente rotación.",
  },
  {
    id: 15,
    name: "Premium Ladies Sweater",
    showOldPrice: true,
    oldPrice: 350,
    price: 250,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: true,
    type: "sweater",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406289/new_6_xvoydh.png",
    // desc: "TGT Tallas Grandes Explora esta paca de ropa nueva de saldos TGT en tallas grandes para mujeres, hombres y niños. Incluye entre 100 y 130 piezas, con diseños variados y estilos mixtos, algunas prendas pueden repetirse o no traer etiqueta. 💚 Perfecta para ofrecer variedad de tallas oversize y agregar valor a tu inventario con prendas listas",
  },
  {
    id: 16,
    name: "Premium Short Juvenil",
    showOldPrice: false,
    oldPrice: 500,
    price: 450,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: false,
    type: "mix",
    img: " https://res.cloudinary.com/dremx6tnp/image/upload/v1778406308/premium_1_jsxlxh.png",
    // desc: "TGT Tallas Grandes Explora esta paca de ropa nueva de saldos TGT en tallas grandes para mujeres, hombres y niños. Incluye entre 100 y 130 piezas, con diseños variados y estilos mixtos, algunas prendas pueden repetirse o no traer etiqueta. 💚 Perfecta para ofrecer variedad de tallas oversize y agregar valor a tu inventario con prendas listas",
  },
];

// ═══════════════════════════════════════
// BALES #1
// ═══════════════════════════════════════

const bales_2 = [
  {
    id: 1,
    name: "Children 0-16 Mix #2",
    showOldPrice: false,
    oldPrice: 250,
    price: 250,
    stars: 5,
    reviews: 2,
    showDetails: true,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405716/bale-two_1_clayee.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409728/Children_0-16_Mix_nxpmgi.mp4",
    desc: "Mixto de Niños 0-16 #2 Paca intermedia con ropa mixta para niñas y niños de 0 a 16 años. Incluye entre 300 y 325 piezas, ideales para la temporada de verano, con diferentes estilos, tallas y colores. 💡 Perfecta para revendedores que buscan variedad infantil con buena calidad y excelente rotación..",
  },
  {
    id: 2,
    name: "Baby 0-7 #2",
    showOldPrice: true,
    oldPrice: 250,
    price: 180,
    stars: 5,
    reviews: 2,
    showDetails: true,
    offer: true,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405741/bale-two_15_eanvhz.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409728/Children_0-16_Mix_nxpmgi.mp4",
    desc: "Bebé de 0-7 #2 Paca intermedia con ropa mixta para niñas y niños de 0 a 7 años, ideal para la temporada de verano. Incluye entre 300 y 350 piezas, con diferentes estilos, tallas y colores..",
  },
  {
    id: 3,
    name: "Children Winter Mix #2",
    showOldPrice: true,
    oldPrice: 200,
    price: 150,
    stars: 5,
    reviews: 3,
    showDetails: true,
    offer: true,
    type: "kids",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778406242/free_8_hjoic2.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778408845/Children_Winter_Mix_cpceum.mp4",
    desc: "Frío Mixto de Niños #2 Paca intermedia con ropa de invierno para niños y niñas, incluyendo chaquetas, suéteres y pantalones. Incluye diferentes tallas, estilos, colores y materiales, cómodos, cálidos y modernos. ✨ Perfecta para revendedores que buscan prendas infantiles de temporada con buena rotación y presentación.",
  },
  {
    id: 4,
    name: "Ladies Mix Dress #2",
    showOldPrice: true,
    oldPrice: 280,
    price: 240,
    stars: 5,
    reviews: 3,
    showDetails: true,
    offer: true,
    type: "ladies",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405772/bale-two_16_u0n5a0.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409789/Ladies_Mix_p5n5el.mp4",
    desc: "Vestidos Mixtos Paca intermedia con vestidos para dama en diferentes estilos, telas y tallas, perfectos para la temporada de verano. Incluye prendas casuales, elegantes y juveniles, listas para uso diario o eventos. ✨ Excelente opción para revendedores que buscan moda femenina variada y de alta rotación.",
  },
  {
    id: 5,
    name: "Men T-Shirt L/S #2",
    showOldPrice: true,
    oldPrice: 180,
    price: 160,
    stars: 5,
    reviews: 2,
    showDetails: true,
    offer: true,
    type: "men",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405730/bale-two_14_eun1pt.png",
    // video: "",
    desc: " Camiseta de Hombre Manga Larga #2 Paca intermedia con camisetas de manga larga para hombre, en diferentes tallas, estilos y colores. Incluye entre 180 y 200 piezas, ideales para climas frescos o uso casual. 💡 Excelente opción para revendedores que buscan calidad media con buena rotación.",
  },
  {
    id: 6,
    name: "Ladies Skinny Jeans #2",
    showOldPrice: true,
    oldPrice: 280,
    price: 240,
    stars: 5,
    reviews: 2,
    showDetails: true,
    offer: true,
    type: "ladies",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405736/bale-two_13_vrw7pn.png",
    desc: "Vaqueros Ajustados de Mujer #2 Paca intermedia con jeans ajustados para dama, cómodos y modernos para uso casual o diario.Incluye diferentes tallas, estilos y lavados, ideales para la temporada de verano. 💡 Perfecta para revendedores que buscan moda femenina de buena calidad y alta rotación.",
  },
  {
    id: 7,
    name: "Atletico Legging & Top #2",
    showOldPrice: false,
    oldPrice: 0,
    price: 200,
    stars: 5,
    reviews: 1,
    showDetails: false,
    offer: false,
    type: "mix",
    img: " https://res.cloudinary.com/dremx6tnp/image/upload/v1778405740/bale-two_11_xqmubo.png",
    desc: "Athletic Legging & Top #3 🩱 Ropa Americana Ligeramente Usada Paca de 100 lbs con ropa deportiva económica ideal para verano. Incluye leggings y tops en diferentes estilos y tallas. Perfecta para reventa o surtido fitness accesible.",
  },
  {
    id: 8,
    name: "Men T-Shirt #2",
    showOldPrice: false,
    oldPrice: 500,
    price: 250,
    stars: 5,
    reviews: 1,
    showDetails: false,
    offer: false,
    type: "men",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405734/bale-two_12_y6xdzp.png",
    desc: "Camiseta De Hombre #2 👕 Paca intermedia con camisetas para hombre en tallas y estilos variados. Incluye entre 200–230 piezas de ropa de verano, cómodas y modernas. 💡 Perfecta para revendedores que buscan buena calidad a precio accesible.",
  },
  {
    id: 9,
    name: "Hoodie Sweat Shirt #2",
    showOldPrice: false,
    oldPrice: 400,
    price: 200,
    stars: 5,
    reviews: 2,
    showDetails: true,
    offer: false,
    type: "sweat",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405726/bale-two_10_dwwrvt.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778410018/Hoodie_Sweat_Shirt_usl5qh.mp4",
    desc: "Sudadera con Gorro #2 Paca económica con sudaderas con gorro para hombre y mujer, ideales para la temporada de invierno. Incluye entre 150 y 180 piezas, con diferentes estilos, colores y tallas, cómodas y casuales. 🔥 Perfecta para revendedores que buscan prendas de invierno accesibles con buena rotación y atractivo comercial.",
  },
  {
    id: 10,
    name: "Sexy Short #2",
    showOldPrice: true,
    oldPrice: 220,
    price: 175,
    stars: 5,
    reviews: 2,
    showDetails: true,
    offer: true,
    type: "ladies",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405735/bale-two_9_licn0o.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409847/Sexy_Short_2_st5i8b.mp4",
    desc: "Short Sensual #2 Paca intermedia con shorts sensuales para mujer, cómodos y modernos. Incluye entre 250 y 280 piezas de diferentes estilos, telas y tallas, ideales para la temporada de verano. 💃 Perfecta para revendedores que buscan moda femenina con buena rotación y atractivo comercial.",
  },
  {
    id: 11,
    name: "Brand T-Shirt Mix #2",
    showOldPrice: false,
    oldPrice: 500,
    price: 350,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: false,
    type: "mix",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405725/bale-two_8_x29o9q.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778408867/Premium_Oversize_Winter_tx7xjw.mp4",
    desc: "Brand T-Shirt Mix #2 👕 Ropa Americana Ligeramente Usada Paca de 100 libras con playeras de marca mixtas para hombre y mujer. Incluye una amplia variedad de estilos, colores y tallas, ideal para la temporada de verano. Las prendas son de calidad #2, seleccionadas para ofrecer una excelente combinación entre moda y valor.",
  },
  {
    id: 12,
    name: "Ladies T-Shirt L/S #2",
    showOldPrice: true,
    oldPrice: 160,
    price: 100,
    stars: 5,
    reviews: 1,
    showDetails: true,
    offer: true,
    type: "ladies",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405727/bale-two_7_ok9p6m.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778410065/Ladies_T-Shirt_LS_knw7jf.mp4",
    desc: "Women's Long Sleeve T-Shirt #2 Important specifications Weight:  100 lbs. Clothing type:  Women's long-sleeved t-shirt.  Season:  Winter clothing . Quality:  Intermediate (Grade AA). Contains:  All types of clothing materials, sizes, and styles.",
  },
  {
    id: 13,
    name: "Ladies Mix Blouse #2",
    showOldPrice: true,
    oldPrice: 250,
    price: 180,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: true,
    type: "ladies",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405721/bale-two_6_wnxnnl.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409740/Ladies_Leggings_pxhy3l.mp4",
    desc: "Blusa Mixta De Dama #2 👚 Paca intermedia con blusas mixtas para mujer en diversas telas, estilos y tallas. Ideal para la temporada de verano, con prendas frescas, cómodas y versátiles. 💡 Excelente opción para revendedores que buscan variedad y buena rotación.",
  },
  {
    id: 14,
    name: "Ladies Leggings #2",
    showOldPrice: true,
    oldPrice: 200,
    price: 160,
    stars: 5,
    reviews: 1,
    showDetails: true,
    offer: true,
    type: "ladies",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405721/bale-two_5_oj8sbv.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778409740/Ladies_Leggings_pxhy3l.mp4",
    desc: "Women's Leggings #2 🩳 Economical bale  of women's leggings in various styles, colors, and sizes . Includes between 180–220 pieces , ideal for resale or as a basic women's wardrobe . 💡 Perfect for those looking for good turnover at a low cost",
  },
  {
    id: 15,
    name: "Baby Accessories #2",
    showOldPrice: true,
    oldPrice: 120,
    price: 80,
    stars: 5,
    reviews: 1,
    showDetails: true,
    offer: true,
    type: "baby",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405725/bale-two_4_zjfklk.png",
    desc: "Accesorios de Bebés #2 – Paca intermedia con una amplia variedad de accesorios para bebé, tanto para niño como para niña. Incluye gorros, baberos, calcetines, guantes, mantitas, pañaleras y otros artículos esenciales. 💡 Ideal para tiendas infantiles y revendedores que buscan productos prácticos, tiernos y de excelente rotación.",
  },
  {
    id: 16,
    name: "Ladies Oversize Jeans #2",
    showOldPrice: false,
    oldPrice: 500,
    price: 150,
    stars: 5,
    reviews: 2,
    showDetails: false,
    offer: false,
    type: "ladies",
    img: "https://res.cloudinary.com/dremx6tnp/image/upload/v1778405711/bale-two_3_iq1are.png",
    video:
      "https://res.cloudinary.com/dremx6tnp/video/upload/v1778410023/Ladies_Oversize_Jeans_dfdfiq.mp4",
    desc: "Mezclilla Tallas Grandes de Mujer #2 Paca intermedia con jeans y prendas de mezclilla para dama en tallas grandes, en variedad de estilos y lavados. Incluye aproximadamente 180 a 200 piezas resistentes, cómodas y modernas. 💡 Ideal para quienes buscan moda plus size con buena calidad y excelente rotación de venta.",
  },
];

// ═══════════════════════════════════════
// PAGE INIT — Free Shipping
// ═══════════════════════════════════════
function renderProducts(list) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const countEl = document.getElementById("prod-count");
  if (countEl) countEl.textContent = list.length + " productos";
  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.onclick = () => openProductModal(p.id);
    card.innerHTML = `
      <div class="card-img-wrap">
        ${p.offer ? '<span class="offer-badge">Oferta</span>' : ""}
        <img src="${p.img}" alt="${
      p.name
    }" loading="lazy" onerror="this.style.background='#c8ddb8'"/>
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        ${
          p.showDetails
            ? `
          <div>
            <span class="stars">${stars(p.stars)}</span>
            <span class="review-count">(${p.reviews})</span>
          </div>`
            : ""
        }
        <div class="price-row">
  ${
    p.showOldPrice
      ? `<span class="price-old">$${p.oldPrice.toFixed(2)} USD</span>`
      : ""
  }
  <span class="price-new">$${p.price.toFixed(2)} USD</span>
</div>
        <div class="card-actions">
          <button class="btn-cart" onclick="event.stopPropagation();addToCart(${
            p.id
          })">Agregar</button>
          <button class="btn-buy" onclick="event.stopPropagation();buyNow(${
            p.id
          })">COMPRAR</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ═══════════════════════════════════════
// PAGE ROUTER — set "products" per page
// ═══════════════════════════════════════
let products = [];

function initPage(dataset) {
  products = dataset;
  renderProducts(products);
  updateCartUI();
}

function applyFilters() {
  const priceFilter = document.getElementById("filter-price")?.value;
  const typeFilter = document.getElementById("filter-type")?.value;
  let list = [...products];
  if (priceFilter === "low") list = list.filter((p) => p.price < 200);
  else if (priceFilter === "mid")
    list = list.filter((p) => p.price >= 200 && p.price <= 500);
  else if (priceFilter === "high") list = list.filter((p) => p.price > 500);
  if (typeFilter) list = list.filter((p) => p.type === typeFilter);
  renderProducts(list);
}
