export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export function discountPercent(price, originalPrice) {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
