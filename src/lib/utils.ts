export function formatPrice(price: number): string {
  return `${price}€`;
}

export function formatPriceRange(min: number, max: number): string {
  return `${min}€ - ${max}€`;
}

export function getRatingPercentage(rating: number, scale: number): number {
  return (rating / scale) * 100;
}

export interface CategoryBadge {
  code: string;
  color: string;
  label: string;
}

const BADGE_COLORS: Record<string, { color: string; label: string }> = {
  A: { color: '#1a5fb4', label: 'Ambiente' },
  B: { color: '#c01c28', label: 'Bar' },
  M: { color: '#26a269', label: 'Menú' },
  E: { color: '#ec8d24', label: 'Especial' },
  T: { color: '#c061cb', label: 'Terraza' },
};

// Mock function — returns category badges based on restaurant category string
export function getCategoryBadges(category: string): CategoryBadge[] {
  const categoryMap: Record<string, string[]> = {
    'Cocina de mercado': ['A', 'B', 'M', 'E', 'T'],
    'Cocina fusión': ['A', 'M', 'T'],
    'Cocina mediterránea': ['A', 'B', 'E'],
    'Cocina creativa': ['A', 'M', 'E', 'T'],
    'Cocina japonesa': ['A', 'E'],
  };

  const codes = categoryMap[category] || ['A', 'M'];
  return codes.map((code) => ({
    code,
    ...BADGE_COLORS[code],
  }));
}

export function stripMarkdown(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^>\s+/gm, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\n{2,}/g, ' ')
    .replace(/\n/g, ' ')
    .trim();
}
