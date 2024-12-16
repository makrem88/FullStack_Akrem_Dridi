// Import the Product type from the types directory
import { Product } from '../types/product';

// Define the base URL for the API
const API_URL = 'http://localhost:3000/api';

// Function to fetch all products from the API
export async function getProducts(): Promise<Product[]> {
    // Make a GET request to the /products endpoint
    const response = await fetch(`${API_URL}/products`);
    // Throw an error if the request was not successful
    if (!response.ok) throw new Error('Failed to fetch products');
    // Parse and return the JSON response
    return response.json();
}

// Function to fetch a single product by its ID from the API
export async function getProduct(id: number): Promise<Product> {
    // Make a GET request to the /products/{id} endpoint
    const response = await fetch(`${API_URL}/products/${id}`);
    // Throw an error if the request was not successful
    if (!response.ok) throw new Error('Failed to fetch product');
    // Parse and return the JSON response
    return response.json();
}