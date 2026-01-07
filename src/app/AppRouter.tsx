import { ErrorDisplay } from '@/components/ui/ErrorDisplay';
import { routePaths } from '@/constants';
import { CartContextProvider } from '@/contexts/cart';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { App } from './App';

const router = createBrowserRouter(
  [
    {
      path: routePaths.HOME,
      element: (
        <CartContextProvider>
          <App />
        </CartContextProvider>
      ),
      errorElement: <ErrorDisplay />,
      children: [
        {
          index: true,
          lazy: async () => await import('@/pages/home'),
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
