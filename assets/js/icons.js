/* ==========================================================================
   icons.js — Inline SVG icon set (no external library, works offline)
   Usage in HTML:  <svg class="icon" data-icon="cart" aria-hidden="true"></svg>
   Every icon is a 24×24 stroke icon drawn for this template.
   To add an icon: add a new key below with its SVG inner markup.
   ========================================================================== */

(function () {
  var ICONS = {
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
    heart: '<path d="M12 20.5S4.5 16 4.5 10A4.2 4.2 0 0 1 12 7.6 4.2 4.2 0 0 1 19.5 10c0 6-7.5 10.5-7.5 10.5z"/>',
    bag: '<path d="M5.5 8h13l1 12h-15l1-12z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
    handbag: '<path d="M4.5 10h15l-1.2 10H5.7L4.5 10z"/><path d="M8.5 10V8a3.5 3.5 0 0 1 7 0v2"/>',
    whatsapp: '<path d="M4 20l1.4-4.3A8.3 8.3 0 1 1 8.5 18.6L4 20z"/><path d="M9.2 8.8c-.3 1.6.9 3.6 2.4 4.7 1.2.9 2.6 1.5 3.7 1.1l.6-1.3-1.7-.9-.8.6c-.7-.3-1.5-1-2-1.8l.6-.8-.8-1.8-2 .2z"/>',
    facebook: '<path d="M14 21v-7.5h2.6l.5-3H14V8.6c0-.9.4-1.6 1.7-1.6h1.5V4.3A15 15 0 0 0 15 4c-2.4 0-4 1.5-4 4.1v2.4H8.5v3H11V21h3z"/>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".8" fill="currentColor"/>',
    truck: '<path d="M3 6.5h11V16H3z"/><path d="M14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    shield: '<path d="M12 3l7 3v5.5c0 4.6-3 7.7-7 9.5-4-1.8-7-4.9-7-9.5V6l7-3z"/><path d="M8.8 12l2.2 2.2 4.2-4.4"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.4-3.6L4 9"/><path d="M4 4.5V9h4.5"/><path d="M4 13a8 8 0 0 0 14.4 3.6L20 15"/><path d="M20 19.5V15h-4.5"/>',
    headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v5H5.5A1.5 1.5 0 0 1 4 17.5V14zM20 14h-3v5h1.5a1.5 1.5 0 0 0 1.5-1.5V14z"/><path d="M17 19c0 1.3-1.6 2-4 2"/>',
    star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9L3.5 9.7l5.9-.8L12 3.5z" fill="currentColor"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    "chevron-down": '<path d="M6 9l6 6 6-6"/>',
    "chevron-right": '<path d="M9 5l7 7-7 7"/>',
    "arrow-right": '<path d="M4.5 12h15M13.5 6l6 6-6 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    phone: '<path d="M5.5 4h3.3l1.8 4.5-2.2 1.4a11 11 0 0 0 5.7 5.7l1.4-2.2 4.5 1.8v3.3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 3.5 6a2 2 0 0 1 2-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7.5l8.5 6 8.5-6"/>',
    pin: '<path d="M12 21s7-5.9 7-11.2a7 7 0 0 0-14 0C5 15.100 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
    gift: '<rect x="4" y="10" width="16" height="10" rx="1.5"/><path d="M3 7h18v3H3zM12 7v13"/><path d="M12 7C9.500 7 8.500 3.500 10.500 3.500S12 7 12 7zM12 7c2.500 0 3.500-3.500 1.500-3.500S12 7 12 7z"/>',
    tag: '<path d="M3.500 12.500V4.500h8l9 9-8 8-9-9z"/><circle cx="8" cy="9" r="1.200"/>',
    leaf: '<path d="M5 19C5 10 10 5 20 4c0 10-5 15-15 15z"/><path d="M5 19l8-8"/>',
    shirt: '<path d="M8.500 4L3 7l2 4 3-1v10h8V10l3 1 2-4-5.500-3a3.500 3.500 0 0 1-7 0z"/>',
    home: '<path d="M3.500 11L12 4l8.500 7"/><path d="M5.500 9.500V20h13V9.500"/><path d="M10 20v-6h4v6"/>',
    drop: '<path d="M12 3.500s6 6.500 6 11a6 6 0 0 1-12 0c0-4.500 6-11 6-11z"/>',
    users: '<circle cx="9.500" cy="8" r="3.500"/><path d="M3 20v-1a4.500 4.500 0 0 1 4.500-4.500h4A4.500 4.500 0 0 1 16 19v1"/><path d="M16 4.700a3.500 3.500 0 0 1 0 6.600M21 20v-1a4.500 4.500 0 0 0-3-4.200"/>',
    package: '<path d="M3.500 8L12 3.500 20.500 8v8L12 20.500 3.500 16V8z"/><path d="M3.500 8L12 12.500 20.500 8M12 12.500v8"/>',
    cash: '<rect x="2.500" y="6" width="19" height="12" rx="2.500"/><circle cx="12" cy="12" r="2.800"/><path d="M6 9.500v.01M18 14.500v.01"/>',
    quote: '<path d="M10 7C7 7.500 5 10 5 13.500V17h5v-5H7.500c0-2 1-3.500 2.500-4zM19 7c-3 .5-5 3-5 6.500V17h5v-5h-2.500c0-2 1-3.500 2.500-4z" fill="currentColor"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3.200 3 3.200 15 0 18M12 3c-3.200 3-3.200 15 0 18"/>',
    send: '<path d="M4 11.500L20 4l-5.500 16-3.200-6.300L4 11.500z"/><path d="M11.300 13.700L20 4"/>',
    share: '<circle cx="6" cy="12" r="2.500"/><circle cx="18" cy="6" r="2.500"/><circle cx="18" cy="18" r="2.500"/><path d="M8.300 10.800l7.400-3.600M8.300 13.200l7.400 3.600"/>',
    sparkle: '<path d="M12 3l1.800 5.200L19 10l-5.200 1.800L12 17l-1.800-5.200L5 10l5.200-1.800L12 3z"/><path d="M19 16v4M17 18h4"/>',
    heart2: '<path d="M12 20.500S4.500 16 4.500 10A4.200 4.200 0 0 1 12 7.600 4.200 4.200 0 0 1 19.500 10c0 6-7.500 10.500-7.500 10.500z" fill="currentColor"/>',
    box: '<rect x="4" y="4" width="16" height="16" rx="3"/>',
    undo: '<path d="M9 7L4.500 11.500 9 16"/><path d="M5 11.500h9a5 5 0 0 1 0 10"/>'
  };

  function paint(root) {
    var nodes = (root || document).querySelectorAll("svg[data-icon]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-icon");
      if (!ICONS[key] || el.getAttribute("data-painted")) continue;
      el.setAttribute("viewBox", "0 0 24 24");
      el.setAttribute("focusable", "false");
      el.innerHTML = ICONS[key];
      el.setAttribute("data-painted", "1");
      if (key === "star" || key === "quote" || key === "heart2") el.classList.add("icon--fill");
    }
  }

  window.paintIcons = paint;          // main.js calls this after rendering products
  window.ICON_SVG = function (key, cls) {
    return '<svg class="icon ' + (cls || "") + '" data-icon="' + key + '" aria-hidden="true"></svg>';
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { paint(); });
  else paint();
})();
