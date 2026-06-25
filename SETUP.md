# Skin Restoration Aesthetics — Setup Guide

## 1. Upload Files to Hostinger

### Option A — Use the Deploy Script (recommended if you have SSH)
```bash
# Edit deploy.sh first — fill in your Hostinger username and server hostname
nano deploy.sh

# Then run it
bash deploy.sh
```

### Option B — Manual Upload via hPanel File Manager
1. Log into hPanel → **File Manager**
2. Navigate to **public_html**
3. Upload ALL files from this folder (drag and drop)

---

## 2. Activate Square Payments

### Step 1 — Get your Square credentials
1. Go to [developer.squareup.com](https://developer.squareup.com)
2. Create a free account and click **Create Application**
3. Name it "Skin Restoration Aesthetics"
4. From the left menu, copy:
   - **Application ID** (starts with `sq0idp-`)
   - **Location ID** (starts with `L`)
   - **Access Token** (long string — keep this private)

### Step 2 — Update checkout.js (front-end)
Open `checkout.js` and fill in lines 20–22:
```js
APP_ID:   'sq0idp-YOUR_ACTUAL_APP_ID',
LOCATION: 'L_YOUR_ACTUAL_LOCATION_ID',
ENV:      'sandbox',  // keep as sandbox for testing first
```

### Step 3 — Update payment.php (back-end)
Open `payment.php` and fill in lines 12–14:
```php
define('SQ_ACCESS_TOKEN', 'YOUR_ACTUAL_ACCESS_TOKEN');
define('SQ_LOCATION_ID',  'L_YOUR_ACTUAL_LOCATION_ID');
define('SQ_ENVIRONMENT',  'sandbox'); // keep as sandbox for testing first
```

### Step 4 — Test with sandbox card
- Card: `4111 1111 1111 1111`
- Expiry: any future date (e.g. `12/26`)
- CVV: `111`
- ZIP: `12345`

### Step 5 — Go live
Once test payments work, change `sandbox` → `production` in BOTH files,
and replace your sandbox Access Token with the **Production Access Token**
from the Square Developer Dashboard.

---

## 3. Connect Your Domain

In Hostinger hPanel → **Domains**:
- Point `skinrestoration.cloud` to your hosting
- Enable **SSL** (free with Hostinger) — required for Square payments

---

## 4. Update Mangomint Booking URL

In `utils.js`, find line ~9:
```js
booking_url: 'https://booking.mangomint.com/879442',
```
Replace `879442` with your actual Mangomint business ID if different.

---

## File Structure
```
public_html/
├── index.html          ← Homepage
├── services.html       ← Services page
├── treatments.html     ← Treatments page
├── shop.html           ← Shop (111 products)
├── about.html          ← About page
├── contact.html        ← Contact + map
├── styles.css          ← All styles
├── utils.js            ← Header, footer, cart logic
├── checkout.js         ← Square checkout (update credentials here)
├── data.js             ← All 111 products
├── payment.php         ← Square payment server (update credentials here)
├── *.jpg               ← All images
└── site.webmanifest    ← PWA manifest
```

---

## Support
- Square docs: https://developer.squareup.com/docs
- Mangomint docs: https://help.mangomint.com
- Hostinger help: https://support.hostinger.com
