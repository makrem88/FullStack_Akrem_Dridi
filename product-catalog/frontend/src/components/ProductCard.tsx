import { buttonVariants } from './ui/button';


interface ProductCardProps {
    product: {
        thumbnail: string;
        name: string;
        price: number;
    };
}



/**
 * ProductCard component displays a product with its thumbnail, name, and price.
 * It also includes a button to view more details about the product.
 */
export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="rounded-lg shadow-md p-4 bg-card">
            <img
                src={product.thumbnail}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md transition-transform hover:scale-105"
            />
            <h3 className="mt-2 text-lg font-semibold text-card-foreground">
                {product.name}
            </h3>
            <p className="text-muted-foreground">
                ${product.price.toFixed(2)}
            </p>
            <button className={buttonVariants({ variant: 'outline' })}>
                View Details
            </button>
        </div>
    );
}