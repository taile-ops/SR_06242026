/* ============================================================
   SKIN RESTORATION AESTHETICS — Shared Utilities
   Header, Footer, Cart, Product rendering
   ============================================================ */

const BRAND = {
  name:        'Skin Restoration Aesthetics',
  tagline:     'Clinical care. Elevated experience.',
  booking_url: 'https://booking.mangomint.com/879442',
};

const CART_KEY = 'sra_cart_v2';

const NAV = [
  { label: 'Home',       href: 'index.html'      },
  { label: 'Services',   href: 'services.html'   },
  { label: 'Shop',       href: 'shop.html'       },
  { label: 'About',      href: 'about.html'      },
  { label: 'Contact',    href: 'contact.html'    },
];

/* ── CART ─────────────────────────────────────────────────── */
/* In-memory fallback for environments where localStorage is unavailable (e.g. iframes) */
var _cartMemory = [];
var _localStorageAvailable = (function() {
  try { window.localStorage.setItem('__test__', '1'); window.localStorage.removeItem('__test__'); return true; }
  catch(e) { return false; }
})();

function getCart() {
  if (_localStorageAvailable) {
    try { return JSON.parse(window.localStorage.getItem(CART_KEY)) || []; } catch { return []; }
  }
  return _cartMemory.slice();
}

function saveCart(cart) {
  if (_localStorageAvailable) {
    try { window.localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {}
  } else {
    _cartMemory = cart.slice();
  }
  updateCartBadge();
  renderCartItems();
}

function updateCartBadge() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? '' : 'none';
  });
}

function addToCart(id) {
  const product = (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []).find(p => p.id === id);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
  saveCart(cart);
  // Visual feedback
  const btn = document.querySelector(`[data-add-to-cart="${id}"]`);
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = 'Added ✓';
    btn.style.background = '#6aad5f';
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 1500);
  }
  openCart();
}

function changeQty(id, delta) {
  saveCart(
    getCart()
      .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
      .filter(i => i.qty > 0)
  );
}

function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
}

function cartSubtotal() {
  return getCart().reduce((s, i) => s + (i.price * i.qty), 0);
}

/* ── CART UI ──────────────────────────────────────────────── */
function openCart() {
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartItems() {
  const body  = document.getElementById('cartBody');
  const total = document.getElementById('cartTotal');
  if (!body) return;

  const cart = getCart();
  updateCartBadge();

  // Disable checkout button when empty
  const checkoutBtn = document.getElementById('cartCheckoutBtn');

  if (!cart.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <p>Your cart is empty.<br>Browse the shop to get started.</p>
        <a class="btn btn-primary btn-sm" href="shop.html" onclick="closeCart()">Shop Now</a>
      </div>`;
    if (total) total.textContent = '$0.00';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }
  if (checkoutBtn) checkoutBtn.disabled = false;

  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-top">
        <span class="cart-item-name">${item.name}</span>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Remove ${item.name}">×</button>
      </div>
      <div class="cart-item-bottom">
        <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty('${item.id}', -1)" aria-label="Decrease quantity">−</button>
          <span class="qty-count">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
        </div>
      </div>
    </div>`).join('');

  if (total) total.textContent = `$${cartSubtotal().toFixed(2)}`;
}

/* ── HEADER MARKUP ────────────────────────────────────────── */
function navMarkup(activePage) {
  const links = NAV.map(item => {
    const active = activePage === item.href ? 'active' : '';
    return `<li><a href="${item.href}" class="${active}">${item.label}</a></li>`;
  }).join('');

  return `
<header class="site-header" id="siteHeader">
  <div class="container header-inner">
    <a class="brand-logo" href="index.html" aria-label="${BRAND.name} — Home">
      <img src="logo.jpg" alt="${BRAND.name} logo" width="44" height="44">
      <div class="brand-text">
        <span class="brand-name">Skin Restoration Aesthetics</span>
        <span class="brand-tagline">${BRAND.tagline}</span>
      </div>
    </a>

    <nav class="site-nav" id="siteNav" aria-label="Main navigation">
      <ul role="list">${links}</ul>
    </nav>

    <div class="header-actions">
      <a class="btn btn-primary btn-sm" href="${BRAND.booking_url}" target="_blank" rel="noopener noreferrer">Book Now</a>
      <button class="cart-btn" type="button" onclick="openCart()" aria-label="Open shopping cart">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <span class="cart-badge" data-cart-count style="display:none">0</span>
      </button>
      <button class="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded="false" onclick="toggleMenu(this)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    </div>
  </div>
</header>`;
}

/* ── FOOTER MARKUP ────────────────────────────────────────── */
function footerMarkup() {
  return `
<footer class="site-footer" aria-label="Site footer">
  <div class="container footer-inner">
    <div>
      <div class="footer-brand-logo">
        <img src="logo.jpg" alt="${BRAND.name} logo" width="36" height="36">
        <span class="footer-brand-name">Skin Restoration Aesthetics</span>
      </div>
      <p class="footer-desc">Clinical skincare and curated homecare for radiant, healthy-looking skin.</p>
      <address style="font-style:normal;font-size:var(--text-xs);color:var(--text-faint);line-height:1.7;margin-top:var(--sp-3);">
        1101 S Winchester Blvd, Ste I-201<br>
        San Jose, CA 95128<br>
        <a href="tel:+14085644479" style="color:var(--text-faint);">(408) 564-4479</a>
      </address>
    </div>
    <div class="footer-col">
      <h4>Treatments</h4>
      <ul role="list">
        <li><a href="services.html">Services</a></li>
        <li><a href="${BRAND.booking_url}" target="_blank" rel="noopener">Book Online</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Shop</h4>
      <ul role="list">
        <li><a href="shop.html">All Products</a></li>
        <li><a href="shop.html?cat=Cleansers">Cleansers</a></li>
        <li><a href="shop.html?cat=Serums">Serums</a></li>
        <li><a href="shop.html?cat=Moisturizers">Moisturizers</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul role="list">
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="${BRAND.booking_url}" target="_blank" rel="noopener">Mangomint Booking</a></li>
      </ul>
    </div>
  </div>
  <div class="container footer-bottom">
    <span class="footer-copy">© 2026 ${BRAND.name}. All rights reserved.</span>
    <div class="footer-bottom-right">
      <a class="footer-instagram" href="https://www.instagram.com/skinrestorationaesthetics" target="_blank" rel="noopener" aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4.5"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
        @skinrestorationaesthetics
      </a>
      <a class="footer-book-link" href="${BRAND.booking_url}" target="_blank" rel="noopener">
        Book a consultation →
      </a>
    </div>
  </div>
</footer>`;
}

/* ── CART DRAWER MARKUP ───────────────────────────────────── */
function cartDrawerMarkup() {
  return `
<div class="cart-overlay" id="cartOverlay" onclick="closeAndResetCheckout()" aria-hidden="true"></div>
<aside class="cart-drawer" id="cartDrawer" aria-label="Shopping cart">

  <!-- ── STEP: CART ─────────────────────────────────────── -->
  <div class="checkout-step" data-step="cart">
    <div class="cart-header">
      <div class="cart-header-left">
        <h3>Your Cart</h3>
      </div>
      <button class="cart-close" type="button" onclick="closeAndResetCheckout()" aria-label="Close cart">×</button>
    </div>
    <div class="cart-body" id="cartBody"></div>
    <div class="cart-footer" id="cartFooter">
      <div class="cart-subtotal">
        <span class="cart-subtotal-label">Subtotal</span>
        <span class="cart-subtotal-price" id="cartTotal">$0.00</span>
      </div>
      <p class="cart-note">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:middle;margin-right:4px;"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        Secure checkout powered by Square
      </p>
      <button
        class="btn btn-primary btn-lg cart-checkout-btn"
        type="button"
        id="cartCheckoutBtn"
        onclick="goToStep('billing')"
      >
        Continue to Checkout
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  </div>

  <!-- ── STEP: BILLING ─────────────────────────────────────── -->
  <div class="checkout-step" data-step="billing" hidden>
    <div class="cart-header">
      <div class="cart-header-left">
        <button class="cart-back-btn" type="button" onclick="goToStep('cart')" aria-label="Back to cart">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h3>Your Details</h3>
      </div>
      <button class="cart-close" type="button" onclick="closeAndResetCheckout()" aria-label="Close">×</button>
    </div>
    <div class="cart-body">
      <div class="checkout-progress">
        <div class="progress-step completed">Cart</div>
        <div class="progress-divider"></div>
        <div class="progress-step active">Details</div>
        <div class="progress-divider"></div>
        <div class="progress-step">Payment</div>
      </div>

      <form class="sq-billing-form" onsubmit="event.preventDefault(); handleBillingContinue();" novalidate>
        <div class="sq-form-row">
          <div class="sq-form-group">
            <label class="sq-label" for="sq-first-name">First name <span class="sq-required">*</span></label>
            <input class="sq-input" id="sq-first-name" type="text" placeholder="Jane" autocomplete="given-name" required>
          </div>
          <div class="sq-form-group">
            <label class="sq-label" for="sq-last-name">Last name <span class="sq-required">*</span></label>
            <input class="sq-input" id="sq-last-name" type="text" placeholder="Smith" autocomplete="family-name" required>
          </div>
        </div>

        <div class="sq-form-group">
          <label class="sq-label" for="sq-email">Email address <span class="sq-required">*</span></label>
          <input class="sq-input" id="sq-email" type="email" placeholder="jane@email.com" autocomplete="email" required>
        </div>

        <div class="sq-form-group">
          <label class="sq-label" for="sq-phone">Phone number</label>
          <input class="sq-input" id="sq-phone" type="tel" placeholder="(555) 555-5555" autocomplete="tel">
        </div>

        <div class="sq-form-divider"></div>
        <p class="sq-section-label">Billing address</p>

        <div class="sq-form-group">
          <label class="sq-label" for="sq-address">Street address</label>
          <input class="sq-input" id="sq-address" type="text" placeholder="123 Main St" autocomplete="street-address">
        </div>

        <div class="sq-form-row">
          <div class="sq-form-group" style="flex:2">
            <label class="sq-label" for="sq-city">City</label>
            <input class="sq-input" id="sq-city" type="text" placeholder="Los Angeles" autocomplete="address-level2">
          </div>
          <div class="sq-form-group">
            <label class="sq-label" for="sq-state">State</label>
            <input class="sq-input" id="sq-state" type="text" placeholder="CA" maxlength="2" autocomplete="address-level1">
          </div>
          <div class="sq-form-group">
            <label class="sq-label" for="sq-zip">ZIP <span class="sq-required">*</span></label>
            <input class="sq-input" id="sq-zip" type="text" placeholder="90001" maxlength="10" autocomplete="postal-code" required>
          </div>
        </div>

        <p class="sq-form-error" id="sq-billing-error" hidden></p>

        <button class="btn btn-primary btn-lg cart-checkout-btn" type="submit">
          Continue to Payment
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </form>
    </div>
  </div>

  <!-- ── STEP: PAYMENT ─────────────────────────────────────── -->
  <div class="checkout-step" data-step="payment" hidden>
    <div class="cart-header">
      <div class="cart-header-left">
        <button class="cart-back-btn" type="button" onclick="goToStep('billing')" aria-label="Back to details">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h3>Payment</h3>
      </div>
      <button class="cart-close" type="button" onclick="closeAndResetCheckout()" aria-label="Close">×</button>
    </div>
    <div class="cart-body">
      <div class="checkout-progress">
        <div class="progress-step completed">Cart</div>
        <div class="progress-divider"></div>
        <div class="progress-step completed">Details</div>
        <div class="progress-divider"></div>
        <div class="progress-step active">Payment</div>
      </div>

      <!-- Order summary mini-view -->
      <div class="sq-order-summary-card">
        <div id="sq-order-summary"></div>
        <div class="sq-order-total-row">
          <span>Total</span>
          <span class="sq-order-total-price" id="sq-order-total"></span>
        </div>
      </div>

      <!-- Square card element renders here -->
      <div class="sq-card-section">
        <p class="sq-section-label">Card details</p>
        <div id="sq-card-container"></div>
        <div class="sq-secure-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Secured by Square · 256-bit SSL encryption
        </div>
      </div>

      <p class="sq-form-error" id="sq-payment-error" hidden></p>

      <button
        class="btn btn-primary btn-lg cart-checkout-btn sq-pay-btn"
        type="button"
        id="sq-pay-btn"
        onclick="handlePayNow()"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
        Pay $<span id="sq-pay-total"></span>
      </button>

      <p class="sq-terms">
        By completing this purchase you agree to our terms. Payments are processed securely through Square and are never stored on our servers.
      </p>
    </div>
  </div>

  <!-- ── STEP: SUCCESS ─────────────────────────────────────── -->
  <div class="checkout-step" data-step="success" hidden>
    <div class="cart-header">
      <span></span>
      <button class="cart-close" type="button" onclick="closeAndResetCheckout()" aria-label="Close">×</button>
    </div>
    <div class="cart-body cart-body--centered">
      <div class="sq-success-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
        </svg>
      </div>
      <h3 class="sq-success-title">Order received!</h3>
      <p class="sq-success-body">Thank you for your purchase. You'll receive a confirmation email shortly. We'll have your order ready for pickup or delivery.</p>
      <div class="sq-success-actions">
        <a class="btn btn-secondary" href="services.html" onclick="closeAndResetCheckout()">Book a Treatment</a>
        <button class="btn btn-ghost" type="button" onclick="continueShopping()">Continue Shopping</button>
      </div>
    </div>
  </div>

</aside>`;
}

/* ── PRODUCT CARD ─────────────────────────────────────────── */
function productCardHTML(product, compact = false) {
  const overlayDesc = product.description
    ? `<div class="product-desc-overlay" aria-hidden="true">
        <p class="product-desc-overlay-text">${product.description}</p>
        ${product.sku ? `<span class="product-desc-overlay-sku">SKU: ${product.sku}</span>` : ''}
      </div>`
    : '';

  return `
<article class="product-card">
  <div class="product-image">
    <img
      src="${product.image}"
      alt="${product.name}"
      loading="lazy"
      width="300"
      height="400"
    >
    ${overlayDesc}
  </div>
  <div class="product-body">
    <span class="product-category">${product.category}</span>
    <h3 class="product-name">${product.name}</h3>
    ${product.brand ? `<span class="product-brand">${product.brand}</span>` : ''}
    <div class="product-footer">
      <span class="product-price">$${Number(product.price).toFixed(2)}</span>
      <button
        class="btn-cart"
        data-add-to-cart="${product.id}"
        onclick="addToCart('${product.id}')"
        aria-label="Add ${product.name} to cart"
      >Add</button>
    </div>
  </div>
</article>`;
}

/* ── SHOP RENDER ──────────────────────────────────────────── */
function renderShop() {
  const root     = document.getElementById('shopProducts');
  const count    = document.getElementById('productCount');
  if (!root || typeof PRODUCTS === 'undefined') return;

  const search   = (document.getElementById('shopSearch')?.value || '').toLowerCase().trim();
  const category = document.getElementById('shopCategory')?.value || 'all';

  const filtered = PRODUCTS.filter(p => {
    const text = `${p.name} ${p.category} ${p.brand}`.toLowerCase();
    const matchSearch   = !search || text.includes(search);
    const matchCategory = category === 'all' || p.category === category;
    return matchSearch && matchCategory;
  });

  if (count) count.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

  if (!filtered.length) {
    root.innerHTML = '<div class="empty-state">No products found — try a different search or category.</div>';
    return;
  }
  root.innerHTML = filtered.map(p => productCardHTML(p, false)).join('');
}

function populateCategories() {
  const sel = document.getElementById('shopCategory');
  if (!sel || typeof PRODUCTS === 'undefined') return;
  const cats = [...new Set(PRODUCTS.map(p => p.category.trim()))].sort();
  sel.innerHTML = '<option value="all">All Categories</option>' +
    cats.map(c => `<option value="${c}">${c}</option>`).join('');

  // Pre-select from URL param
  const urlCat = new URLSearchParams(location.search).get('cat');
  if (urlCat && cats.includes(urlCat)) sel.value = urlCat;
}

/* ── FEATURED PRODUCTS (home/services) ───────────────────── */
function renderFeatured(limit = 8) {
  const root = document.getElementById('featuredProducts');
  if (!root || typeof PRODUCTS === 'undefined') return;
  root.innerHTML = PRODUCTS.slice(0, limit).map(p => productCardHTML(p, true)).join('');
}

/* ── NAV TOGGLE ───────────────────────────────────────────── */
function toggleMenu(btn) {
  const nav = document.getElementById('siteNav');
  if (!nav) return;
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

/* ── SCROLL BEHAVIOR ──────────────────────────────────────── */
function initScrollHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    lastY = y;
  }, { passive: true });
}

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const activePage = document.body.dataset.page || 'index.html';

  // Inject shared markup
  const headerMount = document.getElementById('headerMount');
  const footerMount = document.getElementById('footerMount');
  const cartMount   = document.getElementById('cartMount');

  if (headerMount) headerMount.innerHTML = navMarkup(activePage);
  if (footerMount) footerMount.innerHTML = footerMarkup();
  if (cartMount)   cartMount.innerHTML   = cartDrawerMarkup();

  // Init cart + scroll
  updateCartBadge();
  renderCartItems();
  initScrollHeader();

  // Shop page
  populateCategories();
  renderShop();

  // Featured products
  renderFeatured();

  // Shop listeners
  document.getElementById('shopSearch')?.addEventListener('input', renderShop);
  document.getElementById('shopCategory')?.addEventListener('change', renderShop);
});
