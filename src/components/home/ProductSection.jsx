import ProductCard from '../product/ProductCard.jsx';
import ProductSkeleton from '../product/ProductSkeleton.jsx';

export default function ProductSection({ id, title, subtitle, products, isLoading = false }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-black tracking-normal sm:text-3xl">{title}</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{subtitle}</p>
        </div>
        <a href="/" className="text-sm font-bold text-amazon-orange hover:underline">
          See more
        </a>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => <ProductSkeleton key={index} />)
          : products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
