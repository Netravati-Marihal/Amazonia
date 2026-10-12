export default function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-lg bg-white p-4 shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
      <div className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800" />
      <div className="mt-4 h-3 w-20 rounded bg-slate-200 dark:bg-slate-800" />
      <div className="mt-3 h-4 rounded bg-slate-200 dark:bg-slate-800" />
      <div className="mt-2 h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
      <div className="mt-5 h-8 w-28 rounded bg-slate-200 dark:bg-slate-800" />
      <div className="mt-5 h-11 rounded-lg bg-slate-200 dark:bg-slate-800" />
    </div>
  );
}
