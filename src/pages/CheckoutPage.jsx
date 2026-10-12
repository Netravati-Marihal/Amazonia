import { CreditCard, LockKeyhole, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { formatCurrency } from '../utils/format.js';

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const total = subtotal + (items.length ? 6.99 : 0) + subtotal * 0.08;

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_360px]">
      <div>
        <h1 className="text-3xl font-black tracking-normal">Checkout</h1>
        <div className="mt-6 space-y-5">
          <CheckoutPanel icon={MapPin} title="Delivery address">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded-lg border border-slate-300 bg-white px-4 py-3 dark:border-white/15 dark:bg-slate-950" placeholder="Full name" />
              <input className="rounded-lg border border-slate-300 bg-white px-4 py-3 dark:border-white/15 dark:bg-slate-950" placeholder="Phone number" />
              <input className="rounded-lg border border-slate-300 bg-white px-4 py-3 dark:border-white/15 dark:bg-slate-950 sm:col-span-2" placeholder="Street address" />
              <input className="rounded-lg border border-slate-300 bg-white px-4 py-3 dark:border-white/15 dark:bg-slate-950" placeholder="City" />
              <input className="rounded-lg border border-slate-300 bg-white px-4 py-3 dark:border-white/15 dark:bg-slate-950" placeholder="ZIP code" />
            </div>
          </CheckoutPanel>

          <CheckoutPanel icon={CreditCard} title="Payment method">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded-lg border border-slate-300 bg-white px-4 py-3 dark:border-white/15 dark:bg-slate-950 sm:col-span-2" placeholder="Card number" />
              <input className="rounded-lg border border-slate-300 bg-white px-4 py-3 dark:border-white/15 dark:bg-slate-950" placeholder="MM / YY" />
              <input className="rounded-lg border border-slate-300 bg-white px-4 py-3 dark:border-white/15 dark:bg-slate-950" placeholder="CVV" />
            </div>
          </CheckoutPanel>
        </div>
      </div>

      <aside className="h-fit rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
        <h2 className="text-xl font-black">Review order</h2>
        <div className="mt-4 space-y-3">
          {items.length === 0 ? (
            <p className="text-sm text-slate-600 dark:text-slate-300">No items selected.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img src={item.image} alt="" className="h-14 w-14 rounded-md object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-slate-500">Qty {item.quantity}</p>
                </div>
                <p className="text-sm font-bold">{formatCurrency(item.price * item.quantity)}</p>
              </div>
            ))
          )}
        </div>
        <div className="mt-5 flex justify-between border-t border-slate-200 pt-5 text-lg font-black dark:border-white/10">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-amazon-gold px-5 py-3 font-bold text-amazon-navy transition hover:bg-amazon-orange">
          <LockKeyhole className="h-4 w-4" />
          Place order
        </button>
        <Link to="/cart" className="mt-4 block text-center text-sm font-semibold text-amazon-orange hover:underline">
          Return to cart
        </Link>
      </aside>
    </section>
  );
}

function CheckoutPanel({ icon: Icon, title, children }) {
  return (
    <section className="rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
      <h2 className="flex items-center gap-3 text-xl font-black">
        <Icon className="h-6 w-6 text-amazon-orange" />
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
