// src/main.js
import './style.css'
import { auth, db, googleProvider, signInWithPopup, onAuthStateChanged, signOut } from './firebase.js';
import { collection, doc, setDoc, getDocs, getDoc, query, onSnapshot, deleteDoc } from 'firebase/firestore';

// Expose globally for dynamic HTML scripts
window.homelyAuth = auth;
window.homelyDb = db;
window.homelyFirestore = { collection, doc, setDoc, getDocs, getDoc, query, onSnapshot, deleteDoc };

let currentUser = null;

onAuthStateChanged(auth, (user) => {
  currentUser = user;
  applyAuthToUI();
});

const app = document.getElementById('app');

const bottomNavTemplate = `
<nav class="fixed bottom-0 w-full max-w-md mx-auto z-50 bg-background-light dark:bg-background-dark border-t border-[#E8E1D9] dark:border-[#2c241b] pb-safe pt-2 transition-transform shadow-[0_-4px_15px_-3px_rgba(130,94,52,0.1)]">
    <div class="flex justify-around items-end h-16 pb-2 px-2">
        <a class="nav-item flex flex-col items-center justify-center w-full h-full text-[#8b725b] hover:text-primary gap-1" data-page="user_dashboard.html" href="user_dashboard.html">
            <span class="material-symbols-outlined text-[26px]">home</span>
            <span class="text-[10px] font-medium">Home</span>
        </a>
        <a class="nav-item flex flex-col items-center justify-center w-full h-full text-[#8b725b] hover:text-primary gap-1" data-page="pantry.html" href="pantry.html">
            <span class="material-symbols-outlined text-[26px]">kitchen</span>
            <span class="text-[10px] font-medium">Pantry</span>
        </a>
        <!-- Suggest Meals (Central Action) -->
        <a class="nav-item relative flex flex-col items-center justify-center w-full h-full text-primary gap-1" data-page="ai_assistant.html" href="ai_assistant.html">
            <div class="absolute -top-6 bg-gradient-to-tr from-primary to-[#ff9e42] text-white p-3 rounded-full shadow-lg shadow-primary/30 border-4 border-[#FDFBD4] dark:border-[#1e1914] transform hover:-translate-y-1 transition-transform cursor-pointer">
                <span class="material-symbols-outlined filled">auto_awesome</span>
            </div>
            <span class="text-[10px] font-bold mt-8">Suggest</span>
        </a>
        <a class="nav-item flex flex-col items-center justify-center w-full h-full text-[#8b725b] hover:text-primary gap-1" data-page="smart_grocery_list.html" href="smart_grocery_list.html">
            <span class="material-symbols-outlined text-[26px]">shopping_cart</span>
            <span class="text-[10px] font-medium">Shop</span>
        </a>
        <a class="nav-item flex flex-col items-center justify-center w-full h-full text-[#8b725b] hover:text-primary gap-1" data-page="profile.html" href="profile.html">
            <span class="material-symbols-outlined text-[26px]">person</span>
            <span class="text-[10px] font-medium">Profile</span>
        </a>
    </div>
</nav>
`;

async function loadPage(pagePath) {
  try {
    console.log("Loading page:", pagePath);
    // Ensure graceful fallback to dashboard if file not found locally while developing
    const path = `/src/pages/${pagePath}`;
    const response = await fetch(path);

    let text;
    if (!response.ok) {
      console.warn("Page not found, loading user_dashboard.html instead for safety!");
      text = await (await fetch('/src/pages/user_dashboard.html')).text();
      pagePath = 'user_dashboard.html';
    } else {
      text = await response.text();
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    // Extract the main content from the body
    const pageBody = doc.body;

    // Setup fade animation
    app.style.opacity = '0';
    app.style.transition = 'opacity 0.2s ease-out';

    setTimeout(() => {
      // Because the original templates include a min-h-screen body which might conflict
      // we'll just inject all nodes from body into our app container
      // The app container itself uses min-h-screen and w-full flex justify-center
      app.innerHTML = "";
      const wrapper = document.createElement("div");
      // Inherit the background and text color classes from the page
      wrapper.className = pageBody.className;
      // Remove height classes so we don't break the parent frame container
      wrapper.classList.remove("min-h-screen", "min-h-[100dvh]", "h-screen");
      // Make it strictly fill the `#app` frame and scroll internally 
      wrapper.classList.add("absolute", "inset-0", "h-full", "w-full", "overflow-y-auto", "overflow-x-hidden");
      wrapper.innerHTML = pageBody.innerHTML;

      app.appendChild(wrapper);

      // Extract and execute scripts specifically so dynamic JS (like Gemini) runs!
      const scripts = wrapper.querySelectorAll("script");
      scripts.forEach((oldScript) => {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });

      // Handle bottom nav injection
      const bottomNavPlaceholder = app.querySelector('#bottom-nav');
      if (bottomNavPlaceholder) {
        // We recreate it fresh every time
        bottomNavPlaceholder.innerHTML = bottomNavTemplate;
        // Highlight active item
        bottomNavPlaceholder.querySelectorAll('.nav-item').forEach(item => {
          if (item.getAttribute('data-page') === pagePath) {
            item.classList.replace('text-[#8b725b]', 'text-primary');
            const spanIcon = item.querySelector('.material-symbols-outlined:not(.filled)');
            if (spanIcon && !item.querySelector('.absolute')) {
              item.innerHTML = `<div class="bg-primary/10 px-4 py-1 rounded-full flex flex-col items-center">
                                <span class="material-symbols-outlined text-[26px] fill-current">${spanIcon.textContent}</span>
                              </div><span class="text-[10px] font-bold">${item.querySelector('.font-medium').textContent}</span>`;
            }
          } else {
            item.classList.replace('text-primary', 'text-[#8b725b]');
          }
        });
      }

      applyAuthToUI();
      attachInteractiveElements();

      app.style.opacity = '1';
    }, 200);

  } catch (err) {
    console.error("Navigation error:", err);
    app.innerHTML = `<div class="p-8 text-center mt-20 text-red-500 w-full max-w-md mx-auto">
            <span class="material-symbols-outlined text-4xl mb-4">error</span>
            <h2 class="text-xl font-bold">Error loading page</h2>
            <p class="text-sm mt-2 opacity-80">${pagePath} might be missing.</p>
            <button class="mt-6 px-6 py-2 bg-primary text-white rounded-full font-bold shadow-md hover:bg-primary-dark transition-colors" onclick="history.back()">Go Back</button>
        </div>`;
    app.style.opacity = '1';
  }
}

function attachInteractiveElements() {
  // Back navigation on arrow buttons
  const backBtns = app.querySelectorAll('button');
  backBtns.forEach(btn => {
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon && (icon.textContent.trim() === 'arrow_back' || icon.textContent.trim() === 'arrow_back_ios_new')) {
      if (!btn.hasAttribute('onclick') && !btn.hasAttribute('data-target') && !btn.id) {
        btn.onclick = (e) => {
          e.preventDefault();
          window.goBack();
        };
      }
    }
  });


  const googleBtn = document.getElementById('google-login-btn');
  if (googleBtn) {
    googleBtn.onclick = async (e) => {
      e.preventDefault();
      try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("Logged in user:", result.user);
        navigate('user_dashboard.html');
      } catch (error) {
        console.error("Firebase Login Error:", error);
        alert("Failed to sign in. Check console for details.");
      }
    };
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.onclick = async (e) => {
      e.preventDefault();
      try {
        await signOut(auth);
        navigate('welcome.html');
      } catch (error) {
        console.error("Sign out error", error);
      }
    };
  }
}

function applyAuthToUI() {
  // Update time based greeting regardless of auth
  const greetingText = document.getElementById('greeting-text');
  if (greetingText) {
    const hour = new Date().getHours();
    if (hour < 12) greetingText.textContent = "Good Morning,";
    else if (hour < 17) greetingText.textContent = "Good Afternoon,";
    else greetingText.textContent = "Good Evening,";
  }

  if (!currentUser) return;

  // Global Dashboard logic
  const dashName = document.getElementById('user-profile-name');
  if (dashName) {
    const firstName = currentUser.displayName ? currentUser.displayName.split(" ")[0] : "Chef";
    dashName.textContent = firstName;
  }
  const dashPic = document.getElementById('user-profile-pic');
  if (dashPic && currentUser.photoURL) {
    dashPic.src = currentUser.photoURL;
  }

  // Profile Page Logic
  const profName = document.getElementById('profile-page-name');
  if (profName) profName.textContent = currentUser.displayName || "User";

  const profEmail = document.getElementById('profile-page-email');
  if (profEmail) profEmail.textContent = currentUser.email || "";

  const profPic = document.getElementById('profile-page-pic');
  if (profPic && currentUser.photoURL) profPic.src = currentUser.photoURL;
}

window.appHistory = [];

export function navigate(pagePath, pushState = true) {
  if (pushState) {
    history.pushState({ pagePath }, '', `/?page=${pagePath}`);
    window.appHistory.push(pagePath);
  }
  loadPage(pagePath);
}

window.navigate = navigate;

window.goBack = function () {
  if (window.appHistory.length > 1) {
    window.appHistory.pop(); // Remove current page from internal stack
    history.back(); // Trigger browser back (caught by popstate)
  } else {
    // Fallback if landing via direct link or refresh
    navigate('user_dashboard.html');
  }
};

// Global click delegation for internal navigation
document.body.addEventListener('click', e => {
  // IGNORE elements that belong specifically to the AI Chat
  if (e.target.closest('#send-btn') || e.target.closest('#chat-input')) {
    return; // Let the ai_assistant.html local script handle these directly!
  }

  const link = e.target.closest('a');
  if (link) {
    let href = link.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('#')) {
      e.preventDefault();
      href = href.split('/').pop(); // get the filename
      if (href.startsWith('?page=')) {
        href = href.split('?page=')[1];
      }
      const isNav = link.classList.contains('nav-item');
      navigate(href, !isNav);
      return;
    }
  }

  const targetBtn = e.target.closest('[data-target]');
  if (targetBtn) {
    e.preventDefault();
    navigate(targetBtn.getAttribute('data-target'));
    return;
  }

  // Handle ingredient quantity adjustment widget
  const qtyMinus = e.target.closest('.qty-minus');
  if (qtyMinus) {
    e.preventDefault();
    const valSpan = qtyMinus.parentElement.querySelector('.qty-val');
    if (valSpan) {
      let currentVal = parseInt(valSpan.textContent) || 0;
      if (currentVal > 0) valSpan.textContent = currentVal - 1;
    }
    return;
  }

  const qtyPlus = e.target.closest('.qty-plus');
  if (qtyPlus) {
    e.preventDefault();
    const valSpan = qtyPlus.parentElement.querySelector('.qty-val');
    if (valSpan) {
      let currentVal = parseInt(valSpan.textContent) || 0;
      valSpan.textContent = currentVal + 1;
    }
    return;
  }

  // Handle visually interactive filter chips 
  const filterChip = e.target.closest('.filter-chip');
  if (filterChip) {
    e.preventDefault();
    const container = filterChip.parentElement;
    container.querySelectorAll('.filter-chip').forEach(chip => {
      chip.classList.remove('bg-primary', 'text-white', 'shadow-md', 'shadow-primary/20');
      chip.classList.add('bg-white', 'dark:bg-[#2c241b]', 'text-[#4A3B2C]', 'dark:text-[#e0d8cf]', 'border', 'border-[#E8E1D9]', 'dark:border-transparent');
    });
    filterChip.classList.remove('bg-white', 'dark:bg-[#2c241b]', 'text-[#4A3B2C]', 'dark:text-[#e0d8cf]', 'border', 'border-[#E8E1D9]', 'dark:border-transparent');
    filterChip.classList.add('bg-primary', 'text-white', 'shadow-md', 'shadow-primary/20');
    return;
  }
});

// History pop state (Browser back/forward)
window.addEventListener('popstate', e => {
  if (window.appHistory && window.appHistory.length > 0) {
    const lastIdx = window.appHistory.lastIndexOf(e.state?.pagePath);
    if (lastIdx > -1) {
      window.appHistory.length = lastIdx + 1; // sync stack
    } else {
      window.appHistory.pop();
    }
  }

  if (e.state && e.state.pagePath) {
    navigate(e.state.pagePath, false);
  } else {
    const params = new URLSearchParams(window.location.search);
    navigate(params.get('page') || 'user_dashboard.html', false);
  }
});

// Entry Point Initialization
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const initialPage = params.get('page') || 'welcome.html';
  navigate(initialPage, true);
});
