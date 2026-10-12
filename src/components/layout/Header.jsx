import {
  Heart,
  Languages,
  MapPin,
  Menu,
  Moon,
  PackageCheck,
  Search,
  ShoppingCart,
  Sun,
  UserRound,
  X,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { categories, products } from '../../data/products.js';
import { useCart } from '../../context/CartContext.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function Header() {
  const [query, setQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { isDark, toggleTheme } = useTheme();

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return products
      .filter((product) => product.title.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);
  }, [query]);

  return (
    <header className="sticky top-0 z-50 shadow-lg shadow-slate-950/10">
      <nav className="bg-amazon-navy text-white" aria-label="Primary navigation">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-3 sm:px-4 lg:px-6">
          <button
            className="rounded-md p-2 transition hover:bg-white/10 lg:hidden"
            aria-label="Open category menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link to="/" className="flex items-center gap-1 text-xl font-black tracking-normal">
            <span className="rounded-md bg-white px-2 py-1 text-amazon-navy">a</span>
            <span className="hidden sm:inline">Amazonia</span>
          </Link>

          <div className="hidden items-center gap-2 rounded-md px-2 py-1.5 transition hover:bg-white/10 md:flex">
            <MapPin className="h-5 w-5 text-amazon-gold" />
            <div className="leading-tight">
              <p className="text-xs text-slate-300">Deliver to</p>
              <p className="text-sm font-semibold">Bengaluru 560001</p>
            </div>
          </div>

          <div className="relative flex flex-1 items-center">
            <label htmlFor="site-search" className="sr-only">
              Search products
            </label>
            <select
              className="hidden h-11 rounded-l-lg border-0 bg-slate-100 px-3 text-sm text-slate-700 outline-none md:block"
              aria-label="Search category"
            >
              <option>All</option>
              <option>Deals</option>
              <option>Electronics</option>
              <option>Home</option>
            </select>
            <input
              id="site-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-11 w-full rounded-l-lg border-0 bg-white px-4 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-500 md:rounded-l-none"
              placeholder="Search Amazonia"
            />
            <button className="h-11 rounded-r-lg bg-amazon-gold px-4 text-amazon-navy transition hover:bg-amazon-orange" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            {suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-12 overflow-hidden rounded-xl bg-white text-slate-900 shadow-lift ring-1 ring-slate-200 dark:bg-slate-900 dark:text-white dark:ring-white/10">
                {suggestions.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={() => setQuery('')}
                    className="flex items-center gap-3 px-4 py-3 text-sm transition hover:bg-slate-100 dark:hover:bg-white/10"
                  >
                    <img src={product.image} alt="" className="h-10 w-10 rounded-md object-cover" />
                    <span>{product.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="hidden rounded-md p-2 transition hover:bg-white/10 sm:inline-flex"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <NavIcon icon={<Languages className="h-5 w-5" />} label="EN" hideOnMobile />
          <NavIcon to="/login" icon={<UserRound className="h-5 w-5" />} label="Account" />
          <NavIcon icon={<PackageCheck className="h-5 w-5" />} label="Orders" hideOnMobile />
          <NavIcon icon={<Heart className="h-5 w-5" />} label="Lists" hideOnMobile />

          <Link to="/cart" className="relative rounded-md p-2 transition hover:bg-white/10" aria-label="Open cart">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-amazon-gold px-1 text-xs font-bold text-amazon-navy">
              {itemCount}
            </span>
          </Link>
        </div>
      </nav>

      <div className="bg-amazon-panel text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-3 py-2 sm:px-4 lg:px-6">
          <button className="hidden items-center gap-2 rounded px-2 py-1 text-sm font-semibold transition hover:bg-white/10 lg:flex">
            <Menu className="h-4 w-4" />
            All
          </button>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} gap-1 lg:flex`}>
            {categories.map((category) => (
              <a
                key={category}
                href={`/#${category.toLowerCase()}`}
                className="whitespace-nowrap rounded px-3 py-1.5 text-sm transition hover:bg-white/10"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function NavIcon({ icon, label, to, hideOnMobile = false }) {
  const classes = `${hideOnMobile ? 'hidden lg:flex' : 'hidden sm:flex'} items-center gap-2 rounded-md px-2 py-1.5 text-sm transition hover:bg-white/10`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon}
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <button className={classes}>
      {icon}
      <span>{label}</span>
    </button>
  );
}
