export interface Badge {
  code: string;
  color: string;
  label: string;
}

interface Props {
  badges: Badge[];
  size?: 'sm' | 'md';
}

const sizeMap = {
  sm: 'w-6 h-6 text-[10px]',
  md: 'w-7 h-7 text-xs',
};

export default function CategoryBadges({ badges, size = 'md' }: Props) {
  return (
    <div className="flex gap-1.5">
      {badges.map((badge) => (
        <span
          key={badge.code}
          title={badge.label}
          className={`${sizeMap[size]} inline-flex items-center justify-center rounded-full text-white font-semibold`}
          style={{ backgroundColor: badge.color, fontFamily: "'Inter', sans-serif" }}
        >
          {badge.code}
        </span>
      ))}
    </div>
  );
}
