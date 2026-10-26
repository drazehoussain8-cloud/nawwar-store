/* ==========================================================================
   products.js — YOUR PRODUCT CATALOG  (edit / add / remove products here)
   Each product appears automatically on Home, Shop and Product pages,
   in Arabic and English. All 8 items below are DEMO samples — replace them.
   Images live in assets/images/ (see docs/IMAGES.md for sizes).
   ========================================================================== */

window.CATEGORIES = [
  { id: "clothing", image: "cat-clothing.jpg", name: { ar: "ملابس", en: "Clothing" } },
  { id: "bags",     image: "cat-bags.jpg",     name: { ar: "حقائب وأحذية", en: "Bags & Shoes" } },
  { id: "beauty",   image: "cat-beauty.jpg",   name: { ar: "عناية وجمال", en: "Beauty & Care" } },
  { id: "home",     image: "cat-home.jpg",     name: { ar: "المنزل", en: "Home" } }
];

/* price / old = numbers in the store currency. old = 0 → no discount shown.
   badge: "new" | "sale" | "best" | "" .  sizes: [] → no size picker.
   featured: true → shown in the "Featured products" section of the home page. */
window.PRODUCTS = [
  {
    id: 1, cat: "clothing", image: "product-1.jpg", price: 450, old: 590, badge: "sale", rating: 4.9, reviews: 128, featured: true,
    sizes: ["S", "M", "L", "XL"],
    name: { ar: "قفطان مطرز بالأحمر والذهبي", en: "Embroidered Festive Kaftan" },
    desc: {
      ar: "قفطان أنيق بتطريز يدوي دقيق، مناسب للأعراس والأعياد والمناسبات العائلية. قماش مريح وخفيف يحافظ على شكله بعد الغسيل.",
      en: "An elegant kaftan with fine hand embroidery, perfect for weddings, Eid and family occasions. Light, comfortable fabric that keeps its shape after washing."
    },
    features: {
      ar: ["تطريز يدوي بخيوط ذهبية", "قماش خفيف ومريح", "متوفر بمقاسات متعددة"],
      en: ["Hand embroidery with golden thread", "Light and comfortable fabric", "Available in several sizes"]
    }
  },
  {
    id: 2, cat: "clothing", image: "product-2.jpg", price: 380, old: 0, badge: "new", rating: 4.8, reviews: 76, featured: true,
    sizes: ["M", "L", "XL", "XXL"],
    name: { ar: "جلابة رجالية بغطاء رأس", en: "Men's Hooded Djellaba" },
    desc: {
      ar: "جلابة رجالية عملية بتفصيل مغربي أصيل، دافئة في الشتاء ومحترمة في كل مناسبة. خياطة متينة وألوان هادئة.",
      en: "A practical men's djellaba with authentic Moroccan tailoring — warm in winter and dignified for every occasion. Strong stitching and calm colors."
    },
    features: {
      ar: ["تفصيل مغربي أصيل", "خياطة متينة تدوم طويلاً", "دافئة ومريحة"],
      en: ["Authentic Moroccan tailoring", "Durable stitching that lasts", "Warm and comfortable"]
    }
  },
  {
    id: 3, cat: "bags", image: "product-3.jpg", price: 190, old: 230, badge: "sale", rating: 4.7, reviews: 214, featured: true,
    sizes: ["38", "39", "40", "41", "42", "43"],
    name: { ar: "بلغة جلدية تقليدية", en: "Traditional Leather Babouche" },
    desc: {
      ar: "بلغة مصنوعة من الجلد الطبيعي بصنعة الحرفيين المغاربة. نعل مريح وشكل كلاسيكي يناسب اللباس التقليدي والعصري.",
      en: "Babouche made from genuine leather by Moroccan craftsmen. Comfortable sole and a classic look that suits both traditional and modern outfits."
    },
    features: {
      ar: ["جلد طبيعي 100%", "صناعة يدوية", "نعل مريح للمشي"],
      en: ["100% genuine leather", "Handmade craftsmanship", "Comfortable walking sole"]
    }
  },
  {
    id: 4, cat: "bags", image: "product-4.jpg", price: 320, old: 0, badge: "best", rating: 4.9, reviews: 301, featured: true,
    sizes: [],
    name: { ar: "حقيبة يد جلدية منسوجة", en: "Woven Leather Handbag" },
    desc: {
      ar: "حقيبة يد أنيقة بجلد ناعم ونسيج يدوي مميز. مساحة واسعة للأغراض اليومية ومقبض قوي يدوم طويلاً.",
      en: "An elegant handbag in soft leather with distinctive hand-woven detail. Roomy for daily essentials with a strong, long-lasting handle."
    },
    features: {
      ar: ["جلد ناعم ومتين", "نسيج يدوي مميز", "جيوب داخلية منظمة"],
      en: ["Soft, durable leather", "Distinctive hand weaving", "Organized inner pockets"]
    }
  },
  {
    id: 5, cat: "beauty", image: "product-5.jpg", price: 95, old: 120, badge: "sale", rating: 4.9, reviews: 452, featured: true,
    sizes: ["50ml", "100ml"],
    name: { ar: "زيت أركان طبيعي", en: "Natural Argan Oil" },
    desc: {
      ar: "زيت أركان نقي للعناية بالبشرة والشعر، معبأ في زجاجة داكنة للحفاظ على جودته. استعمل بضع قطرات يومياً.",
      en: "Pure argan oil for skin and hair care, bottled in dark glass to protect its quality. Use a few drops daily."
    },
    features: {
      ar: ["نقي وخالٍ من الإضافات", "زجاجة داكنة تحفظ الجودة", "للبشرة والشعر"],
      en: ["Pure, with no additives", "Dark glass protects quality", "For skin and hair"]
    }
  },
  {
    id: 6, cat: "beauty", image: "product-6.jpg", price: 60, old: 0, badge: "new", rating: 4.6, reviews: 89, featured: false,
    sizes: [],
    name: { ar: "طقم صابون بلدي وكيس الحمام", en: "Beldi Soap & Kessa Set" },
    desc: {
      ar: "طقم تقليدي للحمام المغربي: صابون بلدي طبيعي مع كيس التقشير. ينعّم البشرة ويمنحها نضارة.",
      en: "A traditional Moroccan hammam set: natural beldi soap with an exfoliating kessa glove. Softens skin and leaves it fresh."
    },
    features: {
      ar: ["صابون طبيعي", "كيس تقشير مرفق", "هدية مثالية"],
      en: ["Natural soap", "Exfoliating glove included", "A perfect gift"]
    }
  },
  {
    id: 7, cat: "home", image: "product-7.jpg", price: 260, old: 310, badge: "sale", rating: 4.8, reviews: 143, featured: false,
    sizes: [],
    name: { ar: "طقم شاي مغربي بصينية", en: "Moroccan Tea Set with Tray" },
    desc: {
      ar: "طقم شاي كامل بإبريق وكؤوس مزخرفة وصينية أنيقة. ضيافة مغربية أصيلة تزيّن بيتك وتبهر ضيوفك.",
      en: "A complete tea set with teapot, decorated glasses and an elegant tray. Authentic Moroccan hospitality that adorns your home and impresses guests."
    },
    features: {
      ar: ["إبريق + 6 كؤوس + صينية", "زخارف مغربية", "يصلح كهدية"],
      en: ["Teapot + 6 glasses + tray", "Moroccan decorative patterns", "Makes a great gift"]
    }
  },
  {
    id: 8, cat: "home", image: "product-8.jpg", price: 290, old: 0, badge: "", rating: 4.7, reviews: 64, featured: false,
    sizes: [],
    name: { ar: "هندبل صوفي منسوج يدوياً", en: "Handwoven Wool Hanbel Blanket" },
    desc: {
      ar: "غطاء هندبل ملوّن منسوج يدوياً من الصوف، دافئ وخفيف. يصلح للأريكة أو السرير أو كديكور بألوان مغربية.",
      en: "A colorful hanbel blanket hand-woven from wool — warm and light. Great for the sofa, the bed, or as décor in Moroccan colors."
    },
    features: {
      ar: ["صوف طبيعي", "نسج يدوي ملوّن", "دافئ وخفيف"],
      en: ["Natural wool", "Colorful hand weaving", "Warm and light"]
    }
  }
];
