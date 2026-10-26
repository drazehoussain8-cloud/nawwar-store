/* ==========================================================================
   config.js — YOUR STORE SETTINGS  (edit this file first!)
   Everything on the site that should change per client is here:
   store name, WhatsApp number, social links, address, currency, offer date.
   ========================================================================== */

window.STORE = {
  /* ---- Identity ---- */
  name: { ar: "نوّار", en: "Nawwar" },

  /* ---- Contact (DEMO VALUES — replace with the real ones) ---- */
  // WhatsApp number in international format, digits only, no "+" or spaces.
  // Example for Morocco: 212612345678
  whatsapp: "212600000000",
  phoneDisplay: "+212 600 000 000",
  email: "hello@your-store.example",
  address: {
    ar: "عنوان المتجر هنا، اسم المدينة، المغرب",
    en: "Your store address here, City, Morocco"
  },
  hours: {
    ar: "كل يوم من 9:00 صباحاً إلى 9:00 مساءً",
    en: "Every day, 9:00 AM – 9:00 PM"
  },

  /* ---- Social links (DEMO — put the real page links) ---- */
  social: {
    facebook: "https://facebook.com/your-page",
    instagram: "https://instagram.com/your-page"
  },

  /* ---- Money ---- */
  currency: { ar: "د.م.", en: "MAD" },

  /* ---- Special-offer countdown ----
     Any date in the past or future works. When the date passes, the timer
     automatically restarts a new 3-day cycle so it never shows 00:00:00. */
  offerAnchor: "2026-11-01T00:00:00",
  offerCycleDays: 3,

  /* ---- Order message sent to WhatsApp ---- */
  messages: {
    ar: {
      order: "السلام عليكم، أريد طلب:\n• المنتج: {name}\n• الكمية: {qty}\n• المقاس/الخيار: {size}\n• السعر: {price}\nشكراً.",
      general: "السلام عليكم، أريد الاستفسار عن منتجاتكم.",
      contact: "السلام عليكم،\nالاسم: {name}\nالهاتف: {phone}\nالرسالة: {message}"
    },
    en: {
      order: "Hello, I would like to order:\n• Product: {name}\n• Quantity: {qty}\n• Size/Option: {size}\n• Price: {price}\nThank you.",
      general: "Hello, I'd like to ask about your products.",
      contact: "Hello,\nName: {name}\nPhone: {phone}\nMessage: {message}"
    }
  }
};
