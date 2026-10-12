import { ShieldCheck, Sparkles, Truck, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import HeroCarousel from '../components/home/HeroCarousel.jsx';
import ProductSection from '../components/home/ProductSection.jsx';
import ProductSlider from '../components/home/ProductSlider.jsx';
import { getDeals } from '../data/products.js';
import { fetchProducts } from '../services/productApi.js';

const benefits = [
  { icon: Truck, label: 'Fast delivery', text: 'Same-day windows in select cities' },
  { icon: ShieldCheck, label: 'Secure checkout', text: 'Protected payments and returns' },
  { icon: Sparkles, label: 'Personalized', text: 'Smarter picks as you browse' },
  { icon: Zap, label: 'Flash deals', text: 'Fresh drops every few hours' },
];

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((items) => {
      setProducts(items);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <HeroCarousel />

      <section className="mx-auto -mt-10 grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, label, text }) => (
          <article
            key={label}
            className="relative rounded-lg bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10"
          >
            <Icon className="h-7 w-7 text-amazon-orange" />
            <h2 className="mt-3 font-bold">{label}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{text}</p>
          </article>
        ))}
      </section>

      <ProductSection
        id="deals"
        title="Today's Deals"
        subtitle="High-value offers across the categories shoppers check first."
        products={isLoading ? [] : getDeals()}
        isLoading={isLoading}
      />

      <ProductSlider title="Popular near you" products={products} />

      <ProductSection
        id="electronics"
        title="Electronics picks"
        subtitle="Audio, smart devices, and everyday tech with premium finishes."
        products={products.filter((product) => ['Electronics', 'Mobiles'].includes(product.category))}
        isLoading={isLoading}
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid overflow-hidden rounded-lg bg-amazon-panel text-white shadow-lift lg:grid-cols-[1fr_0.85fr]">
          <div className="p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-normal text-amazon-gold">Prime-style perks</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal">Fresh drops, faster delivery, fewer clicks.</h2>
            <p className="mt-4 max-w-2xl text-slate-200">
              A redesigned shopping flow with dense product discovery, useful shortcuts, and a checkout path that stays clear on every device.
            </p>
            <a
              href="#home"
              className="mt-6 inline-flex rounded-lg bg-amazon-gold px-5 py-3 font-bold text-amazon-navy transition hover:bg-amazon-orange"
            >
              Explore home essentials
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80"
            alt="Modern desk with shopping and technology products"
            className="h-72 w-full object-cover lg:h-full"
            loading="lazy"
          />
        </div>
      </section>

      <ProductSection
        id="home"
        title="Refresh your space"
        subtitle="Furniture, cookware, beauty, and daily essentials made easy to compare."
        products={products.filter((product) => ['Home', 'Beauty', 'Fashion'].includes(product.category))}
        isLoading={isLoading}
      />
    </>
  );
}
