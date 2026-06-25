/* ════════════════════════════════════════════════════
   金SELECT — APP.JS
   Mock data + interactivity (no backend required)
════════════════════════════════════════════════════ */

// ──────────────────────────────────────────────
//  MOCK PRODUCT DATA
// ──────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    brand: "Auralee",
    name: "Light Melton Wool Coat",
    category: "outerwear",
    price: 12800,
    originalPrice: null,
    tag: "New",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80"
    ],
    desc: "日本精工輕量美利奴羊毛材質。剪裁寬鬆不失型，屬於可以穿十年的那種外套。顏色的深度會隨著光線角度微妙變化。",
    sizes: ["XS", "S", "M", "L", "XL"],
    details: "素材：羊毛 80% 聚酯 20%｜日本製｜建議手洗"
  },
  {
    id: 2,
    brand: "Comoli",
    name: "Silk Noil Shirt",
    category: "tops",
    price: 6500,
    originalPrice: 8200,
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"],
    desc: "獨特的粗紡絲綢手感，介於棉與絲之間的質地，越洗越柔軟。版型稍寬鬆，可塞入也可外穿。這件是今季賣得最快的一件。",
    sizes: ["XS", "S", "M", "L"],
    details: "素材：絹 100%｜日本製｜可機洗（冷水）"
  },
  {
    id: 3,
    brand: "Lemaire",
    name: "Fluid Drawstring Trousers",
    category: "bottoms",
    price: 9200,
    originalPrice: null,
    tag: "Exclusive",
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&q=80"],
    desc: "流體感的垂墜長褲，腰圍採用鬆緊繩設計，可調整鬆緊。從早到晚都能穿的一件，搭配T-shirt或正式上衣都成立。",
    sizes: ["XS", "S", "M", "L", "XL"],
    details: "素材：嫘縈 100%｜法國設計日本製"
  },
  {
    id: 4,
    brand: "Uniqlo U",
    name: "Oversized Crew Neck Tee",
    category: "tops",
    price: 990,
    originalPrice: null,
    tag: "Basic",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"],
    desc: "Christophe Lemaire 設計的經典 T-shirt，版型比一般寬鬆，肩線故意下降。百搭且耐穿，是我們每季都會重新選入的品項。",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    details: "素材：棉 100%｜機可洗｜多色可選"
  },
  {
    id: 5,
    brand: "Our Legacy",
    name: "Box Denim Jacket",
    category: "outerwear",
    price: 11200,
    originalPrice: 13800,
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=800&q=80"],
    desc: "Box 版型的牛仔外套，比傳統版型更寬更方。特殊的洗水讓牛仔布有一種自然老化的質感，從第一天穿起就像穿了很久的感覺。",
    sizes: ["XS", "S", "M", "L"],
    details: "素材：棉 100%（石洗處理）｜瑞典品牌葡萄牙製"
  },
  {
    id: 6,
    brand: "JJJJound",
    name: "Rib Knit Beanie",
    category: "accessories",
    price: 2200,
    originalPrice: null,
    tag: "New",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80"],
    desc: "極簡羅紋針織毛帽，沒有多餘的 logo 或裝飾。可以折邊也可以不折，高度剛好。羊毛的比例讓它在台灣冬天的溫度非常實用。",
    sizes: ["Free Size"],
    details: "素材：羊毛 60% 壓克力 40%｜加拿大品牌"
  },
  {
    id: 7,
    brand: "Studio Nicholson",
    name: "Ecru Wide Leg Trousers",
    category: "bottoms",
    price: 8800,
    originalPrice: null,
    tag: "Exclusive",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80"],
    desc: "自然白色系的寬管褲，腰際的褶子設計讓穿著時更顯挺。這個顏色搭配任何深色系上衣都不會出錯，適合構建清爽的整體感。",
    sizes: ["XS", "S", "M", "L"],
    details: "素材：棉 55% 嫘縈 45%｜英國品牌"
  },
  {
    id: 8,
    brand: "Maison Margiela",
    name: "Tabi Split-Toe Boots",
    category: "accessories",
    price: 28000,
    originalPrice: null,
    tag: "Luxury",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"],
    desc: "標誌性的分趾 Tabi 設計靴款，每一次看到這雙靴子都覺得它是服裝界最誠實的設計宣言之一。做工精良，穿一輩子都不為過。",
    sizes: ["36", "37", "38", "39", "40", "41"],
    details: "素材：天然皮革｜義大利製｜附防塵袋"
  }
];

// ──────────────────────────────────────────────
//  STATE
// ──────────────────────────────────────────────
let cart = [];
let currentFilter = 'all';
let likedProducts = new Set();

// ──────────────────────────────────────────────
//  RENDER PRODUCTS
// ──────────────────────────────────────────────
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productGrid');
  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  grid.innerHTML = '';

  filtered.forEach((product, idx) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.id = product.id;
    card.style.animationDelay = `${idx * 0.04}s`;

    const discountPercent = product.originalPrice
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : null;

    card.innerHTML = `
      <div class="product-img-wrap">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        />
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
        <button
          class="product-wishlist ${likedProducts.has(product.id) ? 'liked' : ''}"
          onclick="toggleLike(event, ${product.id})"
          aria-label="收藏"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="${likedProducts.has(product.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="product-info">
        <p class="product-brand">${product.brand}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price-row">
          <div style="display:flex;align-items:baseline;gap:8px;">
            <span class="product-price">$${product.price.toLocaleString()}</span>
            ${product.originalPrice ? `<span class="product-price-original">$${product.originalPrice.toLocaleString()}</span>` : ''}
          </div>
          <button
            class="product-add-btn"
            onclick="quickAddToCart(event, ${product.id})"
            aria-label="加入購物車"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.product-add-btn') || e.target.closest('.product-wishlist')) return;
      openModal(product.id);
    });

    grid.appendChild(card);
  });
}

// ──────────────────────────────────────────────
//  FILTER
// ──────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderProducts(currentFilter);
  });
});

// ──────────────────────────────────────────────
//  MODAL
// ──────────────────────────────────────────────
function openModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');

  const discountPercent = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  content.innerHTML = `
    <div class="modal-img-panel">
      <img src="${product.images[0]}" alt="${product.name}" />
    </div>
    <div class="modal-info-panel">
      <p class="modal-eyebrow">${product.brand}</p>
      <h2 class="modal-name">${product.name}</h2>
      <div class="modal-price-row">
        <span class="modal-price">$${product.price.toLocaleString()}</span>
        ${product.originalPrice ? `
          <span class="modal-price-orig">$${product.originalPrice.toLocaleString()}</span>
          <span class="modal-sale-tag">-${discountPercent}%</span>
        ` : ''}
      </div>
      <p class="modal-desc">${product.desc}</p>
      <div>
        <p class="modal-size-label">尺寸</p>
        <div class="modal-sizes" id="modalSizes">
          ${product.sizes.map((s, i) => `
            <button
              class="size-btn ${i === 1 ? 'selected' : ''}"
              onclick="selectSize(this, '${s}')"
              data-size="${s}"
            >${s}</button>
          `).join('')}
        </div>
      </div>
      <div class="modal-ctas">
        <button class="btn-primary" onclick="addToCartFromModal(${product.id})">
          加入購物車
        </button>
        <button class="btn-ghost" onclick="showToast('已加入收藏 ♡')">
          收藏
        </button>
      </div>
      <p class="modal-details">${product.details}</p>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

function selectSize(btn, size) {
  btn.closest('.modal-sizes').querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

// ──────────────────────────────────────────────
//  CART
// ──────────────────────────────────────────────
function getSelectedSize(productId) {
  const sizeBtn = document.querySelector('#modalSizes .size-btn.selected');
  return sizeBtn ? sizeBtn.dataset.size : PRODUCTS.find(p => p.id === productId)?.sizes[0];
}

function addToCartFromModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  const size = getSelectedSize(productId);
  addToCart(product, size);
  closeModal();
}

function quickAddToCart(e, productId) {
  e.stopPropagation();
  const product = PRODUCTS.find(p => p.id === productId);
  addToCart(product, product.sizes[0]);
}

function addToCart(product, size) {
  const existing = cart.find(i => i.id === product.id && i.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, size, qty: 1 });
  }
  updateCartUI();
  showToast(`「${product.name}」已加入購物車`);
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const countEl = document.getElementById('cartCount');
  countEl.textContent = count;
  if (count > 0) countEl.classList.add('visible');
  else countEl.classList.remove('visible');
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');

  if (cart.length === 0) {
    empty.style.display = 'flex';
    container.innerHTML = '';
    footer.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  footer.style.display = 'flex';

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  totalEl.textContent = `$${total.toLocaleString()}`;

  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}" data-size="${item.size}">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item-info">
        <p class="cart-item-brand">${item.brand}</p>
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-size">尺寸：${item.size}</p>
        <p class="cart-item-price">$${item.price.toLocaleString()}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, '${item.size}', -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, '${item.size}', 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem(${item.id}, '${item.size}')" aria-label="移除">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  `).join('');
}

function changeQty(id, size, delta) {
  const item = cart.find(i => i.id === id && i.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => !(i.id === id && i.size === size));
  updateCartUI();
}

function removeCartItem(id, size) {
  cart = cart.filter(i => !(i.id === id && i.size === size));
  updateCartUI();
  showToast('已從購物車移除');
}

// Cart drawer open/close
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// ──────────────────────────────────────────────
//  WISHLIST / LIKE
// ──────────────────────────────────────────────
function toggleLike(e, productId) {
  e.stopPropagation();
  if (likedProducts.has(productId)) {
    likedProducts.delete(productId);
    showToast('已取消收藏');
  } else {
    likedProducts.add(productId);
    showToast('已加入收藏 ♡');
  }
  renderProducts(currentFilter);
}

// ──────────────────────────────────────────────
//  TOAST
// ──────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ──────────────────────────────────────────────
//  SUBSCRIBE
// ──────────────────────────────────────────────
function handleSubscribe(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const email = input.value;
  input.value = '';
  showToast(`${email} 已成功訂閱週報！`);
}

// ──────────────────────────────────────────────
//  NAVIGATION
// ──────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(11,12,14,0.92)';
  } else {
    nav.style.background = 'rgba(11,12,14,0.7)';
  }
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open');
  const spans = mobileMenuBtn.querySelectorAll('span');
  const isOpen = navLinks.classList.contains('mobile-open');
  spans[0].style.transform = isOpen ? 'translateY(6.5px) rotate(45deg)' : '';
  spans[1].style.opacity = isOpen ? '0' : '';
  spans[2].style.transform = isOpen ? 'translateY(-6.5px) rotate(-45deg)' : '';
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ──────────────────────────────────────────────
//  SCROLL TO SECTION
// ──────────────────────────────────────────────
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ──────────────────────────────────────────────
//  KEYBOARD ACCESSIBILITY
// ──────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeCart();
  }
});

// ──────────────────────────────────────────────
//  INIT
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
});
