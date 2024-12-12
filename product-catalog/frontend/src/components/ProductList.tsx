import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { getProducts } from '../api/products';

export default function ProductList() {
    const [search, setSearch] = useState('');
    const { data: products, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    const filteredProducts = products?.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredProducts?.map(product => (
                    <Link key={product.id} to="/product/$productId" params={{ productId: product.id }}>
                        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                            <img src={product.thumbnail} alt={product.name} className="w-full h-48 object-cover rounded" />
                            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                            <p className="text-gray-600">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}