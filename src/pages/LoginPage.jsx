import { LockKeyhole, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <section className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2">
      <div className="hidden lg:block">
        <p className="text-sm font-bold uppercase tracking-normal text-amazon-orange">Welcome back</p>
        <h1 className="mt-3 text-5xl font-black tracking-normal">Sign in for faster checkout and smarter recommendations.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Access orders, wishlists, delivery preferences, and personalized product discovery from a clean account hub.
        </p>
      </div>

      <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-lift ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
        <Link to="/" className="text-2xl font-black">
          Amazonia
        </Link>
        <h2 className="mt-8 text-3xl font-black">Sign in</h2>
        <form className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-semibold">Email address</span>
            <span className="mt-2 flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-3 dark:border-white/15">
              <Mail className="h-5 w-5 text-slate-500" />
              <input className="w-full bg-transparent outline-none" type="email" placeholder="you@example.com" />
            </span>
          </label>
          <label className="block">
            <span className="text-sm font-semibold">Password</span>
            <span className="mt-2 flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-3 dark:border-white/15">
              <LockKeyhole className="h-5 w-5 text-slate-500" />
              <input className="w-full bg-transparent outline-none" type="password" placeholder="Enter password" />
            </span>
          </label>
          <button className="w-full rounded-lg bg-amazon-gold px-5 py-3 font-bold text-amazon-navy transition hover:bg-amazon-orange">
            Continue
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-slate-600 dark:text-slate-300">
          New to Amazonia?{' '}
          <a href="/" className="font-bold text-amazon-orange hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </section>
  );
}
