import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  images: string[];
  restaurantName: string;
}

export default function ImageSlider({ images, restaurantName }: Props) {
  const [startIndex, setStartIndex] = useState(0);

  // Show 3 on desktop, 2 on tablet, 1 on mobile (handled via CSS)
  const visibleCount = 3;
  const maxStart = Math.max(0, images.length - visibleCount);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(maxStart, i + 1));

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  if (images.length === 0) return null;

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={startIndex}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            {visibleImages.map((img, i) => (
              <div key={`${startIndex}-${i}`} className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`${restaurantName} - imagen ${startIndex + i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {images.length > visibleCount && (
        <>
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#212934]/60 hover:text-[#ec8d24] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={startIndex >= maxStart}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#212934]/60 hover:text-[#ec8d24] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
