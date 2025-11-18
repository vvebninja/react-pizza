import { routePaths } from '@/constants/constants.ts';
import { Cart } from '@/pages/cart.tsx';
import { Home } from '@/pages/home.tsx';
import { Root } from '@/root';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: routePaths.HOME,
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: routePaths.CART,
        Component: Cart,
      },
    ],
  },
]);
