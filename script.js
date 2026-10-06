// ================= Data =================

const SERVICES = [
  // Wash & Treatments
  { cat: "Wash & Care", icon: "🧴", name: "Shampoo & Condition", desc: "Cleansing wash with a moisturizing conditioner and blow dry.", price: 35, time: "45 min" },
  { cat: "Wash & Care", icon: "💧", name: "Deep Conditioning", desc: "Intensive moisture or protein mask under a hooded steamer.", price: 45, time: "1 hr" },
  { cat: "Wash & Care", icon: "🌿", name: "Scalp Detox & Treatment", desc: "Clarifying scrub, exfoliation and soothing serum for itchy or flaky scalps.", price: 50, time: "1 hr" },
  { cat: "Wash & Care", icon: "♨️", name: "Steam Treatment", desc: "Hydrating steam to open the cuticle and lock in moisture.", price: 30, time: "30 min" },
  { cat: "Wash & Care", icon: "🫒", name: "Hot Oil Treatment", desc: "Warm oil therapy to strengthen and add shine.", price: 30, time: "30 min" },
  { cat: "Wash & Care", icon: "🧪", name: "Protein / Bond Repair", desc: "Rebuilds damaged strands after heat, color or chemical services.", price: 60, time: "1 hr" },
  { cat: "Wash & Care", icon: "🪮", name: "Detangling Service", desc: "Gentle, patient detangling for matted or post-protective-style hair.", price: 40, time: "1 hr+" },
  { cat: "Wash & Care", icon: "🌸", name: "Hair & Scalp Consultation", desc: "Analysis of hair health, porosity and a personalized regimen.", price: 25, time: "30 min" },

  // Cuts & Styling
  { cat: "Cuts & Styling", icon: "✂️", name: "Trim / Dusting", desc: "Remove split ends while keeping your length.", price: 25, time: "30 min" },
  { cat: "Cuts & Styling", icon: "💇🏾‍♀️", name: "Precision Haircut", desc: "Bobs, layers, pixies and tapered cuts tailored to your face.", price: 55, time: "1 hr" },
  { cat: "Cuts & Styling", icon: "🌀", name: "Curly Cut", desc: "Dry or wet curl-by-curl cutting for shape and definition.", price: 70, time: "1.5 hr" },
  { cat: "Cuts & Styling", icon: "💨", name: "Blowout", desc: "Smooth, voluminous blow-dry style.", price: 45, time: "1 hr" },
  { cat: "Cuts & Styling", icon: "🔥", name: "Silk Press", desc: "Wash, deep condition, blow dry and flat-iron for a silky finish.", price: 85, time: "2 hr" },
  { cat: "Cuts & Styling", icon: "🎀", name: "Updo & Special Occasion", desc: "Elegant updos and buns for events, proms and parties.", price: 75, time: "1.5 hr" },
  { cat: "Cuts & Styling", icon: "👰🏾", name: "Bridal Hair", desc: "Trial session plus wedding-day styling for the bride and party.", price: 200, time: "Varies" },
  { cat: "Cuts & Styling", icon: "💈", name: "Men's Cut & Line-up", desc: "Fades, tapers, shape-ups and beard grooming.", price: 30, time: "45 min" },
  { cat: "Cuts & Styling", icon: "🧒🏾", name: "Kids' Styles", desc: "Gentle cuts, puffs, cornrows and beads for little ones.", price: 35, time: "1 hr" },

  // Color
  { cat: "Color", icon: "🎨", name: "Single-Process Color", desc: "All-over permanent or demi-permanent color.", price: 80, time: "1.5 hr" },
  { cat: "Color", icon: "✨", name: "Highlights", desc: "Foil highlights for brightness and dimension.", price: 120, time: "2.5 hr" },
  { cat: "Color", icon: "🌅", name: "Balayage / Ombré", desc: "Hand-painted, sun-kissed color melt.", price: 160, time: "3 hr" },
  { cat: "Color", icon: "🩶", name: "Gray Coverage / Root Touch-up", desc: "Seamless coverage for regrowth and grays.", price: 65, time: "1 hr" },
  { cat: "Color", icon: "🌈", name: "Vivid / Fashion Colors", desc: "Bold reds, blues, pinks and more — pre-lightening included.", price: 180, time: "3 hr+" },
  { cat: "Color", icon: "🍯", name: "Henna & Natural Dyes", desc: "Plant-based color for strength and shine.", price: 70, time: "2 hr" },

  // Chemical
  { cat: "Chemical", icon: "🧬", name: "Relaxer (Virgin / Touch-up)", desc: "Professional straightening with scalp protection.", price: 75, time: "2 hr" },
  { cat: "Chemical", icon: "🌟", name: "Keratin Treatment", desc: "Frizz-free smoothing that lasts up to 3 months.", price: 200, time: "3 hr" },
  { cat: "Chemical", icon: "〰️", name: "Texturizer", desc: "Loosens curl pattern for easier manageability.", price: 70, time: "1.5 hr" },
  { cat: "Chemical", icon: "➰", name: "Perm / Curly Perm", desc: "Adds lasting waves or curls.", price: 110, time: "2.5 hr" },

  // Braids & Twists
  { cat: "Braids & Twists", icon: "🪢", name: "Knotless Braids", desc: "Lightweight, tension-free braids in small, medium or large.", price: 180, time: "4–7 hr" },
  { cat: "Braids & Twists", icon: "📦", name: "Box Braids", desc: "Classic box braids, any length.", price: 160, time: "4–6 hr" },
  { cat: "Braids & Twists", icon: "🌾", name: "Cornrows / Straight Backs", desc: "Neat cornrows with or without extensions.", price: 60, time: "1–2 hr" },
  { cat: "Braids & Twists", icon: "🪶", name: "Fulani / Tribal Braids", desc: "Cornrow patterns with braids, beads and cuffs.", price: 170, time: "4–5 hr" },
  { cat: "Braids & Twists", icon: "🌊", name: "Goddess / Boho Braids", desc: "Braids with curly human-hair pieces left out.", price: 220, time: "5–7 hr" },
  { cat: "Braids & Twists", icon: "🔗", name: "Feed-in / Stitch Braids", desc: "Gradually built braids with crisp parts.", price: 90, time: "2–3 hr" },
  { cat: "Braids & Twists", icon: "🌀", name: "Passion / Senegalese Twists", desc: "Rope or spring twists in various lengths.", price: 170, time: "4–6 hr" },
  { cat: "Braids & Twists", icon: "🧶", name: "Crochet Styles", desc: "Quick crochet install with curls, locs or twists.", price: 100, time: "2–3 hr" },
  { cat: "Braids & Twists", icon: "🍫", name: "Bantu Knots / Two-Strand Twists", desc: "Natural styles on your own hair.", price: 65, time: "1.5 hr" },

  // Locs & Natural
  { cat: "Locs & Natural", icon: "🌱", name: "Starter Locs", desc: "Comb coils, two-strand twists or interlocking to start your journey.", price: 150, time: "3–5 hr" },
  { cat: "Locs & Natural", icon: "🔁", name: "Loc Retwist & Style", desc: "Palm-roll or interlock maintenance plus style.", price: 85, time: "2 hr" },
  { cat: "Locs & Natural", icon: "🔒", name: "Sisterlocks / Microlocs", desc: "Installation and maintenance of micro-sized locs.", price: 350, time: "Varies" },
  { cat: "Locs & Natural", icon: "🧵", name: "Faux Locs / Butterfly Locs", desc: "Wrapped locs for a protective loc look.", price: 200, time: "5–6 hr" },
  { cat: "Locs & Natural", icon: "🩹", name: "Loc Repair & Detox", desc: "Reattach, repair thinning roots and deep-clean buildup.", price: 90, time: "2 hr" },
  { cat: "Locs & Natural", icon: "👩🏾‍🦱", name: "Wash & Go", desc: "Defined, frizz-free curls with styling gel or cream.", price: 60, time: "1.5 hr" },
  { cat: "Locs & Natural", icon: "🌙", name: "Twist Out / Braid Out", desc: "Set and unravel for defined, voluminous texture.", price: 65, time: "1.5 hr" },

  // Extensions & Weaves
  { cat: "Extensions & Weaves", icon: "🪡", name: "Traditional Sew-in", desc: "Braid-down and sewn-in bundles with leave-out or closure.", price: 150, time: "3 hr" },
  { cat: "Extensions & Weaves", icon: "⚡", name: "Quick Weave", desc: "Bonded install over a protective cap.", price: 90, time: "1.5 hr" },
  { cat: "Extensions & Weaves", icon: "🎗️", name: "Tape-in Extensions", desc: "Seamless, flat tape wefts for length and volume.", price: 180, time: "1.5 hr" },
  { cat: "Extensions & Weaves", icon: "🔩", name: "Micro-link / I-tip / K-tip", desc: "Strand-by-strand extensions with no glue or braids.", price: 300, time: "3–4 hr" },
  { cat: "Extensions & Weaves", icon: "📎", name: "Clip-in Fitting & Blend", desc: "Color-match, cut and blend your clip-ins.", price: 50, time: "45 min" },
  { cat: "Extensions & Weaves", icon: "🎀", name: "Ponytail / Bun Install", desc: "Sleek ponytails, genie ponies and buns with extension hair.", price: 70, time: "1 hr" },
  { cat: "Extensions & Weaves", icon: "🧹", name: "Extension Removal", desc: "Safe takedown of weaves, braids and extensions plus detangle.", price: 40, time: "1 hr" },

  // Wigs
  { cat: "Wigs", icon: "👑", name: "Frontal Wig Install", desc: "13x4 / 13x6 frontal install with lace melt and baby hairs.", price: 150, time: "2–3 hr" },
  { cat: "Wigs", icon: "🎩", name: "Closure Wig Install", desc: "4x4 / 5x5 closure install and styling.", price: 110, time: "1.5–2 hr" },
  { cat: "Wigs", icon: "🪄", name: "Glueless Install", desc: "Secure, adhesive-free install with elastic band and combs.", price: 90, time: "1 hr" },
  { cat: "Wigs", icon: "🧵", name: "Custom Wig Making", desc: "Measured, hand-built unit in the hair and lace of your choice.", price: 350, time: "5–10 days" },
  { cat: "Wigs", icon: "🛁", name: "Wig Wash & Revamp", desc: "Deep wash, condition, detangle, re-pluck and restyle.", price: 65, time: "Drop-off" },
  { cat: "Wigs", icon: "🎨", name: "Wig Coloring", desc: "Custom color, highlights or skunk stripes on your unit.", price: 90, time: "Drop-off" },
  { cat: "Wigs", icon: "✂️", name: "Wig Cut & Style", desc: "Layers, bangs, bobs, curls and pressing.", price: 55, time: "1 hr" },
  { cat: "Wigs", icon: "🔍", name: "Bleach Knots & Pluck", desc: "Natural-looking parts and hairlines.", price: 40, time: "Drop-off" },
  { cat: "Wigs", icon: "🩹", name: "Wig Repair / Lace Replacement", desc: "Fix shedding, torn lace or worn-out caps.", price: 80, time: "Drop-off" },
  { cat: "Wigs", icon: "💜", name: "Medical / Alopecia Wigs", desc: "Private fitting for hair loss with breathable, secure caps.", price: 400, time: "Consult" },
];

const PRODUCTS = [
  { id: 1, cat: "Wigs", icon: "👑", bg: "#f3e3bd", name: "13x4 HD Lace Frontal Wig – Straight", desc: '100% human hair, 180% density, 22"', price: 289, tag: "Bestseller" },
  { id: 2, cat: "Wigs", icon: "🌊", bg: "#e8d3e3", name: "Body Wave 360 Lace Wig", desc: '100% human hair, 200% density, 24"', price: 329 },
  { id: 3, cat: "Wigs", icon: "💁🏾‍♀️", bg: "#f8dcd6", name: "Glueless Wear-and-Go Bob", desc: '5x5 closure, pre-cut lace, 12"', price: 149, tag: "New" },
  { id: 4, cat: "Wigs", icon: "🌀", bg: "#e2d6cc", name: "Kinky Curly Full Lace Wig", desc: 'Natural 4a/4b texture, 18"', price: 359 },
  { id: 5, cat: "Wigs", icon: "🍯", bg: "#f4d9a8", name: "Honey Blonde Deep Wave Frontal", desc: '#27 pre-colored, 13x6 lace, 26"', price: 349 },
  { id: 6, cat: "Wigs", icon: "🎀", bg: "#ead4f0", name: "U-Part / V-Part Wig", desc: "Blend with your own leave-out, no lace", price: 129 },
  { id: 7, cat: "Wigs", icon: "🎗️", bg: "#d8e4ea", name: "Headband Wig – Water Wave", desc: 'Beginner friendly, 20"', price: 99 },
  { id: 8, cat: "Wigs", icon: "🧑🏾‍🦲", bg: "#ddd", name: "Medical Silk-Top Wig", desc: "For alopecia & hair loss, breathable cap", price: 449 },

  { id: 9, cat: "Bundles", icon: "📏", bg: "#f3e3bd", name: "Brazilian Straight Bundles (3)", desc: 'Raw virgin hair, 18/20/22"', price: 219, tag: "Bestseller" },
  { id: 10, cat: "Bundles", icon: "🌊", bg: "#e8d3e3", name: "Peruvian Body Wave Bundles (3)", desc: 'Double weft, 20/22/24"', price: 239 },
  { id: 11, cat: "Bundles", icon: "〰️", bg: "#e2d6cc", name: "Kinky Straight Bundles (3)", desc: 'Blowout texture, 16/18/20"', price: 229 },
  { id: 12, cat: "Bundles", icon: "🔲", bg: "#f8dcd6", name: "5x5 HD Lace Closure", desc: "Free part, pre-plucked", price: 89 },
  { id: 13, cat: "Bundles", icon: "▭", bg: "#ead4f0", name: "13x4 Transparent Lace Frontal", desc: "Ear-to-ear, bleached knots", price: 119 },
  { id: 14, cat: "Bundles", icon: "📎", bg: "#d8e4ea", name: "Clip-in Extensions Set", desc: '7 pieces, 120g, 20"', price: 139 },
  { id: 15, cat: "Bundles", icon: "🎗️", bg: "#f4d9a8", name: "Tape-in Extensions", desc: '40 pieces, 100g, 18"', price: 159 },
  { id: 16, cat: "Bundles", icon: "🪢", bg: "#e2d6cc", name: "Pre-stretched Braiding Hair", desc: 'Pack of 6, 30", itch-free', price: 24, tag: "Value" },
  { id: 17, cat: "Bundles", icon: "🧶", bg: "#f8dcd6", name: "Crochet Spring Twist Hair", desc: "Pack of 8, lightweight", price: 28 },

  { id: 18, cat: "Hair Care", icon: "🧴", bg: "#e6f0e3", name: "Moisture Shampoo", desc: "Sulfate-free, aloe & shea", price: 18 },
  { id: 19, cat: "Hair Care", icon: "💧", bg: "#dfeaf3", name: "Deep Conditioning Mask", desc: "Avocado & honey, 16oz", price: 24, tag: "Bestseller" },
  { id: 20, cat: "Hair Care", icon: "🌿", bg: "#e6f0e3", name: "Leave-in Conditioner", desc: "Detangles & softens", price: 16 },
  { id: 21, cat: "Hair Care", icon: "🫒", bg: "#f3eccd", name: "Growth & Scalp Oil", desc: "Rosemary, castor & peppermint", price: 20 },
  { id: 22, cat: "Hair Care", icon: "🥥", bg: "#f6efe6", name: "Curl Defining Cream", desc: "Frizz control for coils & curls", price: 19 },
  { id: 23, cat: "Hair Care", icon: "🔥", bg: "#f8dcd6", name: "Heat Protectant Spray", desc: "Up to 450°F protection", price: 17 },
  { id: 24, cat: "Hair Care", icon: "🧽", bg: "#dfeaf3", name: "Wig & Weave Shampoo", desc: "Gentle cleanse for human hair units", price: 15 },
  { id: 25, cat: "Hair Care", icon: "🫧", bg: "#ead4f0", name: "Lace Glue & Melting Spray Kit", desc: "Waterproof hold + lace tint spray", price: 32 },
  { id: 26, cat: "Hair Care", icon: "🌀", bg: "#f6efe6", name: "Edge Control", desc: "Strong hold, no flakes", price: 10 },

  { id: 27, cat: "Accessories", icon: "🎀", bg: "#ead4f0", name: "Silk Bonnet", desc: "Double-layer, adjustable band", price: 16 },
  { id: 28, cat: "Accessories", icon: "🛏️", bg: "#f3e3bd", name: "Mulberry Silk Pillowcase", desc: "Reduces frizz & breakage", price: 35 },
  { id: 29, cat: "Accessories", icon: "🪮", bg: "#e2d6cc", name: "Detangling Brush", desc: "Flexible bristles, wet or dry", price: 14 },
  { id: 30, cat: "Accessories", icon: "🗿", bg: "#ddd", name: "Canvas Wig Head & Stand", desc: "22\" block head with tripod", price: 38 },
  { id: 31, cat: "Accessories", icon: "🧢", bg: "#f8dcd6", name: "Wig Caps (10 pack)", desc: "Stocking & mesh caps", price: 9 },
  { id: 32, cat: "Accessories", icon: "🎗️", bg: "#d8e4ea", name: "Wig Grip Band", desc: "Velvet, non-slip", price: 12 },
  { id: 33, cat: "Accessories", icon: "✨", bg: "#f4d9a8", name: "Braid Cuffs & Beads Set", desc: "Gold & silver, 100 pcs", price: 11 },
  { id: 34, cat: "Accessories", icon: "🔌", bg: "#dfeaf3", name: "Titanium Flat Iron", desc: '1" plates, 450°F', price: 89 },
];

// ================= Helpers =================

const $ = (sel) => document.querySelector(sel);
const money = (n) => `$${n.toFixed(2)}`;

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove("show"), 2200);
}

function renderTabs(container, categories, active, onSelect) {
  container.innerHTML = categories
    .map((c) => `<button class="tab ${c === active ? "active" : ""}" data-cat="${c}">${c}</button>`)
    .join("");
  container.onclick = (e) => {
    const btn = e.target.closest(".tab");
    if (btn) onSelect(btn.dataset.cat);
  };
}

// ================= Services =================

const serviceCats = [...new Set(SERVICES.map((s) => s.cat))];
let activeServiceCat = serviceCats[0];

function renderServices() {
  renderTabs($("#serviceTabs"), serviceCats, activeServiceCat, (cat) => {
    activeServiceCat = cat;
    renderServices();
  });
  $("#serviceGrid").innerHTML = SERVICES.filter((s) => s.cat === activeServiceCat)
    .map(
      (s) => `
      <article class="flex flex-col gap-2 rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft">
        <span class="text-3xl">${s.icon}</span>
        <h3 class="text-lg">${s.name}</h3>
        <p class="flex-1 text-sm text-muted">${s.desc}</p>
        <div class="mt-1.5 flex items-center justify-between text-sm">
          <span>⏱ ${s.time}</span>
          <strong class="text-base text-plum">from $${s.price}</strong>
        </div>
        <button class="cursor-pointer self-start text-sm font-semibold text-gold hover:underline" data-book="${s.name}">Book this →</button>
      </article>`
    )
    .join("");
}

// Booking select gets every service, grouped by category
function fillBookingSelect() {
  const sel = $("#bookingService");
  sel.innerHTML =
    `<option value="">Select a service…</option>` +
    serviceCats
      .map(
        (cat) =>
          `<optgroup label="${cat}">${SERVICES.filter((s) => s.cat === cat)
            .map((s) => `<option>${s.name}</option>`)
            .join("")}</optgroup>`
      )
      .join("") +
    `<optgroup label="Packages"><option>Wash Day Package</option><option>Glow Up Package</option><option>Wig Install Package</option></optgroup>`;
}

// Any [data-book] button preselects the service and scrolls to booking
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-book]");
  if (!btn) return;
  e.preventDefault();
  $("#bookingService").value = btn.dataset.book;
  $("#booking").scrollIntoView({ behavior: "smooth" });
});

// ================= Shop =================

const shopCats = ["All", ...new Set(PRODUCTS.map((p) => p.cat))];
let activeShopCat = "All";
let searchTerm = "";

function renderProducts() {
  renderTabs($("#shopTabs"), shopCats, activeShopCat, (cat) => {
    activeShopCat = cat;
    renderProducts();
  });
  const list = PRODUCTS.filter(
    (p) =>
      (activeShopCat === "All" || p.cat === activeShopCat) &&
      (p.name + " " + p.desc).toLowerCase().includes(searchTerm)
  );
  $("#productGrid").innerHTML = list.length
    ? list
        .map(
          (p) => `
      <article class="flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-soft">
        <div class="relative aspect-4/3 overflow-hidden" style="background:${p.bg}">
          <img src="images/product-${p.id}.jpg" alt="${p.name}" loading="lazy" class="size-full object-cover" />
          ${p.tag ? `<span class="absolute top-3 left-3 rounded-full bg-gold px-2.5 py-0.5 text-xs font-semibold text-white">${p.tag}</span>` : ""}
        </div>
        <div class="flex flex-1 flex-col gap-1.5 p-4">
          <h3 class="font-sans text-base font-semibold">${p.name}</h3>
          <p class="flex-1 text-sm text-muted">${p.desc}</p>
          <div class="mt-2 flex items-center justify-between">
            <strong class="text-lg text-plum">${money(p.price)}</strong>
            <button class="btn btn-sm" data-add="${p.id}">Add to cart</button>
          </div>
        </div>
      </article>`
        )
        .join("")
    : `<p class="col-span-full p-10 text-center text-muted">No products match your search.</p>`;
}

$("#shopSearch").addEventListener("input", (e) => {
  searchTerm = e.target.value.trim().toLowerCase();
  renderProducts();
});

// ================= Cart =================

let cart = {};
try {
  cart = JSON.parse(localStorage.getItem("qf-cart")) || {};
} catch {
  cart = {};
}

function saveCart() {
  try {
    localStorage.setItem("qf-cart", JSON.stringify(cart));
  } catch {}
}

function renderCart() {
  const entries = Object.entries(cart);
  const count = entries.reduce((n, [, q]) => n + q, 0);
  const total = entries.reduce((sum, [id, q]) => sum + PRODUCTS.find((p) => p.id == id).price * q, 0);

  $("#cartCount").textContent = count;
  $("#cartTotal").textContent = money(total);
  $("#cartItems").innerHTML = entries.length
    ? entries
        .map(([id, q]) => {
          const p = PRODUCTS.find((x) => x.id == id);
          return `
          <div class="grid grid-cols-[50px_1fr_auto] items-center gap-3 border-b border-line py-3">
            <img src="images/product-${p.id}.jpg" alt="" class="size-[50px] rounded-lg object-cover" style="background:${p.bg}" />
            <div><h4 class="text-sm font-semibold">${p.name}</h4><small class="text-muted">${money(p.price)}</small></div>
            <div class="flex items-center gap-1.5">
              <button class="size-6.5 cursor-pointer rounded-full border border-line bg-cream" data-dec="${id}" aria-label="Decrease">−</button>
              <span>${q}</span>
              <button class="size-6.5 cursor-pointer rounded-full border border-line bg-cream" data-inc="${id}" aria-label="Increase">+</button>
            </div>
          </div>`;
        })
        .join("")
    : `<p class="col-span-full p-10 text-center text-muted">Your cart is empty.</p>`;
}

function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}

document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");
  if (add) {
    changeQty(add.dataset.add, 1);
    toast("Added to cart 🛍️");
  }
  if (inc) changeQty(inc.dataset.inc, 1);
  if (dec) changeQty(dec.dataset.dec, -1);
});

function toggleCart(open) {
  $("#cart").classList.toggle("open", open);
  $("#overlay").classList.toggle("show", open);
}
$("#cartBtn").onclick = () => toggleCart(true);
$("#cartClose").onclick = () => toggleCart(false);
$("#overlay").onclick = () => toggleCart(false);

$("#checkoutBtn").onclick = () => {
  const msg = $("#checkoutMsg");
  if (!Object.keys(cart).length) {
    msg.textContent = "Add something to your cart first.";
    return;
  }
  // Placeholder: connect Stripe, Paystack, Flutterwave or Shopify here.
  cart = {};
  saveCart();
  renderCart();
  msg.textContent = "Thank you! Your order has been placed. 💜";
};

// ================= Forms =================

function handleForm(id, message) {
  const form = $(id);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Placeholder: send form data to your backend, Formspree, or email service here.
    form.querySelector(".form-msg").textContent = message;
    form.reset();
  });
}

handleForm("#bookingForm", "✅ Request received! We'll confirm your appointment within 24 hours.");
handleForm("#wigForm", "✅ Thanks! A wig specialist will contact you for measurements.");
handleForm("#contactForm", "✅ Message sent. We'll reply soon.");
handleForm("#newsletterForm", "🎉 You're in! Check your inbox for 10% off.");

// No past dates for bookings
$("#bookingDate").min = new Date().toISOString().split("T")[0];

// ================= Nav =================

$("#menuBtn").onclick = () => $("#navLinks").classList.toggle("open");
$("#navLinks").addEventListener("click", (e) => {
  if (e.target.tagName === "A") $("#navLinks").classList.remove("open");
});

$("#year").textContent = new Date().getFullYear();

// ================= Init =================

renderServices();
fillBookingSelect();
renderProducts();
renderCart();
