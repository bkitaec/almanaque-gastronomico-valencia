import { motion } from 'motion/react';
import LaurelRating from '../ui/LaurelRating';

interface Restaurant {
  slug: string;
  name: string;
  heroImage: string;
  rating: number;
  ratingScale: number;
  cuisine: string[];
  category: string;
  basePath: string;
}

interface Props {
  restaurants: Restaurant[];
  basePath: string;
}

export default function FeaturedRestaurants({ restaurants, basePath }: Props) {
  return (
    <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
      {restaurants.map((r, i) => (
        <motion.a
          key={r.slug}
          href={`${basePath}restaurante/${r.slug}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group relative flex-shrink-0 w-56 md:w-64 snap-start"
        >
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3">
            <img
              src={r.heroImage}
              alt={r.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            {/* Rating badge */}
            <div className="absolute top-3 right-3">
              <LaurelRating rating={r.rating} ratingScale={r.ratingScale} size="sm" />
            </div>
          </div>

          {/* Info */}
          <h3
            className="text-white text-base mb-0.5 truncate"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            {r.name}
          </h3>
          <p
            className="text-white/70 text-sm truncate"
            style={{ fontFamily: "'Heebo', sans-serif" }}
          >
            {r.cuisine.slice(0, 2).join(' · ')}
          </p>
        </motion.a>
      ))}

      {/* Editor's Choice card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: restaurants.length * 0.1 }}
        className="flex-shrink-0 w-56 md:w-64 snap-start"
      >
        <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-between">
          <div>
            <span
              className="inline-block text-xs font-medium text-[#ec8d24] bg-[#ec8d24]/10 px-3 py-1 rounded-full mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Selección del Editor
            </span>
            <h3
              className="text-[#212934] text-lg mb-2"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              La mejor forma de disfrutar Valencia.
            </h3>
            <p
              className="text-[#212934]/60 text-sm leading-relaxed"
              style={{ fontFamily: "'Heebo', sans-serif" }}
            >
              Descubre los restaurantes que definen la gastronomía valenciana actual.
            </p>
          </div>
          <a
            href={`${basePath}catalogo`}
            className="inline-flex items-center gap-1 text-sm font-medium text-[#212934] mt-4 hover:text-[#ec8d24] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explorar más
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
