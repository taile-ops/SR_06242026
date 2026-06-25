/* ============================================================
   SKIN RESTORATION AESTHETICS — Square Checkout
   ============================================================

   ACTIVATION CHECKLIST (takes 2 minutes once you have Square credentials):
   ─────────────────────────────────────────────────────────────────────────
   1. Go to https://developer.squareup.com → your app → Credentials
   2. Paste your Application ID  →  SQ_APP_ID   below
   3. Paste your Location ID     →  SQ_LOCATION  below
   4. Set SQ_ENV to 'production' when ready to go live
   5. Add a backend endpoint (see BACKEND INTEGRATION GUIDE at bottom of file)

   SANDBOX TESTING (before going live):
   ─────────────────────────────────────────────────────────────────────────
   Test card: 4111 1111 1111 1111 · Exp: any future date · CVV: 111 · ZIP: 12345
   ============================================================ */

const SQ_CONFIG = {
  /* ── PASTE YOUR SQUARE CREDENTIALS HERE ────────────────── */
  APP_ID:   'REPLACE_WITH_YOUR_SQUARE_APP_ID',      // e.g. 'sq0idp-AbCdEfGhIj...'
  LOCATION: 'REPLACE_WITH_YOUR_SQUARE_LOCATION_ID', // e.g. 'L1234567890AB'
  ENV:      'sandbox',  // 'sandbox' for testing → 'production' when live

  /* ── BACKEND ENDPOINT ───────────────────────────────────── */
  // Point this at your server-side payment handler.
  // See BACKEND INTEGRATION GUIDE at the bottom of this file.
  PAYMENT_ENDPOINT: 'https://skinrestoration.cloud/payment.php',

  /* ── DISPLAY ────────────────────────────────────────────── */
  CURRENCY: 'USD',
  COUNTRY:  'US',
};

/* ─── State ─────────────────────────────────────────────── */
let _sqPayments  = null;  // Square Payments instance
let _sqCard      = null;  // Square Card element
let _checkoutStep = 'cart'; // 'cart' | 'billing' | 'payment' | 'success' | 'error'

/* ─── Square SDK URL (auto-switches sandbox ↔ production) ─ */
function _sdkUrl() {
  return SQ_CONFIG.ENV === 'production'
    ? 'https://web.squarecdn.com/v1/square.js'
    : 'https://sandbox.web.squarecdn.com/v1/square.js';
}

/* ─── Load Square SDK on demand ─────────────────────────── */
function loadSquareSDK() {
  return new Promise((resolve, reject) => {
    if (window.Square) return resolve(window.Square);
    const script = document.createElement('script');
    script.src = _sdkUrl();
    script.onload  = () => resolve(window.Square);
    script.onerror = () => reject(new Error('Failed to load Square SDK'));
    document.head.appendChild(script);
  });
}

/* ─── Initialize Square Payments + Card element ─────────── */
async function initSquare() {
  if (_sqCard) return; // already initialized

  const CONFIGURED = !SQ_CONFIG.APP_ID.startsWith('REPLACE_');

  if (!CONFIGURED) {
    // Show the "not yet configured" placeholder — still looks great
    _renderCardPlaceholder();
    return;
  }

  try {
    const Square = await loadSquareSDK();
    _sqPayments = Square.payments(SQ_CONFIG.APP_ID, SQ_CONFIG.LOCATION);

    _sqCard = await _sqPayments.card({
      style: {
        '.input-container': {
          borderColor:  '#e8ddd7',
          borderRadius: '12px',
        },
        '.input-container.is-focus': {
          borderColor: '#8a6f63',
        },
        '.input-container.is-error': {
          borderColor: '#c0392b',
        },
        '.message-text': {
          color: '#5d4e46',
        },
        '.message-icon': {
          color: '#5d4e46',
        },
        input: {
          color:       '#2f2622',
          fontFamily:  'Inter, Helvetica Neue, sans-serif',
          fontSize:    '14px',
          fontWeight:  '400',
        },
        'input::placeholder': {
          color: '#bca79b',
        },
      },
    });

    await _sqCard.attach('#sq-card-container');
  } catch (err) {
    console.error('Square init error:', err);
    _renderCardError('Could not load the payment form. Please refresh and try again.');
  }
}

function _renderCardPlaceholder() {
  const el = document.getElementById('sq-card-container');
  if (!el) return;
  el.innerHTML = `
    <div class="sq-placeholder">
      <div class="sq-placeholder-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      </div>
      <p class="sq-placeholder-title">Payment form ready to activate</p>
      <p class="sq-placeholder-body">Add your Square Application ID and Location ID to <strong>checkout.js</strong> to enable card payments.</p>
      <a class="sq-placeholder-link" href="https://developer.squareup.com/apps" target="_blank" rel="noopener noreferrer">
        Get credentials from Square Developer Console →
      </a>
    </div>`;
}

function _renderCardError(msg) {
  const el = document.getElementById('sq-card-container');
  if (!el) return;
  el.innerHTML = `<p class="sq-form-error">${msg}</p>`;
}

/* ─── Checkout step navigation ───────────────────────────── */
function goToStep(step) {
  _checkoutStep = step;
  document.querySelectorAll('.checkout-step').forEach(el => {
    el.hidden = el.dataset.step !== step;
  });
  if (step === 'payment') {
    initSquare(); // lazy-load Square only when needed
    // Update pay button total and order total display
    const totalEl = document.getElementById('sq-order-total');
    if (totalEl) totalEl.textContent = '$' + cartSubtotal().toFixed(2);
    const payTotalEl = document.getElementById('sq-pay-total');
    if (payTotalEl) payTotalEl.textContent = cartSubtotal().toFixed(2);
  }
  // scroll drawer to top — each step has its own .cart-body
  const activeStep = document.querySelector('.checkout-step:not([hidden])');
  const body = activeStep ? activeStep.querySelector('.cart-body') : document.getElementById('cartBody');
  if (body) body.scrollTop = 0;
}

/* ─── Order summary for payment step ────────────────────── */
function renderOrderSummary() {
  const cart = getCart();
  const root = document.getElementById('sq-order-summary');
  if (!root) return;
  root.innerHTML = cart.map(item => `
    <div class="sq-order-row">
      <span class="sq-order-name">${item.name}<span class="sq-order-qty"> ×${item.qty}</span></span>
      <span class="sq-order-price">$${(item.price * item.qty).toFixed(2)}</span>
    </div>`).join('');
}

/* ─── Collect billing info from form ─────────────────────── */
function getBillingDetails() {
  return {
    givenName:   document.getElementById('sq-first-name')?.value.trim() || '',
    familyName:  document.getElementById('sq-last-name')?.value.trim()  || '',
    email:       document.getElementById('sq-email')?.value.trim()      || '',
    phone:       document.getElementById('sq-phone')?.value.trim()      || '',
    addressLines:[document.getElementById('sq-address')?.value.trim()   || ''],
    city:        document.getElementById('sq-city')?.value.trim()       || '',
    state:       document.getElementById('sq-state')?.value.trim()      || '',
    postalCode:  document.getElementById('sq-zip')?.value.trim()        || '',
    countryCode: SQ_CONFIG.COUNTRY,
  };
}

/* ─── Validate billing form ──────────────────────────────── */
function validateBilling() {
  const required = ['sq-first-name','sq-last-name','sq-email','sq-zip'];
  let valid = true;
  required.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const empty = !el.value.trim();
    el.classList.toggle('sq-input-error', empty);
    if (empty) valid = false;
  });
  // basic email check
  const emailEl = document.getElementById('sq-email');
  if (emailEl && emailEl.value && !emailEl.value.includes('@')) {
    emailEl.classList.add('sq-input-error');
    valid = false;
  }
  return valid;
}

/* ─── Handle "Continue to Payment" ──────────────────────── */
function handleBillingContinue() {
  if (!validateBilling()) {
    const errEl = document.getElementById('sq-billing-error');
    if (errEl) { errEl.textContent = 'Please fill in all required fields.'; errEl.hidden = false; }
    return;
  }
  const errEl = document.getElementById('sq-billing-error');
  if (errEl) errEl.hidden = true;
  renderOrderSummary();
  goToStep('payment');
}

/* ─── Handle "Pay Now" ───────────────────────────────────── */
async function handlePayNow() {
  const btn = document.getElementById('sq-pay-btn');
  const errEl = document.getElementById('sq-payment-error');
  if (errEl) errEl.hidden = true;

  const CONFIGURED = !SQ_CONFIG.APP_ID.startsWith('REPLACE_');

  /* ── NOT CONFIGURED: demo mode ──────────────────────────── */
  if (!CONFIGURED) {
    _setPayBtnLoading(btn, true);
    await _sleep(1200);
    _setPayBtnLoading(btn, false);
    goToStep('success');
    return;
  }

  /* ── CONFIGURED: real Square tokenization ────────────────── */
  if (!_sqCard) {
    _showPaymentError(errEl, 'Payment form not ready. Please refresh and try again.');
    return;
  }

  _setPayBtnLoading(btn, true);

  try {
    const result = await _sqCard.tokenize();

    if (result.status !== 'OK') {
      const msg = result.errors?.map(e => e.message).join(' ') || 'Card error. Please check your details.';
      _showPaymentError(errEl, msg);
      _setPayBtnLoading(btn, false);
      return;
    }

    const token   = result.token;
    const billing = getBillingDetails();
    const cart    = getCart();
    const amount  = Math.round(cartSubtotal() * 100); // cents

    // ── Send to your backend ─────────────────────────────────
    // See BACKEND INTEGRATION GUIDE below for what this endpoint should do.
    const response = await fetch(SQ_CONFIG.PAYMENT_ENDPOINT, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sourceId:       token,
        amountMoney:    { amount, currency: SQ_CONFIG.CURRENCY },
        buyerEmailAddress: billing.email,
        billingAddress: {
          addressLine1: billing.addressLines[0],
          locality:     billing.city,
          administrativeDistrictLevel1: billing.state,
          postalCode:   billing.postalCode,
          country:      billing.countryCode,
        },
        // Include cart for order reference / receipt line items
        lineItems: cart.map(i => ({
          name:     i.name,
          quantity: String(i.qty),
          basePriceMoney: { amount: Math.round(i.price * 100), currency: SQ_CONFIG.CURRENCY },
        })),
        // Idempotency: prevents double charges on network retry
        idempotencyKey: `sra-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      }),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      _showPaymentError(errEl, data.error || 'Payment failed. Please try again.');
      _setPayBtnLoading(btn, false);
      return;
    }

    // ── Success ──────────────────────────────────────────────
    // Optionally store the paymentId for receipts: data.paymentId
    saveCart([]); // clear cart
    goToStep('success');

  } catch (err) {
    console.error('Payment error:', err);
    _showPaymentError(errEl, 'A network error occurred. Please check your connection and try again.');
    _setPayBtnLoading(btn, false);
  }
}

function _setPayBtnLoading(btn, loading) {
  if (!btn) return;
  btn.disabled = loading;
  btn.innerHTML = loading
    ? `<span class="sq-spinner"></span> Processing…`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> Pay $${cartSubtotal().toFixed(2)}`;
}

function _showPaymentError(el, msg) {
  if (!el) return;
  el.textContent = msg;
  el.hidden = false;
}

function _sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

/* ─── Cart total label helper (used in pay button) ─────── */
function updatePayBtnTotal() {
  const btn = document.getElementById('sq-pay-btn');
  if (btn && !btn.disabled) {
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> Pay $${cartSubtotal().toFixed(2)}`;
  }
}

/* ─── Close and reset checkout ───────────────────────────── */
function closeAndResetCheckout() {
  closeCart();
  setTimeout(() => {
    goToStep('cart');
    // Reset Square card form if it exists
    if (_sqCard) {
      _sqCard.destroy().then(() => { _sqCard = null; _sqPayments = null; }).catch(() => {});
    }
  }, 350);
}

/* ─── Continue shopping after success ────────────────────── */
function continueShopping() {
  closeAndResetCheckout();
}

/* ============================================================
   BACKEND INTEGRATION GUIDE
   ============================================================

   The front-end sends a POST request to SQ_CONFIG.PAYMENT_ENDPOINT with:

   {
     "sourceId":         "cnon:...",        // one-time Square card token
     "amountMoney":      { "amount": 4200, "currency": "USD" },
     "buyerEmailAddress":"customer@email.com",
     "billingAddress":   { ... },
     "lineItems":        [ { "name": "...", "quantity": "1", "basePriceMoney": { ... } } ],
     "idempotencyKey":   "sra-1712345678-abc123"
   }

   Your backend should:
   1. Validate the amount server-side (recalculate from line items — never trust the client amount)
   2. Call Square Payments API:

      POST https://connect.squareup.com/v2/payments
      Authorization: Bearer YOUR_SQUARE_ACCESS_TOKEN
      {
        "source_id":          body.sourceId,
        "idempotency_key":    body.idempotencyKey,
        "amount_money":       body.amountMoney,
        "buyer_email_address": body.buyerEmailAddress,
        "billing_address":    body.billingAddress,
        "note":               "Skin Restoration Aesthetics order",
        "location_id":        "YOUR_LOCATION_ID"
      }

   3. On success, return: { "paymentId": "...", "receiptUrl": "..." }
   4. On failure, return 4xx with: { "error": "Friendly message" }

   RECOMMENDED BACKEND OPTIONS (all free tier compatible):
   ─ Vercel Serverless Function (fastest for static sites on Vercel/Netlify)
   ─ Netlify Functions
   ─ Cloudflare Workers
   ─ Node.js/Express on Hostinger or Railway

   Square Node.js SDK:  npm install squareup
   Square PHP SDK:      composer require square/square

   ============================================================ */
