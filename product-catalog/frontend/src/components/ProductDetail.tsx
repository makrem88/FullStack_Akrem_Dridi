import { useQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import { getProduct } from '../api/products';
import { LoadingSpinner } from './LoadingSpinner';

export default function ProductDetail() {
    const { productId } = useParams({ from: '/product/$productId' });
    const { data: product, isLoading, error } = useQuery({
        queryKey: ['products', productId],
        queryFn: () => getProduct(Number(productId))
    });

    if (isLoading) return <LoadingSpinner />;
    if (error) return <div>Error: {(error as Error).message}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <img
                        src={product.thumbnail}
                        alt={product.name}
                        className="w-full rounded-lg"
                    />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-2xl font-bold text-gray-700 my-4">
                        ${product.price}
                    </p>
                    <p className="text-gray-600">{product.description}</p>
                </div>
            </div>
        </div>
    );
}