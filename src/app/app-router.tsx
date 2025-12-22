import { createBrowserRouter, RouterProvider } from 'react-router';
import { routePaths } from '@/constants';
import { App } from './app';
import { ErrorDisplay } from '@/components/ui/error-display/error-display';

const router = createBrowserRouter(
  [
    {
      path: routePaths.HOME,
      element: <App />,
      errorElement: <ErrorDisplay />,
      children: [
        {
          index: true,
          lazy: async () => await import('@/pages/home'),
        },

        {
          path: routePaths.CART,
          lazy: async () => await import('@/pages/cart/cart-page'),
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export const AppRouter = () => <RouterProvider router={router} />;
