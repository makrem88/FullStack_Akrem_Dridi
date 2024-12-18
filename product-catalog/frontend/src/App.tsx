import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router, RouterProvider, Route, RootRoute, Outlet } from '@tanstack/react-router';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { ErrorBoundary } from './components/ErrorBoundary';


// QueryClient instance
const queryClient = new QueryClient();

// Root route configuration
const rootRoute = new RootRoute({
  component: () => <Outlet />
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
const routeTree = rootRoute.addChildren([productsRoute, productRoute]);

// Router instance
const router = new Router({ routeTree });

// Render the application 
const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
