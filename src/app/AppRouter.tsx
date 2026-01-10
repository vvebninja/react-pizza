import { ErrorDisplay } from '@/components/ui/ErrorDisplay';
import { routePaths } from '@/constants';
import { CartContextProvider } from '@/contexts/cart';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router';
import { App } from './App';

const router = createBrowserRouter(
  [
    {
      element: (
        <CartContextProvider>
          <App />
        </CartContextProvider>
      ),
      errorElement: <ErrorDisplay />,
      children: [
        {
          path: routePaths.HOME,
          loader: () => redirect(routePaths.PIZZAS),
        },
        {
          path: routePaths.PIZZAS,
          lazy: async () => await import('@/pages/pizzas'),
        },

        {
          path: routePaths.CART,
          lazy: async () => await import('@/pages/cart'),
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export const AppRouter = () => <RouterProvider router={router} />;
