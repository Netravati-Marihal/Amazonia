import ProductCard from '../product/ProductCard.jsx';

export default function ProductSlider({ title, products }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-black tracking-normal sm:text-3xl">{title}</h2>
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Swipe sideways</span>
      </div>
      <div className="flex snap-x gap-5 overflow-x-auto pb-4">
        {products.map((product) => (
          <div key={product.id} className="w-72 shrink-0 snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
