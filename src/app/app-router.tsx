import { createBrowserRouter, RouterProvider } from 'react-router';
import { routePaths } from '@/constants';
import { App } from './app';

const router = createBrowserRouter(
  [
    {
      path: routePaths.HOME,
      element: <App />,
      children: [
        {
          index: true,
          lazy: async () => await import('@/pages/home/home-page'),
        },
        {
          path: routePaths.CART,
          lazy: async () => await import('@/pages/cart/cart-page'),
        },
      ],
    },
  ],
  {
    basename: '/react-pizza/',
  },
);

export const AppRouter = () => <RouterProvider router={router} />;
