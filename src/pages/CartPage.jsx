import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { formatCurrency } from '../utils/format.js';

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const shipping = items.length > 0 ? 6.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_360px]">
      <div>
        <h1 className="text-3xl font-black tracking-normal">Shopping Cart</h1>
        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <div className="rounded-lg bg-white p-8 text-center shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
              <p className="text-lg font-semibold">Your cart is empty.</p>
              <Link to="/" className="mt-5 inline-flex rounded-lg bg-amazon-gold px-5 py-3 font-bold text-amazon-navy">
                Continue shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <article
                key={item.id}
                className="grid gap-4 rounded-lg bg-white p-4 shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10 sm:grid-cols-[120px_1fr_auto]"
              >
                <img src={item.image} alt={item.title} className="h-32 w-full rounded-lg object-cover sm:h-28" />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">{item.stock}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rose-600 hover:underline"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                  <p className="text-xl font-black">{formatCurrency(item.price)}</p>
                  <div className="flex items-center rounded-lg border border-slate-300 dark:border-white/15">
                    <button className="p-2" aria-label="Decrease quantity" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center font-bold">{item.quantity}</span>
                    <button className="p-2" aria-label="Increase quantity" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>

      <aside className="h-fit rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
        <h2 className="text-xl font-black">Order Summary</h2>
        <div className="mt-5 space-y-3 text-sm">
          <SummaryRow label="Subtotal" value={formatCurrency(subtotal)} />
          <SummaryRow label="Shipping" value={formatCurrency(shipping)} />
          <SummaryRow label="Estimated tax" value={formatCurrency(tax)} />
        </div>
        <div className="mt-5 flex justify-between border-t border-slate-200 pt-5 text-lg font-black dark:border-white/10">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
        <Link
          to="/checkout"
          className={`mt-6 flex w-full justify-center rounded-lg px-5 py-3 font-bold text-amazon-navy transition ${
            items.length === 0 ? 'pointer-events-none bg-slate-200 text-slate-500' : 'bg-amazon-gold hover:bg-amazon-orange'
          }`}
        >
          Proceed to checkout
        </Link>
      </aside>
    </section>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-slate-600 dark:text-slate-300">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
