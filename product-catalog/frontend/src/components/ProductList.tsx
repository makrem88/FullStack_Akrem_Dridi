import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { getProducts } from '../api/products';
import { LoadingSpinner } from './LoadingSpinner';

export default function ProductList() {
    const [search, setSearch] = useState('');
    const { data: products, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    });

    if (isLoading) return <LoadingSpinner />;
    if (error) return <div>Error: {(error as Error).message}</div>;

    const filteredProducts = !search
        ? products
        : products?.filter(p => p?.name?.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                        Featured Products
                    </h1>
                    <div className="flex justify-center">
                        <div className="w-full max-w-xl">
                            <input
                                type="search"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full p-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            />
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {filteredProducts?.map(product => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="mx-auto w-full max-w-sm"
                        >
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="aspect-w-1 aspect-h-1 relative">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.name}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-white-900 mb-3 line-clamp-2">
                                        {product.name}
                                    </h2>
                                    <p className="text-xl font-semibold text-blue-600">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <button className="mt-4 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredProducts?.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-600">
                            No products found matching your search.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
