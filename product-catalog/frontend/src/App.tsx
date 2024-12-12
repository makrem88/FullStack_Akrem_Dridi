import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import {
  Router,
  RouterProvider,
  Route,
  RootRoute
} from '@tanstack/react-router';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const queryClient = new QueryClient();

const rootRoute = new RootRoute({
  component: () => <QueryClientProvider client={queryClient}>
    <Outlet />
  </QueryClientProvider>
});

const productsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: ProductList,
});

const productRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/product/$productId',
  component: ProductDetail,
});

const routeTree = rootRoute.addChildren([
  productsRoute,
  productRoute
]);

const router = new Router({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
