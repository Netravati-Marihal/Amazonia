const categories = [
  "Fresh",
  "Mobiles",
  "Fashion",
  "Electronics",
  "Home",
  "Beauty",
  "Appliances",
  "Toys",
  "Books",
  "Prime",
];

const heroSlides = [
  {
    title: "Smarter shopping for every room",
    subtitle: "Curated home, tech, and daily essentials with faster discovery.",
    cta: "Shop the edit",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Deals that feel personal",
    subtitle: "Limited-time drops across gadgets, wellness, and style.",
    cta: "Explore deals",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Upgrade your everyday carry",
    subtitle: "Modern work gear, audio, bags, and accessories in one place.",
    cta: "Browse tech",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  },
];

const products = [
  {
    id: "echo-studio-2026",
    title: "Echo Studio Max Smart Speaker",
    category: "Electronics",
    price: 189.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 18492,
    badge: "Best Seller",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80",
    description: "Spatial audio, adaptive room tuning, and crisp voice controls for a premium smart-home sound experience.",
  },
  {
    id: "kindle-paperwhite-color",
    title: "Kindle Paperwhite Color Edition",
    category: "Books",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 9351,
    badge: "New",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=900&q=80",
    description: "A glare-free reading display with color highlights, weeks of battery life, and waterproof portability.",
  },
  {
    id: "aero-office-chair",
    title: "AeroFlex Ergonomic Office Chair",
    category: "Home",
    price: 274.5,
    originalPrice: 349.99,
    rating: 4.6,
    reviews: 5022,
    badge: "Deal",
    stock: "Only 7 left",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=900&q=80",
    description: "Breathable mesh, adjustable lumbar support, and a balanced recline made for long workdays.",
  },
  {
    id: "luna-pro-headphones",
    title: "Luna Pro Noise Cancelling Headphones",
    category: "Electronics",
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.5,
    reviews: 12680,
    badge: "Limited Deal",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    description: "Immersive active noise cancellation, 40-hour battery life, and soft memory-foam earcups.",
  },
  {
    id: "nest-cookware-set",
    title: "Nest Ceramic Cookware Set",
    category: "Home",
    price: 96,
    originalPrice: 139.99,
    rating: 4.4,
    reviews: 2981,
    badge: "Today Only",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
    description: "Non-stick ceramic pans, recycled aluminum build, and stackable storage for compact kitchens.",
  },
  {
    id: "pulse-smart-watch",
    title: "Pulse X2 Health Smartwatch",
    category: "Mobiles",
    price: 219,
    originalPrice: 279,
    rating: 4.6,
    reviews: 7750,
    badge: "Prime",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    description: "Advanced sleep insights, training modes, offline music, and a bright always-on display.",
  },
  {
    id: "urban-weekender-bag",
    title: "Urban Weekender Travel Bag",
    category: "Fashion",
    price: 74.99,
    originalPrice: 109.99,
    rating: 4.3,
    reviews: 4314,
    badge: "Choice",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    description: "Water-resistant recycled fabric, laptop sleeve, and smart compartments for short trips.",
  },
  {
    id: "glow-beauty-kit",
    title: "GlowLab Daily Skincare Kit",
    category: "Beauty",
    price: 44.5,
    originalPrice: 68,
    rating: 4.7,
    reviews: 2188,
    badge: "Trending",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
    description: "A gentle cleanser, serum, moisturizer, and SPF routine designed for everyday radiance.",
  },
];

const state = {
  activeCategory: "All",
  search: "",
  sort: "featured",
  heroIndex: 0,
  cart: [],
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const heroTrack = document.querySelector("#heroTrack");
const categoryLinks = document.querySelector("#categoryLinks");
const categorySelect = document.querySelector("#categorySelect");
const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");
const sortSelect = document.querySelector("#sortSelect");
const cartButton = document.querySelector("#cartButton");
const closeCart = document.querySelector("#closeCart");
const cartDrawer = document.querySelector("#cartDrawer");
const scrim = document.querySelector("#scrim");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const menuButton = document.querySelector("#menuButton");

function renderHero() {
  heroTrack.innerHTML = heroSlides
    .map(
      (slide) => `
        <article class="hero-slide" style="background-image: url('${slide.image}')">
          <div class="hero-content">
            <h1>${slide.title}</h1>
            <p>${slide.subtitle}</p>
            <a href="#productGrid">${slide.cta}</a>
          </div>
        </article>
      `,
    )
    .join("");
  updateHero();
}

function updateHero() {
  heroTrack.style.transform = `translateX(-${state.heroIndex * 100}%)`;
}

function renderCategories() {
  const allCategories = ["All", ...categories];
  categoryLinks.innerHTML = allCategories
    .map(
      (category) => `
        <button class="${category === state.activeCategory ? "active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");

  categorySelect.innerHTML = allCategories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");
}

function getVisibleProducts() {
  const query = state.search.trim().toLowerCase();
  let visible = products.filter((product) => {
    const matchesCategory = state.activeCategory === "All" || product.category === state.activeCategory;
    const matchesSearch =
      !query ||
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  if (state.sort === "price-low") {
    visible = [...visible].sort((a, b) => a.price - b.price);
  }

  if (state.sort === "price-high") {
    visible = [...visible].sort((a, b) => b.price - a.price);
  }

  if (state.sort === "rating") {
    visible = [...visible].sort((a, b) => b.rating - a.rating);
  }

  return visible;
}

function renderProducts() {
  const visible = getVisibleProducts();

  if (!visible.length) {
    productGrid.innerHTML = `<article class="quick-panel"><h2>No products found</h2><p>Try a different search or category.</p></article>`;
    return;
  }

  productGrid.innerHTML = visible
    .map(
      (product) => `
        <article class="product-card">
          <span class="badge">${product.badge}</span>
          <img src="${product.image}" alt="${product.title}" loading="lazy" />
          <h3>${product.title}</h3>
          <div class="rating" aria-label="${product.rating} out of 5 stars">
            ${renderStars(product.rating)} ${product.rating} (${product.reviews.toLocaleString()})
          </div>
          <div class="price-row">
            <span class="price">${money.format(product.price)}</span>
            <span class="old-price">${money.format(product.originalPrice)}</span>
          </div>
          <p class="stock">${product.stock}</p>
          <p>${product.description}</p>
          <button type="button" data-add="${product.id}">Add to cart</button>
        </article>
      `,
    )
    .join("");
}

function renderStars(rating) {
  const full = Math.round(rating);
  return `${full}/5`;
}

function renderQuickPanels() {
  document.querySelector("#miniGrid").innerHTML = products
    .slice(0, 4)
    .map(
      (product) => `
        <a class="mini-item" href="#productGrid">
          <img src="${product.image}" alt="${product.category}" loading="lazy" />
          <span>${product.category}</span>
        </a>
      `,
    )
    .join("");

  document.querySelector("#dealStrip").innerHTML = products
    .filter((product) => product.price < 100)
    .slice(0, 3)
    .map(
      (product) => `
        <a class="deal-tile" href="#productGrid">
          <img src="${product.image}" alt="${product.title}" loading="lazy" />
          <strong>${money.format(product.price)}</strong>
        </a>
      `,
    )
    .join("");
}

function addToCart(id) {
  const item = state.cart.find((cartItem) => cartItem.id === id);

  if (item) {
    item.quantity += 1;
  } else {
    const product = products.find((candidate) => candidate.id === id);
    state.cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  openCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter((item) => item.id !== id);
  renderCart();
}

function renderCart() {
  const totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalQuantity;
  cartTotal.textContent = money.format(subtotal);

  if (!state.cart.length) {
    cartItems.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
    return;
  }

  cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <article class="cart-item">
          <img src="${item.image}" alt="${item.title}" />
          <div>
            <h3>${item.title}</h3>
            <p>${item.quantity} x ${money.format(item.price)}</p>
          </div>
          <button type="button" data-remove="${item.id}">Remove</button>
        </article>
      `,
    )
    .join("");
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  scrim.hidden = false;
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  scrim.hidden = true;
}

document.querySelector("#prevHero").addEventListener("click", () => {
  state.heroIndex = (state.heroIndex - 1 + heroSlides.length) % heroSlides.length;
  updateHero();
});

document.querySelector("#nextHero").addEventListener("click", () => {
  state.heroIndex = (state.heroIndex + 1) % heroSlides.length;
  updateHero();
});

categoryLinks.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  state.activeCategory = button.dataset.category;
  categorySelect.value = state.activeCategory;
  categoryLinks.classList.remove("open");
  renderCategories();
  renderProducts();
});

categorySelect.addEventListener("change", (event) => {
  state.activeCategory = event.target.value;
  renderCategories();
  renderProducts();
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.search = searchInput.value;
  renderProducts();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  addToCart(button.dataset.add);
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  removeFromCart(button.dataset.remove);
});

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
scrim.addEventListener("click", closeCartDrawer);

menuButton.addEventListener("click", () => {
  categoryLinks.classList.toggle("open");
});

document.querySelector("#backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCartDrawer();
  }
});

setInterval(() => {
  state.heroIndex = (state.heroIndex + 1) % heroSlides.length;
  updateHero();
}, 6000);

renderHero();
renderCategories();
renderQuickPanels();
renderProducts();
renderCart();
