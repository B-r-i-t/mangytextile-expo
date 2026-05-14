// firebase-auth.js
// Add this script to any page where you want to show login state
// Usage: <script type="module" src="firebase-auth.js"></script>

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// =====================================================
// 🔧 REPLACE THIS WITH YOUR FIREBASE CONFIG
// =====================================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
// =====================================================

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Watch login state and update the navbar
onAuthStateChanged(auth, (user) => {
  const loginLink = document.getElementById('nav-login-link');
  const userInfo  = document.getElementById('nav-user-info');
  const userName  = document.getElementById('nav-user-name');
  const logoutBtn = document.getElementById('nav-logout-btn');

  if (user) {
    // User is logged in
    if (loginLink) loginLink.style.display = 'none';
    if (userInfo)  userInfo.style.display  = 'inline-flex';
    if (userName)  userName.textContent    = user.displayName || user.email;
  } else {
    // User is logged out
    if (loginLink) loginLink.style.display = 'inline-block';
    if (userInfo)  userInfo.style.display  = 'none';
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => signOut(auth));
  }
});
