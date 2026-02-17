import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Restaurant {
  slug: string;
  name: string;
  category: string;
  chef: string;
  rating: number;
  ratingScale: number;
  priceAvg: number;
  neighborhood: string;
  heroImage: string;
}

interface Props {
  restaurants: Restaurant[];
  categories: string[];
}

export default function FilterChips({ restaurants, categories }: Props) {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos'
    ? restaurants
    : restaurants.filter((r) => r.category === active);

  return (
    <div>
      {/* Chips */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide" style={{ maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)' }}>
        {['Todos', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
              active === cat
                ? 'bg-[#ec8d24] text-white shadow-md'
                : 'bg-[#f0f1f3] text-[#212934]/70 hover:bg-[#e5ddd3]'
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((r) => (
            <motion.a
              key={r.slug}
              href={`/restaurante/${r.slug}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={r.heroImage}
                  alt={r.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#212934]/80 via-[#212934]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-[#ec8d24] text-white text-xs px-3 py-1 rounded-full mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {r.category}
                  </span>
                  <h3 className="text-white text-xl" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                    {r.name}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[#212934]/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {r.chef}
                  </span>
                  <span className="text-[#ec8d24] text-lg" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                    {r.rating}/{r.ratingScale}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#212934]/40 text-sm">
                    {r.neighborhood}
                  </span>
                  <span className="text-[#212934]/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    ~{r.priceAvg}€
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-[#212934]/40 py-12" style={{ fontFamily: "'Heebo', sans-serif" }}>
          No hay restaurantes en esta categoría.
        </p>
      )}
    </div>
  );
}
