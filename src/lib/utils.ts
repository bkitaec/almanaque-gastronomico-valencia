export function formatPrice(price: number): string {
  return `${price}€`;
}

export function formatPriceRange(min: number, max: number): string {
  return `${min}€ - ${max}€`;
}

export function getRatingPercentage(rating: number, scale: number): number {
  return (rating / scale) * 100;
}
