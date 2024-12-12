import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductList from './ProductList';

const queryClient = new QueryClient();

describe('ProductList', () => {
    it('renders loading state initially', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <ProductList />
            </QueryClientProvider>
        );
        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('filters products based on search input', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <ProductList />
            </QueryClientProvider>
        );

        const searchInput = screen.getByPlaceholderText('Search products...');
        fireEvent.change(searchInput, { target: { value: 'test' } });

        // Wait for filtered results
        await screen.findByText('test product');
    });
});