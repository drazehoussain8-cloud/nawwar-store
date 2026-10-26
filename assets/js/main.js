/* ==========================================================================
   main.js — All site behavior (no libraries needed)
   1. Config → page      5. Shop filter / search / sort
   2. Header & menu      6. Product page
   3. Scroll reveal      7. Wishlist
   4. Counters/Countdown 8. Contact form → WhatsApp
   ========================================================================== */

(function () {
  "use strict";

  var doc = document;
  var LANG = doc.documentElement.lang === "ar" ? "ar" : "en";
  var S = window.STORE || {};
  var P = window.PRODUCTS || [];
  var C = window.CATEGORIES || [];

  var UI = {
    ar: {
      order: "اطلب عبر واتساب", orderShort: "اطلب الآن", sale: "تخفيض", news: "جديد", best: "الأكثر مبيعاً",
      reviews: "تقييم", results: "منتج", added: "تمت الإضافة إلى المفضلة", removed: "تمت الإزالة من المفضلة",
      copied: "تم نسخ رابط المنتج", noRes: "لم نجد منتجات مطابقة لبحثك", noWish: "قائمة المفضلة فارغة. اضغط على القلب في أي منتج لإضافته هنا.", size: "اختر المقاس",
      sizeNone: "—", opt: "اختر الخيار", more: "عرض التفاصيل", days: "يوم", hrs: "ساعة", min: "دقيقة", sec: "ثانية",
      sentOk: "جاري فتح واتساب…", fill: "المرجو ملء الاسم والرسالة"
    },
    en: {
      order: "Order on WhatsApp", orderShort: "Order now", sale: "Sale", news: "New", best: "Best seller",
      reviews: "reviews", results: "products", added: "Added to wishlist", removed: "Removed from wishlist",
      copied: "Product link copied", noRes: "No products match your search", noWish: "Your wishlist is empty. Tap the heart on any product to save it here.", size: "Choose a size",
      sizeNone: "—", opt: "Choose an option", more: "View details", days: "Days", hrs: "Hours", min: "Min", sec: "Sec",
      sentOk: "Opening WhatsApp…", fill: "Please fill in your name and message"
    }
  }[LANG];

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function icon(k, cls) { return window.ICON_SVG ? window.ICON_SVG(k, cls) : ""; }
  function money(n) { return Number(n).toLocaleString(LANG === "ar" ? "ar-MA-u-nu-latn" : "en-US") + " " + (S.currency ? S.currency[LANG] : ""); }
  function fill(tpl, data) { return tpl.replace(/\{(\w+)\}/g, function (_, k) { return data[k] != null ? data[k] : ""; }); }
  function waLink(text) { return "https://wa.me/" + (S.whatsapp || "") + "?text=" + encodeURIComponent(text); }
  function toast(msg) {
    var t = $(".toast");
    if (!t) { t = doc.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); doc.body.appendChild(t); }
    t.textContent = msg; t.classList.add("is-show");
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("is-show"); }, 2200);
  }
  function stars(r) {
    var out = "", full = Math.round(r);
    for (var i = 0; i < 5; i++) out += '<svg class="icon" data-icon="star" aria-hidden="true" style="opacity:' + (i < full ? 1 : 0.25) + '"></svg>';
    return '<span class="stars" aria-label="' + r + ' / 5">' + out + "</span>";
  }
  function find(id) { for (var i = 0; i < P.length; i++) if (String(P[i].id) === String(id)) return P[i]; return null; }
  function catName(id) { for (var i = 0; i < C.length; i++) if (C[i].id === id) return C[i].name[LANG]; return ""; }
  function badgeHtml(b) {
    if (!b) return "";
    var map = { sale: ["", UI.sale], "new": ["badge--green", UI.news], best: ["badge--gold", UI.best] };
    return '<span class="badge ' + map[b][0] + '">' + map[b][1] + "</span>";
  }

  /* ---------- 1. Config → page ---------- */
  function applyConfig() {
    $$("[data-cfg]").forEach(function (el) {
      var key = el.getAttribute("data-cfg");
      var v = null;
      if (key === "name") v = S.name && S.name[LANG];
      else if (key === "phone") v = S.phoneDisplay;
      else if (key === "email") v = S.email;
      else if (key === "address") v = S.address && S.address[LANG];
      else if (key === "hours") v = S.hours && S.hours[LANG];
      if (v) el.textContent = v;
    });
    $$("[data-cfg-href]").forEach(function (el) {
      var key = el.getAttribute("data-cfg-href");
      if (key === "wa") el.href = waLink(S.messages[LANG].general);
      else if (key === "tel") el.href = "tel:+" + (S.whatsapp || "");
      else if (key === "mail") el.href = "mailto:" + (S.email || "");
      else if (key === "facebook" && S.social) el.href = S.social.facebook;
      else if (key === "instagram" && S.social) el.href = S.social.instagram;
      if (/^https?:/.test(el.href) && key !== "wa") { el.target = "_blank"; el.rel = "noopener noreferrer"; }
      if (key === "wa") { el.target = "_blank"; el.rel = "noopener noreferrer"; }
    });
    $$(".js-year").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* ---------- 2. Header & mobile menu ---------- */
  function initHeader() {
    var header = $(".header"), toggle = $(".menu-toggle"), nav = $(".nav");
    function onScroll() {
      var y = window.pageYOffset || doc.documentElement.scrollTop;
      if (header) header.classList.toggle("is-scrolled", y > 8);
      var top = $(".to-top");
      if (top) top.classList.toggle("is-visible", y > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    function placeNav() {
      if (!nav || !header) return;
      nav.style.setProperty("--nav-top", Math.max(0, Math.round(header.getBoundingClientRect().bottom)) + "px");
    }
    function setMenu(open) {
      if (!nav || !toggle) return;
      if (open) { window.scrollTo(0, Math.min(window.pageYOffset, 0)); placeNav(); }
      nav.classList.toggle("is-open", open);
      doc.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.innerHTML = icon(open ? "close" : "menu");
      if (window.paintIcons) window.paintIcons(toggle);
    }
    if (toggle) toggle.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
    $$(".nav__link").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    doc.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    window.addEventListener("resize", function () { if (window.innerWidth >= 768) setMenu(false); else if (nav && nav.classList.contains("is-open")) placeNav(); });

    var top = $(".to-top");
    if (top) top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

    $$(".lang-switch").forEach(function (a) {
      if (location.search) a.href = a.getAttribute("href") + location.search;
      a.addEventListener("click", function () { safeSet("nawwar-lang", a.getAttribute("hreflang") || ""); });
    });
  }

  /* ---------- 3. Scroll reveal ---------- */
  function initReveal() {
    var items = $$(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach(function (el) { el.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 4. Counters & countdown ---------- */
  function initCounters() {
    var nodes = $$("[data-count]");
    if (!nodes.length) return;
    function run(el) {
      var end = parseFloat(el.getAttribute("data-count")), suffix = el.getAttribute("data-suffix") || "", dur = 1600, t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(end * eased).toLocaleString("en-US") + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!("IntersectionObserver" in window)) { nodes.forEach(function (n) { n.textContent = n.getAttribute("data-count") + (n.getAttribute("data-suffix") || ""); }); return; }
    var io = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }); }, { threshold: 0.5 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  function initCountdown() {
    var box = $("[data-countdown]");
    if (!box) return;
    var cycle = (S.offerCycleDays || 3) * 86400000;
    var end = new Date(S.offerAnchor || Date.now() + cycle).getTime();
    if (isNaN(end)) end = Date.now() + cycle;
    function pad(n) { return String(n).padStart(2, "0"); }
    function tick() {
      var now = Date.now();
      while (end <= now) end += cycle;
      var d = end - now, days = Math.floor(d / 86400000), h = Math.floor(d / 3600000) % 24, m = Math.floor(d / 60000) % 60, s = Math.floor(d / 1000) % 60;
      var vals = { d: pad(days), h: pad(h), m: pad(m), s: pad(s) };
      Object.keys(vals).forEach(function (k) { var el = $('[data-cd="' + k + '"]', box); if (el) el.textContent = vals[k]; });
    }
    tick(); setInterval(tick, 1000);
  }

  /* ---------- Rendering helpers ---------- */
  function cardHtml(p) {
    var wished = getWish().indexOf(p.id) > -1;
    var name = esc(p.name[LANG]);
    var msg = fill(S.messages[LANG].order, { name: p.name[LANG], qty: 1, size: UI.sizeNone, price: money(p.price) });
    return '<article class="product-card reveal" data-cat="' + p.cat + '" data-name="' + name.toLowerCase() + '" data-price="' + p.price + '" data-id="' + p.id + '">' +
      '<a class="product-card__media" href="product.html?id=' + p.id + '" aria-label="' + name + '">' +
      '<img src="../assets/images/' + p.image + '" alt="' + name + '" width="800" height="1000" loading="lazy">' +
      '<span class="product-card__badge">' + badgeHtml(p.badge) + "</span></a>" +
      '<button class="wish-btn' + (wished ? " is-on" : "") + '" type="button" data-wish="' + p.id + '" aria-label="Wishlist" aria-pressed="' + wished + '">' + icon("heart") + "</button>" +
      '<div class="product-card__body"><span class="product-card__cat">' + esc(catName(p.cat)) + "</span>" +
      '<h3 class="product-card__title"><a href="product.html?id=' + p.id + '">' + name + "</a></h3>" +
      '<div class="product-card__rating">' + stars(p.rating) + "<span>" + p.rating + " (" + p.reviews + ")</span></div>" +
      '<div class="price"><span class="price__now">' + money(p.price) + "</span>" + (p.old ? '<span class="price__old">' + money(p.old) + "</span>" : "") + "</div></div>" +
      '<div class="product-card__actions"><a class="btn btn--wa btn--sm btn--block" target="_blank" rel="noopener noreferrer" href="' + waLink(msg) + '">' + icon("whatsapp") + UI.orderShort + "</a></div></article>";
  }

  function renderFeatured() {
    var host = $("[data-render='featured']");
    if (!host) return;
    var list = P.filter(function (p) { return p.featured; }).slice(0, 4);
    host.innerHTML = list.map(cardHtml).join("");
    $$(".product-card", host).forEach(function (el, i) { el.style.setProperty("--delay", i * 90 + "ms"); });
  }

  /* ---------- 5. Shop: filter / search / sort ---------- */
  function initShop() {
    var host = $("[data-render='shop']");
    if (!host) return;
    var state = { cat: "all", q: "", sort: "default" };
    var url = new URLSearchParams(location.search);
    if (url.get("cat")) state.cat = url.get("cat");

    var chips = $(".toolbar__chips");
    chips.innerHTML = '<button type="button" class="chip" data-cat="all">' + (LANG === "ar" ? "الكل" : "All") + "</button>" +
      C.map(function (c) { return '<button type="button" class="chip" data-cat="' + c.id + '">' + esc(c.name[LANG]) + "</button>"; }).join("") +
      '<button type="button" class="chip" data-cat="wish">' + icon("heart") + (LANG === "ar" ? "المفضلة" : "Wishlist") + "</button>";

    function apply() {
      var list = P.filter(function (p) {
        var okCat = state.cat === "all" || p.cat === state.cat || (state.cat === "wish" && getWish().indexOf(p.id) > -1);
        var q = state.q.trim().toLowerCase();
        var okQ = !q || (p.name.ar + " " + p.name.en).toLowerCase().indexOf(q) > -1;
        return okCat && okQ;
      });
      if (state.sort === "low") list.sort(function (a, b) { return a.price - b.price; });
      if (state.sort === "high") list.sort(function (a, b) { return b.price - a.price; });
      if (state.sort === "rating") list.sort(function (a, b) { return b.rating - a.rating; });
      host.innerHTML = list.length ? list.map(cardHtml).join("") :
        '<div class="empty">' + icon(state.cat === "wish" && !state.q ? "heart" : "search") + "<p>" + (state.cat === "wish" && !state.q ? UI.noWish : UI.noRes) + "</p></div>";
      $$(".product-card", host).forEach(function (el, i) { el.style.setProperty("--delay", (i % 6) * 70 + "ms"); });
      $$(".chip", chips).forEach(function (c) { c.classList.toggle("is-active", c.getAttribute("data-cat") === state.cat); });
      var count = $("[data-count-result]");
      if (count) count.textContent = list.length + " " + UI.results;
      if (window.paintIcons) window.paintIcons(host);
      initReveal();
    }
    chips.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      state.cat = b.getAttribute("data-cat"); apply();
    });
    doc.addEventListener("wishchange", function () { if (state.cat === "wish") apply(); });
    $("#shop-search").addEventListener("input", function (e) { state.q = e.target.value; apply(); });
    $("#shop-sort").addEventListener("change", function (e) { state.sort = e.target.value; apply(); });
    apply();
  }

  /* ---------- 6. Product page ---------- */
  function initProduct() {
    var host = $("[data-render='product']");
    if (!host) return;
    var id = new URLSearchParams(location.search).get("id") || 1;
    var p = find(id) || P[0];
    if (!p) return;
    var name = p.name[LANG], qty = 1, size = p.sizes.length ? p.sizes[0] : "";
    var storeName = (S.name && S.name[LANG]) || "";
    doc.title = name + " | " + storeName;
    var crumb = $("[data-crumb-name]"); if (crumb) crumb.textContent = name;
    var h = $("[data-page-title]"); if (h) h.textContent = name;

    var sizesHtml = p.sizes.length ?
      '<div class="pd__opt"><span class="label">' + (/^\d+ml$/.test(p.sizes[0]) ? UI.opt : UI.size) + '</span><div class="sizes" role="group">' +
      p.sizes.map(function (s, i) { return '<button type="button" class="size-btn' + (i === 0 ? " is-active" : "") + '" data-size="' + esc(s) + '">' + esc(s) + "</button>"; }).join("") + "</div></div>" : "";

    var perks = LANG === "ar"
      ? ["توصيل سريع لجميع المدن", "الدفع عند الاستلام", "إمكانية الإرجاع والاستبدال"]
      : ["Fast delivery to all cities", "Cash on delivery", "Easy returns & exchanges"];
    var perkIcons = ["truck", "cash", "refresh"];

    host.innerHTML =
      '<div class="pd__media reveal reveal--zoom"><img src="../assets/images/' + p.image + '" alt="' + esc(name) + '" width="800" height="1000">' +
      '<span class="product-card__badge" style="position:absolute;top:16px;inset-inline-start:16px">' + badgeHtml(p.badge) + "</span></div>" +
      '<div class="pd__info reveal"><span class="eyebrow">' + esc(catName(p.cat)) + "</span>" +
      '<h2 class="pd__title">' + esc(name) + "</h2>" +
      '<div class="pd__rating">' + stars(p.rating) + "<span>" + p.rating + " · " + p.reviews + " " + UI.reviews + "</span></div>" +
      '<div class="pd__price"><span class="price__now">' + money(p.price) + "</span>" + (p.old ? '<span class="price__old">' + money(p.old) + "</span>" : "") + "</div>" +
      '<p class="pd__desc">' + esc(p.desc[LANG]) + "</p>" +
      '<ul class="pd__features">' + p.features[LANG].map(function (f) { return "<li>" + icon("check") + "<span>" + esc(f) + "</span></li>"; }).join("") + "</ul>" +
      sizesHtml +
      '<div class="pd__opt"><span class="label">' + (LANG === "ar" ? "الكمية" : "Quantity") + '</span><div class="qty"><button type="button" data-qty="-1" aria-label="-">' + icon("minus") + '</button><output id="qty-out">1</output><button type="button" data-qty="1" aria-label="+">' + icon("plus") + "</button></div></div>" +
      '<div class="pd__buy"><a id="buy-wa" class="btn btn--wa btn--lg" target="_blank" rel="noopener noreferrer" href="#">' + icon("whatsapp") + UI.order + "</a>" +
      '<button type="button" class="btn btn--ghost btn--lg wish-btn-lg" data-wish="' + p.id + '" aria-label="Wishlist">' + icon("heart") + "</button>" +
      '<button type="button" class="btn btn--ghost btn--lg" id="share-btn" aria-label="Share">' + icon("share") + "</button></div>" +
      '<ul class="pd__perks list-reset">' + perks.map(function (t, i) { return "<li>" + icon(perkIcons[i]) + "<span>" + t + "</span></li>"; }).join("") + "</ul></div>";

    function updateLink() {
      var msg = fill(S.messages[LANG].order, { name: name, qty: qty, size: size || UI.sizeNone, price: money(p.price * qty) });
      $("#buy-wa").href = waLink(msg);
    }
    updateLink();
    host.addEventListener("click", function (e) {
      var q = e.target.closest("[data-qty]"), s = e.target.closest("[data-size]");
      if (q) { qty = Math.max(1, Math.min(20, qty + parseInt(q.getAttribute("data-qty"), 10))); $("#qty-out").textContent = qty; updateLink(); }
      if (s) { size = s.getAttribute("data-size"); $$(".size-btn", host).forEach(function (b) { b.classList.toggle("is-active", b === s); }); updateLink(); }
    });
    $("#share-btn").addEventListener("click", function () {
      if (navigator.share) { navigator.share({ title: name, url: location.href }).catch(function () {}); return; }
      if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(function () { toast(UI.copied); });
    });

    var rel = $("[data-render='related']");
    if (rel) {
      var list = P.filter(function (x) { return x.id !== p.id; }).sort(function (a, b) { return (b.cat === p.cat) - (a.cat === p.cat); }).slice(0, 4);
      rel.innerHTML = list.map(cardHtml).join("");
    }
    if (window.paintIcons) window.paintIcons();
    initReveal();
  }

  /* ---------- 7. Wishlist ---------- */
  function getWish() { try { return JSON.parse(safeGet("nawwar-wish") || "[]"); } catch (e) { return []; } }
  function setWish(a) { safeSet("nawwar-wish", JSON.stringify(a)); }
  function refreshWishCount() {
    var n = getWish().length;
    $$("[data-wish-count]").forEach(function (el) { el.textContent = n; el.hidden = n === 0; });
    $$("[data-wish]").forEach(function (b) {
      var on = getWish().indexOf(parseInt(b.getAttribute("data-wish"), 10)) > -1;
      b.classList.toggle("is-on", on); b.setAttribute("aria-pressed", on);
    });
  }
  function initWishlist() {
    doc.addEventListener("click", function (e) {
      var b = e.target.closest("[data-wish]"); if (!b) return;
      e.preventDefault();
      var id = parseInt(b.getAttribute("data-wish"), 10), list = getWish(), i = list.indexOf(id);
      if (i > -1) { list.splice(i, 1); toast(UI.removed); } else { list.push(id); toast(UI.added); b.classList.add("is-pop"); setTimeout(function () { b.classList.remove("is-pop"); }, 500); }
      setWish(list); refreshWishCount(); doc.dispatchEvent(new CustomEvent("wishchange"));
    });
    refreshWishCount();
  }

  /* ---------- 8. Contact form → WhatsApp ---------- */
  function initContact() {
    var form = $("#contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim(), phone = form.elements.phone.value.trim(), message = form.elements.message.value.trim();
      if (!name || !message) { toast(UI.fill); return; }
      toast(UI.sentOk);
      window.open(waLink(fill(S.messages[LANG].contact, { name: name, phone: phone || "-", message: message })), "_blank", "noopener");
      form.reset();
    });
  }

  /* ---------- Boot ---------- */
  function boot() {
    applyConfig();
    initHeader();
    renderFeatured();
    initShop();
    initProduct();
    if (window.paintIcons) window.paintIcons();
    initReveal();
    initCounters();
    initCountdown();
    initWishlist();
    initContact();
  }
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", boot); else boot();
})();
