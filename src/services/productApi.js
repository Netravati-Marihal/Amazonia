import { products } from '../data/products.js';

export async function fetchProducts() {
  await new Promise((resolve) => setTimeout(resolve, 650));
  return products;
}

export async function fetchProductById(id) {
  await new Promise((resolve) => setTimeout(resolve, 450));
  return products.find((product) => product.id === id);
}
