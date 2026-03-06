import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LaurelRating from '../ui/LaurelRating';
import CategoryBadges from '../ui/CategoryBadges';
import type { Badge } from '../ui/CategoryBadges';

interface Restaurant {
  slug: string;
  name: string;
  category: string;
  chef: string;
  rating: number;
  ratingScale: number;
  priceAvg: number;
  neighborhood: string;
  address: string;
  heroImage: string;
  excerpt: string;
  badges: Badge[];
}

interface Props {
  restaurants: Restaurant[];
  categories: string[];
  basePath: string;
}

export default function FilterChips({ restaurants, categories, basePath }: Props) {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos'
    ? restaurants
    : restaurants.filter((r) => r.category === active);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h2
          className="text-2xl text-[#212934] shrink-0"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
        >
          Filtros
        </h2>

        <div
          className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide flex-1"
          style={{ maskImage: 'linear-gradient(to right, black 95%, transparent)' }}
        >
          {['Todos', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
                active === cat
                  ? 'bg-[#ec8d24] text-white shadow-md'
                  : 'bg-white text-[#212934]/70 hover:bg-[#e5ddd3] border border-[#212934]/10'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-[#212934]/10 text-sm text-[#212934]/60 hover:bg-white transition-colors shrink-0"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeWidth="1.5" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          Elegir ubicación
        </button>
      </div>

      {/* Cards list */}
      <motion.div className="flex flex-col gap-5" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((r) => (
            <motion.a
              key={r.slug}
              href={`${basePath}restaurante/${r.slug}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="md:w-56 lg:w-64 shrink-0">
                <div className="h-48 md:h-full overflow-hidden">
                  <img
                    src={r.heroImage}
                    alt={r.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 md:rounded-l-2xl"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col justify-center min-w-0">
                <h3
                  className="text-xl text-[#212934] mb-1 truncate"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
                >
                  {r.name}
                </h3>

                <div className="flex items-center gap-1.5 text-[#212934]/50 text-sm mb-3">
                  <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="truncate" style={{ fontFamily: "'Heebo', sans-serif" }}>
                    {r.neighborhood ? `${r.neighborhood}, ` : ''}{r.address}
                  </span>
                </div>

                <p
                  className="text-[#212934]/60 text-sm leading-relaxed mb-3 line-clamp-2"
                  style={{ fontFamily: "'Heebo', sans-serif" }}
                >
                  {r.excerpt}
                </p>

                <span
                  className="text-[#ec8d24] text-sm font-medium hover:underline"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Leer más →
                </span>
              </div>

              {/* Meta (rating + badges) */}
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-3 px-5 pb-5 md:p-5 md:pl-0 shrink-0">
                <LaurelRating rating={r.rating} ratingScale={r.ratingScale} size="md" />
                <CategoryBadges badges={r.badges} size="sm" />
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p
          className="text-center text-[#212934]/40 py-16"
          style={{ fontFamily: "'Heebo', sans-serif" }}
        >
          No hay restaurantes en esta categoría.
        </p>
      )}
    </div>
  );
}
