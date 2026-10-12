import { Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { discountPercent, formatCurrency } from '../../utils/format.js';
import RatingStars from './RatingStars.jsx';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-soft ring-1 ring-slate-200/70 transition duration-300 hover:shadow-lift dark:bg-slate-900 dark:ring-white/10"
    >
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-amazon-gold px-3 py-1 text-xs font-bold text-amazon-navy">
          {product.badge}
        </span>
        <button
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-slate-700 shadow transition hover:bg-white hover:text-rose-500 dark:bg-slate-950/80 dark:text-white"
          aria-label={`Add ${product.title} to wishlist`}
        >
          <Heart className="h-4 w-4" />
        </button>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-normal text-amazon-orange">{product.category}</p>
        <Link to={`/product/${product.id}`} className="mt-2 line-clamp-2 min-h-12 font-semibold hover:text-amazon-orange">
          {product.title}
        </Link>
        <div className="mt-3">
          <RatingStars rating={product.rating} reviews={product.reviews} />
        </div>
        <div className="mt-4 flex items-end gap-2">
          <span className="text-2xl font-black">{formatCurrency(product.price)}</span>
          <span className="pb-1 text-sm text-slate-500 line-through dark:text-slate-400">
            {formatCurrency(product.originalPrice)}
          </span>
        </div>
        <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
          Save {discountPercent(product.price, product.originalPrice)}%
        </p>
        <button
          onClick={() => addItem(product)}
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-amazon-gold px-4 py-3 font-bold text-amazon-navy transition hover:bg-amazon-orange focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to cart
        </button>
      </div>
    </motion.article>
  );
}
