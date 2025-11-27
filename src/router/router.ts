import { routePaths } from '@/constants/constants.ts';
import { CartPage } from '@/pages/cart-page/cart-page.tsx';
import { HomePage } from '@/pages/home-page/home-page.tsx';
import { Root } from '@/root.tsx';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: routePaths.HOME,
    Component: Root,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: routePaths.CART,
        Component: CartPage,
      },
    ],
  },
]);
