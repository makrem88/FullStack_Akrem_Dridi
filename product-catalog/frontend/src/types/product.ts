// Interface representing a product
export interface Product {
    id: number; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Description of the product
    price: number; // Price of the product
    thumbnail: string; // URL of the product's thumbnail image
    category: string; // Category of the product
}