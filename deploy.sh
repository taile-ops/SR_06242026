#!/bin/bash
# ============================================================
#  Skin Restoration Aesthetics — Hostinger Deploy Script
#  Usage: bash deploy.sh
#  Requires: scp and ssh access to your Hostinger account
# ============================================================

# ── CONFIGURE THESE BEFORE RUNNING ──────────────────────────
FTP_USER="your_hostinger_username"       # Your Hostinger SSH/FTP username
FTP_HOST="your_hostinger_server.com"     # e.g. srv123.hostinger.com (find in hPanel → SSH Access)
REMOTE_DIR="/home/$FTP_USER/public_html" # Hostinger root — usually this exact path
# ─────────────────────────────────────────────────────────────

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo ""
echo "============================================"
echo " Skin Restoration Aesthetics — Deploying"
echo "============================================"
echo ""

# Check variables are set
if [[ "$FTP_USER" == "your_hostinger_username" ]]; then
  echo -e "${RED}ERROR: Please edit deploy.sh and fill in FTP_USER, FTP_HOST before running.${NC}"
  exit 1
fi

# Files to deploy
FILES=(
  "index.html"
  "services.html"
  "treatments.html"
  "shop.html"
  "about.html"
  "contact.html"
  "styles.css"
  "utils.js"
  "checkout.js"
  "data.js"
  "payment.php"
  "site.webmanifest"
  "logo.jpg"
  "favicon.jpg"
  "apple-touch-icon.jpg"
  "android-chrome-192x192.jpg"
  "android-chrome-512x512.jpg"
  "hero-bg.jpg"
  "before-after.jpg"
  "about-portrait.jpg"
  "services-hero.jpg"
  "service-microneedling.jpg"
  "service-peel.jpg"
  "service-facial.jpg"
  "service-acne.jpg"
  "prod-cleansers.jpg"
  "prod-moisturizers.jpg"
  "prod-serums.jpg"
  "prod-skincare.jpg"
  "prod-sun-protection.jpg"
  "prod-toners.jpg"
  "prod-treatment-support.jpg"
)

echo -e "${YELLOW}Uploading ${#FILES[@]} files to $FTP_HOST...${NC}"
echo ""

# Upload all files via SCP
scp "${FILES[@]}" "$FTP_USER@$FTP_HOST:$REMOTE_DIR/"

if [ $? -eq 0 ]; then
  echo ""
  echo -e "${GREEN}✓ All files uploaded successfully!${NC}"
  echo ""
  echo "Next steps:"
  echo "  1. Log into hPanel → File Manager"
  echo "  2. Open payment.php and paste your Square credentials"
  echo "  3. Visit https://skinrestoration.cloud to verify"
  echo ""
else
  echo ""
  echo -e "${RED}✗ Upload failed. Check your FTP_USER and FTP_HOST settings.${NC}"
  echo "  Tip: Find your SSH hostname in hPanel → SSH Access"
  exit 1
fi
