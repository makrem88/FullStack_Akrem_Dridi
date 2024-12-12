import { Product } from '../types/product';

const API_URL = 'http://localhost:3000/api';

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
}

export async function getProduct(id: string): Promise<Product> {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return response.json();
}