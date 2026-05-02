const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// ═══════════════════════════════════════
// MIDDLEWARE
// ═══════════════════════════════════════
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../"))); // serve your HTML files

// ═══════════════════════════════════════
// EMAIL TRANSPORTER
// ═══════════════════════════════════════
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // YOUR_EMAIL@gmail.com
    pass: process.env.EMAIL_PASS, // Gmail App Password (not your real password)
  },
});

// ═══════════════════════════════════════
// ORDER ENDPOINT
// ═══════════════════════════════════════
app.post("/api/order", async (req, res) => {
  const {
    fname,
    lname,
    email,
    phone,
    country,
    city,
    address,
    notes,
    paymentMethod,
    cart,
    total,
    orderNumber,
  } = req.body;

  // Validate required fields
  if (
    !fname ||
    !lname ||
    !email ||
    !phone ||
    !country ||
    !cart ||
    !paymentMethod
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
  }

  // Build items list for email
  const itemsHTML = cart
    .map(
      (i) => `
      <tr>
        <td style="padding:10px;border-bottom:1px solid #eee">
          <strong>${i.name}</strong><br>
          <span style="font-size:12px;color:#777">Talla: ${i.size} | Cant: ${
        i.qty
      }</span>
        </td>
        <td style="padding:10px;border-bottom:1px solid #eee;text-align:right;font-weight:700">
          $${(i.price * i.qty).toFixed(2)}
        </td>
      </tr>`,
    )
    .join("");

  const itemsText = cart
    .map(
      (i) =>
        `• ${i.name} x${i.qty} (${i.size}) — $${(i.price * i.qty).toFixed(2)}`,
    )
    .join("\n");

  // ── EMAIL HTML ──
  const emailHTML = `
  <!DOCTYPE html>
  <html>
  <head><meta charset="UTF-8"></head>
  <body style="font-family:'Nunito',Arial,sans-serif;background:#f5f5f3;margin:0;padding:20px">
    <div style="max-width:600px;margin:0 auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1)">
      
      <!-- Header -->
      <div style="background:#3a7d1e;padding:24px;text-align:center">
        <h1 style="color:white;margin:0;font-size:24px;letter-spacing:1px">🛍️ NUEVO PEDIDO</h1>
        <p style="color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:14px">Orden ${orderNumber}</p>
      </div>

      <!-- Customer Info -->
      <div style="padding:24px;border-bottom:2px solid #f0f7eb">
        <h2 style="color:#3a7d1e;margin:0 0 16px;font-size:16px;text-transform:uppercase;letter-spacing:1px">👤 Datos del Cliente</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:6px 0;color:#777;font-size:14px;width:120px">Nombre</td>
            <td style="padding:6px 0;font-weight:700;font-size:14px">${fname} ${lname}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#777;font-size:14px">Email</td>
            <td style="padding:6px 0;font-weight:700;font-size:14px">${email}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#777;font-size:14px">Teléfono</td>
            <td style="padding:6px 0;font-weight:700;font-size:14px">${phone}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#777;font-size:14px">País</td>
            <td style="padding:6px 0;font-weight:700;font-size:14px">${country}</td>
          </tr>
          ${
            city
              ? `<tr><td style="padding:6px 0;color:#777;font-size:14px">Ciudad</td><td style="padding:6px 0;font-weight:700;font-size:14px">${city}</td></tr>`
              : ""
          }
          ${
            address
              ? `<tr><td style="padding:6px 0;color:#777;font-size:14px">Dirección</td><td style="padding:6px 0;font-weight:700;font-size:14px">${address}</td></tr>`
              : ""
          }
          <tr>
            <td style="padding:6px 0;color:#777;font-size:14px">Pago</td>
            <td style="padding:6px 0;font-weight:700;font-size:14px;color:#3a7d1e">💳 ${paymentMethod}</td>
          </tr>
        </table>
      </div>

      <!-- Order Items -->
      <div style="padding:24px;border-bottom:2px solid #f0f7eb">
        <h2 style="color:#3a7d1e;margin:0 0 16px;font-size:16px;text-transform:uppercase;letter-spacing:1px">📦 Productos</h2>
        <table style="width:100%;border-collapse:collapse">
          ${itemsHTML}
        </table>
      </div>

      <!-- Total -->
      <div style="padding:24px;background:#f0f7eb">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:18px;font-weight:700;color:#1a1a1a">TOTAL</span>
          <span style="font-size:24px;font-weight:800;color:#3a7d1e">$${parseFloat(
            total,
          ).toFixed(2)} USD</span>
        </div>
        ${
          notes
            ? `<div style="margin-top:12px;padding:12px;background:white;border-radius:8px;font-size:13px;color:#555"><strong>📝 Notas:</strong> ${notes}</div>`
            : ""
        }
      </div>

      <!-- Footer -->
      <div style="padding:16px 24px;text-align:center;background:#1a1a1a">
        <p style="color:#80a080;font-size:12px;margin:0">Mangy's Textile Exports • ${new Date().toLocaleString(
          "es-ES",
        )}</p>
      </div>

    </div>
  </body>
  </html>`;

  // ── WHATSAPP MESSAGE ──
  const whatsappMessage = `🛍️ *NUEVO PEDIDO — ${orderNumber}*

👤 *Cliente:* ${fname} ${lname}
📧 *Email:* ${email}
📱 *Teléfono:* ${phone}
🌍 *País:* ${country}
${city ? `🏙️ *Ciudad:* ${city}` : ""}
${address ? `📍 *Dirección:* ${address}` : ""}

📦 *Productos:*
${itemsText}

💰 *Total: $${parseFloat(total).toFixed(2)} USD*
💳 *Método de pago:* ${paymentMethod}
${notes ? `📝 *Notas:* ${notes}` : ""}

_Enviado desde Mangy's Textile Exports_`;

  try {
    // Send email
    await transporter.sendMail({
      from: `"Mangy's Tienda" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // YOUR_EMAIL@gmail.com — where you receive orders
      subject: `🛍️ Nuevo Pedido ${orderNumber} — ${fname} ${lname} — $${parseFloat(
        total,
      ).toFixed(2)} USD`,
      html: emailHTML,
      text: `Nuevo pedido ${orderNumber}\n\nCliente: ${fname} ${lname}\nEmail: ${email}\nTeléfono: ${phone}\nPaís: ${country}\n\nProductos:\n${itemsText}\n\nTotal: $${parseFloat(
        total,
      ).toFixed(2)} USD\nPago: ${paymentMethod}`,
    });

    // Also send confirmation email to customer
    await transporter.sendMail({
      from: `"Mangy's Textile Exports" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ Pedido Recibido — ${orderNumber}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto">
          <div style="background:#3a7d1e;padding:20px;text-align:center;border-radius:12px 12px 0 0">
            <h1 style="color:white;margin:0;font-size:22px">¡Pedido Recibido! 🎉</h1>
          </div>
          <div style="padding:24px;background:white;border-radius:0 0 12px 12px;border:1px solid #eee">
            <p>Hola <strong>${fname}</strong>,</p>
            <p>Hemos recibido tu pedido <strong>${orderNumber}</strong> por un total de <strong>$${parseFloat(
        total,
      ).toFixed(2)} USD</strong>.</p>
            <p>Nos pondremos en contacto contigo pronto por WhatsApp o email para confirmar los detalles de pago y envío.</p>
            <p style="color:#777;font-size:13px">— Equipo Mangy's Textile Exports</p>
          </div>
        </div>`,
    });

    // Return WhatsApp URL to frontend
    const whatsappNumber = process.env.WHATSAPP_NUMBER || "18022907558";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    res.json({
      success: true,
      orderNumber,
      whatsappURL,
      message: "Order received and email sent!",
    });
  } catch (error) {
    console.error("Email error:", error);
    // Still return success with WhatsApp URL even if email fails
    const whatsappNumber = process.env.WHATSAPP_NUMBER || "18022907558";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;
    res.json({
      success: true,
      orderNumber,
      whatsappURL,
      emailError: true,
      message: "Order received! Email failed but WhatsApp will open.",
    });
  }
});

// ═══════════════════════════════════════
// HEALTH CHECK
// ═══════════════════════════════════════
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Mangy's server is running!" });
});

// ═══════════════════════════════════════
// START SERVER
// ═══════════════════════════════════════
app.listen(PORT, () => {
  console.log(`✅ Mangy's server running on port ${PORT}`);
});
