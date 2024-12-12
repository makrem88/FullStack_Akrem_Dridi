// Import statements
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router, RouterProvider, Route, RootRoute, Outlet } from '@tanstack/react-router';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { ErrorBoundary } from './components/ErrorBoundary';

// QueryClient instance
const queryClient = new QueryClient();

// Root route configuration
const rootRoute = new RootRoute({
  component: () => <QueryClientProvider client={queryClient}>
    <Outlet />
  </QueryClientProvider>
});

// Products route configuration
const productsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: ProductList,
});

// Product detail route configuration
const productRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/product/$productId',
  component: ProductDetail,
});

// Route tree configuration
const routeTree = rootRoute.addChildren([
  productsRoute,
  productRoute
]);

// Router instance
const router = new Router({ routeTree });

// App component
/**
 * The App component sets up the application with routing and error boundary.
 * It uses the RouterProvider to provide the router instance to the application.
 */
export default function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
