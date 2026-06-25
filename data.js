const PRODUCTS = [

  /* ── CLEANSERS ─────────────────────────────────────────────────────── */
  {
    "id": "crw5",
    "name": "Clarifying Wash *NEW* - 5oz",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 30.00,
    "sku": "CRW5",
    "description": "A deep-pore clarifying face wash formulated to cut through excess sebum, environmental debris, and surface impurities without stripping the skin's moisture barrier. Powered by salicylic acid and kaolin clay, it dissolves congestion at the follicle level to prevent breakouts and minimize pore appearance. Ideal for oily, combination, and acne-prone skin types. Use morning or evening as part of your daily cleansing routine.",
    "image": "products.jpg"
  },
  {
    "id": "crwts",
    "name": "Clarifying Wash - Travel Size",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 10.00,
    "sku": "CRWTS",
    "description": "The same deep-pore clarifying formula as the full-size Clarifying Wash, conveniently packaged for travel or on-the-go use. Controls excess oil, removes impurities, and keeps pores clear with salicylic acid and kaolin clay. TSA-friendly size — perfect for maintaining your skincare routine wherever you are.",
    "image": "products.jpg"
  },
  {
    "id": "gcl4",
    "name": "Gentle Cleansing Lotion - 4oz",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 22.00,
    "sku": "GCL4",
    "description": "A milky, soap-free cleansing lotion designed for sensitive, dry, or reactive skin. This gentle formula lifts makeup, sunscreen, and daily grime while delivering a surge of hydration — leaving skin clean, calm, and never tight. Formulated with soothing botanical extracts and humectants that support the skin's natural barrier function. Suitable for rosacea-prone and post-procedure skin.",
    "image": "products.jpg"
  },
  {
    "id": "gclts",
    "name": "Gentle Cleansing Lotion - Travel Size",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 10.00,
    "sku": "GCLTS",
    "description": "The gentle, milky cleansing lotion you love in a compact travel size. Formulated for sensitive and dry skin types, it removes impurities and makeup without disrupting the skin's moisture balance. Ideal for post-treatment care or for those with reactive, rosacea-prone skin. Take your barrier-supporting cleanser everywhere.",
    "image": "products.jpg"
  },
  {
    "id": "gc5",
    "name": "Gentle Facial Cleanser *NEW* - 5oz",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 25.00,
    "sku": "GC5",
    "description": "An upgraded gentle facial cleanser that balances thorough cleansing with skin-soothing care. The new formula features a refined blend of amino acid surfactants that remove impurities and excess oil without disrupting the skin's acid mantle. Enriched with aloe vera and panthenol (vitamin B5) to calm inflammation and lock in moisture. Suitable for all skin types, including post-treatment and compromised skin.",
    "image": "products.jpg"
  },
  {
    "id": "gcts",
    "name": "Gentle Facial Cleanser - Travel Size",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 10.00,
    "sku": "GCTS",
    "description": "A travel-size version of the gentle facial cleanser — amino acid-based, pH-balanced, and enriched with aloe and panthenol. Cleanses without stripping, soothes without compromising. Perfect for maintaining your post-facial skincare routine while traveling or storing in your gym bag.",
    "image": "products.jpg"
  },
  {
    "id": "glyw5",
    "name": "Glycolic Facial Cleanser *NEW* - 5oz",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 30.00,
    "sku": "GlyW5",
    "description": "A resurfacing face wash powered by glycolic acid — the gold-standard AHA for cellular turnover. This daily-use cleanser dissolves dead skin cell buildup, refines skin texture, and promotes a brighter, more even complexion with every wash. The low-pH formula provides mild exfoliation without irritation, making it suitable for regular use on dull, uneven, or aging skin. Pairs exceptionally well with vitamin C serums and retinol.",
    "image": "products.jpg"
  },
  {
    "id": "mfc5",
    "name": "Mandelic Facial Cleanser *NEW* - 5oz",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 40.00,
    "sku": "MFC5",
    "description": "A premium exfoliating cleanser formulated with mandelic acid — a large-molecule AHA derived from bitter almonds that penetrates skin gently and evenly. Mandelic acid is exceptionally well-tolerated by sensitive, darker, and acne-prone skin types, making this cleanser ideal when glycolic or salicylic acids cause irritation. Targets hyperpigmentation, fine lines, breakouts, and uneven texture simultaneously. Leaves skin noticeably smoother and more luminous from the first use.",
    "image": "products.jpg"
  },
  {
    "id": "mwts",
    "name": "Mandelic Facial Cleanser - Travel Size",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 12.00,
    "sku": "MWTS",
    "description": "The gentle, pigmentation-targeting power of mandelic acid in a travel-friendly size. Ideal for acne-prone, sensitive, or post-treatment skin on the go. Refines texture and evens tone with each use — without the sensitivity risk of stronger AHAs.",
    "image": "products.jpg"
  },
  {
    "id": "ngclts",
    "name": "New Gentle Cleansing Lotion - Travel Size",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 12.00,
    "sku": "GCLTS",
    "description": "An updated travel-size gentle cleansing lotion with an improved formula — enhanced with additional soothing actives for sensitive and post-procedure skin. The milky texture melts away makeup, sunscreen, and impurities while reinforcing the skin's moisture barrier. Fragrance-free and non-comedogenic.",
    "image": "products.jpg"
  },
  {
    "id": "ngcts",
    "name": "New Gentle Facial Cleanser - Travel Size",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 12.00,
    "sku": "NGCTS",
    "description": "An improved travel-size gentle facial cleanser with a refined amino acid base and added calming botanicals. Ideal for sensitive, dry, or reactive skin types. Cleanses thoroughly without stripping — maintaining the skin's pH balance and natural moisture barrier. Great for post-treatment maintenance.",
    "image": "products.jpg"
  },
  {
    "id": "salw",
    "name": "Salicylic Wash - Regular",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 24.00,
    "sku": "SALW",
    "description": "A targeted acne-fighting face wash centered on salicylic acid — a BHA that penetrates deep into the pore lining to dissolve sebum, dead cells, and acne-causing debris. Unlike surface-level cleansers, salicylic acid works inside the follicle to prevent blackheads, whiteheads, and inflammatory breakouts before they form. Formulated with witch hazel and green tea extract to reduce redness and inflammation. Recommended for oily, acne-prone, and congested skin.",
    "image": "products.jpg"
  },
  {
    "id": "salwts",
    "name": "Salicylic Wash - Travel Size",
    "category": "Cleansers",
    "brand": "Skin Restoration",
    "price": 10.00,
    "sku": "SALWTS",
    "description": "The full-strength salicylic acid cleanser in a compact travel size. Keeps pores clear and breakouts at bay with BHA-powered deep-pore cleansing — ideal for oily and acne-prone skin wherever your day takes you.",
    "image": "products.jpg"
  },

  /* ── TONERS ────────────────────────────────────────────────────────── */
  {
    "id": "crt8",
    "name": "Clarifying Toner - 8oz",
    "category": "Toners",
    "brand": "Skin Restoration",
    "price": 32.00,
    "sku": "CRT8",
    "description": "A professional-grade clarifying toner in a generous 8oz size — ideal for consistent daily use or professional treatment settings. Formulated with salicylic acid, witch hazel, and niacinamide to refine pores, regulate sebum, reduce post-acne redness, and restore pH balance after cleansing. Delivers a visibly mattified, clarified complexion with consistent use. Best suited for oily, acne-prone, and combination skin.",
    "image": "products.jpg"
  },
  {
    "id": "crt5",
    "name": "Clarifying Toner *NEW* - 5oz",
    "category": "Toners",
    "brand": "Skin Restoration",
    "price": 28.00,
    "sku": "CRT5",
    "description": "The latest iteration of the fan-favorite clarifying toner, now in a convenient 5oz size with an enhanced formula. Combines salicylic acid for BHA exfoliation, niacinamide to minimize pore appearance and fade dark spots, and calming botanical extracts to prevent dryness. Restores skin's ideal pH after cleansing, primes skin for serums and treatments, and visibly reduces shine and congestion over time.",
    "image": "products.jpg"
  },
  {
    "id": "crtts",
    "name": "Clarifying Toner - Travel Size",
    "category": "Toners",
    "brand": "Skin Restoration",
    "price": 10.00,
    "sku": "CRTTS",
    "description": "A travel-size version of the clarifying toner packed with salicylic acid and niacinamide. Keeps pores clear, regulates oil, and maintains skin's pH balance on the go. Ideal for oily and acne-prone skin types who don't want to skip their toning step while traveling.",
    "image": "products.jpg"
  },
  {
    "id": "gt",
    "name": "Glycolic-Lactic Toner",
    "category": "Toners",
    "brand": "Skin Restoration",
    "price": 24.00,
    "sku": "GT",
    "description": "A dual-acid exfoliating toner combining glycolic acid (AHA for surface resurfacing) and lactic acid (AHA for gentle hydration and brightening). Together, they accelerate cellular turnover, dissolve dull surface cells, improve skin texture, and visibly brighten uneven tone — all while being gentler than single high-concentration AHA formulas. Ideal for mature, dull, or sun-damaged skin. Use in the evening; always follow with SPF in the morning.",
    "image": "products.jpg"
  },
  {
    "id": "hdtts",
    "name": "Hydrating Toner - Travel Size",
    "category": "Toners",
    "brand": "Skin Restoration",
    "price": 10.00,
    "sku": "HDTTS",
    "description": "A lightweight hydrating toner mist in travel size that instantly replenishes moisture and primes skin for serums and moisturizers. Formulated with hyaluronic acid and aloe vera to soothe, plump, and prep the skin. Perfect for dry, dehydrated, or sensitive skin types — and essential for post-flight or low-humidity environments.",
    "image": "products.jpg"
  },
  {
    "id": "srwt4",
    "name": "Soothing Rosewater Toner - 4oz",
    "category": "Toners",
    "brand": "Skin Restoration",
    "price": 20.00,
    "sku": "SRWT4",
    "description": "A calming, fragrant rosewater toner formulated to instantly cool, hydrate, and soothe reactive or irritated skin. Pure rosewater provides anti-inflammatory benefits and a natural, gentle astringent effect — reducing redness and tightening pores without stripping moisture. Enriched with glycerin and allantoin for added comfort. Ideal after cleansing, during the day as a refreshing mist, or over makeup for a dewy finish.",
    "image": "products.jpg"
  },
  {
    "id": "srwt8",
    "name": "Soothing Rosewater Toner - 8oz",
    "category": "Toners",
    "brand": "Skin Restoration",
    "price": 35.00,
    "sku": "SRWT8",
    "description": "The full 8oz size of the beloved Soothing Rosewater Toner — perfect for daily use at home or in the treatment room. Pure rosewater combined with glycerin and allantoin delivers instant calming relief, pore-refining astringency, and lasting hydration. Suitable for all skin types, especially sensitive, rosacea-prone, and post-treatment skin.",
    "image": "products.jpg"
  },
  {
    "id": "srwt5",
    "name": "Soothing Rosewater Toner *NEW* - 5oz",
    "category": "Toners",
    "brand": "Skin Restoration",
    "price": 25.00,
    "sku": "SRWT5",
    "description": "The newest size of the Soothing Rosewater Toner — a 5oz bottle featuring an enhanced formula with added centella asiatica (cica) extract for deeper anti-inflammatory action. Rosewater, glycerin, allantoin, and cica work together to instantly soothe, hydrate, and protect sensitized or reactive skin. A versatile daily toner and on-demand calming mist.",
    "image": "products.jpg"
  },
  {
    "id": "srwtts",
    "name": "Soothing Rosewater Toner - Travel Size",
    "category": "Toners",
    "brand": "Skin Restoration",
    "price": 10.00,
    "sku": "SRWTTS",
    "description": "A purse-sized rosewater toner for instant skin refreshment and calming relief on the go. Mist over the face to soothe redness, rehydrate after travel, or set makeup with a natural dewy glow. Suitable for all skin types.",
    "image": "products.jpg"
  },

  /* ── SERUMS ────────────────────────────────────────────────────────── */
  {
    "id": "ad-s",
    "name": "Age Defying Serum - 1oz",
    "category": "Serums",
    "brand": "Skin Restoration",
    "price": 35.00,
    "sku": "AD-S",
    "description": "A comprehensive anti-aging serum formulated to address the primary signs of skin aging: fine lines, loss of firmness, dullness, and uneven texture. Combines peptide complexes that stimulate collagen synthesis, antioxidants that neutralize free radical damage, and hydrating hyaluronic acid that plumps the skin from within. Lightweight enough for daily use under moisturizer. For best results, apply morning and evening to clean skin.",
    "image": "products.jpg"
  },
  {
    "id": "brb",
    "name": "Brightening Booster - 1oz",
    "category": "Serums",
    "brand": "Skin Restoration",
    "price": 50.00,
    "sku": "BRB",
    "description": "A high-potency brightening serum designed to visibly fade hyperpigmentation, dark spots, sun damage, and post-inflammatory marks. Combines stable vitamin C (ascorbyl glucoside), kojic acid, and alpha arbutin to inhibit melanin production through multiple pathways — delivering more comprehensive brightening than single-ingredient approaches. Lightweight, fast-absorbing, and suitable for all skin tones including deeper complexions sensitive to irritating brighteners.",
    "image": "products.jpg"
  },
  {
    "id": "ce",
    "name": "C&E Serum",
    "category": "Serums",
    "brand": "Skin Restoration",
    "price": 50.00,
    "sku": "CE",
    "description": "A synergistic antioxidant serum combining vitamin C (ascorbic acid) and vitamin E (tocopherol) — two of the most evidence-backed antioxidants in skincare. When used together, vitamin E stabilizes and amplifies the effectiveness of vitamin C by up to fourfold, providing superior protection against UV-induced free radical damage, collagen degradation, and environmental aging. Brightens, firms, and defends skin against daily oxidative stress. Apply every morning before SPF for maximum photoprotective benefit.",
    "image": "products.jpg"
  },
  {
    "id": "cre",
    "name": "Clarity Enhanced",
    "category": "Serums",
    "brand": "Skin Restoration",
    "price": 45.00,
    "sku": "CRE",
    "description": "An advanced clarity-targeting serum that combines niacinamide, azelaic acid, and brightening botanicals to address stubborn hyperpigmentation, melasma, and post-acne marks. Niacinamide reduces melanin transfer to skin cells; azelaic acid inhibits tyrosinase activity; together they create a powerful dual-action brightening effect. Also reduces sebum production and pore visibility. Suitable for all skin tones; particularly effective for melanin-rich complexions.",
    "image": "products.jpg"
  },
  {
    "id": "crs",
    "name": "Clarity Serum",
    "category": "Serums",
    "brand": "Skin Restoration",
    "price": 38.00,
    "sku": "CRS",
    "description": "A targeted clarifying serum formulated to address active breakouts, congestion, and acne-related discoloration. Salicylic acid and tea tree extract work at the follicle level to dissolve pore blockages and fight acne-causing bacteria, while niacinamide soothes inflammation and reduces post-breakout redness. Lightweight, non-greasy, and appropriate for layering under moisturizer in oily or acne-prone routines.",
    "image": "products.jpg"
  },
  {
    "id": "enhance-ace",
    "name": "Enhance A.C.E",
    "category": "Serums",
    "brand": "Skin Restoration",
    "price": 65.00,
    "sku": "ACE",
    "description": "A premium triple-antioxidant serum delivering vitamins A (retinyl palmitate), C (ascorbic acid), and E (tocopherol) in a single, synergistic formula. Vitamin A promotes cellular renewal and collagen production; vitamin C brightens and protects against oxidative damage; vitamin E seals in moisture and amplifies C's stability. Together they create a comprehensive anti-aging, brightening, and barrier-strengthening serum. Ideal for mature or sun-damaged skin seeking visible rejuvenation.",
    "image": "products.jpg"
  },
  {
    "id": "ha05",
    "name": "Hyaluronic Serum - 0.5oz",
    "category": "Serums",
    "brand": "Skin Restoration",
    "price": 20.00,
    "sku": "HA05",
    "description": "A pure, concentrated hyaluronic acid serum in a convenient 0.5oz size. Multi-molecular weight hyaluronic acid molecules hydrate at both surface and deeper skin levels — instantly plumping fine lines and providing lasting moisture retention throughout the day. Fragrance-free, oil-free, and suitable for every skin type including oily and sensitive. Layer under any moisturizer to intensify hydration.",
    "image": "products.jpg"
  },
  {
    "id": "ha",
    "name": "Hyaluronic Serum - 1oz",
    "category": "Serums",
    "brand": "Skin Restoration",
    "price": 40.00,
    "sku": "HA",
    "description": "The full-size version of our best-selling hyaluronic acid serum. Multi-weight HA molecules deliver surface-level and deeper hydration simultaneously — visibly reducing the appearance of fine lines, improving elasticity, and maintaining a comfortable, dewy complexion all day. Lightweight enough to layer under all skin types' moisturizers and treatments. An essential step in any skincare routine.",
    "image": "products.jpg"
  },
  {
    "id": "vitac",
    "name": "Vitamin-C Serum",
    "category": "Serums",
    "brand": "Skin Restoration",
    "price": 43.00,
    "sku": "VITAC",
    "description": "A potent vitamin C serum featuring stabilized L-ascorbic acid at a clinically effective concentration. Visibly brightens dull skin, fades hyperpigmentation and sun spots, stimulates collagen production, and provides powerful antioxidant defense against environmental aggressors. Formulated with ferulic acid to enhance stability and extend antioxidant efficacy throughout the day. Best applied every morning on clean skin before SPF.",
    "image": "products.jpg"
  },
  {
    "id": "yrfs",
    "name": "Youth Restoring Facial Serum",
    "category": "Serums",
    "brand": "Skin Restoration",
    "price": 45.00,
    "sku": "YRFS",
    "description": "A comprehensive anti-aging serum that combines growth factors, peptides, and antioxidants to visibly restore a more youthful skin appearance. Growth factors signal skin cells to produce more collagen and elastin; peptides support structural protein synthesis; antioxidants shield against further damage. Together they address fine lines, loss of firmness, uneven tone, and rough texture. Suitable for mature skin or anyone seeking proactive anti-aging support.",
    "image": "products.jpg"
  },
  {
    "id": "rs",
    "name": "BioPo Retinol Serum",
    "category": "Serums",
    "brand": "BioPo",
    "price": 50.00,
    "sku": "RS",
    "description": "A clinical-grade retinol serum formulated to accelerate cellular renewal, stimulate collagen production, and address the full spectrum of aging skin concerns — fine lines, wrinkles, uneven tone, and rough texture. The encapsulated retinol delivery system ensures gradual, controlled release to minimize irritation, making it suitable for retinol-sensitive skin. Pair with a rich moisturizer for best results. Start with 2-3 nights per week and increase frequency as tolerated.",
    "image": "prod-biopo.jpg"
  },

  /* ── MOISTURIZERS ──────────────────────────────────────────────────── */
  {
    "id": "aoxm",
    "name": "Antioxidant Moisturizer - 2oz",
    "category": "Moisturizers",
    "brand": "Skin Restoration",
    "price": 33.00,
    "sku": "AOXM",
    "description": "A lightweight daily moisturizer that doubles as a protective antioxidant shield. Infused with vitamins C and E, green tea extract, and resveratrol, it neutralizes free radical damage from UV exposure and pollution while delivering lasting hydration. The non-comedogenic formula absorbs quickly without shine — ideal for oily to combination skin types seeking both hydration and environmental defense in a single step.",
    "image": "products.jpg"
  },
  {
    "id": "cpept",
    "name": "Collagen Peptide Cream - 2oz",
    "category": "Moisturizers",
    "brand": "Skin Restoration",
    "price": 26.00,
    "sku": "CPEPT",
    "description": "A skin-firming moisturizer powered by a blend of signal peptides that communicate with skin cells to boost natural collagen and elastin production. As collagen diminishes with age, this cream provides both the immediate comfort of a rich moisturizer and the long-term benefit of structural skin support. Formulated with hydrolyzed collagen, ceramides, and niacinamide to improve skin density, reduce fine line depth, and restore a smooth, plumped appearance over time.",
    "image": "products.jpg"
  },
  {
    "id": "haox",
    "name": "Hydrating Antioxidant Cream - 2oz",
    "category": "Moisturizers",
    "brand": "Skin Restoration",
    "price": 33.00,
    "sku": "HAOX",
    "description": "A rich yet fast-absorbing moisturizing cream that combines deep hydration with powerful antioxidant protection. Hyaluronic acid and sodium PCA bind moisture at multiple skin depths; vitamins C and E, coenzyme Q10, and botanical extracts protect against oxidative stress and premature aging. Ideal for normal to dry skin types seeking a single moisturizer that hydrates, nourishes, and defends. Suitable for morning and evening use.",
    "image": "products.jpg"
  },
  {
    "id": "haox4",
    "name": "Hydrating Antioxidant Cream - 4oz Large",
    "category": "Moisturizers",
    "brand": "Skin Restoration",
    "price": 55.00,
    "sku": "HAOX-4",
    "description": "The same beloved Hydrating Antioxidant Cream — combining hyaluronic acid, vitamins C and E, and CoQ10 for deep hydration and antioxidant defense — in a larger 4oz size for superior value. Ideal for those who use this cream twice daily or want a professional-size supply at home. Rich yet fast-absorbing; suitable for normal to dry and mature skin types.",
    "image": "products.jpg"
  },
  {
    "id": "hdg",
    "name": "Hydrating Gel - 1.7oz",
    "category": "Moisturizers",
    "brand": "Skin Restoration",
    "price": 25.00,
    "sku": "HDG",
    "description": "An oil-free, gel-weight moisturizer delivering intense hydration in the lightest possible texture. Formulated with multi-weight hyaluronic acid, aloe vera, and glycerin, it quenches dehydrated skin without any heaviness or shine — making it perfect for oily, acne-prone, or combination skin types that still need moisture. Also excellent under SPF and makeup, or as a post-treatment soothing step.",
    "image": "products.jpg"
  },
  {
    "id": "pepma",
    "name": "Peptide Moisturizer",
    "category": "Moisturizers",
    "brand": "Skin Restoration",
    "price": 30.00,
    "sku": "PEPMA",
    "description": "A targeted peptide-rich moisturizer designed to visibly improve skin firmness, elasticity, and smoothness over time. Bioactive signal peptides communicate with dermal fibroblasts to stimulate collagen and elastin synthesis — addressing the root causes of skin laxity and fine lines rather than just temporarily masking them. Combines peptide science with ceramide-rich emollients for a formula that firms while restoring the skin's protective lipid barrier.",
    "image": "products.jpg"
  },

  /* ── SUN PROTECTION ────────────────────────────────────────────────── */
  {
    "id": "dmts50",
    "name": "Daily Mineral Tinted SPF 50",
    "category": "Sun Protection",
    "brand": "Skin Restoration",
    "price": 48.00,
    "sku": "DMTS50",
    "description": "A premium daily mineral sunscreen with a sheer tint that adapts to various skin tones while providing broad-spectrum SPF 50 protection. Formulated with non-nano zinc oxide and titanium dioxide — two FDA-approved mineral UV filters that physically block both UVA aging rays and UVB burning rays. The buildable tint evens skin tone without a white cast. Enriched with antioxidants and niacinamide for added photoprotection and skin-tone correction. Reef-safe, fragrance-free, and non-comedogenic.",
    "image": "products.jpg"
  },
  {
    "id": "mnt",
    "name": "Mineral Sunscreen SPF40 - Non Tinted",
    "category": "Sun Protection",
    "brand": "Skin Restoration",
    "price": 48.00,
    "sku": "MNT",
    "description": "A clean, non-tinted mineral sunscreen providing broad-spectrum SPF 40 protection with zinc oxide and titanium dioxide. Formulated with a lightweight, sheer-finish base that works over or under makeup without pilling. Completely transparent on application — no white cast. Fragrance-free, paraben-free, and reef-safe. Suitable for all skin types including sensitive, post-procedure, and rosacea-prone skin. Recommended as the final morning skincare step.",
    "image": "products.jpg"
  },
  {
    "id": "mt",
    "name": "Mineral Sunscreen SPF40 - Tinted",
    "category": "Sun Protection",
    "brand": "Skin Restoration",
    "price": 48.00,
    "sku": "MT",
    "description": "A universally flattering tinted mineral sunscreen with SPF 40 that provides broad-spectrum UV protection while evening skin tone. Iron oxides in the tint formula also provide protection against visible light — a major contributor to hyperpigmentation that untinted sunscreens miss. Ideal for those with melasma, PIH, or sun damage who want comprehensive protection with a natural-finish coverage. Blends seamlessly on all skin tones.",
    "image": "products.jpg"
  },
  {
    "id": "mspf",
    "name": "Moisturizing Sunscreen SPF30",
    "category": "Sun Protection",
    "brand": "Skin Restoration",
    "price": 26.00,
    "sku": "MSPF",
    "description": "A hydrating daily sunscreen that combines SPF 30 broad-spectrum protection with rich moisturizing actives — simplifying your morning routine to a single step. Formulated with hyaluronic acid, shea butter, and antioxidant vitamins to hydrate, nourish, and defend simultaneously. The comfortable, non-greasy texture makes it ideal for dry to normal skin types that need daily sun protection without sacrificing moisture.",
    "image": "products.jpg"
  },
  {
    "id": "znt",
    "name": "Zinc Oxide SPF - Non-Tinted Acneology",
    "category": "Sun Protection",
    "brand": "Skin Restoration",
    "price": 55.00,
    "sku": "ZNT",
    "description": "A high-performance, acne-safe mineral sunscreen formulated specifically for breakout-prone skin. Non-tinted zinc oxide formula provides broad-spectrum protection without pore-clogging ingredients, synthetic fragrances, or irritating chemical UV filters. Contains niacinamide and green tea extract to reduce inflammation and sebum production. Lightweight, matte finish. Recommended by estheticians for acne-protocol clients who cannot tolerate conventional sunscreens.",
    "image": "products.jpg"
  },
  {
    "id": "zt",
    "name": "Zinc Oxide SPF - Tinted Acneology",
    "category": "Sun Protection",
    "brand": "Skin Restoration",
    "price": 50.00,
    "sku": "ZT",
    "description": "A tinted, acne-safe zinc oxide sunscreen designed for breakout-prone skin that also wants light coverage. The iron oxide tint neutralizes redness and evens tone while providing visible-light protection — particularly important for skin prone to post-inflammatory hyperpigmentation. Formulated without comedogenic ingredients, chemical filters, or fragrances. Non-greasy, matte finish suitable for oily and combination skin.",
    "image": "products.jpg"
  },

  /* ── FACE REALITY ──────────────────────────────────────────────────── */
  {
    "id": "am10",
    "name": "Acne Med 10% - 1.5oz",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 30.00,
    "sku": "AM10",
    "description": "A professional-strength 10% benzoyl peroxide spot treatment for stubborn or severe inflammatory acne. Benzoyl peroxide kills P. acnes bacteria inside the follicle and reduces the formation of new comedones — addressing active breakouts at their source. The 10% concentration is recommended for clients who have built tolerance to lower strengths. Apply a thin layer only to affected areas. Introduce gradually to minimize dryness and peeling.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "am2.5",
    "name": "Acne Med 2.5% - 1.0oz",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 28.00,
    "sku": "AM2.5",
    "description": "A gentle-entry benzoyl peroxide treatment at 2.5% concentration — clinically shown to be as effective as higher strengths while producing significantly less irritation, dryness, and peeling. Ideal for beginners starting a benzoyl peroxide regimen, those with sensitive skin, or as a maintenance treatment once acne is under control. Targets P. acnes bacteria and prevents new breakout formation without over-drying.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "am5",
    "name": "Acne Med 5% - 1.0oz",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 29.00,
    "sku": "AM5",
    "description": "A mid-strength 5% benzoyl peroxide acne treatment offering a balanced approach between efficacy and tolerability. Effectively kills acne-causing bacteria and reduces comedone formation, with less risk of irritation than the 10% formula. Recommended as a step-up from the 2.5% once tolerance is established, or as a starting point for moderate acne in clients with less sensitive skin.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "as",
    "name": "Acne Scrub",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 37.00,
    "sku": "AS",
    "description": "A dual-action exfoliating scrub designed specifically for acne-prone skin — combining physical microbeads with salicylic acid chemical exfoliation. Physically removes surface dead cell buildup that clogs pores; salicylic acid penetrates the follicle lining to dissolve sebum plugs and prevent new blockages. Helps smooth skin texture, improve product penetration, and reduce breakout frequency. Use 1-2 times per week as part of an acne management protocol.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "aopeg",
    "name": "Antioxidant Peptide Eye Gel",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 40.00,
    "sku": "AOPEG",
    "description": "A targeted eye area treatment combining antioxidant vitamins C and E with firming peptides to address fine lines, puffiness, and dark circles around the delicate eye contour. The cooling gel texture de-puffs on application while peptides work over time to stimulate collagen synthesis and restore firmness to the thin skin around the eyes. Lightweight enough to layer under concealer. Safe for lash extensions.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "aopfs",
    "name": "Antioxidant Peptide Face Serum",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 44.00,
    "sku": "AOPFS",
    "description": "A multi-function face serum merging antioxidant protection with peptide-driven anti-aging benefits. Vitamins C and E neutralize free radical damage from UV and pollution; a blend of collagen-stimulating and skin-firming peptides addresses fine lines, loss of elasticity, and uneven texture simultaneously. Suitable for normal to dry, mature, or environmentally stressed skin types. Apply before moisturizer morning and night.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "bcm",
    "name": "Brighten-C Mask",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 40.00,
    "sku": "BCM",
    "description": "A vitamin C-powered brightening treatment mask that delivers an intensive dose of stable ascorbic acid and brightening co-factors directly to dull, uneven, or sun-damaged skin. The mask format allows active ingredients to work under occlusion for deeper penetration than a leave-on serum — delivering visible luminosity in a single use. Addresses hyperpigmentation, dark spots, and overall radiance. Use weekly as a complexion-boosting treatment.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "cpep",
    "name": "Cran-Peptide Cream",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 29.00,
    "sku": "CPEP",
    "description": "A soothing, antioxidant-rich moisturizing cream combining cranberry seed oil — exceptionally high in omega-3, omega-6, and omega-9 fatty acids — with collagen-supporting peptides. The cranberry oil deeply nourishes and protects the skin barrier while delivering potent antioxidant protection; peptides support long-term firmness and elasticity. Lightweight, non-greasy finish makes it appropriate for normal to combination skin. Excellent as a calming post-treatment moisturizer.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "frbcs",
    "name": "Face Reality Brilliant Chem. SPF",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 42.00,
    "sku": "FRBCS",
    "description": "A high-performance chemical sunscreen with a brilliantly lightweight, invisible finish — designed for those who prefer the elegant texture of chemical filters over the heavier feel of mineral zinc. Provides broad-spectrum UVA/UVB protection with a formula that layers seamlessly under makeup. Includes antioxidants to boost overall photoprotection. Recommended for normal, oily, or combination skin types with no mineral filter sensitivity.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "frpms50",
    "name": "Face Reality PowerMineral SPF50",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 42.00,
    "sku": "FRPMS50",
    "description": "A powerful full-mineral SPF 50 sunscreen formulated with non-nano zinc oxide for comprehensive broad-spectrum protection. The PowerMineral formula delivers a sheer, modern finish unlike traditional mineral sunscreens — absorbing quickly without the thick white residue. Includes antioxidant support and niacinamide for additional skin benefits. Suitable for sensitive, post-treatment, and acne-prone skin. A go-to daily SPF for serious sun protection.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "hcm",
    "name": "HydraCalm Mask",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 32.00,
    "sku": "HCM",
    "description": "A deeply soothing and hydrating treatment mask formulated specifically for sensitive, inflamed, or reactive skin. Combines hyaluronic acid for intensive moisture delivery, aloe vera for cooling anti-inflammatory relief, and chamomile extract for calming redness and irritation. Ideal as a weekly treatment for reactive skin, post-peel recovery, or any time the skin needs an immediate comfort boost. Leave on for 10–15 minutes then rinse or gently tissue off.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "iap",
    "name": "InvisiClear Acne Patch",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 10.00,
    "sku": "IAP",
    "description": "Ultra-thin hydrocolloid acne patches that create an invisible, bacteria-proof seal over active breakouts. The hydrocolloid material absorbs excess fluid and sebum from the blemish, accelerating healing while preventing picking, touching, and secondary infection. Virtually undetectable under makeup. Apply to a clean, dry blemish and leave on for 6–8 hours or overnight for best results. Safe for all skin types.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "mands",
    "name": "Mandelic Scrub",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 38.00,
    "sku": "MANDS",
    "description": "A dual-action exfoliating scrub combining gentle physical exfoliation with mandelic acid chemical exfoliation. Mandelic acid — a gentle, large-molecule AHA — loosens dead skin cell bonds and brightens uneven tone while physical microparticles buff the surface smooth. Significantly gentler than glycolic or salicylic scrubs, making it suitable for sensitive, melanin-rich, and acne-prone skin types. Use 1-2 times weekly for refined, luminous skin.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "ms11",
    "name": "Mandelic Serum 11",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 39.00,
    "sku": "MS11",
    "description": "An 11% mandelic acid treatment serum for intermediate-level exfoliation and skin refinement. Mandelic acid exfoliates, brightens, and addresses both acne and hyperpigmentation simultaneously — without the irritation risk of stronger AHAs. At 11%, this serum produces meaningful cellular turnover improvements including smoother texture, reduced acne breakouts, and fading of dark spots. Suitable as a step-up from the Mandelic Serum 8 once tolerance is established.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "ms15",
    "name": "Mandelic Serum 15",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 41.00,
    "sku": "MS15",
    "description": "The highest-strength mandelic acid serum in the Face Reality line at 15% — designed for experienced users seeking advanced exfoliation, accelerated brightening, and significant acne control. Addresses persistent hyperpigmentation, stubborn breakouts, and visible signs of aging. Despite its strength, mandelic acid's large molecular size means this formula remains gentler and less sensitizing than comparable glycolic or salicylic concentrations. Use under esthetician guidance.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "ms8",
    "name": "Mandelic Serum 8",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 37.00,
    "sku": "MS8",
    "description": "An entry-level 8% mandelic acid serum — a gentle introduction to chemical exfoliation for sensitive, reactive, acne-prone, or darker skin tones. At this concentration, mandelic acid begins to produce noticeable improvements in skin texture and tone clarity without significant irritation. Ideal for clients new to acid exfoliation or transitioning off stronger actives during a skin reset period.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "scm",
    "name": "Soothing Clay Mask",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 32.00,
    "sku": "SCM",
    "description": "A purifying kaolin and bentonite clay mask that draws out impurities, excess oil, and environmental toxins from pores — without the over-drying effect typical of clay masks. Calamine and aloe vera temper the drying action of the clay with soothing anti-inflammatory benefits, leaving skin clean and clarified but never tight or stripped. Ideal for congested, oily, or acne-prone skin. Use once or twice weekly.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "sst-fr",
    "name": "Sulfur Spot Treatment - Face Reality",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 26.00,
    "sku": "SST-FR",
    "description": "A targeted spot treatment leveraging the antibacterial and keratolytic properties of sulfur to rapidly reduce inflamed acne blemishes. Sulfur dries out active pimples, kills surface bacteria, and gently exfoliates dead skin around the breakout — shrinking blemishes faster than most single-ingredient spot treatments. Suitable for inflammatory papules, pustules, and blind pimples. Apply a thin layer to individual blemishes 1-3 times daily.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "uspf",
    "name": "Ultimate Protection Sunscreen SPF28 - 2oz",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 28.00,
    "sku": "USPF",
    "description": "A broad-spectrum SPF 28 sunscreen formulated for daily use as part of an acne management protocol. Lightweight, non-comedogenic, and free of chemical UV filters that can aggravate acne. Provides essential UV protection to prevent post-inflammatory hyperpigmentation from worsening after breakouts — a critical but often overlooked step in acne care. Suitable for all skin types; dermatologist-tested.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "vita1",
    "name": "Vit A Serum - Vit A I",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 40.00,
    "sku": "VITA1",
    "description": "An introductory-level vitamin A (retinol) serum designed for retinol beginners or sensitive skin types. Uses a mild retinol ester (retinyl propionate) that converts gradually in skin, delivering the anti-aging, cell-renewing benefits of vitamin A with significantly reduced irritation, dryness, and peeling. Promotes cell turnover, smooths fine lines, improves skin tone, and refines pores over consistent use. Start 2 nights per week and increase gradually.",
    "image": "prod-face-reality.jpg"
  },
  {
    "id": "vita2",
    "name": "Vit A Serum - Vit A II",
    "category": "Skincare",
    "brand": "Face Reality",
    "price": 50.00,
    "sku": "VITA2",
    "description": "An advanced vitamin A serum featuring a higher-potency retinol concentration for experienced retinol users seeking more aggressive cellular renewal and anti-aging results. Step up from Vit A I once your skin has adapted to retinol and you want enhanced collagen stimulation, deeper fine line reduction, and more pronounced skin resurfacing. Use 2-3 nights per week with SPF diligently during the day.",
    "image": "prod-face-reality.jpg"
  },

  /* ── SKINCARE — OTHER PRODUCTS ─────────────────────────────────────── */
  {
    "id": "egfc",
    "name": "EGF Night Cream",
    "category": "Skincare",
    "brand": "BioPo",
    "price": 55.00,
    "sku": "EGFC",
    "description": "An advanced night repair cream featuring Epidermal Growth Factor (EGF) — a signaling protein that directly stimulates skin cell regeneration, collagen production, and wound healing. Used extensively in clinical settings, EGF accelerates nighttime skin renewal beyond what traditional anti-aging ingredients can achieve. Rich, nourishing cream base ensures deep moisturization during sleep while EGF initiates cellular-level repair. For mature, damaged, or compromised skin seeking accelerated recovery.",
    "image": "prod-biopo.jpg"
  },
  {
    "id": "hac",
    "name": "Hyaluronic Acid Cream",
    "category": "Skincare",
    "brand": "BioPo",
    "price": 48.00,
    "sku": "HAC",
    "description": "A concentrated hyaluronic acid moisturizing cream delivering intensive, multi-level hydration to dry, dehydrated, and mature skin. Combines multiple molecular weights of hyaluronic acid — from large molecules that hydrate at the surface to smaller molecules that penetrate deeper — with ceramides and shea butter for comprehensive moisture retention and barrier reinforcement. Leaves skin visibly plumper, smoother, and more supple from first use.",
    "image": "prod-biopo.jpg"
  },
  {
    "id": "rec",
    "name": "Revitalizing Eye Cream",
    "category": "Skincare",
    "brand": "BioPo",
    "price": 85.00,
    "sku": "REC",
    "description": "A premium, multi-action eye cream combining EGF, peptides, hyaluronic acid, and caffeine to comprehensively address all major periorbital concerns: fine lines, crow's feet, dark circles, puffiness, and loss of firmness. EGF and peptides stimulate collagen renewal in the delicate eye area; HA plumps fine lines; caffeine constricts blood vessels to reduce dark circles and puffiness. A complete eye rejuvenation treatment in one jar.",
    "image": "prod-biopo.jpg"
  },
  {
    "id": "ws",
    "name": "Whitening Serum",
    "category": "Skincare",
    "brand": "BioPo",
    "price": 50.00,
    "sku": "WS",
    "description": "A targeted brightening serum designed to fade hyperpigmentation, melasma, dark spots, and uneven skin tone through multi-pathway melanin inhibition. Combines alpha arbutin, kojic acid, and niacinamide — three of the most clinically studied brightening actives — for comprehensive and synergistic skin-tone correction. Lightweight serum texture absorbs quickly and layers easily under moisturizer and SPF. Consistent use over 4-8 weeks produces significant visible improvement in skin clarity.",
    "image": "prod-biopo.jpg"
  },
  {
    "id": "wc",
    "name": "Whitening Cream",
    "category": "Skincare",
    "brand": "BioPo",
    "price": 55.00,
    "sku": "WC",
    "description": "A brightening moisturizing cream that addresses hyperpigmentation and uneven skin tone while delivering deep, lasting hydration. Alpha arbutin, kojic acid, and tranexamic acid inhibit melanin production through complementary pathways; rich emollients — shea butter, ceramides, and squalane — nourish and strengthen the skin barrier simultaneously. An ideal combination of brightening treatment and moisturizer for dry, hyperpigmented, or mature skin types.",
    "image": "prod-biopo.jpg"
  },
  {
    "id": "ascs",
    "name": "Apple Stem Cell Serum",
    "category": "Skincare",
    "brand": "DermaSerum",
    "price": 45.00,
    "sku": "ASCS",
    "description": "A cutting-edge anti-aging serum harnessing the power of plant-derived apple stem cell extract to protect and activate the skin's own stem cells. Research indicates apple stem cell extract helps preserve the vitality and longevity of epidermal stem cells — delaying the signs of aging at a cellular level. Combined with hyaluronic acid and peptides, this serum improves skin density, reduces fine lines, and restores a youthful, luminous complexion.",
    "image": "prod-dermaserum.jpg"
  },
  {
    "id": "egfs",
    "name": "EGF Serum",
    "category": "Skincare",
    "brand": "DermaSerum",
    "price": 55.00,
    "sku": "EGFS",
    "description": "A high-potency serum delivering Epidermal Growth Factor (EGF) in a lightweight, fast-absorbing formula for maximum penetration and efficacy. EGF binds to cell receptors to directly stimulate collagen production, skin cell renewal, and tissue repair — producing measurable improvements in fine lines, skin texture, tone, and overall youthfulness. Particularly effective after microneedling, chemical peels, or other treatments that temporarily increase skin permeability.",
    "image": "prod-dermaserum.jpg"
  },
  {
    "id": "vcs",
    "name": "Vital C Serum",
    "category": "Skincare",
    "brand": "DermaSerum",
    "price": 45.00,
    "sku": "VCS",
    "description": "A stable, high-efficacy vitamin C serum delivering L-ascorbic acid in a pH-optimized formula for maximum brightening, antioxidant, and collagen-stimulating impact. Formulated with ferulic acid and vitamin E for enhanced stability and synergistic antioxidant performance — a combination clinically demonstrated to double UV protection. Visibly brightens dull skin, fades dark spots, and firms over time. Best applied every morning before SPF.",
    "image": "prod-dermaserum.jpg"
  },
  {
    "id": "bmtspf",
    "name": "BioPo Mineral Tinted SPF",
    "category": "Skincare",
    "brand": "BioPo",
    "price": 45.00,
    "sku": "BMTSPF",
    "description": "A mineral-based tinted sunscreen offering broad-spectrum UV protection with a buildable, natural-looking finish. Zinc oxide and titanium dioxide provide physical sun protection; iron oxide pigments add visible-light protection especially important for melasma and hyperpigmentation-prone skin. The formula includes antioxidant and skin-brightening actives to deliver skincare benefits alongside sun protection. Reef-safe and suitable for sensitive and reactive skin.",
    "image": "prod-biopo.jpg"
  },
  {
    "id": "ig",
    "name": "Ice Globes - Cryo Freeze",
    "category": "Skincare",
    "brand": "",
    "price": 55.00,
    "sku": "IG",
    "description": "Professional-grade cryo freeze ice globes for at-home facial massage and lymphatic drainage. Chilling the globes before use activates the cryotherapy effect — constricting blood vessels to immediately reduce puffiness, redness, and inflammation, then dilating them to boost circulation and product absorption. A powerful de-puffing, firming, and soothing treatment tool. Massage in upward strokes for 3–5 minutes after applying your serum for enhanced penetration and instant sculpting effect.",
    "image": "products.jpg"
  },
  {
    "id": "lemieux-ha",
    "name": "Le Mieux Hyaluronic Acid",
    "category": "Skincare",
    "brand": "Le Mieux",
    "price": 65.00,
    "sku": "LEMHA",
    "description": "A professional-grade hyaluronic acid serum from the esteemed Le Mieux cosmeceutical line. Uses triple-weight hyaluronic acid technology to hydrate at the surface, mid-dermis, and deeper skin layers simultaneously — providing unparalleled plumping, line-smoothing, and moisture-binding performance. Clinically tested and free of parabens, sulfates, and artificial fragrances. A gold-standard hydration serum trusted by leading skincare professionals.",
    "image": "prod-lemieux.jpg"
  },
  {
    "id": "lemieux-vitc",
    "name": "Le Mieux Vit C",
    "category": "Skincare",
    "brand": "Le Mieux",
    "price": 65.00,
    "sku": "LEMVC",
    "description": "A professional-strength vitamin C serum from Le Mieux featuring stabilized tetrahexyldecyl ascorbate — a lipid-soluble vitamin C derivative that penetrates more deeply than water-soluble L-ascorbic acid and is significantly more stable. Delivers superior brightening, collagen stimulation, and antioxidant protection without the oxidation instability of traditional vitamin C serums. Elegant, non-irritating formula suitable for all skin types including sensitive.",
    "image": "prod-lemieux.jpg"
  },
  {
    "id": "lstim",
    "name": "LightStim Handheld LED",
    "category": "Skincare",
    "brand": "LightStim",
    "price": 229.00,
    "sku": "LSTIM",
    "description": "An FDA-cleared handheld LED light therapy device delivering clinically proven red and near-infrared light wavelengths to stimulate collagen production, reduce fine lines, and improve overall skin texture at home. Red light (630nm) promotes circulation and collagen synthesis; near-infrared light (855nm) penetrates deeper to support cellular energy production and tissue repair. Backed by published clinical studies. Use 3 minutes per area, 3–5 times per week for visible results within 4–8 weeks.",
    "image": "prod-lightstim.jpg"
  },
  {
    "id": "rc",
    "name": "Retinol Cream",
    "category": "Skincare",
    "brand": "",
    "price": 60.00,
    "sku": "RC",
    "description": "A richly nourishing retinol night cream delivering the gold-standard anti-aging benefits of vitamin A in a moisturizer-first formula that minimizes the typical dryness and irritation associated with retinol use. Encapsulated retinol releases gradually to promote cellular turnover, smooth fine lines, refine pores, and improve skin tone — while ceramides, peptides, and shea butter reinforce the skin barrier and maintain comfort. Ideal for beginners and those with drier skin types seeking retinol benefits.",
    "image": "products.jpg"
  },
  {
    "id": "solarx50",
    "name": "SolarX50",
    "category": "Skincare",
    "brand": "",
    "price": 35.00,
    "sku": "SX50",
    "description": "A high-protection, lightweight broad-spectrum SPF 50 sunscreen designed for all-day wear. Advanced UVA/UVB filter system provides maximum protection against photoaging and burning rays. Water-resistant formula with a clean, non-greasy finish suitable for daily wear on face and body. Fragrance-free, dermatologist-tested, and non-comedogenic. An essential for clients in active acne treatment protocols or with hyperpigmentation concerns.",
    "image": "products.jpg"
  },

  /* ── RHONDA ALLISON ────────────────────────────────────────────────── */
  {
    "id": "apml",
    "name": "Amino Peptide Moisturizer - Large",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 42.00,
    "sku": "APML",
    "description": "A professional-size amino acid and peptide-enriched moisturizer providing deep, long-lasting hydration with visible firming benefits. Amino acids form a breathable moisture film on the skin surface while peptides communicate with deeper skin layers to stimulate collagen and elastin synthesis. The lightweight yet nourishing texture suits normal to combination skin seeking moisture and long-term structural support. Ideal for daily use morning and evening.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "apms",
    "name": "Amino Peptide Moisturizer - Small",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 15.00,
    "sku": "APMS",
    "description": "The travel or trial size of Rhonda Allison's amino peptide moisturizer — perfect for experiencing this peptide-rich formula before committing to a full size, or for maintaining your skincare routine on the go. Same formulation: amino acids for surface hydration, peptides for deeper collagen support, and a lightweight texture suitable for normal to combination skin.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "bbcl",
    "name": "Beta Bright Cleanser - Large",
    "category": "Cleansers",
    "brand": "Rhonda Allison",
    "price": 30.00,
    "sku": "BBCL",
    "description": "A brightening cleansing gel from Rhonda Allison featuring beta hydroxy acid (BHA) and lactic acid for simultaneous deep pore cleansing and radiance-enhancing exfoliation. BHA penetrates follicles to dissolve sebum and prevent breakouts; lactic acid gently resurfaces the skin surface to improve tone and luminosity. Ideal for dull, uneven, or breakout-prone skin seeking a daily wash that does more than just cleanse.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "bwl",
    "name": "Brightening Wash - Large",
    "category": "Cleansers",
    "brand": "Rhonda Allison",
    "price": 33.00,
    "sku": "BWL",
    "description": "A professional-size brightening face wash from Rhonda Allison combining gentle AHA exfoliation, kojic acid, and vitamin C to brighten, resurface, and even skin tone with every cleanse. Mild enough for daily use while delivering real pigmentation-correcting and luminosity-boosting benefits. Suitable for normal to combination skin with dullness, sun damage, or mild hyperpigmentation concerns.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "bws",
    "name": "Brightening Wash - Small",
    "category": "Cleansers",
    "brand": "Rhonda Allison",
    "price": 10.00,
    "sku": "BWS",
    "description": "The travel or sample size of Rhonda Allison's Brightening Wash. AHA exfoliation and kojic acid deliver brightening and tone-evening benefits in a mild, daily-use cleanser. A great way to trial this fan-favorite formula or maintain your brightening routine on the go.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "brcr",
    "name": "Brightening Cream",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 55.00,
    "sku": "BRCR",
    "description": "A concentrated brightening moisturizer from Rhonda Allison targeting hyperpigmentation, melasma, and uneven skin tone with a potent cocktail of kojic acid, vitamin C, azelaic acid, and niacinamide. Multi-pathway melanin inhibition delivers more comprehensive tone correction than single-ingredient brighteners. Rich emollient base simultaneously nourishes and protects the skin barrier. For best results, use in combination with SPF 40+ and a vitamin C serum.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "brl",
    "name": "Brightening Lotion - Large",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 40.00,
    "sku": "BRL",
    "description": "A lightweight brightening body and face lotion combining kojic acid, lactic acid, and vitamin C to fade discoloration, improve skin radiance, and smooth texture over time. The lotion texture is easily spreadable and absorbs quickly, making it practical for both face and body hyperpigmentation. Consistent daily use produces visible improvement in sun spots, post-inflammatory marks, and overall skin luminosity.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "brls",
    "name": "Brightening Lotion - Small",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 15.00,
    "sku": "BRLS",
    "description": "The travel or trial size of Rhonda Allison's Brightening Lotion with kojic acid, lactic acid, and vitamin C. Fades dark spots and improves skin luminosity in a lightweight lotion that absorbs quickly. Perfect for trialing the formula before purchasing the full size.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "brscrl",
    "name": "Brightening Scrub - Large",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 50.00,
    "sku": "BRSCRL",
    "description": "A triple-action brightening exfoliating scrub combining physical microparticles, glycolic acid, and kojic acid to resurface dull skin and visibly fade pigmentation. Physical exfoliation removes surface dead cells; glycolic acid accelerates cellular turnover at a deeper level; kojic acid targets melanin formation to address existing dark spots. Use 1-2 times weekly to reveal smoother, brighter, more even-toned skin.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "brscrs",
    "name": "Brightening Scrub - Small",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 32.00,
    "sku": "BRSCRS",
    "description": "The smaller size of Rhonda Allison's triple-action Brightening Scrub. Physical exfoliation, glycolic acid, and kojic acid work together to resurface skin and fade pigmentation 1-2 times weekly. A great option for those new to the scrub or wanting to assess compatibility before investing in the larger size.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "ccsl",
    "name": "Cucumber Spray - Large",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 30.00,
    "sku": "CCSL",
    "description": "A refreshing cucumber-infused hydrating mist from Rhonda Allison that instantly cools, soothes, and rehydrates skin throughout the day. Cucumber extract delivers anti-inflammatory and antioxidant benefits while glycerin and aloe vera lock in moisture. Use as a toner after cleansing, a midday refresher, or a finishing mist to set makeup. Suitable for all skin types; especially soothing for inflamed, post-treatment, or heat-stressed skin.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "ccss",
    "name": "Cucumber Spray - Small",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 15.00,
    "sku": "CCSS",
    "description": "The travel-size cucumber hydrating mist by Rhonda Allison — a purse-ready bottle of instant skin cooling and calming relief. Cucumber extract soothes inflammation; glycerin and aloe vera rehydrate dry or tight skin on demand. Keep in your bag for post-workout refreshment or midday skin revival.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "el",
    "name": "Eye Lift",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 54.00,
    "sku": "EL",
    "description": "A firming, lifting eye treatment from Rhonda Allison targeting sagging, crepiness, fine lines, and puffiness in the delicate eye contour area. Features a targeted blend of tightening peptides, hydrolyzed collagen, and caffeine that visibly firms and de-puffs on contact while working long-term to rebuild structural skin support. The silky serum-cream texture layers seamlessly under concealer or eye shadow. A clinical-quality home treatment for drooping or aging eye contours.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "fpcl",
    "name": "Foaming Peptide Cleanser - Regular",
    "category": "Cleansers",
    "brand": "Rhonda Allison",
    "price": 31.00,
    "sku": "FPCL",
    "description": "A sophisticated foaming facial cleanser combining gentle amino acid surfactants with a collagen-supporting peptide complex. Thoroughly cleanses skin while delivering peptides that prime skin for treatment-step absorption and begin supporting the skin's structural matrix from the very first step of your routine. The light foam texture removes makeup, sunscreen, and impurities without stripping — leaving skin clean, soft, and peptide-primed. Suitable for normal to dry skin.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "fpcs",
    "name": "Foaming Peptide Cleanser - Small",
    "category": "Cleansers",
    "brand": "Rhonda Allison",
    "price": 12.00,
    "sku": "FPCS",
    "description": "The travel or trial size of Rhonda Allison's Foaming Peptide Cleanser — a gentle amino acid foam enriched with collagen-supporting peptides. Cleanses without stripping while priming skin for subsequent treatment steps. Ideal for maintaining your routine on the go or sampling before a full-size purchase.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "gfg",
    "name": "Growth Factor Gel",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 20.00,
    "sku": "GFG",
    "description": "A lightweight growth factor gel from Rhonda Allison that delivers concentrated cellular signaling proteins to accelerate skin repair, stimulate collagen production, and improve skin renewal. Growth factors bind directly to skin cell receptors to enhance the skin's own regenerative capacity — reducing fine lines, improving firmness, and speeding recovery from environmental damage or professional treatments. The gel texture absorbs rapidly without residue; ideal for layering under heavier serums or moisturizers.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "mur",
    "name": "Makeup Remover",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 15.00,
    "sku": "MUR",
    "description": "A gentle yet thorough makeup remover that dissolves even waterproof formulas without tugging, irritating, or disrupting the skin barrier. Formulated with micellar technology and conditioning emollients that lift makeup from the skin surface while simultaneously nourishing and soothing. Safe for use around the eyes including with lash extensions. Leaves skin clean, soft, and ready for cleansing. Suitable for all skin types including sensitive.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "mez",
    "name": "Moisture Eye-Zyme",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 27.00,
    "sku": "MEZ",
    "description": "A unique enzymatic eye treatment from Rhonda Allison combining gentle papain enzyme exfoliation with intensive moisture delivery to the delicate periorbital area. Papain dissolves dead skin cell buildup around the eyes — reducing fine lines and improving product absorption — while hyaluronic acid and soothing botanicals deeply hydrate and plump. An innovative approach to eye area care that addresses both texture and hydration simultaneously.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "omh",
    "name": "Omega Hydration",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 20.00,
    "sku": "OMH",
    "description": "A barrier-restoring omega fatty acid complex that replenishes the skin's essential lipid content — the building blocks of a healthy, resilient skin barrier. Rich in omega-3, omega-6, and omega-9 fatty acids derived from botanical seed oils, this treatment actively repairs damaged, sensitized, or compromised skin barriers. Reduces transepidermal water loss, calms reactivity, and improves the skin's ability to retain moisture and resist environmental triggers.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "p3n1",
    "name": "Peptide 3-N-1",
    "category": "Skincare",
    "brand": "Rhonda Allison",
    "price": 54.00,
    "sku": "P3N1",
    "description": "An advanced multi-functional peptide treatment from Rhonda Allison combining three distinct classes of bioactive peptides: signal peptides (stimulate collagen and elastin production), carrier peptides (deliver copper to support collagen cross-linking), and neurotransmitter-inhibiting peptides (relax facial tension to reduce expression line depth). A comprehensive peptide approach that addresses aging at multiple levels — producing improvements in firmness, line reduction, and overall skin quality.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "pw",
    "name": "Pumpkin Wash - Large",
    "category": "Cleansers",
    "brand": "Rhonda Allison",
    "price": 33.00,
    "sku": "PW",
    "description": "A unique enzymatic cleanser featuring pumpkin enzyme — a natural proteolytic enzyme that gently dissolves dead skin protein on the surface, providing mild exfoliation with every cleanse. Pumpkin is naturally rich in vitamin A, vitamin C, and beta carotene, delivering antioxidant skin benefits alongside cleansing. The result is a cleanser that not only removes impurities but also progressively improves skin texture, radiance, and resilience with consistent use.",
    "image": "prod-rhonda-allison.jpg"
  },
  {
    "id": "rhc",
    "name": "Rosemary Herbal Cleanser",
    "category": "Cleansers",
    "brand": "Rhonda Allison",
    "price": 30.00,
    "sku": "RHC",
    "description": "A botanical-rich herbal face wash featuring rosemary leaf extract as the hero ingredient — a powerful antioxidant and antimicrobial botanical that cleanses while protecting skin from oxidative damage and microbial imbalance. Formulated with a blend of skin-balancing herbs and gentle surfactants that leave skin refreshed, balanced, and lightly fragranced with natural rosemary. Suitable for normal to oily skin types seeking a natural, botanical cleansing experience.",
    "image": "prod-rhonda-allison.jpg"
  },

  /* ── MISC / OTHER ──────────────────────────────────────────────────── */
  {
    "id": "lb",
    "name": "Lip Balm SPF45",
    "category": "Skincare",
    "brand": "Skin Restoration",
    "price": 13.00,
    "sku": "LB",
    "description": "A nourishing, broad-spectrum SPF 45 lip balm that protects the delicate lip skin from UVA aging rays and UVB burning rays while deeply moisturizing with shea butter, vitamin E, and beeswax. The lips have minimal melanin and very thin skin, making them highly susceptible to sun damage, premature lines, and dryness. This SPF lip balm provides essential daily photoprotection in a comfortable, non-greasy formula. Reapply every 2 hours in sun exposure.",
    "image": "products.jpg"
  },
  {
    "id": "ssoral",
    "name": "Serene Skin Oral Probiotic",
    "category": "Skincare",
    "brand": "Skin Restoration",
    "price": 67.00,
    "sku": "SSORAL",
    "description": "An oral probiotic supplement specifically formulated to support skin health from within. Targeted Lactobacillus and Bifidobacterium strains modulate the gut-skin axis — reducing systemic inflammation that manifests as acne, rosacea, eczema, and dullness. Clinical research supports oral probiotics as a complementary approach to topical skincare, particularly for inflammatory skin conditions. Take daily with a meal for best results; visible improvements typically appear after 6-8 weeks of consistent use.",
    "image": "products.jpg"
  },
  {
    "id": "ascc",
    "name": "Apple Stem Cell Cream",
    "category": "Skincare",
    "brand": "",
    "price": 62.00,
    "sku": "ASCC",
    "description": "A luxurious anti-aging face cream powered by patented apple stem cell extract — shown in clinical studies to help protect and stimulate the skin's own epidermal stem cells, extending their longevity and regenerative capacity. Formulated with peptides, hyaluronic acid, and rich emollients, this cream delivers visible improvements in skin density, fine line depth, and overall radiance. An advanced stem cell technology treatment in an elegant, skin-nourishing cream base.",
    "image": "products.jpg"
  }

];
