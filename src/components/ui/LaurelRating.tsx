interface Props {
  rating: number;
  ratingScale?: number;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { wrapper: 'w-12 h-12', text: 'text-sm', laurel: 48 },
  md: { wrapper: 'w-16 h-16', text: 'text-lg', laurel: 64 },
  lg: { wrapper: 'w-20 h-20', text: 'text-xl', laurel: 80 },
};

export default function LaurelRating({ rating, size = 'md' }: Props) {
  const s = sizeMap[size];

  return (
    <div className={`${s.wrapper} relative flex items-center justify-center shrink-0`}>
      <svg
        viewBox="0 0 64 64"
        className="absolute inset-0 w-full h-full"
        fill="none"
      >
        {/* Left laurel branch */}
        <path
          d="M20 52 C16 44, 10 38, 12 30 C14 26, 16 28, 15 32 C14 24, 10 20, 14 14 C16 12, 18 14, 16 18 C16 12, 14 6, 20 4 C22 3, 24 6, 22 8 C24 4, 26 2, 30 4"
          stroke="#d4a843"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Left leaves */}
        <path d="M15 32 C12 30, 10 32, 12 34 C14 36, 16 34, 15 32Z" fill="#d4a843" opacity="0.8" />
        <path d="M16 24 C13 22, 10 24, 12 26 C14 28, 17 26, 16 24Z" fill="#d4a843" opacity="0.8" />
        <path d="M16 18 C13 15, 11 17, 13 20 C15 22, 18 20, 16 18Z" fill="#d4a843" opacity="0.7" />
        <path d="M20 12 C17 9, 14 11, 16 14 C18 16, 21 14, 20 12Z" fill="#d4a843" opacity="0.7" />
        <path d="M22 8 C20 5, 17 6, 19 9 C21 11, 24 10, 22 8Z" fill="#d4a843" opacity="0.6" />

        {/* Right laurel branch (mirrored) */}
        <path
          d="M44 52 C48 44, 54 38, 52 30 C50 26, 48 28, 49 32 C50 24, 54 20, 50 14 C48 12, 46 14, 48 18 C48 12, 50 6, 44 4 C42 3, 40 6, 42 8 C40 4, 38 2, 34 4"
          stroke="#d4a843"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right leaves */}
        <path d="M49 32 C52 30, 54 32, 52 34 C50 36, 48 34, 49 32Z" fill="#d4a843" opacity="0.8" />
        <path d="M48 24 C51 22, 54 24, 52 26 C50 28, 47 26, 48 24Z" fill="#d4a843" opacity="0.8" />
        <path d="M48 18 C51 15, 53 17, 51 20 C49 22, 46 20, 48 18Z" fill="#d4a843" opacity="0.7" />
        <path d="M44 12 C47 9, 50 11, 48 14 C46 16, 43 14, 44 12Z" fill="#d4a843" opacity="0.7" />
        <path d="M42 8 C44 5, 47 6, 45 9 C43 11, 40 10, 42 8Z" fill="#d4a843" opacity="0.6" />
      </svg>
      <span
        className={`relative ${s.text} text-[#212934] z-10`}
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
      >
        {rating.toFixed(1).replace('.', ',')}
      </span>
    </div>
  );
}
