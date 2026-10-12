import productData from './products.json';

export const categories = productData.categories;
export const heroSlides = productData.heroSlides;
export const products = productData.products;

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

export function getDeals() {
  return products.filter((product) => product.originalPrice - product.price > 30);
}
