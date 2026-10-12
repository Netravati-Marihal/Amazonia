import { Heart, RotateCcw, ShieldCheck, ShoppingCart, Truck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RatingStars from '../components/product/RatingStars.jsx';
import { useCart } from '../context/CartContext.jsx';
import { fetchProductById } from '../services/productApi.js';
import { discountPercent, formatCurrency } from '../utils/format.js';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    setIsLoading(true);
    fetchProductById(id).then((item) => {
      setProduct(item);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return (
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2">
        <div className="aspect-square animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
        <div className="space-y-5">
          <div className="h-8 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-52 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-28 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-black">Product not found</h1>
        <Link className="mt-6 inline-flex rounded-lg bg-amazon-gold px-5 py-3 font-bold text-amazon-navy" to="/">
          Return home
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr]">
      <div className="overflow-hidden rounded-lg bg-white shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full object-cover transition duration-700 hover:scale-125"
        />
      </div>

      <article>
        <p className="text-sm font-bold uppercase tracking-normal text-amazon-orange">{product.category}</p>
        <h1 className="mt-3 text-3xl font-black tracking-normal sm:text-5xl">{product.title}</h1>
        <div className="mt-4">
          <RatingStars rating={product.rating} reviews={product.reviews} />
        </div>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{product.description}</p>

        <div className="mt-6 rounded-lg bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
          <div className="flex flex-wrap items-end gap-3">
            <span className="text-4xl font-black">{formatCurrency(product.price)}</span>
            <span className="text-lg text-slate-500 line-through dark:text-slate-400">{formatCurrency(product.originalPrice)}</span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
              {discountPercent(product.price, product.originalPrice)}% off
            </span>
          </div>
          <p className="mt-2 font-semibold text-emerald-600 dark:text-emerald-400">{product.stock}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => addItem(product)}
              className="flex items-center justify-center gap-2 rounded-lg bg-amazon-gold px-5 py-3 font-bold text-amazon-navy transition hover:bg-amazon-orange"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to cart
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-bold transition hover:border-amazon-orange hover:text-amazon-orange dark:border-white/15">
              <Heart className="h-5 w-5" />
              Wishlist
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { icon: Truck, text: 'Fast delivery' },
            { icon: RotateCcw, text: 'Easy returns' },
            { icon: ShieldCheck, text: 'Secure order' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="rounded-lg bg-white p-4 text-center shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
              <Icon className="mx-auto h-6 w-6 text-amazon-orange" />
              <p className="mt-2 text-sm font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
