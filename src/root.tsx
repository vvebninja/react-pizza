import { Outlet } from 'react-router';
import { CartContextProvider } from '@/contexts/cart-context';

export const Root = () => {
  return (
    <CartContextProvider>
      <Outlet />
    </CartContextProvider>
  );
};
