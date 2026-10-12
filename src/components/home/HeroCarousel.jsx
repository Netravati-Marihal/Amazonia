import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { heroSlides } from '../../data/products.js';

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section id="top" className="relative overflow-hidden bg-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="relative min-h-[430px] sm:min-h-[520px]"
        >
          <img src={slide.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/45 to-transparent" />
          <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center px-6 py-16 sm:min-h-[520px]">
            <div className="max-w-2xl text-white">
              <p className="text-sm font-bold uppercase tracking-normal text-amazon-gold">Amazonia 2026</p>
              <h1 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">{slide.title}</h1>
              <p className="mt-5 max-w-xl text-lg text-slate-200">{slide.subtitle}</p>
              <a
                href="#deals"
                className="mt-8 inline-flex rounded-lg bg-amazon-gold px-6 py-3 font-bold text-amazon-navy transition hover:bg-amazon-orange"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
        {heroSlides.map((item, index) => (
          <button
            key={item.id}
            className={`h-2.5 rounded-full transition-all ${index === active ? 'w-9 bg-amazon-gold' : 'w-2.5 bg-white/70'}`}
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>

      <button
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-900 transition hover:bg-white sm:block"
        aria-label="Previous hero slide"
        onClick={() => setActive((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-900 transition hover:bg-white sm:block"
        aria-label="Next hero slide"
        onClick={() => setActive((current) => (current + 1) % heroSlides.length)}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
}
