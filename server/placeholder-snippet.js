// ═══════════════════════════════════════
// UPDATED placeOrder — calls backend
// Replace the existing placeOrder function in shared.js with this
// ═══════════════════════════════════════

async function placeOrder() {
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

  const city = document.getElementById("city")?.value.trim() || "";
  const address = document.getElementById("address")?.value.trim() || "";
  const notes = document.getElementById("notes")?.value.trim() || "";
  const orderNumber = "TB-" + Math.floor(Math.random() * 90000 + 10000);
  const total = cartTotal();

  // Show loading state on button
  const confirmBtn = document.querySelector(
    "#checkout-form-view button[onclick='placeOrder()']",
  );
  if (confirmBtn) {
    confirmBtn.textContent = "Enviando pedido...";
    confirmBtn.disabled = true;
  }

  try {
    // Call your backend
    const response = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fname,
        lname,
        email,
        phone,
        country,
        city,
        address,
        notes,
        paymentMethod: selectedPaymentMethod,
        cart,
        total,
        orderNumber,
      }),
    });

    const data = await response.json();

    // Show success screen
    const formView = document.getElementById("checkout-form-view");
    const successScreen = document.getElementById("success-screen");
    const orderNum = document.getElementById("order-number");
    if (formView) formView.style.display = "none";
    if (orderNum) orderNum.textContent = orderNumber;
    if (successScreen) successScreen.style.display = "block";

    // Open WhatsApp after short delay
    if (data.whatsappURL) {
      setTimeout(() => window.open(data.whatsappURL, "_blank"), 1000);
    }

    // Show email status
    if (data.emailError) {
      showToast("✅ Pedido recibido — abriendo WhatsApp");
    } else {
      showToast("✅ Pedido enviado — revisa tu email y WhatsApp");
    }
  } catch (error) {
    console.error("Order error:", error);
    // Fallback — still open WhatsApp even if server is down
    const itemsList = cart
      .map((i) => `• ${i.name} x${i.qty} — $${(i.price * i.qty).toFixed(2)}`)
      .join("\n");

    const message = `🛍️ *NUEVO PEDIDO*\n\n👤 *Cliente:* ${fname} ${lname}\n📧 *Email:* ${email}\n📱 *Teléfono:* ${phone}\n🌍 *País:* ${country}\n\n📦 *Productos:*\n${itemsList}\n\n💰 *Total: $${total.toFixed(
      2,
    )} USD*\n💳 *Método de pago:* ${selectedPaymentMethod}`;
    const whatsappURL = `https://wa.me/${
      process?.env?.WHATSAPP_NUMBER || "18022907558"
    }?text=${encodeURIComponent(message)}`;

    const formView = document.getElementById("checkout-form-view");
    const successScreen = document.getElementById("success-screen");
    const orderNum = document.getElementById("order-number");
    if (formView) formView.style.display = "none";
    if (orderNum) orderNum.textContent = orderNumber;
    if (successScreen) successScreen.style.display = "block";

    setTimeout(() => window.open(whatsappURL, "_blank"), 500);
    showToast("✅ Pedido recibido — abriendo WhatsApp");
  }

  // Reset button
  if (confirmBtn) {
    confirmBtn.textContent = "Confirmar Pedido → WhatsApp";
    confirmBtn.disabled = false;
  }
}
